import { View } from 'react-native'
import { MotiView } from 'moti'

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
  colorClassName = 'bg-ink-950',
  trackClassName = 'bg-ink-100',
  height = 12,
}: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(100, value))
  return (
    <View
      className={`w-full rounded-full overflow-hidden ${trackClassName} ${className ?? ''}`}
      style={{ height }}
    >
      <MotiView
        animate={{ width: `${clamped}%` }}
        transition={{ type: 'timing', duration: 500 }}
        className={`h-full rounded-full ${colorClassName}`}
      />
    </View>
  )
}
