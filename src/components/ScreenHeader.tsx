import type { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ScreenHeader({
  title,
  onBack,
  right,
}: {
  title: string
  onBack?: () => void
  right?: ReactNode
}) {
  const navigate = useNavigate()
  return (
    <div className="flex items-center justify-between px-5 pt-[calc(env(safe-area-inset-top)+16px)] pb-3">
      <button
        aria-label="Back"
        onClick={() => (onBack ? onBack() : navigate(-1))}
        className="w-9 h-9 rounded-full bg-cloud-100 text-ink-700 flex items-center justify-center text-lg"
      >
        ←
      </button>
      <h1 className="font-display font-bold text-lg text-ink-900">{title}</h1>
      <div className="w-9 h-9 flex items-center justify-center">{right}</div>
    </div>
  )
}
