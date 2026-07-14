import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { FileText, Send, TriangleAlert, Check, Sparkles, Loader2 } from 'lucide-react'
import type { SimulatorEndTask } from '../../data/types'
import { getSimulatorReply, getSimulatorScore, type ChatMessage, type ScoreResult } from '../../lib/api'
import Button from '../../components/Button'
import Card from '../../components/Card'

const OPENER = "Hey, thanks for hopping on! I've got about 15 minutes — go ahead, what would you like to know?"

function transcriptText(messages: ChatMessage[]) {
  return messages
    .map((m) => `${m.role === 'user' ? 'You' : 'Client'}: ${m.content}`)
    .join('\n\n')
}

export default function SimulatorTaskView({
  task,
  onSubmit,
}: {
  task: SimulatorEndTask
  onSubmit: (content: string, score?: number, scoreSummary?: string) => void
}) {
  const [phase, setPhase] = useState<'intro' | 'chat' | 'scoring' | 'result'>('intro')
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState('')
  const [sending, setSending] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [scoreResult, setScoreResult] = useState<ScoreResult | null>(null)
  const [scoreError, setScoreError] = useState<string | null>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, phase])

  const start = () => {
    setPhase('chat')
    setMessages([{ role: 'assistant', content: OPENER }])
  }

  const send = async () => {
    const text = input.trim()
    if (!text || sending) return
    const nextMessages: ChatMessage[] = [...messages, { role: 'user', content: text }]
    setMessages(nextMessages)
    setInput('')
    setSending(true)
    setError(null)
    try {
      const { reply } = await getSimulatorReply(task.id, nextMessages)
      setMessages([...nextMessages, { role: 'assistant', content: reply }])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not reach the AI client')
    } finally {
      setSending(false)
    }
  }

  const userTurns = messages.filter((m) => m.role === 'user').length

  const endCall = async () => {
    setPhase('scoring')
    setScoreError(null)
    try {
      const result = await getSimulatorScore(messages)
      setScoreResult(result)
      setPhase('result')
    } catch (err) {
      setScoreError(err instanceof Error ? err.message : 'Could not score this call')
      setPhase('result')
    }
  }

  const handleFinish = () => {
    onSubmit(transcriptText(messages), scoreResult?.score, scoreResult?.summary)
  }

  if (phase === 'intro') {
    return (
      <div className="flex-1 flex flex-col px-6 pb-6">
        <Card className="!p-4 mb-6 bg-lilac-100 !shadow-none flex gap-3">
          <FileText size={18} strokeWidth={2.25} className="text-lilac-600 shrink-0 mt-0.5" />
          <p className="text-sm text-ink-700 leading-relaxed">{task.brief}</p>
        </Card>
        <div className="flex-1" />
        <Button onClick={start}>Start the call</Button>
      </div>
    )
  }

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 overflow-y-auto px-5 py-2 flex flex-col gap-3">
        {messages.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className={clsx('max-w-[85%] rounded-2xl px-4 py-3 text-[15px] leading-relaxed', {
              'self-end bg-ink-950 text-white': m.role === 'user',
              'self-start bg-ink-100 text-ink-950': m.role === 'assistant',
            })}
          >
            {m.content}
          </motion.div>
        ))}
        {sending && (
          <div className="self-start bg-ink-100 text-ink-500 rounded-2xl px-4 py-3 text-sm flex items-center gap-2">
            <Loader2 size={14} className="animate-spin" /> typing...
          </div>
        )}
        {error && (
          <div className="self-start bg-pink-200 text-pink-600 rounded-2xl px-4 py-3 text-sm flex items-start gap-2 max-w-[90%]">
            <TriangleAlert size={15} strokeWidth={2.5} className="shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        {phase === 'scoring' && (
          <div className="self-center flex items-center gap-2 text-ink-500 text-sm my-4">
            <Loader2 size={16} className="animate-spin" /> Scoring your call...
          </div>
        )}

        {phase === 'result' && scoreResult && (
          <Card className="mt-2 bg-mint-100 !shadow-none">
            <div className="flex items-center justify-between mb-3">
              <span className="font-display font-extrabold text-2xl text-ink-950">
                {scoreResult.score}/100
              </span>
              <Sparkles size={20} strokeWidth={2.25} className="text-mint-600" />
            </div>
            <p className="text-sm text-ink-700 mb-4">{scoreResult.summary}</p>
            <p className="text-xs font-display font-bold text-ink-950 uppercase tracking-wide mb-2">
              What worked
            </p>
            {scoreResult.strengths.map((s, i) => (
              <p key={i} className="text-sm text-ink-700 flex gap-2 mb-1.5">
                <Check size={15} strokeWidth={2.5} className="shrink-0 mt-0.5 text-mint-600" />
                {s}
              </p>
            ))}
            <p className="text-xs font-display font-bold text-ink-950 uppercase tracking-wide mb-2 mt-3">
              Next time
            </p>
            {scoreResult.improvements.map((s, i) => (
              <p key={i} className="text-sm text-ink-700 flex gap-2 mb-1.5">
                <Sparkles size={15} strokeWidth={2.5} className="shrink-0 mt-0.5 text-yellow-600" />
                {s}
              </p>
            ))}
          </Card>
        )}

        {phase === 'result' && scoreError && (
          <div className="bg-pink-200 text-pink-600 rounded-2xl px-4 py-3.5 text-sm flex items-start gap-2">
            <TriangleAlert size={15} strokeWidth={2.5} className="shrink-0 mt-0.5" />
            <span>{scoreError} You can still save your transcript without a score.</span>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      <div className="px-5 py-4 sticky bottom-0 bg-paper-50 border-t border-ink-100">
        {phase === 'chat' && (
          <div className="flex flex-col gap-3">
            <div className="flex items-end gap-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault()
                    send()
                  }
                }}
                placeholder="Type your message..."
                rows={1}
                className="flex-1 rounded-2xl border-2 border-ink-200 bg-white px-4 py-3 text-[15px] text-ink-950 placeholder:text-ink-300 focus:outline-none focus:border-ink-950 resize-none max-h-24"
              />
              <button
                onClick={send}
                disabled={!input.trim() || sending}
                className="w-12 h-12 rounded-full bg-ink-950 text-white flex items-center justify-center shrink-0 disabled:opacity-40"
              >
                <Send size={18} strokeWidth={2.25} />
              </button>
            </div>
            {userTurns >= 2 && (
              <button
                onClick={endCall}
                className="text-center text-sm font-display font-bold text-lilac-600"
              >
                End call & get feedback
              </button>
            )}
          </div>
        )}
        {phase === 'result' && <Button onClick={handleFinish}>Save to My Portfolio</Button>}
      </div>
    </div>
  )
}
