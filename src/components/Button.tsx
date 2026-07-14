import type { ButtonHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'dark'
  fullWidth?: boolean
  children: ReactNode
}

const variants: Record<string, string> = {
  primary:
    'bg-brand-500 text-white shadow-[0_6px_0_0_var(--color-brand-700)] active:shadow-none hover:bg-brand-500',
  secondary:
    'bg-white text-brand-600 border-2 border-brand-100 shadow-[0_4px_0_0_var(--color-brand-100)] active:shadow-none',
  dark: 'bg-ink-900 text-white shadow-[0_6px_0_0_rgb(0_0_0_/_0.35)] active:shadow-none',
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
        'font-display font-semibold rounded-2xl px-6 py-4 text-base transition-all duration-100 active:translate-y-[6px]',
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
