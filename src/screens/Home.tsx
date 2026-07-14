import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getTrack, unitsForTrack, lessonsForUnit } from '../data/content'
import { useStore } from '../state/store'
import { XpBadge, StreakBadge } from '../components/Badges'
import BottomNav from '../components/BottomNav'

const OFFSETS = [0, 56, 88, 56, 0, -56, -88, -56]

export default function Home() {
  const navigate = useNavigate()
  const selectedTrackId = useStore((s) => s.selectedTrackId)
  const xp = useStore((s) => s.xp)
  const streakCount = useStore((s) => s.streakCount)
  const completedLessonIds = useStore((s) => s.completedLessonIds)
  const completedUnitIds = useStore((s) => s.completedUnitIds)

  if (!selectedTrackId) {
    navigate('/tracks')
    return null
  }

  const track = getTrack(selectedTrackId)!
  const trackUnits = unitsForTrack(selectedTrackId)

  // find first not-completed lesson across the whole track = "current"
  const allLessons = trackUnits.flatMap((u) => lessonsForUnit(u.id).map((l) => ({ ...l, unit: u })))
  const firstIncompleteIndex = allLessons.findIndex((l) => !completedLessonIds.includes(l.id))
  const currentLessonId = firstIncompleteIndex === -1 ? null : allLessons[firstIncompleteIndex].id

  let globalIndex = 0

  return (
    <div className="flex-1 flex flex-col bg-cloud-50">
      <div className="px-5 pt-[calc(env(safe-area-inset-top)+16px)] pb-4 flex items-center justify-between bg-white border-b border-cloud-200 sticky top-0 z-10">
        <div>
          <p className="text-xs text-ink-300 font-medium">{track.title}</p>
          <p className="font-display font-bold text-ink-900 text-[15px]">{track.tagline}</p>
        </div>
        <div className="flex items-center gap-2">
          <StreakBadge streak={streakCount} />
          <XpBadge xp={xp} />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-10">
        {trackUnits.map((unit, unitIdx) => {
          const unitLessons = lessonsForUnit(unit.id)
          const unitCompleted = completedUnitIds.includes(unit.id)
          return (
            <div key={unit.id} className="mb-4">
              <div className="text-center mb-8">
                <p className="text-xs font-display font-bold text-brand-500 uppercase tracking-wide">
                  Unit {unitIdx + 1}
                </p>
                <h2 className="font-display font-bold text-lg text-ink-900">{unit.title}</h2>
              </div>

              <div className="flex flex-col items-center gap-12">
                {unitLessons.map((lesson) => {
                  const isCompleted = completedLessonIds.includes(lesson.id)
                  const isCurrent = lesson.id === currentLessonId
                  const isLocked = !isCompleted && !isCurrent
                  const offset = OFFSETS[globalIndex % OFFSETS.length]
                  globalIndex++

                  return (
                    <div
                      key={lesson.id}
                      className="relative flex flex-col items-center"
                      style={{ transform: `translateX(${offset}px)` }}
                    >
                      {isCurrent && (
                        <motion.div
                          initial={{ opacity: 0, y: -6 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute -top-9 bg-ink-900 text-white text-xs font-display font-bold px-3 py-1.5 rounded-full whitespace-nowrap"
                        >
                          START
                        </motion.div>
                      )}
                      <motion.button
                        whileTap={{ scale: 0.92 }}
                        disabled={isLocked}
                        onClick={() => navigate(`/lesson/${lesson.id}`)}
                        className={
                          'w-16 h-16 rounded-full flex items-center justify-center text-2xl border-4 ' +
                          (isCompleted
                            ? 'bg-xp-500 border-xp-600 text-white shadow-[0_5px_0_0_var(--color-xp-700)]'
                            : isCurrent
                              ? 'bg-brand-500 border-brand-600 text-white shadow-[0_5px_0_0_var(--color-brand-700)] animate-pulse'
                              : 'bg-cloud-200 border-cloud-200 text-ink-300')
                        }
                      >
                        {isCompleted ? '✓' : isLocked ? '🔒' : '▶'}
                      </motion.button>
                      <p className="text-[11px] text-ink-500 font-medium mt-2 text-center max-w-[90px] leading-tight">
                        {lesson.title}
                      </p>
                    </div>
                  )
                })}

                {/* portfolio piece node */}
                <div
                  className="relative flex flex-col items-center"
                  style={{ transform: `translateX(${OFFSETS[globalIndex % OFFSETS.length]}px)` }}
                >
                  <button
                    disabled={!unitCompleted}
                    onClick={() => navigate('/profile')}
                    className={
                      'w-16 h-16 rounded-full flex items-center justify-center text-2xl border-4 ' +
                      (unitCompleted
                        ? 'bg-streak-500 border-streak-600 text-white shadow-[0_5px_0_0_var(--color-streak-600)]'
                        : 'bg-cloud-200 border-cloud-200 text-ink-300')
                    }
                  >
                    {unitCompleted ? '🏆' : '🔒'}
                  </button>
                  <p className="text-[11px] text-ink-500 font-medium mt-2 text-center max-w-[100px] leading-tight">
                    {unit.portfolioPiece.title}
                  </p>
                </div>
              </div>
            </div>
          )
        })}

        {firstIncompleteIndex === -1 && (
          <div className="text-center mt-6">
            <div className="text-4xl mb-2">🎓</div>
            <p className="font-display font-bold text-ink-900">Track complete!</p>
            <p className="text-ink-500 text-sm mt-1">Check your Profile for everything you built.</p>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  )
}
