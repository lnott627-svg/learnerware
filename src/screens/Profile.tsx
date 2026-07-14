import { useState } from 'react'
import clsx from 'clsx'
import { useNavigate } from 'react-router-dom'
import { getTrack, units } from '../data/content'
import { useStore, type Pace } from '../state/store'
import Card from '../components/Card'
import BottomNav from '../components/BottomNav'
import { XpBadge, StreakBadge } from '../components/Badges'

const paceOptions: { id: Pace; label: string; hint: string }[] = [
  { id: 'chill', label: 'Chill', hint: 'A lesson or two, no pressure' },
  { id: 'steady', label: 'Steady', hint: 'A little every day' },
  { id: 'intense', label: 'Intense', hint: 'Push hard, move fast' },
]

export default function Profile() {
  const navigate = useNavigate()
  const name = useStore((s) => s.name)
  const email = useStore((s) => s.email)
  const accountCreated = useStore((s) => s.accountCreated)
  const xp = useStore((s) => s.xp)
  const streakCount = useStore((s) => s.streakCount)
  const completedLessonIds = useStore((s) => s.completedLessonIds)
  const completedUnitIds = useStore((s) => s.completedUnitIds)
  const portfolioPieces = useStore((s) => s.portfolioPieces)
  const pace = useStore((s) => s.pace)
  const paceInferred = useStore((s) => s.paceInferred)
  const setPace = useStore((s) => s.setPace)
  const selectedTrackId = useStore((s) => s.selectedTrackId)
  const resetProgress = useStore((s) => s.resetProgress)

  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [openPieceId, setOpenPieceId] = useState<string | null>(null)

  const handleCopy = async (id: string, content: string) => {
    try {
      await navigator.clipboard.writeText(content)
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 1500)
    } catch {
      // clipboard unavailable — silently ignore
    }
  }

  const handleSwitchTrack = () => {
    if (confirm('Switch tracks? Your XP and portfolio pieces stay, but path progress resets.')) {
      resetProgress()
      navigate('/tracks')
    }
  }

  return (
    <div className="flex-1 flex flex-col bg-cloud-50">
      <div className="px-6 pt-[calc(env(safe-area-inset-top)+20px)] pb-5 bg-gradient-to-b from-brand-500 to-brand-600 text-white">
        <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center text-3xl mb-3">
          {accountCreated ? '🙂' : '👋'}
        </div>
        <h1 className="font-display font-extrabold text-xl">
          {accountCreated ? name : 'Welcome, guest'}
        </h1>
        <p className="text-white/70 text-sm mb-4">
          {accountCreated ? email : 'Complete a lesson to save your progress'}
        </p>
        <div className="flex gap-2">
          <StreakBadge streak={streakCount} className="!bg-white/15 !text-white" />
          <XpBadge xp={xp} className="!bg-white/15 !text-white" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-6">
        <section>
          <h2 className="font-display font-bold text-ink-900 mb-3">Client Ready checklist</h2>
          <Card className="!p-4">
            <ul className="flex flex-col divide-y divide-cloud-100">
              {units.map((unit) => {
                const done = completedUnitIds.includes(unit.id)
                return (
                  <li key={unit.id} className="flex items-center gap-3 py-2.5">
                    <span
                      className={clsx(
                        'w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0',
                        done ? 'bg-xp-500 text-white' : 'bg-cloud-100 text-ink-300',
                      )}
                    >
                      {done ? '✓' : ''}
                    </span>
                    <div className="flex-1">
                      <p className={clsx('text-sm font-medium', done ? 'text-ink-900' : 'text-ink-300')}>
                        {unit.portfolioPiece.title}
                      </p>
                      <p className="text-[11px] text-ink-300">{getTrack(unit.trackId)?.title}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </Card>
        </section>

        <section>
          <h2 className="font-display font-bold text-ink-900 mb-3">
            Portfolio pieces ({portfolioPieces.length})
          </h2>
          {portfolioPieces.length === 0 ? (
            <Card className="text-center text-ink-300 text-sm py-8">
              Finish a unit to build your first real deliverable here.
            </Card>
          ) : (
            <div className="flex flex-col gap-3">
              {portfolioPieces.map((piece) => {
                const open = openPieceId === piece.id
                return (
                  <Card key={piece.id} className="!p-4">
                    <button
                      className="w-full text-left flex items-center justify-between"
                      onClick={() => setOpenPieceId(open ? null : piece.id)}
                    >
                      <div>
                        <p className="text-[11px] font-display font-bold text-brand-500 uppercase tracking-wide">
                          {piece.deliverableType}
                        </p>
                        <p className="font-display font-bold text-ink-900 text-sm">{piece.title}</p>
                      </div>
                      <span className="text-ink-300">{open ? '▲' : '▼'}</span>
                    </button>
                    {open && (
                      <div className="mt-3">
                        <pre className="whitespace-pre-wrap font-body text-sm text-ink-700 bg-cloud-100 rounded-xl p-3 leading-relaxed">
                          {piece.content}
                        </pre>
                        <button
                          onClick={() => handleCopy(piece.id, piece.content)}
                          className="mt-2 text-brand-500 text-sm font-display font-semibold"
                        >
                          {copiedId === piece.id ? 'Copied!' : 'Copy to clipboard'}
                        </button>
                      </div>
                    )}
                  </Card>
                )
              })}
            </div>
          )}
        </section>

        <section>
          <h2 className="font-display font-bold text-ink-900 mb-3">Learning pace</h2>
          <Card className="!p-4">
            {paceInferred && (
              <p className="text-xs text-ink-300 mb-3">
                We set this based on how your first lesson went — change it anytime.
              </p>
            )}
            <div className="flex flex-col gap-2">
              {paceOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setPace(opt.id)}
                  className={clsx(
                    'flex items-center justify-between rounded-2xl border-2 px-4 py-3 text-left',
                    pace === opt.id ? 'border-brand-400 bg-brand-50' : 'border-cloud-200',
                  )}
                >
                  <div>
                    <p className="font-display font-semibold text-sm text-ink-900">{opt.label}</p>
                    <p className="text-xs text-ink-300">{opt.hint}</p>
                  </div>
                  {pace === opt.id && <span className="text-brand-500 text-lg">✓</span>}
                </button>
              ))}
            </div>
          </Card>
        </section>

        <section>
          <h2 className="font-display font-bold text-ink-900 mb-3">Stats</h2>
          <div className="grid grid-cols-2 gap-3">
            <Card className="!p-4 text-center">
              <p className="font-display font-extrabold text-2xl text-ink-900">
                {completedLessonIds.length}
              </p>
              <p className="text-xs text-ink-300">Lessons done</p>
            </Card>
            <Card className="!p-4 text-center">
              <p className="font-display font-extrabold text-2xl text-ink-900">{completedUnitIds.length}</p>
              <p className="text-xs text-ink-300">Units done</p>
            </Card>
          </div>
        </section>

        {selectedTrackId && (
          <button
            onClick={handleSwitchTrack}
            className="text-ink-300 text-sm font-medium text-center py-2"
          >
            Switch track
          </button>
        )}
      </div>

      <BottomNav />
    </div>
  )
}
