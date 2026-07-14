import { useState } from 'react'
import clsx from 'clsx'
import { motion, AnimatePresence } from 'framer-motion'
import { FileText, Sparkles, Check, TriangleAlert, Loader2 } from 'lucide-react'
import type { MultiCaptionEndTask } from '../../data/types'
import { getCaptionFeedback, type CaptionFeedbackResult } from '../../lib/api'
import Button from '../../components/Button'
import Card from '../../components/Card'

interface CaptionSlot {
  text: string
  feedback: CaptionFeedbackResult | null
  loading: boolean
  error: string | null
}

export default function MultiCaptionTaskView({
  task,
  onSubmit,
}: {
  task: MultiCaptionEndTask
  onSubmit: (content: string, score?: number, scoreSummary?: string) => void
}) {
  const [slots, setSlots] = useState<CaptionSlot[]>(() =>
    task.labels.map(() => ({ text: '', feedback: null, loading: false, error: null })),
  )

  const updateSlot = (i: number, patch: Partial<CaptionSlot>) =>
    setSlots((prev) => prev.map((s, idx) => (idx === i ? { ...s, ...patch } : s)))

  const requestFeedback = async (i: number) => {
    const caption = slots[i].text.trim()
    if (!caption) return
    updateSlot(i, { loading: true, error: null })
    try {
      const result = await getCaptionFeedback(task.brief, caption, task.labels[i])
      updateSlot(i, { feedback: result, loading: false })
    } catch (err) {
      updateSlot(i, {
        loading: false,
        error: err instanceof Error ? err.message : 'Feedback unavailable right now',
      })
    }
  }

  const allWritten = slots.every((s) => s.text.trim().length > 0)
  const scored = slots.filter((s) => s.feedback)
  const avgScore = scored.length
    ? Math.round(scored.reduce((sum, s) => sum + (s.feedback?.score ?? 0), 0) / scored.length)
    : undefined

  const handleSubmit = () => {
    const content = task.labels
      .map((label, i) => {
        const slot = slots[i]
        const fb = slot.feedback
        return [
          `${label}:`,
          slot.text.trim(),
          fb ? `(AI feedback: ${fb.score}/100 — ${fb.summary})` : '',
        ]
          .filter(Boolean)
          .join('\n')
      })
      .join('\n\n')
    onSubmit(
      content,
      avgScore,
      avgScore !== undefined ? `Average caption score: ${avgScore}/100` : undefined,
    )
  }

  return (
    <div className="flex-1 flex flex-col">
      <div className="px-6 pb-6 flex-1 overflow-y-auto">
        <Card className="!p-4 mb-6 bg-lilac-100 !shadow-none flex gap-3">
          <FileText size={18} strokeWidth={2.25} className="text-lilac-600 shrink-0 mt-0.5" />
          <p className="text-sm text-ink-700 leading-relaxed">{task.brief}</p>
        </Card>

        <div className="flex flex-col gap-6">
          {task.labels.map((label, i) => {
            const slot = slots[i]
            return (
              <div key={label}>
                <label className="block font-display font-bold text-sm text-ink-950 mb-2">
                  {i + 1}. {label}
                </label>
                <textarea
                  value={slot.text}
                  onChange={(e) => updateSlot(i, { text: e.target.value, feedback: null })}
                  placeholder="Write your caption..."
                  rows={3}
                  className="w-full rounded-2xl border-2 border-ink-200 bg-white px-4 py-3.5 text-[15px] text-ink-950 placeholder:text-ink-300 focus:outline-none focus:border-ink-950 resize-none"
                />

                {!slot.feedback && (
                  <button
                    onClick={() => requestFeedback(i)}
                    disabled={!slot.text.trim() || slot.loading}
                    className="mt-2 inline-flex items-center gap-1.5 text-xs font-display font-bold text-lilac-600 disabled:opacity-40"
                  >
                    {slot.loading ? (
                      <Loader2 size={14} className="animate-spin" />
                    ) : (
                      <Sparkles size={14} strokeWidth={2.5} />
                    )}
                    {slot.loading ? 'Getting feedback...' : 'Get AI feedback'}
                  </button>
                )}

                {slot.error && (
                  <p className="mt-2 text-xs text-pink-600 flex items-center gap-1.5">
                    <TriangleAlert size={13} strokeWidth={2.5} />
                    {slot.error}
                  </p>
                )}

                <AnimatePresence>
                  {slot.feedback && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={clsx(
                        'mt-2 rounded-2xl px-4 py-3.5',
                        slot.feedback.score >= 70 ? 'bg-mint-200' : 'bg-yellow-200',
                      )}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-display font-bold text-sm text-ink-950">
                          {slot.feedback.score}/100
                        </span>
                      </div>
                      <p className="text-xs text-ink-700 mb-2">{slot.feedback.summary}</p>
                      {slot.feedback.whatWorked.map((w, wi) => (
                        <p key={wi} className="text-xs text-ink-700 flex gap-1.5 mb-1">
                          <Check size={13} strokeWidth={2.5} className="shrink-0 mt-0.5 text-mint-600" />
                          {w}
                        </p>
                      ))}
                      {slot.feedback.whatToImprove.map((w, wi) => (
                        <p key={wi} className="text-xs text-ink-700 flex gap-1.5 mb-1">
                          <Sparkles size={13} strokeWidth={2.5} className="shrink-0 mt-0.5 text-yellow-600" />
                          {w}
                        </p>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>

      <div className="px-6 py-6 sticky bottom-0 bg-paper-50 border-t border-ink-100">
        <Button disabled={!allWritten} onClick={handleSubmit}>
          Submit to My Portfolio
        </Button>
      </div>
    </div>
  )
}
