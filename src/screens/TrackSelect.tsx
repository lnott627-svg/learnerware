import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { tracks, modulesForTrack } from '../data/content'
import { useStore } from '../state/store'
import { pastelFor } from '../lib/palette'

export default function TrackSelect() {
  const navigate = useNavigate()
  const selectTrack = useStore((s) => s.selectTrack)

  const handlePick = (trackId: string) => {
    selectTrack(trackId)
    const firstModule = modulesForTrack(trackId)[0]
    const firstLessonId = firstModule?.lessonIds[0]
    if (firstLessonId) navigate(`/lesson/${firstLessonId}`)
  }

  return (
    <div className="flex-1 flex flex-col px-6 pt-[calc(env(safe-area-inset-top)+32px)] pb-10 bg-paper-50">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-display font-extrabold text-2xl text-ink-950 mb-1.5"
      >
        Choose your path
      </motion.h1>
      <p className="text-ink-500 mb-7 text-[15px]">
        You'll be in your first lesson in about 10 seconds.
      </p>

      <div className="grid grid-cols-2 gap-3.5">
        {tracks.map((track, i) => {
          const pastel = pastelFor(track.pastelIndex)
          const Icon = track.icon
          return (
            <motion.button
              key={track.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06 * i, type: 'spring', stiffness: 160, damping: 18 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => handlePick(track.id)}
              className={`text-left rounded-3xl p-4 ${pastel.bg} flex flex-col gap-8`}
            >
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-2xl bg-white/70 flex items-center justify-center">
                  <Icon size={20} strokeWidth={2.25} className={pastel.text} />
                </div>
                <span className="text-[10px] font-display font-bold text-ink-700/70 bg-white/50 rounded-full px-2 py-1">
                  {modulesForTrack(track.id).length} modules
                </span>
              </div>
              <div>
                <h2 className="font-display font-bold text-[15px] text-ink-950 leading-snug mb-1">
                  {track.title}
                </h2>
                <p className="text-ink-700/80 text-xs leading-snug">{track.tagline}</p>
              </div>
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}
