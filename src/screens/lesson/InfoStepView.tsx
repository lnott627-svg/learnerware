import { motion } from 'framer-motion'
import { Lightbulb, Check } from 'lucide-react'
import type { InfoStep } from '../../data/types'
import Button from '../../components/Button'

export default function InfoStepView({ step, onNext }: { step: InfoStep; onNext: () => void }) {
  return (
    <div className="flex-1 flex flex-col px-6 pt-4">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex-1"
      >
        <div className="w-14 h-14 rounded-2xl bg-lilac-200 flex items-center justify-center mb-5">
          <Lightbulb size={24} strokeWidth={2.25} className="text-lilac-600" />
        </div>
        <h2 className="font-display font-extrabold text-2xl text-ink-950 mb-3 leading-tight">
          {step.heading}
        </h2>
        <p className="text-ink-500 text-[15px] leading-relaxed mb-5">{step.body}</p>
        {step.bullets && (
          <ul className="flex flex-col gap-3">
            {step.bullets.map((b, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="flex items-start gap-3 bg-ink-100 rounded-2xl px-4 py-3 text-sm text-ink-700"
              >
                <Check size={16} strokeWidth={2.5} className="text-ink-950 mt-0.5 shrink-0" />
                <span>{b}</span>
              </motion.li>
            ))}
          </ul>
        )}
      </motion.div>
      <div className="py-6 sticky bottom-0 bg-paper-50">
        <Button onClick={onNext}>Got it</Button>
      </div>
    </div>
  )
}
