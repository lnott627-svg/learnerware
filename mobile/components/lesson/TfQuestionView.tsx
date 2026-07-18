import { useState } from 'react'
import { View, Text, Pressable, ScrollView } from 'react-native'
import { MotiView } from 'moti'
import { Check, X } from 'lucide-react-native'
import type { TfQuestion } from '../../data/types'
import Button from '../Button'
import { colors } from '../../lib/colors'

export default function TfQuestionView({
  question,
  onNext,
}: {
  question: TfQuestion
  onNext: (correct: boolean) => void
}) {
  const [selected, setSelected] = useState<boolean | null>(null)
  const [checked, setChecked] = useState(false)
  const isCorrect = selected === question.correctAnswer

  const optionStyle = (value: boolean) => {
    const isSelected = selected === value
    const isRight = value === question.correctAnswer
    if (checked && isRight) return { bg: colors.mint[200], border: colors.mint[600], text: colors.ink[950] }
    if (checked && isSelected && !isCorrect) return { bg: colors.pink[200], border: colors.pink[600], text: colors.ink[950] }
    if (isSelected) return { bg: colors.ink[950], border: colors.ink[950], text: '#ffffff' }
    return { bg: '#ffffff', border: colors.ink[200], text: colors.ink[950] }
  }

  return (
    <View className="flex-1">
      <ScrollView className="flex-1 px-6 pt-4" contentContainerStyle={{ paddingBottom: 24 }}>
        <Text className="text-xs font-jakarta-bold text-ink-300 uppercase tracking-wide mb-3">
          True or false
        </Text>
        <Text className="font-display text-3xl text-ink-950 mb-7 leading-snug">
          {question.prompt}
        </Text>

        <View className="flex-row gap-3">
          {[true, false].map((value) => {
            const s = optionStyle(value)
            return (
              <Pressable key={String(value)} disabled={checked} onPress={() => setSelected(value)} className="flex-1">
                <View
                  className="rounded-2xl py-8 items-center justify-center gap-2"
                  style={{ backgroundColor: s.bg, borderWidth: 2, borderColor: s.border }}
                >
                  <Text className="font-jakarta-bold text-lg" style={{ color: s.text }}>
                    {value ? 'True' : 'False'}
                  </Text>
                  {checked && value === question.correctAnswer && <Check size={20} strokeWidth={2.5} color={s.text} />}
                  {checked && selected === value && !isCorrect && <X size={20} strokeWidth={2.5} color={s.text} />}
                </View>
              </Pressable>
            )
          })}
        </View>
      </ScrollView>

      <View className="px-6 py-6 bg-paper-50">
        {checked && (
          <MotiView
            from={{ opacity: 0, translateY: 10 }}
            animate={{ opacity: 1, translateY: 0 }}
            className="rounded-2xl px-4 py-3 mb-3"
            style={{ backgroundColor: isCorrect ? colors.mint[200] : colors.pink[200] }}
          >
            <Text className="text-sm" style={{ color: isCorrect ? colors.mint[600] : colors.pink[600] }}>
              {isCorrect ? question.correctFeedback : question.incorrectFeedback}
            </Text>
          </MotiView>
        )}
        {!checked ? (
          <Button disabled={selected === null} onPress={() => setChecked(true)}>
            Check
          </Button>
        ) : (
          <Button onPress={() => onNext(isCorrect)}>Continue</Button>
        )}
      </View>
    </View>
  )
}
