import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { motion, animate } from 'framer-motion'
import { PartyPopper, Lock, ArrowUpRight } from 'lucide-react'
import { getLesson, getModule } from '../data/content'
import { useStore } from '../state/store'
import { isModuleLessonsComplete } from '../lib/progress'
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

  const [phase, setPhase] = useState<'celebrate' | 'signup'>('celebrate')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const animatedXp = useCountUp(xpGained)

  const isFirstLessonCompletion = completedLessonIds.length === 1
  const mod = lesson ? getModule(lesson.moduleId) : undefined
  const justUnlockedEndTask = mod ? isModuleLessonsComplete(mod.id, completedLessonIds) : false

  if (!lesson || !mod) {
    navigate('/home')
    return null
  }

  const goHome = () => navigate('/home')
  const goToEndTask = () => navigate(`/module/${mod.id}/task`)

  const handleCreateAccount = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim()) return
    createAccount(name.trim(), email.trim())
    goHome()
  }

  if (phase === 'signup') {
    return (
      <div className="flex-1 flex flex-col px-6 pt-[calc(env(safe-area-inset-top)+24px)] pb-8 bg-paper-50">
        <button
          className="text-ink-300 text-sm font-medium mb-6 self-start"
          onClick={() => setPhase('celebrate')}
        >
          Back
        </button>
        <div className="w-14 h-14 rounded-2xl bg-lilac-200 flex items-center justify-center mb-5">
          <Lock size={22} strokeWidth={2.25} className="text-lilac-600" />
        </div>
        <h1 className="font-display font-extrabold text-2xl text-ink-950 mb-2">
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
            className="w-full rounded-2xl border-2 border-ink-200 bg-white px-4 py-3.5 text-[15px] text-ink-950 placeholder:text-ink-300 focus:outline-none focus:border-ink-950"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email address"
            className="w-full rounded-2xl border-2 border-ink-200 bg-white px-4 py-3.5 text-[15px] text-ink-950 placeholder:text-ink-300 focus:outline-none focus:border-ink-950"
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
    <div className="flex-1 flex flex-col px-6 pt-[calc(env(safe-area-inset-top)+24px)] pb-8 bg-ink-950 text-white relative overflow-hidden">
      <Confetti />
      <div className="flex-1 flex flex-col items-center justify-center text-center relative z-10">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 12 }}
          className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-5"
        >
          <PartyPopper size={30} strokeWidth={2} />
        </motion.div>
        <h1 className="font-display font-extrabold text-2xl mb-1">Lesson complete!</h1>
        <p className="text-white/60 text-sm mb-7">{lesson.title}</p>

        <div className="flex items-center gap-3 mb-8">
          <div className="bg-white/10 rounded-2xl px-5 py-3.5 flex flex-col items-center">
            <span className="text-2xl font-display font-extrabold">+{animatedXp}</span>
            <span className="text-[11px] uppercase tracking-wide text-white/60 font-semibold">
              XP earned
            </span>
          </div>
          <StreakBadge streak={streakCount} className="!bg-white/10 !text-white h-full px-5 py-3.5" />
        </div>

        {justUnlockedEndTask && (
          <motion.button
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            onClick={goToEndTask}
            className="bg-white text-ink-950 rounded-2xl px-5 py-4 text-left w-full mb-2 flex items-center justify-between gap-3"
          >
            <div>
              <p className="text-xs font-display font-bold text-lilac-600 uppercase tracking-wide mb-1">
                End task unlocked
              </p>
              <p className="font-display font-bold text-sm">Go build your {mod.title.toLowerCase()} deliverable</p>
            </div>
            <ArrowUpRight size={20} strokeWidth={2.25} className="shrink-0" />
          </motion.button>
        )}
      </div>

      <div className="relative z-10">
        {!accountCreated && isFirstLessonCompletion ? (
          <>
            <Button variant="secondary" className="mb-3" onClick={() => setPhase('signup')}>
              Save my progress
            </Button>
            <button className="text-white/60 text-sm font-medium block mx-auto" onClick={goHome}>
              Maybe later
            </button>
          </>
        ) : (
          <Button variant="secondary" onClick={goHome}>
            Continue
          </Button>
        )}
      </div>
    </div>
  )
}
