import { useState } from 'react'
import { View, Text, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { FileText } from 'lucide-react-native'
import type { BuilderEndTask } from '../../data/types'
import Button from '../Button'
import Card from '../Card'
import { colors } from '../../lib/colors'

export default function BuilderTaskView({
  task,
  onSubmit,
}: {
  task: BuilderEndTask
  onSubmit: (content: string) => void
}) {
  const [answers, setAnswers] = useState<string[]>(() => task.prompts.map(() => ''))
  const allFilled = answers.every((a) => a.trim().length > 0)

  const handleSubmit = () => {
    const content = task.prompts.map((p, i) => `${p.label}\n${answers[i].trim()}`).join('\n\n')
    onSubmit(content)
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} className="flex-1">
      <ScrollView className="flex-1 px-6" contentContainerStyle={{ paddingBottom: 24 }}>
        <Card className="mb-6 flex-row gap-3" style={{ backgroundColor: colors.lilac[100], shadowOpacity: 0 }}>
          <FileText size={18} strokeWidth={2.25} color={colors.lilac[600]} style={{ marginTop: 2 }} />
          <Text className="text-sm text-ink-700 leading-relaxed flex-1">{task.brief}</Text>
        </Card>

        <View className="gap-5">
          {task.prompts.map((prompt, i) => (
            <View key={prompt.label}>
              <Text className="font-jakarta-bold text-sm text-ink-950 mb-2">{prompt.label}</Text>
              <TextInput
                value={answers[i]}
                onChangeText={(t) => setAnswers((prev) => prev.map((v, idx) => (idx === i ? t : v)))}
                placeholder={prompt.placeholder}
                placeholderTextColor={colors.ink[300]}
                multiline
                numberOfLines={3}
                textAlignVertical="top"
                className="rounded-2xl px-4 py-3.5 text-[15px] text-ink-950"
                style={{ borderWidth: 2, borderColor: colors.ink[200], backgroundColor: '#fff', minHeight: 80 }}
              />
            </View>
          ))}
        </View>
      </ScrollView>
      <View className="px-6 py-6 bg-paper-50" style={{ borderTopWidth: 1, borderTopColor: colors.ink[100] }}>
        <Button disabled={!allFilled} onPress={handleSubmit}>
          Submit to My Portfolio
        </Button>
      </View>
    </KeyboardAvoidingView>
  )
}
