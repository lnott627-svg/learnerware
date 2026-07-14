import { useState } from 'react'
import clsx from 'clsx'
import { motion, AnimatePresence } from 'framer-motion'
import type { McQuestion } from '../../data/types'
import Button from '../../components/Button'

export default function McQuestionView({
  question,
  onNext,
}: {
  question: McQuestion
  onNext: (correct: boolean) => void
}) {
  const [selected, setSelected] = useState<number | null>(null)
  const [checked, setChecked] = useState(false)

  const isCorrect = selected === question.correctIndex

  return (
    <div className="flex-1 flex flex-col px-6 pt-4">
      <p className="text-xs font-display font-bold text-brand-500 uppercase tracking-wide mb-2">
        Multiple choice
      </p>
      <h2 className="font-display font-bold text-xl text-ink-900 mb-6 leading-snug">
        {question.prompt}
      </h2>

      <div className="flex flex-col gap-3 flex-1">
        {question.options.map((opt, i) => {
          const isSelected = selected === i
          let stateClasses = 'border-cloud-200 bg-white'
          if (checked && i === question.correctIndex) {
            stateClasses = 'border-xp-600 bg-xp-400/15'
          } else if (checked && isSelected && !isCorrect) {
            stateClasses = 'border-rose-400 bg-rose-50'
          } else if (isSelected) {
            stateClasses = 'border-brand-400 bg-brand-50'
          }
          return (
            <button
              key={i}
              disabled={checked}
              onClick={() => setSelected(i)}
              className={clsx(
                'text-left rounded-2xl border-2 px-4 py-3.5 text-[15px] text-ink-900 font-medium transition-colors',
                stateClasses,
              )}
            >
              {opt}
            </button>
          )
        })}
      </div>

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
              {isCorrect ? question.correctFeedback : question.incorrectFeedback}
            </motion.div>
          )}
        </AnimatePresence>
        {!checked ? (
          <Button disabled={selected === null} onClick={() => setChecked(true)}>
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
