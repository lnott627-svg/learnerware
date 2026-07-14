import { useState } from 'react'
import { motion } from 'framer-motion'
import type { MicroTaskStep } from '../../data/types'
import Button from '../../components/Button'

export default function MicroTaskView({
  step,
  initialValue,
  onNext,
}: {
  step: MicroTaskStep
  initialValue?: string
  onNext: (text: string) => void
}) {
  const [text, setText] = useState(initialValue ?? '')

  return (
    <div className="flex-1 flex flex-col px-6 pt-4">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="flex-1">
        <div className="w-14 h-14 rounded-2xl bg-xp-400/25 flex items-center justify-center text-2xl mb-5">
          ✍️
        </div>
        <p className="text-xs font-display font-bold text-xp-700 uppercase tracking-wide mb-2">
          {step.platform}
        </p>
        <h2 className="font-display font-extrabold text-2xl text-ink-900 mb-2 leading-tight">
          {step.title}
        </h2>
        <p className="text-ink-500 text-[15px] leading-relaxed mb-5">{step.prompt}</p>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={step.placeholder}
          rows={5}
          className="w-full rounded-2xl border-2 border-cloud-200 bg-white px-4 py-3.5 text-[15px] text-ink-900 placeholder:text-ink-300 focus:outline-none focus:border-brand-400 resize-none"
        />
        <p className="text-xs text-ink-300 mt-2">
          This goes straight into your end-of-unit portfolio piece.
        </p>
      </motion.div>

      <div className="py-6 sticky bottom-0 bg-cloud-50 flex flex-col gap-2">
        <Button disabled={!text.trim()} onClick={() => onNext(text)}>
          Save & continue
        </Button>
      </div>
    </div>
  )
}
