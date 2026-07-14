import type { HTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'

interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: 'pink' | 'mint' | 'yellow' | 'coral' | 'lilac' | 'neutral' | 'dark'
  children: ReactNode
}

const tones: Record<string, string> = {
  pink: 'bg-pink-200 text-pink-600',
  mint: 'bg-mint-200 text-mint-600',
  yellow: 'bg-yellow-200 text-yellow-600',
  coral: 'bg-coral-200 text-coral-600',
  lilac: 'bg-lilac-200 text-lilac-600',
  neutral: 'bg-ink-100 text-ink-700',
  dark: 'bg-ink-950 text-white',
}

export default function Tag({ tone = 'neutral', className, children, ...props }: TagProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-display font-bold',
        tones[tone],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}
