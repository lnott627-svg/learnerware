import { useState } from 'react'
import { View, Text } from 'react-native'
import { router } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { diagnosticQuestions } from '../../data/diagnostic'
import { computePlacement } from '../../lib/placement'
import { useStore } from '../../state/store'
import ProgressBar from '../../components/ProgressBar'
import McQuestionView from '../../components/lesson/McQuestionView'
import TfQuestionView from '../../components/lesson/TfQuestionView'

// Onboarding step 3 — the diagnostic. Reuses the existing scorable question
// components. Score -> placement module (lib/placement).
export default function OnboardingDiagnostic() {
  const insets = useSafeAreaInsets()
  const setPlacement = useStore((s) => s.setPlacement)
  const completeDiagnostic = useStore((s) => s.completeDiagnostic)

  const [index, setIndex] = useState(0)
  const [correct, setCorrect] = useState(0)

  const total = diagnosticQuestions.length
  const question = diagnosticQuestions[index]
  const progress = ((index + 0.5) / total) * 100

  const handleAnswered = (isCorrect: boolean) => {
    const nextCorrect = correct + (isCorrect ? 1 : 0)
    if (index + 1 >= total) {
      const placement = computePlacement(nextCorrect, total)
      setPlacement(placement.trackId, placement.moduleId)
      completeDiagnostic()
      router.replace('/onboarding/results')
    } else {
      setCorrect(nextCorrect)
      setIndex((i) => i + 1)
    }
  }

  return (
    <View className="flex-1 bg-paper-50">
      <View className="px-5 pb-3" style={{ paddingTop: insets.top + 16 }}>
        <Text className="text-center text-xs font-jakarta-bold text-ink-300 uppercase tracking-wide mb-2">
          Quick placement quiz · {index + 1}/{total}
        </Text>
        <ProgressBar value={progress} />
      </View>

      {question.type === 'mc' && <McQuestionView key={index} question={question} onNext={handleAnswered} />}
      {question.type === 'tf' && <TfQuestionView key={index} question={question} onNext={handleAnswered} />}
    </View>
  )
}
