import type { ReactNode } from 'react'
import { View, Text } from 'react-native'

interface TagProps {
  tone?: 'pink' | 'mint' | 'yellow' | 'coral' | 'lilac' | 'neutral' | 'dark'
  children: ReactNode
  className?: string
}

const tones: Record<string, { bg: string; text: string }> = {
  pink: { bg: 'bg-pink-200', text: 'text-pink-600' },
  mint: { bg: 'bg-mint-200', text: 'text-mint-600' },
  yellow: { bg: 'bg-yellow-200', text: 'text-yellow-600' },
  coral: { bg: 'bg-coral-200', text: 'text-coral-600' },
  lilac: { bg: 'bg-lilac-200', text: 'text-lilac-600' },
  neutral: { bg: 'bg-ink-100', text: 'text-ink-700' },
  dark: { bg: 'bg-ink-950', text: 'text-white' },
}

export default function Tag({ tone = 'neutral', children, className }: TagProps) {
  const t = tones[tone]
  return (
    <View className={`rounded-full px-3 py-1 self-start ${t.bg} ${className ?? ''}`}>
      <Text className={`text-xs font-jakarta-bold ${t.text}`}>{children}</Text>
    </View>
  )
}
