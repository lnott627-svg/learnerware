import { useState } from 'react'
import clsx from 'clsx'
import { useNavigate } from 'react-router-dom'
import { ChevronDown, ChevronUp, Copy, Check, User, Sparkles } from 'lucide-react'
import { getTrack, modules } from '../data/content'
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
  const completedModuleIds = useStore((s) => s.completedModuleIds)
  const portfolio = useStore((s) => s.portfolio)
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
    if (confirm('Switch tracks? Your XP and portfolio stay, but path progress resets.')) {
      resetProgress()
      navigate('/tracks')
    }
  }

  return (
    <div className="flex-1 flex flex-col bg-paper-50">
      <div className="px-6 pt-[calc(env(safe-area-inset-top)+20px)] pb-6 bg-ink-950 text-white">
        <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-3">
          <User size={22} strokeWidth={2.25} />
        </div>
        <h1 className="font-display font-extrabold text-xl">
          {accountCreated ? name : 'Welcome, guest'}
        </h1>
        <p className="text-white/50 text-sm mb-4">
          {accountCreated ? email : 'Complete a lesson to save your progress'}
        </p>
        <div className="flex gap-2">
          <StreakBadge streak={streakCount} className="!bg-white/10 !text-white" />
          <XpBadge xp={xp} className="!bg-white/10 !text-white" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-6">
        <section>
          <h2 className="font-display font-bold text-ink-950 mb-3">Client Ready checklist</h2>
          <Card className="!p-4">
            <ul className="flex flex-col divide-y divide-ink-100">
              {modules.map((mod) => {
                const done = completedModuleIds.includes(mod.id)
                return (
                  <li key={mod.id} className="flex items-center gap-3 py-2.5">
                    <span
                      className={clsx(
                        'w-6 h-6 rounded-full flex items-center justify-center shrink-0',
                        done ? 'bg-mint-500 text-white' : 'bg-ink-100 text-ink-300',
                      )}
                    >
                      {done && <Check size={13} strokeWidth={3} />}
                    </span>
                    <div className="flex-1">
                      <p className={clsx('text-sm font-medium', done ? 'text-ink-950' : 'text-ink-300')}>
                        {mod.title}
                      </p>
                      <p className="text-[11px] text-ink-300">{getTrack(mod.trackId)?.title}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </Card>
        </section>

        <section>
          <h2 className="font-display font-bold text-ink-950 mb-3">My Portfolio ({portfolio.length})</h2>
          {portfolio.length === 0 ? (
            <Card className="text-center text-ink-300 text-sm py-8">
              Finish a module's end task to build your first real deliverable here.
            </Card>
          ) : (
            <div className="flex flex-col gap-3">
              {portfolio.map((piece) => {
                const open = openPieceId === piece.id
                return (
                  <Card key={piece.id} className="!p-4">
                    <button
                      className="w-full text-left flex items-center justify-between gap-3"
                      onClick={() => setOpenPieceId(open ? null : piece.id)}
                    >
                      <div className="min-w-0">
                        <p className="text-[11px] font-display font-bold text-lilac-600 uppercase tracking-wide">
                          {piece.deliverableType}
                        </p>
                        <p className="font-display font-bold text-ink-950 text-sm truncate">{piece.title}</p>
                        {piece.score !== undefined && (
                          <span className="inline-flex items-center gap-1 text-xs text-mint-600 font-display font-bold mt-1">
                            <Sparkles size={12} strokeWidth={2.5} />
                            {piece.score}/100
                          </span>
                        )}
                      </div>
                      {open ? (
                        <ChevronUp size={18} className="text-ink-300 shrink-0" />
                      ) : (
                        <ChevronDown size={18} className="text-ink-300 shrink-0" />
                      )}
                    </button>
                    {open && (
                      <div className="mt-3">
                        <pre className="whitespace-pre-wrap font-body text-sm text-ink-700 bg-ink-100 rounded-xl p-3 leading-relaxed">
                          {piece.content}
                        </pre>
                        <button
                          onClick={() => handleCopy(piece.id, piece.content)}
                          className="mt-2 inline-flex items-center gap-1.5 text-ink-950 text-sm font-display font-semibold"
                        >
                          <Copy size={14} strokeWidth={2.25} />
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
          <h2 className="font-display font-bold text-ink-950 mb-3">Learning pace</h2>
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
                    pace === opt.id ? 'border-ink-950 bg-ink-100' : 'border-ink-200',
                  )}
                >
                  <div>
                    <p className="font-display font-semibold text-sm text-ink-950">{opt.label}</p>
                    <p className="text-xs text-ink-300">{opt.hint}</p>
                  </div>
                  {pace === opt.id && <Check size={18} strokeWidth={2.5} className="text-ink-950" />}
                </button>
              ))}
            </div>
          </Card>
        </section>

        <section>
          <h2 className="font-display font-bold text-ink-950 mb-3">Stats</h2>
          <div className="grid grid-cols-2 gap-3">
            <Card className="!p-4 text-center">
              <p className="font-display font-extrabold text-2xl text-ink-950">
                {completedLessonIds.length}
              </p>
              <p className="text-xs text-ink-300">Lessons done</p>
            </Card>
            <Card className="!p-4 text-center">
              <p className="font-display font-extrabold text-2xl text-ink-950">{completedModuleIds.length}</p>
              <p className="text-xs text-ink-300">Modules done</p>
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
