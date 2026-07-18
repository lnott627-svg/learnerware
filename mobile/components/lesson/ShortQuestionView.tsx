import { useState } from 'react'
import { View, Text, TextInput, ScrollView } from 'react-native'
import { MotiView } from 'moti'
import { Lightbulb } from 'lucide-react-native'
import type { ShortQuestion } from '../../data/types'
import Button from '../Button'
import { colors } from '../../lib/colors'

export default function ShortQuestionView({
  question,
  onNext,
}: {
  question: ShortQuestion
  onNext: () => void
}) {
  const [text, setText] = useState('')
  const [checked, setChecked] = useState(false)

  return (
    <View className="flex-1">
      <ScrollView className="flex-1 px-6 pt-4" contentContainerStyle={{ paddingBottom: 24 }}>
        <Text className="text-xs font-jakarta-bold text-ink-300 uppercase tracking-wide mb-3">
          Short answer
        </Text>
        <Text className="font-display text-3xl text-ink-950 mb-5 leading-snug">
          {question.prompt}
        </Text>

        <TextInput
          value={text}
          onChangeText={setText}
          placeholder={question.placeholder}
          placeholderTextColor={colors.ink[300]}
          multiline
          editable={!checked}
          numberOfLines={5}
          textAlignVertical="top"
          className="rounded-2xl px-4 py-3.5 text-[15px] text-ink-950"
          style={{ borderWidth: 2, borderColor: colors.ink[200], backgroundColor: '#fff', minHeight: 110 }}
        />

        {checked && (
          <MotiView
            from={{ opacity: 0, translateY: 10 }}
            animate={{ opacity: 1, translateY: 0 }}
            className="rounded-2xl px-4 py-3.5 mt-4 flex-row gap-2.5"
            style={{ backgroundColor: colors.yellow[200] }}
          >
            <Lightbulb size={18} strokeWidth={2.25} color={colors.yellow[600]} style={{ marginTop: 2 }} />
            <Text className="text-sm text-ink-950 leading-relaxed flex-1">
              <Text className="font-jakarta-bold">A strong answer: </Text>
              {question.guidance}
            </Text>
          </MotiView>
        )}
      </ScrollView>

      <View className="px-6 py-6 bg-paper-50">
        {!checked ? (
          <Button disabled={!text.trim()} onPress={() => setChecked(true)}>
            Compare my answer
          </Button>
        ) : (
          <Button onPress={onNext}>Continue</Button>
        )}
      </View>
    </View>
  )
}
