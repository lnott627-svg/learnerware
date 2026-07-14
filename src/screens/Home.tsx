import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, Lock, Check, Trophy } from 'lucide-react'
import { getTrack, modulesForTrack, lessonsForModule, endTaskForModule } from '../data/content'
import { useStore } from '../state/store'
import { isModuleLessonsComplete, moduleProgress, trackProgress } from '../lib/progress'
import { pastelFor } from '../lib/palette'
import { XpBadge, StreakBadge } from '../components/Badges'
import ProgressBar from '../components/ProgressBar'
import BottomNav from '../components/BottomNav'

export default function Home() {
  const navigate = useNavigate()
  const selectedTrackId = useStore((s) => s.selectedTrackId)
  const name = useStore((s) => s.name)
  const xp = useStore((s) => s.xp)
  const streakCount = useStore((s) => s.streakCount)
  const completedLessonIds = useStore((s) => s.completedLessonIds)
  const completedModuleIds = useStore((s) => s.completedModuleIds)

  const track = selectedTrackId ? getTrack(selectedTrackId) : undefined
  const trackModules = useMemo(
    () => (selectedTrackId ? modulesForTrack(selectedTrackId) : []),
    [selectedTrackId],
  )

  const current = useMemo(() => {
    for (const mod of trackModules) {
      if (!isModuleLessonsComplete(mod.id, completedLessonIds)) {
        const nextLesson = lessonsForModule(mod.id).find((l) => !completedLessonIds.includes(l.id))
        if (nextLesson) return { kind: 'lesson' as const, module: mod, lesson: nextLesson }
      } else if (!completedModuleIds.includes(mod.id)) {
        return { kind: 'task' as const, module: mod, task: endTaskForModule(mod.id) }
      }
    }
    return null
  }, [trackModules, completedLessonIds, completedModuleIds])

  if (!selectedTrackId || !track) {
    navigate('/tracks')
    return null
  }

  const overallProgress = Math.round(
    trackProgress(track.moduleIds, completedLessonIds, completedModuleIds) * 100,
  )
  const pastel = pastelFor(track.pastelIndex)
  const Icon = track.icon

  return (
    <div className="flex-1 flex flex-col bg-paper-50">
      <div className="px-6 pt-[calc(env(safe-area-inset-top)+20px)] pb-2 flex items-center justify-between">
        <div>
          <p className="text-ink-300 text-xs font-medium">{track.title}</p>
          <h1 className="font-display font-extrabold text-2xl text-ink-950">
            Hello{name ? `, ${name}` : ''}
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <StreakBadge streak={streakCount} />
          <XpBadge xp={xp} />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pt-4 pb-6">
        {/* stacked card: current lesson / task */}
        {current ? (
          <div className="relative mb-3 mt-2">
            <div className="absolute inset-x-4 -top-3 h-full rounded-3xl bg-ink-100" />
            <div className="absolute inset-x-2 -top-1.5 h-full rounded-3xl bg-ink-200/70" />
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              whileTap={{ scale: 0.98 }}
              onClick={() =>
                current.kind === 'lesson'
                  ? navigate(`/lesson/${current.lesson.id}`)
                  : navigate(`/module/${current.module.id}/task`)
              }
              className={`relative w-full text-left rounded-3xl p-5 ${pastel.bg} flex flex-col gap-6`}
            >
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-2xl bg-white/70 flex items-center justify-center">
                  <Icon size={20} strokeWidth={2.25} className={pastel.text} />
                </div>
                <span className="text-[10px] font-display font-bold text-ink-700/70 bg-white/50 rounded-full px-2.5 py-1 uppercase tracking-wide">
                  {current.kind === 'lesson' ? 'Next lesson' : 'End task'}
                </span>
              </div>
              <div>
                <p className="text-ink-700/70 text-xs font-semibold mb-1">{current.module.title}</p>
                <h2 className="font-display font-bold text-lg text-ink-950 leading-snug">
                  {current.kind === 'lesson' ? current.lesson.title : current.task?.title}
                </h2>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-ink-700/70">
                  {current.kind === 'lesson' ? `${current.lesson.minutes} min` : `+${current.task?.xp} XP`}
                </span>
                <div className="w-9 h-9 rounded-full bg-ink-950 text-white flex items-center justify-center">
                  <ArrowUpRight size={18} strokeWidth={2.25} />
                </div>
              </div>
            </motion.button>
          </div>
        ) : (
          <div className="rounded-3xl bg-ink-950 text-white p-6 text-center mb-6 mt-2">
            <Trophy size={28} strokeWidth={2} className="mx-auto mb-2" />
            <p className="font-display font-bold">Track complete!</p>
            <p className="text-white/60 text-sm mt-1">Check My Portfolio for everything you built.</p>
          </div>
        )}

        {/* progress widget */}
        <div className="bg-white rounded-3xl p-5 shadow-[var(--shadow-card)] mb-6 mt-8">
          <div className="flex items-center justify-between mb-3">
            <p className="font-display font-bold text-ink-950 text-sm">Track progress</p>
            <p className="font-display font-bold text-ink-950 text-sm">{overallProgress}%</p>
          </div>
          <ProgressBar value={overallProgress} />
        </div>

        {/* module list */}
        <div className="flex flex-col gap-3">
          {trackModules.map((mod, i) => {
            const progress = Math.round(
              moduleProgress(mod.id, completedLessonIds, completedModuleIds) * 100,
            )
            const isComplete = completedModuleIds.includes(mod.id)
            const lessonsReady = isModuleLessonsComplete(mod.id, completedLessonIds)
            const modPastel = pastelFor(i)
            return (
              <button
                key={mod.id}
                onClick={() =>
                  lessonsReady && !isComplete
                    ? navigate(`/module/${mod.id}/task`)
                    : navigate(
                        `/lesson/${lessonsForModule(mod.id).find((l) => !completedLessonIds.includes(l.id))?.id ?? lessonsForModule(mod.id)[0]?.id}`,
                      )
                }
                className="bg-white rounded-2xl p-4 shadow-[var(--shadow-card)] flex items-center gap-3.5 text-left"
              >
                <div className={`w-10 h-10 rounded-xl ${modPastel.bg} flex items-center justify-center shrink-0`}>
                  {isComplete ? (
                    <Check size={17} strokeWidth={2.5} className="text-ink-950" />
                  ) : (
                    <span className="font-display font-bold text-sm text-ink-950">{i + 1}</span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-display font-semibold text-sm text-ink-950 truncate">{mod.title}</p>
                  <ProgressBar value={progress} height={6} className="mt-2" />
                </div>
                {!lessonsReady && progress === 0 && (
                  <Lock size={15} strokeWidth={2.25} className="text-ink-300 shrink-0" />
                )}
              </button>
            )
          })}
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
