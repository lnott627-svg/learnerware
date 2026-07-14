import type { HTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export default function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={clsx(
        'bg-white rounded-3xl p-5 shadow-[var(--shadow-card)] border border-cloud-200',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
