import { useState } from 'react'
import clsx from 'clsx'
import { motion, AnimatePresence } from 'framer-motion'
import type { FillQuestion } from '../../data/types'
import Button from '../../components/Button'

export default function FillQuestionView({
  question,
  onNext,
}: {
  question: FillQuestion
  onNext: (correct: boolean) => void
}) {
  const [selected, setSelected] = useState<string | null>(null)
  const [checked, setChecked] = useState(false)
  const [parts] = useState(() => question.template.split('___'))

  const isCorrect = selected === question.correctAnswer

  return (
    <div className="flex-1 flex flex-col px-6 pt-4">
      <p className="text-xs font-display font-bold text-brand-500 uppercase tracking-wide mb-2">
        Fill in the blank
      </p>
      <h2 className="font-display font-bold text-xl text-ink-900 mb-6 leading-snug">
        {question.prompt}
      </h2>

      <div className="bg-cloud-100 rounded-2xl px-4 py-5 text-[17px] leading-relaxed text-ink-900 font-medium mb-6">
        {parts[0]}
        <span
          className={clsx(
            'inline-block min-w-[90px] px-2 py-0.5 mx-1 rounded-lg border-b-2 text-center font-display font-bold',
            selected
              ? checked
                ? isCorrect
                  ? 'border-xp-600 text-xp-700 bg-xp-400/15'
                  : 'border-rose-400 text-rose-600 bg-rose-50'
                : 'border-brand-400 text-brand-600 bg-brand-50'
              : 'border-ink-300 text-ink-300',
          )}
        >
          {selected ?? '_____'}
        </span>
        {parts[1]}
      </div>

      <div className="flex flex-wrap gap-2.5">
        {question.options.map((opt) => {
          const isSelected = selected === opt
          return (
            <button
              key={opt}
              disabled={checked}
              onClick={() => setSelected(opt)}
              className={clsx(
                'rounded-full border-2 px-4 py-2.5 text-sm font-display font-semibold transition-colors',
                isSelected
                  ? 'border-brand-400 bg-brand-50 text-brand-600'
                  : 'border-cloud-200 bg-white text-ink-700',
              )}
            >
              {opt}
            </button>
          )
        })}
      </div>

      <div className="flex-1" />

      <div className="py-6 sticky bottom-0 bg-cloud-50">
        <AnimatePresence mode="wait">
          {checked && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={clsx(
                'rounded-2xl px-4 py-3 mb-3 text-sm font-medium',
                isCorrect ? 'bg-xp-400/20 text-xp-700' : 'bg-rose-50 text-rose-600',
              )}
            >
              {isCorrect
                ? 'Yep, that\'s it.'
                : `Not quite — the answer was "${question.correctAnswer}".`}
            </motion.div>
          )}
        </AnimatePresence>
        {!checked ? (
          <Button disabled={!selected} onClick={() => setChecked(true)}>
            Check
          </Button>
        ) : (
          <Button variant={isCorrect ? 'primary' : 'dark'} onClick={() => onNext(isCorrect)}>
            Continue
          </Button>
        )}
      </div>
    </div>
  )
}
