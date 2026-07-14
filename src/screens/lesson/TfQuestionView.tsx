import { useState } from 'react'
import clsx from 'clsx'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, X } from 'lucide-react'
import type { TfQuestion } from '../../data/types'
import Button from '../../components/Button'

export default function TfQuestionView({
  question,
  onNext,
}: {
  question: TfQuestion
  onNext: (correct: boolean) => void
}) {
  const [selected, setSelected] = useState<boolean | null>(null)
  const [checked, setChecked] = useState(false)

  const isCorrect = selected === question.correctAnswer

  const optionState = (value: boolean) => {
    const isSelected = selected === value
    const isRightAnswer = value === question.correctAnswer
    if (checked && isRightAnswer) return 'border-mint-600 bg-mint-200 text-ink-950'
    if (checked && isSelected && !isCorrect) return 'border-pink-600 bg-pink-200 text-ink-950'
    if (isSelected) return 'border-ink-950 bg-ink-950 text-white'
    return 'border-ink-200 bg-white text-ink-950'
  }

  return (
    <div className="flex-1 flex flex-col px-6 pt-4">
      <p className="text-xs font-display font-bold text-ink-300 uppercase tracking-wide mb-3">
        True or false
      </p>
      <h2 className="font-display font-extrabold text-2xl text-ink-950 mb-7 leading-snug">
        {question.prompt}
      </h2>

      <div className="flex-1 flex flex-col justify-center gap-4">
        <div className="grid grid-cols-2 gap-3">
          {[true, false].map((value) => (
            <button
              key={String(value)}
              disabled={checked}
              onClick={() => setSelected(value)}
              className={clsx(
                'rounded-2xl border-2 py-8 text-center font-display font-bold text-lg transition-colors flex flex-col items-center gap-2',
                optionState(value),
              )}
            >
              {value ? 'True' : 'False'}
              {checked && value === question.correctAnswer && <Check size={20} strokeWidth={2.5} />}
              {checked && selected === value && !isCorrect && <X size={20} strokeWidth={2.5} />}
            </button>
          ))}
        </div>
      </div>

      <div className="py-6 sticky bottom-0 bg-paper-50">
        <AnimatePresence mode="wait">
          {checked && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={clsx(
                'rounded-2xl px-4 py-3 mb-3 text-sm font-medium',
                isCorrect ? 'bg-mint-200 text-mint-600' : 'bg-pink-200 text-pink-600',
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
          <Button onClick={() => onNext(isCorrect)}>Continue</Button>
        )}
      </div>
    </div>
  )
}
