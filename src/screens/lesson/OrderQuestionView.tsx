import { useMemo, useState } from 'react'
import clsx from 'clsx'
import { Reorder, motion, AnimatePresence } from 'framer-motion'
import type { OrderQuestion } from '../../data/types'
import Button from '../../components/Button'

function shuffled<T>(arr: T[]): T[] {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  // guard against an accidental already-correct shuffle
  if (copy.every((v, i) => v === arr[i]) && arr.length > 1) {
    ;[copy[0], copy[1]] = [copy[1], copy[0]]
  }
  return copy
}

export default function OrderQuestionView({
  question,
  onNext,
}: {
  question: OrderQuestion
  onNext: (correct: boolean) => void
}) {
  const [items, setItems] = useState(() => shuffled(question.items))
  const [checked, setChecked] = useState(false)

  const isCorrect = useMemo(
    () => items.every((v, i) => v === question.items[i]),
    [items, question.items],
  )

  return (
    <div className="flex-1 flex flex-col px-6 pt-4">
      <p className="text-xs font-display font-bold text-brand-500 uppercase tracking-wide mb-2">
        Drag to order
      </p>
      <h2 className="font-display font-bold text-xl text-ink-900 mb-1 leading-snug">
        {question.prompt}
      </h2>
      {question.helper && <p className="text-ink-500 text-sm mb-5">{question.helper}</p>}

      <Reorder.Group
        axis="y"
        values={items}
        onReorder={(v) => !checked && setItems(v)}
        className="flex flex-col gap-3 mt-2"
      >
        {items.map((item, i) => (
          <Reorder.Item
            key={item}
            value={item}
            dragListener={!checked}
            className={clsx(
              'flex items-center gap-3 rounded-2xl border-2 px-4 py-3.5 text-[15px] font-medium bg-white cursor-grab active:cursor-grabbing select-none',
              checked
                ? item === question.items[i]
                  ? 'border-xp-600 bg-xp-400/15 text-ink-900'
                  : 'border-rose-400 bg-rose-50 text-ink-900'
                : 'border-cloud-200 text-ink-900',
            )}
          >
            <span className="w-6 h-6 rounded-full bg-cloud-100 flex items-center justify-center text-xs font-bold text-ink-500 shrink-0">
              {i + 1}
            </span>
            <span className="flex-1">{item}</span>
            <span className="text-ink-300 text-lg">⠿</span>
          </Reorder.Item>
        ))}
      </Reorder.Group>

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
              {isCorrect ? 'Nice — that\'s the right order.' : 'Not quite the right order — here\'s the correct one, highlighted above.'}
            </motion.div>
          )}
        </AnimatePresence>
        {!checked ? (
          <Button onClick={() => setChecked(true)}>Check</Button>
        ) : (
          <Button variant={isCorrect ? 'primary' : 'dark'} onClick={() => onNext(isCorrect)}>
            Continue
          </Button>
        )}
      </div>
    </div>
  )
}
