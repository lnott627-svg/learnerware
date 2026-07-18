import { useState } from 'react'
import { View, Text, Pressable, ScrollView } from 'react-native'
import { MotiView } from 'moti'
import { Check, X } from 'lucide-react-native'
import type { McQuestion } from '../../data/types'
import Button from '../Button'
import { colors } from '../../lib/colors'

export default function McQuestionView({
  question,
  onNext,
}: {
  question: McQuestion
  onNext: (correct: boolean) => void
}) {
  const [selected, setSelected] = useState<number | null>(null)
  const [checked, setChecked] = useState(false)
  const isCorrect = selected === question.correctIndex

  return (
    <View className="flex-1">
      <ScrollView className="flex-1 px-6 pt-4" contentContainerStyle={{ paddingBottom: 24 }}>
        <Text className="text-xs font-jakarta-bold text-ink-300 uppercase tracking-wide mb-3">
          Multiple choice
        </Text>
        <Text className="font-display text-3xl text-ink-950 mb-7 leading-snug">
          {question.prompt}
        </Text>

        <View className="gap-3">
          {question.options.map((opt, i) => {
            const isSelected = selected === i
            const isRight = i === question.correctIndex
            let bg = '#ffffff'
            let border = colors.ink[200]
            let text = colors.ink[950]
            if (checked && isRight) {
              bg = colors.mint[200]
              border = colors.mint[600]
            } else if (checked && isSelected && !isCorrect) {
              bg = colors.pink[200]
              border = colors.pink[600]
            } else if (isSelected) {
              bg = colors.ink[950]
              border = colors.ink[950]
              text = '#ffffff'
            }
            return (
              <Pressable key={i} disabled={checked} onPress={() => setSelected(i)}>
                <View
                  className="rounded-2xl px-4 py-3.5 flex-row items-center justify-between"
                  style={{ backgroundColor: bg, borderWidth: 2, borderColor: border }}
                >
                  <Text className="text-[15px] flex-1" style={{ color: text, fontFamily: 'PlusJakartaSans_500Medium' }}>
                    {opt}
                  </Text>
                  {checked && isRight && <Check size={18} strokeWidth={2.5} color={colors.ink[950]} />}
                  {checked && isSelected && !isCorrect && <X size={18} strokeWidth={2.5} color={colors.ink[950]} />}
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
