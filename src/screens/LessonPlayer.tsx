import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { getLesson } from '../data/content'
import { useStore } from '../state/store'
import ProgressBar from '../components/ProgressBar'
import InfoStepView from './lesson/InfoStepView'
import McQuestionView from './lesson/McQuestionView'
import TfQuestionView from './lesson/TfQuestionView'
import ShortQuestionView from './lesson/ShortQuestionView'

export default function LessonPlayer() {
  const { lessonId } = useParams<{ lessonId: string }>()
  const navigate = useNavigate()
  const lesson = lessonId ? getLesson(lessonId) : undefined
  const completeLesson = useStore((s) => s.completeLesson)

  const [stepIndex, setStepIndex] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [total, setTotal] = useState(0)

  if (!lesson) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <p className="text-ink-500 mb-4">Couldn't find that lesson.</p>
        <button className="text-ink-950 font-semibold underline" onClick={() => navigate('/home')}>
          Back to home
        </button>
      </div>
    )
  }

  const step = lesson.steps[stepIndex]
  const progress = ((stepIndex + (stepIndex === lesson.steps.length - 1 ? 1 : 0.5)) / lesson.steps.length) * 100

  const advance = () => {
    if (stepIndex + 1 >= lesson.steps.length) {
      completeLesson(lesson.id, { correct, total })
      navigate(`/lesson/${lesson.id}/complete`)
    } else {
      setStepIndex((i) => i + 1)
    }
  }

  const handleQuestionAnswered = (isCorrect: boolean) => {
    setTotal((t) => t + 1)
    if (isCorrect) setCorrect((c) => c + 1)
    advance()
  }

  const handleExit = () => {
    navigate(-1)
  }

  return (
    <div className="flex-1 flex flex-col bg-paper-50">
      <div className="flex items-center gap-3 px-5 pt-[calc(env(safe-area-inset-top)+16px)] pb-3">
        <button
          aria-label="Exit lesson"
          onClick={handleExit}
          className="text-ink-300 w-6 h-6 flex items-center justify-center shrink-0"
        >
          <X size={20} strokeWidth={2.25} />
        </button>
        <ProgressBar value={progress} />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={stepIndex}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.2 }}
          className="flex-1 flex flex-col"
        >
          {step.kind === 'info' && <InfoStepView step={step} onNext={advance} />}
          {step.kind === 'question' && step.question.type === 'mc' && (
            <McQuestionView question={step.question} onNext={handleQuestionAnswered} />
          )}
          {step.kind === 'question' && step.question.type === 'tf' && (
            <TfQuestionView question={step.question} onNext={handleQuestionAnswered} />
          )}
          {step.kind === 'question' && step.question.type === 'short' && (
            <ShortQuestionView question={step.question} onNext={advance} />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
