import type { ButtonHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  fullWidth?: boolean
  children: ReactNode
}

const variants: Record<string, string> = {
  primary: 'bg-ink-950 text-white active:scale-[0.98] hover:bg-ink-900',
  secondary: 'bg-white text-ink-950 border border-ink-200 active:scale-[0.98]',
  ghost: 'bg-transparent text-ink-500',
}

export default function Button({
  variant = 'primary',
  fullWidth = true,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'font-display font-semibold rounded-full px-6 py-4 text-base transition-all duration-150',
        'disabled:opacity-40 disabled:pointer-events-none',
        fullWidth && 'w-full',
        variants[variant],
        className,
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}
