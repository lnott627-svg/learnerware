import { useMemo, useState } from 'react'
import clsx from 'clsx'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import type { SortQuestion } from '../../data/types'
import Button from '../../components/Button'

function shuffled<T>(arr: T[]): T[] {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

export default function SortQuestionView({
  question,
  onNext,
}: {
  question: SortQuestion
  onNext: (correct: boolean) => void
}) {
  const items = useMemo(() => shuffled(question.items), [question.items])
  const [index, setIndex] = useState(0)
  const [correctCount, setCorrectCount] = useState(0)
  const [flash, setFlash] = useState<'left' | 'right' | null>(null)
  const controls = useAnimation()

  const current = items[index]
  const done = index >= items.length

  const resolve = async (choice: 'left' | 'right') => {
    if (!current || flash) return
    const correct = current.side === choice
    setFlash(choice)
    await controls.start({
      x: choice === 'left' ? -420 : 420,
      rotate: choice === 'left' ? -18 : 18,
      opacity: 0,
      transition: { duration: 0.28, ease: 'easeIn' },
    })
    if (correct) setCorrectCount((c) => c + 1)
    setIndex((i) => i + 1)
    setFlash(null)
    controls.set({ x: 0, rotate: 0, opacity: 1 })
  }

  const onDragEnd = (_: unknown, info: { offset: { x: number } }) => {
    if (info.offset.x > 90) resolve('right')
    else if (info.offset.x < -90) resolve('left')
  }

  const isCorrectOverall = correctCount === items.length

  return (
    <div className="flex-1 flex flex-col px-6 pt-4">
      <p className="text-xs font-display font-bold text-brand-500 uppercase tracking-wide mb-2">
        Swipe to sort
      </p>
      <h2 className="font-display font-bold text-xl text-ink-900 mb-6 leading-snug">
        {question.prompt}
      </h2>

      {!done ? (
        <>
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-display font-bold text-ink-500 bg-cloud-100 rounded-full px-3 py-1.5">
              ← {question.leftLabel}
            </span>
            <span className="text-xs text-ink-300">
              {index + 1}/{items.length}
            </span>
            <span className="text-xs font-display font-bold text-ink-500 bg-cloud-100 rounded-full px-3 py-1.5">
              {question.rightLabel} →
            </span>
          </div>

          <div className="relative flex-1 flex items-center justify-center min-h-[180px]">
            <AnimatePresence>
              {current && (
                <motion.div
                  key={index}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.9}
                  animate={controls}
                  onDragEnd={onDragEnd}
                  className={clsx(
                    'absolute w-full max-w-[280px] rounded-3xl border-2 bg-white px-6 py-10 text-center font-display font-semibold text-lg text-ink-900 cursor-grab active:cursor-grabbing shadow-[var(--shadow-card)]',
                    flash === 'left' && 'border-rose-300',
                    flash === 'right' && 'border-brand-300',
                    !flash && 'border-cloud-200',
                  )}
                >
                  {current.text}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex gap-3 py-6">
            <Button variant="secondary" onClick={() => resolve('left')}>
              ← {question.leftLabel}
            </Button>
            <Button variant="secondary" onClick={() => resolve('right')}>
              {question.rightLabel} →
            </Button>
          </div>
        </>
      ) : (
        <div className="flex-1 flex flex-col">
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <div className="text-5xl mb-4">{isCorrectOverall ? '🎯' : '👍'}</div>
            <p className="font-display font-bold text-xl text-ink-900 mb-1">
              {correctCount}/{items.length} sorted correctly
            </p>
            <p className="text-ink-500 text-sm">
              {isCorrectOverall ? 'Perfect sort!' : 'Good instinct — keep going.'}
            </p>
          </div>
          <div className="py-6">
            <Button onClick={() => onNext(correctCount === items.length)}>Continue</Button>
          </div>
        </div>
      )}
    </div>
  )
}
