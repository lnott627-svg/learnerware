import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { tracks, unitsForTrack } from '../data/content'
import { useStore } from '../state/store'

const colorClasses: Record<string, { bg: string; ring: string; chip: string }> = {
  brand: { bg: 'bg-brand-500', ring: 'shadow-[0_8px_0_0_var(--color-brand-700)]', chip: 'bg-brand-50 text-brand-600' },
  streak: { bg: 'bg-streak-500', ring: 'shadow-[0_8px_0_0_var(--color-streak-600)]', chip: 'bg-streak-400/20 text-streak-600' },
  xp: { bg: 'bg-xp-600', ring: 'shadow-[0_8px_0_0_var(--color-xp-700)]', chip: 'bg-xp-400/20 text-xp-700' },
}

export default function TrackSelect() {
  const navigate = useNavigate()
  const selectTrack = useStore((s) => s.selectTrack)

  const handlePick = (trackId: string) => {
    selectTrack(trackId)
    const firstUnit = unitsForTrack(trackId)[0]
    const firstLessonId = firstUnit?.lessonIds[0]
    if (firstLessonId) navigate(`/lesson/${firstLessonId}`)
  }

  return (
    <div className="flex-1 flex flex-col px-6 pt-[calc(env(safe-area-inset-top)+32px)] pb-10 bg-cloud-50">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-display font-extrabold text-2xl text-ink-900 mb-1.5"
      >
        Pick your path
      </motion.h1>
      <p className="text-ink-500 mb-7 text-[15px]">
        You'll be in your first lesson in about 10 seconds.
      </p>

      <div className="flex flex-col gap-4">
        {tracks.map((track, i) => {
          const c = colorClasses[track.color]
          return (
            <motion.button
              key={track.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * i, type: 'spring', stiffness: 160, damping: 18 }}
              whileTap={{ scale: 0.97, y: 4 }}
              onClick={() => handlePick(track.id)}
              className={`text-left rounded-3xl p-5 text-white ${c.bg} ${c.ring} active:shadow-none transition-shadow`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl">{track.emoji}</span>
                <span className="text-xs font-display font-bold bg-white/20 rounded-full px-2.5 py-1">
                  {unitsForTrack(track.id).length} units
                </span>
              </div>
              <h2 className="font-display font-bold text-lg mb-1">{track.title}</h2>
              <p className="text-white/85 text-sm mb-1">{track.tagline}</p>
              <p className="text-white/70 text-xs leading-relaxed">{track.description}</p>
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}
