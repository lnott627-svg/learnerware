import { motion } from 'framer-motion'
import clsx from 'clsx'

interface ProgressBarProps {
  value: number // 0-100
  className?: string
  colorClassName?: string
  trackClassName?: string
  height?: number
}

export default function ProgressBar({
  value,
  className,
  colorClassName = 'bg-xp-500',
  trackClassName = 'bg-cloud-200',
  height = 12,
}: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(100, value))
  return (
    <div
      className={clsx('w-full rounded-full overflow-hidden', trackClassName, className)}
      style={{ height }}
    >
      <motion.div
        className={clsx('h-full rounded-full', colorClassName)}
        initial={{ width: 0 }}
        animate={{ width: `${clamped}%` }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      />
    </div>
  )
}
