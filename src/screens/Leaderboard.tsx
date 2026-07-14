import { useMemo } from 'react'
import clsx from 'clsx'
import { useStore } from '../state/store'
import Card from '../components/Card'
import BottomNav from '../components/BottomNav'

const PEERS = [
  { name: 'Jordan', emoji: '🐯', base: 340 },
  { name: 'Priya', emoji: '🦊', base: 275 },
  { name: 'Marcus', emoji: '🐼', base: 210 },
  { name: 'Aiko', emoji: '🐨', base: 160 },
  { name: 'Sam', emoji: '🦁', base: 90 },
  { name: 'Devon', emoji: '🐸', base: 40 },
]

export default function Leaderboard() {
  const xp = useStore((s) => s.xp)
  const name = useStore((s) => s.name)
  const accountCreated = useStore((s) => s.accountCreated)

  const rows = useMemo(() => {
    const you = { name: accountCreated ? name! : 'You', emoji: '⭐', xp, isYou: true }
    const others = PEERS.map((p) => ({ ...p, xp: p.base, isYou: false }))
    return [...others, you].sort((a, b) => b.xp - a.xp)
  }, [xp, name, accountCreated])

  return (
    <div className="flex-1 flex flex-col bg-cloud-50">
      <div className="px-6 pt-[calc(env(safe-area-inset-top)+20px)] pb-4 bg-white border-b border-cloud-200">
        <h1 className="font-display font-extrabold text-xl text-ink-900">This week</h1>
        <p className="text-ink-500 text-sm mt-0.5">Stay ahead — the leaderboard resets every Monday.</p>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-5">
        <Card className="!p-2">
          {rows.map((row, i) => (
            <div
              key={row.name + i}
              className={clsx(
                'flex items-center gap-3 px-3 py-3 rounded-2xl',
                row.isYou && 'bg-brand-50',
              )}
            >
              <span
                className={clsx(
                  'w-7 text-center font-display font-bold text-sm',
                  i === 0 ? 'text-streak-500' : i === 1 ? 'text-ink-500' : i === 2 ? 'text-streak-600' : 'text-ink-300',
                )}
              >
                {i + 1}
              </span>
              <span className="text-2xl">{row.emoji}</span>
              <span
                className={clsx(
                  'flex-1 text-sm font-display',
                  row.isYou ? 'font-bold text-brand-600' : 'font-medium text-ink-900',
                )}
              >
                {row.name}
                {row.isYou && accountCreated && ' (you)'}
              </span>
              <span className="text-sm font-display font-bold text-ink-500">{row.xp} XP</span>
            </div>
          ))}
        </Card>

        <p className="text-center text-ink-300 text-xs mt-5">
          Friends & real leaderboards are coming soon — for now, beat your own number.
        </p>
      </div>

      <BottomNav />
    </div>
  )
}
