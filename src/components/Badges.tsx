import { motion } from 'framer-motion'
import { Zap, Flame } from 'lucide-react'
import clsx from 'clsx'

export function XpBadge({ xp, className }: { xp: number; className?: string }) {
  return (
    <div
      className={clsx(
        'inline-flex items-center gap-1.5 bg-yellow-200 text-yellow-600 font-display font-bold px-3 py-1.5 rounded-full text-sm',
        className,
      )}
    >
      <Zap size={14} strokeWidth={2.5} />
      <span>{xp} XP</span>
    </div>
  )
}

export function StreakBadge({ streak, className }: { streak: number; className?: string }) {
  return (
    <motion.div
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      className={clsx(
        'inline-flex items-center gap-1.5 bg-coral-200 text-coral-600 font-display font-bold px-3 py-1.5 rounded-full text-sm',
        className,
      )}
    >
      <Flame size={14} strokeWidth={2.5} />
      <span>{streak} day{streak === 1 ? '' : 's'}</span>
    </motion.div>
  )
}
