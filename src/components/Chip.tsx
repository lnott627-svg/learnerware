import type { ButtonHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'

interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean
  icon?: ReactNode
  children: ReactNode
}

export default function Chip({ selected, icon, children, className, ...props }: ChipProps) {
  return (
    <button
      className={clsx(
        'inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-display font-semibold transition-colors',
        selected ? 'bg-ink-950 text-white' : 'bg-white text-ink-700 border border-ink-200',
        className,
      )}
      {...props}
    >
      {icon}
      {children}
    </button>
  )
}
