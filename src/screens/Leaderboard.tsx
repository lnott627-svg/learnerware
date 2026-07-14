import { useMemo } from 'react'
import clsx from 'clsx'
import { Trophy } from 'lucide-react'
import { useStore } from '../state/store'
import { pastelFor } from '../lib/palette'
import Card from '../components/Card'
import BottomNav from '../components/BottomNav'

const PEERS = [
  { name: 'Jordan', base: 340 },
  { name: 'Priya', base: 275 },
  { name: 'Marcus', base: 210 },
  { name: 'Aiko', base: 160 },
  { name: 'Sam', base: 90 },
  { name: 'Devon', base: 40 },
]

export default function Leaderboard() {
  const xp = useStore((s) => s.xp)
  const name = useStore((s) => s.name)
  const accountCreated = useStore((s) => s.accountCreated)

  const rows = useMemo(() => {
    const you = { name: accountCreated ? name! : 'You', xp, isYou: true }
    const others = PEERS.map((p) => ({ ...p, xp: p.base, isYou: false }))
    return [...others, you].sort((a, b) => b.xp - a.xp)
  }, [xp, name, accountCreated])

  return (
    <div className="flex-1 flex flex-col bg-paper-50">
      <div className="px-6 pt-[calc(env(safe-area-inset-top)+20px)] pb-4">
        <h1 className="font-display font-extrabold text-xl text-ink-950">This week</h1>
        <p className="text-ink-500 text-sm mt-0.5">Stay ahead — the leaderboard resets every Monday.</p>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-5">
        <Card className="!p-2">
          {rows.map((row, i) => {
            const pastel = pastelFor(i)
            return (
              <div
                key={row.name + i}
                className={clsx(
                  'flex items-center gap-3 px-3 py-3 rounded-2xl',
                  row.isYou && 'bg-lilac-100',
                )}
              >
                <span
                  className={clsx(
                    'w-6 text-center font-display font-bold text-sm shrink-0',
                    i === 0 ? 'text-yellow-600' : i === 1 ? 'text-ink-500' : i === 2 ? 'text-coral-600' : 'text-ink-300',
                  )}
                >
                  {i === 0 ? <Trophy size={16} strokeWidth={2.25} className="mx-auto" /> : i + 1}
                </span>
                <div
                  className={clsx(
                    'w-9 h-9 rounded-full flex items-center justify-center font-display font-bold text-sm',
                    pastel.bg,
                    pastel.text,
                  )}
                >
                  {row.name.charAt(0).toUpperCase()}
                </div>
                <span
                  className={clsx(
                    'flex-1 text-sm font-display',
                    row.isYou ? 'font-bold text-lilac-600' : 'font-medium text-ink-950',
                  )}
                >
                  {row.name}
                  {row.isYou && accountCreated && ' (you)'}
                </span>
                <span className="text-sm font-display font-bold text-ink-500">{row.xp} XP</span>
              </div>
            )
          })}
        </Card>

        <p className="text-center text-ink-300 text-xs mt-5">
          Friends & real leaderboards are coming soon — for now, beat your own number.
        </p>
      </div>

      <BottomNav />
    </div>
  )
}
