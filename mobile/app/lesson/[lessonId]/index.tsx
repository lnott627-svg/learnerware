import { useState } from 'react'
import { View, Pressable } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { X } from 'lucide-react-native'
import { getLesson } from '../../../data/content'
import { useStore } from '../../../state/store'
import ProgressBar from '../../../components/ProgressBar'
import { colors } from '../../../lib/colors'
import InfoStepView from '../../../components/lesson/InfoStepView'
import McQuestionView from '../../../components/lesson/McQuestionView'
import TfQuestionView from '../../../components/lesson/TfQuestionView'
import ShortQuestionView from '../../../components/lesson/ShortQuestionView'

export default function LessonPlayer() {
  const { lessonId } = useLocalSearchParams<{ lessonId: string }>()
  const insets = useSafeAreaInsets()
  const lesson = lessonId ? getLesson(lessonId) : undefined
  const completeLesson = useStore((s) => s.completeLesson)

  const [stepIndex, setStepIndex] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [total, setTotal] = useState(0)

  if (!lesson) return null

  const step = lesson.steps[stepIndex]
  const progress = ((stepIndex + (stepIndex === lesson.steps.length - 1 ? 1 : 0.5)) / lesson.steps.length) * 100

  const advance = () => {
    if (stepIndex + 1 >= lesson.steps.length) {
      completeLesson(lesson.id, { correct, total })
      router.push(`/lesson/${lesson.id}/complete`)
    } else {
      setStepIndex((i) => i + 1)
    }
  }

  const handleQuestionAnswered = (isCorrect: boolean) => {
    setTotal((t) => t + 1)
    if (isCorrect) setCorrect((c) => c + 1)
    advance()
  }

  return (
    <View className="flex-1 bg-paper-50">
      <View className="flex-row items-center gap-3 px-5 pb-3" style={{ paddingTop: insets.top + 16 }}>
        <Pressable onPress={() => router.back()} className="w-6 h-6 items-center justify-center">
          <X size={20} strokeWidth={2.25} color={colors.ink[300]} />
        </Pressable>
        <ProgressBar value={progress} className="flex-1" />
      </View>

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
    </View>
  )
}
