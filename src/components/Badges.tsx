import { motion } from 'framer-motion'
import clsx from 'clsx'

export function XpBadge({ xp, className }: { xp: number; className?: string }) {
  return (
    <div
      className={clsx(
        'inline-flex items-center gap-1.5 bg-xp-400/30 text-xp-700 font-display font-bold px-3 py-1.5 rounded-full text-sm',
        className,
      )}
    >
      <span>⚡</span>
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
        'inline-flex items-center gap-1.5 bg-streak-400/25 text-streak-600 font-display font-bold px-3 py-1.5 rounded-full text-sm',
        className,
      )}
    >
      <span>🔥</span>
      <span>{streak} day{streak === 1 ? '' : 's'}</span>
    </motion.div>
  )
}
