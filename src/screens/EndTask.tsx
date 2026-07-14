import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Trophy, CircleCheck } from 'lucide-react'
import { endTaskForModule, getModule, getTrack } from '../data/content'
import { useStore } from '../state/store'
import { isModuleLessonsComplete } from '../lib/progress'
import ScreenHeader from '../components/ScreenHeader'
import Button from '../components/Button'
import Confetti from '../components/Confetti'
import BuilderTaskView from './endtask/BuilderTaskView'
import MultiCaptionTaskView from './endtask/MultiCaptionTaskView'
import SimulatorTaskView from './endtask/SimulatorTaskView'

export default function EndTask() {
  const { moduleId } = useParams<{ moduleId: string }>()
  const navigate = useNavigate()
  const completedLessonIds = useStore((s) => s.completedLessonIds)
  const completedModuleIds = useStore((s) => s.completedModuleIds)
  const submitEndTask = useStore((s) => s.submitEndTask)
  const [done, setDone] = useState(false)

  const mod = moduleId ? getModule(moduleId) : undefined
  const task = moduleId ? endTaskForModule(moduleId) : undefined
  const track = mod ? getTrack(mod.trackId) : undefined

  if (!mod || !task || !track) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <p className="text-ink-500 mb-4">Couldn't find that task.</p>
        <button className="text-ink-950 font-semibold underline" onClick={() => navigate('/home')}>
          Back to home
        </button>
      </div>
    )
  }

  const lessonsReady = isModuleLessonsComplete(mod.id, completedLessonIds)
  const alreadySubmitted = completedModuleIds.includes(mod.id)

  const handleSubmit = (content: string, score?: number, scoreSummary?: string) => {
    submitEndTask(
      {
        endTaskId: task.id,
        moduleId: mod.id,
        trackId: mod.trackId,
        title: task.title,
        deliverableType: task.deliverableType,
        content,
        score,
        scoreSummary,
      },
      task.xp,
    )
    setDone(true)
  }

  if (!lessonsReady) {
    return (
      <div className="flex-1 flex flex-col bg-paper-50">
        <ScreenHeader title={task.title} />
        <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
          <p className="text-ink-500 mb-4">Finish all 4 lessons in this module to unlock this task.</p>
          <Button onClick={() => navigate('/home')}>Back to home</Button>
        </div>
      </div>
    )
  }

  if (done) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-10 bg-ink-950 text-white text-center relative overflow-hidden">
        <Confetti />
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 12 }}
          className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-5 relative z-10"
        >
          <Trophy size={30} strokeWidth={2} />
        </motion.div>
        <h1 className="font-display font-extrabold text-2xl mb-1 relative z-10">Added to My Portfolio</h1>
        <p className="text-white/60 text-sm mb-8 relative z-10">{task.title}</p>
        <div className="relative z-10 w-full max-w-xs flex flex-col gap-3">
          <Button variant="secondary" onClick={() => navigate('/profile')}>
            View My Portfolio
          </Button>
          <Button variant="ghost" className="!text-white/60" onClick={() => navigate('/home')}>
            Back to home
          </Button>
        </div>
      </div>
    )
  }

  if (alreadySubmitted) {
    return (
      <div className="flex-1 flex flex-col bg-paper-50">
        <ScreenHeader title={task.title} />
        <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
          <CircleCheck size={32} strokeWidth={2} className="text-mint-600 mb-3" />
          <p className="text-ink-950 font-display font-bold mb-1">Already in your portfolio</p>
          <p className="text-ink-500 text-sm mb-5">You can view it any time in your profile.</p>
          <Button onClick={() => navigate('/profile')}>View My Portfolio</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 flex flex-col bg-paper-50">
      <ScreenHeader title={task.title} />
      {task.kind === 'builder' && <BuilderTaskView task={task} onSubmit={handleSubmit} />}
      {task.kind === 'multi-caption' && <MultiCaptionTaskView task={task} onSubmit={handleSubmit} />}
      {task.kind === 'simulator' && <SimulatorTaskView task={task} onSubmit={handleSubmit} />}
    </div>
  )
}
