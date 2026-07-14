import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { motion, animate } from 'framer-motion'
import { getLesson, getUnit } from '../data/content'
import { useStore } from '../state/store'
import Button from '../components/Button'
import Confetti from '../components/Confetti'
import { StreakBadge } from '../components/Badges'

function useCountUp(target: number, duration = 0.9) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    const controls = animate(0, target, {
      duration,
      ease: 'easeOut',
      onUpdate: (v) => setValue(Math.round(v)),
    })
    return () => controls.stop()
  }, [target, duration])
  return value
}

export default function LessonComplete() {
  const { lessonId } = useParams<{ lessonId: string }>()
  const navigate = useNavigate()
  const lesson = lessonId ? getLesson(lessonId) : undefined

  const accountCreated = useStore((s) => s.accountCreated)
  const createAccount = useStore((s) => s.createAccount)
  const xpGained = useStore((s) => s.lastLessonXpGained)
  const streakCount = useStore((s) => s.streakCount)
  const completedLessonIds = useStore((s) => s.completedLessonIds)
  const completedUnitIds = useStore((s) => s.completedUnitIds)
  const portfolioPieces = useStore((s) => s.portfolioPieces)

  const [phase, setPhase] = useState<'celebrate' | 'signup'>('celebrate')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const animatedXp = useCountUp(xpGained)

  const isFirstLessonCompletion = completedLessonIds.length === 1
  const unit = lesson ? getUnit(lesson.unitId) : undefined
  const justFinishedUnit = unit ? completedUnitIds.includes(unit.id) : false
  const newPiece = useMemo(
    () => (justFinishedUnit ? portfolioPieces.find((p) => p.unitId === unit?.id) : undefined),
    [justFinishedUnit, portfolioPieces, unit],
  )

  if (!lesson) {
    navigate('/home')
    return null
  }

  const goHome = () => navigate('/home')

  const handleCreateAccount = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim()) return
    createAccount(name.trim(), email.trim())
    goHome()
  }

  if (phase === 'signup') {
    return (
      <div className="flex-1 flex flex-col px-6 pt-[calc(env(safe-area-inset-top)+24px)] pb-8 bg-cloud-50">
        <button
          className="text-ink-300 text-sm font-medium mb-6 self-start"
          onClick={() => setPhase('celebrate')}
        >
          ← Back
        </button>
        <div className="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center text-2xl mb-5">
          🔒
        </div>
        <h1 className="font-display font-extrabold text-2xl text-ink-900 mb-2">
          Save your progress
        </h1>
        <p className="text-ink-500 text-[15px] mb-7 leading-relaxed">
          You've already earned {animatedXp} XP. Create a free account so it doesn't disappear.
        </p>

        <form onSubmit={handleCreateAccount} className="flex flex-col gap-3">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="First name"
            className="w-full rounded-2xl border-2 border-cloud-200 bg-white px-4 py-3.5 text-[15px] text-ink-900 placeholder:text-ink-300 focus:outline-none focus:border-brand-400"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email address"
            className="w-full rounded-2xl border-2 border-cloud-200 bg-white px-4 py-3.5 text-[15px] text-ink-900 placeholder:text-ink-300 focus:outline-none focus:border-brand-400"
          />
          <div className="mt-4">
            <Button type="submit" disabled={!name.trim() || !email.trim()}>
              Save my progress
            </Button>
          </div>
        </form>
        <button className="text-ink-300 text-sm font-medium mt-4" onClick={goHome}>
          Maybe later
        </button>
      </div>
    )
  }

  return (
    <div className="flex-1 flex flex-col px-6 pt-[calc(env(safe-area-inset-top)+24px)] pb-8 bg-gradient-to-b from-brand-500 to-brand-700 text-white relative overflow-hidden">
      <Confetti />
      <div className="flex-1 flex flex-col items-center justify-center text-center relative z-10">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 12 }}
          className="text-6xl mb-4"
        >
          🎉
        </motion.div>
        <h1 className="font-display font-extrabold text-2xl mb-1">Lesson complete!</h1>
        <p className="text-white/80 text-sm mb-7">{lesson.title}</p>

        <div className="flex items-center gap-3 mb-8">
          <div className="bg-white/15 rounded-2xl px-5 py-3.5 flex flex-col items-center">
            <span className="text-2xl font-display font-extrabold">+{animatedXp}</span>
            <span className="text-[11px] uppercase tracking-wide text-white/70 font-semibold">
              XP earned
            </span>
          </div>
          <StreakBadge streak={streakCount} className="!bg-white/15 !text-white h-full px-5 py-3.5" />
        </div>

        {justFinishedUnit && newPiece && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white text-ink-900 rounded-2xl px-5 py-4 text-left w-full mb-2"
          >
            <p className="text-xs font-display font-bold text-brand-500 uppercase tracking-wide mb-1">
              Portfolio piece unlocked
            </p>
            <p className="font-display font-bold">{newPiece.title}</p>
            <p className="text-ink-500 text-xs mt-1">
              Built from your answers in this unit — check your Profile to view or copy it.
            </p>
          </motion.div>
        )}
      </div>

      <div className="relative z-10">
        {!accountCreated && isFirstLessonCompletion ? (
          <>
            <Button
              variant="secondary"
              className="!shadow-[0_6px_0_0_white] !border-0 mb-3"
              onClick={() => setPhase('signup')}
            >
              Save my progress
            </Button>
            <button className="text-white/70 text-sm font-medium block mx-auto" onClick={goHome}>
              Maybe later
            </button>
          </>
        ) : (
          <Button
            variant="secondary"
            className="!shadow-[0_6px_0_0_white] !border-0"
            onClick={goHome}
          >
            Continue
          </Button>
        )}
      </div>
    </div>
  )
}
