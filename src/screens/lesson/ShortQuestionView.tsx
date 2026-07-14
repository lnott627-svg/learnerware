import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Lightbulb } from 'lucide-react'
import type { ShortQuestion } from '../../data/types'
import Button from '../../components/Button'

export default function ShortQuestionView({
  question,
  onNext,
}: {
  question: ShortQuestion
  onNext: () => void
}) {
  const [text, setText] = useState('')
  const [checked, setChecked] = useState(false)

  return (
    <div className="flex-1 flex flex-col px-6 pt-4">
      <p className="text-xs font-display font-bold text-ink-300 uppercase tracking-wide mb-3">
        Short answer
      </p>
      <h2 className="font-display font-extrabold text-2xl text-ink-950 mb-5 leading-snug">
        {question.prompt}
      </h2>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={question.placeholder}
        rows={5}
        disabled={checked}
        className="w-full rounded-2xl border-2 border-ink-200 bg-white px-4 py-3.5 text-[15px] text-ink-950 placeholder:text-ink-300 focus:outline-none focus:border-ink-950 resize-none disabled:opacity-70"
      />

      <div className="flex-1" />

      <div className="py-6 sticky bottom-0 bg-paper-50">
        <AnimatePresence mode="wait">
          {checked && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="rounded-2xl px-4 py-3.5 mb-3 bg-yellow-200 text-ink-950 flex gap-2.5"
            >
              <Lightbulb size={18} strokeWidth={2.25} className="shrink-0 mt-0.5 text-yellow-600" />
              <p className="text-sm leading-relaxed">
                <span className="font-display font-bold">A strong answer: </span>
                {question.guidance}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        {!checked ? (
          <Button disabled={!text.trim()} onClick={() => setChecked(true)}>
            Compare my answer
          </Button>
        ) : (
          <Button onClick={onNext}>Continue</Button>
        )}
      </div>
    </div>
  )
}
