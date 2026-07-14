import type { ReactNode } from 'react'
import { Pressable, Text, type PressableProps } from 'react-native'
import { MotiView } from 'moti'

interface ButtonProps extends Omit<PressableProps, 'children'> {
  variant?: 'primary' | 'secondary' | 'ghost'
  children: ReactNode
}

const variantStyles: Record<string, { bg: string; text: string; border?: string }> = {
  primary: { bg: 'bg-ink-950', text: 'text-white' },
  secondary: { bg: 'bg-white', text: 'text-ink-950', border: 'border border-ink-200' },
  ghost: { bg: 'bg-transparent', text: 'text-ink-500' },
}

export default function Button({ variant = 'primary', disabled, children, ...props }: ButtonProps) {
  const v = variantStyles[variant]
  return (
    <Pressable disabled={disabled} {...props}>
      {({ pressed }) => (
        <MotiView
          animate={{ scale: pressed ? 0.98 : 1, opacity: disabled ? 0.4 : 1 }}
          transition={{ type: 'timing', duration: 100 }}
          className={`rounded-full px-6 py-4 items-center justify-center ${v.bg} ${v.border ?? ''}`}
        >
          <Text className={`font-jakarta-bold text-base ${v.text}`}>{children}</Text>
        </MotiView>
      )}
    </Pressable>
  )
}
