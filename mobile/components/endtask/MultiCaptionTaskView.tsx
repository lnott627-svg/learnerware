import { useState } from 'react'
import { View, Text, TextInput, ScrollView, Pressable, KeyboardAvoidingView, Platform } from 'react-native'
import { MotiView } from 'moti'
import { FileText, Sparkles, Check, TriangleAlert, Loader } from 'lucide-react-native'
import type { MultiCaptionEndTask } from '../../data/types'
import { getCaptionFeedback, type CaptionFeedbackResult } from '../../lib/api'
import Button from '../Button'
import Card from '../Card'
import { colors } from '../../lib/colors'

interface CaptionSlot {
  text: string
  feedback: CaptionFeedbackResult | null
  loading: boolean
  error: string | null
}

export default function MultiCaptionTaskView({
  task,
  onSubmit,
}: {
  task: MultiCaptionEndTask
  onSubmit: (content: string, score?: number, scoreSummary?: string) => void
}) {
  const [slots, setSlots] = useState<CaptionSlot[]>(() =>
    task.labels.map(() => ({ text: '', feedback: null, loading: false, error: null })),
  )

  const updateSlot = (i: number, patch: Partial<CaptionSlot>) =>
    setSlots((prev) => prev.map((s, idx) => (idx === i ? { ...s, ...patch } : s)))

  const requestFeedback = async (i: number) => {
    const caption = slots[i].text.trim()
    if (!caption) return
    updateSlot(i, { loading: true, error: null })
    try {
      const result = await getCaptionFeedback(task.brief, caption, task.labels[i])
      updateSlot(i, { feedback: result, loading: false })
    } catch (err) {
      updateSlot(i, { loading: false, error: err instanceof Error ? err.message : 'Feedback unavailable right now' })
    }
  }

  const allWritten = slots.every((s) => s.text.trim().length > 0)
  const scored = slots.filter((s) => s.feedback)
  const avgScore = scored.length
    ? Math.round(scored.reduce((sum, s) => sum + (s.feedback?.score ?? 0), 0) / scored.length)
    : undefined

  const handleSubmit = () => {
    const content = task.labels
      .map((label, i) => {
        const slot = slots[i]
        const fb = slot.feedback
        return [`${label}:`, slot.text.trim(), fb ? `(AI feedback: ${fb.score}/100 — ${fb.summary})` : '']
          .filter(Boolean)
          .join('\n')
      })
      .join('\n\n')
    onSubmit(content, avgScore, avgScore !== undefined ? `Average caption score: ${avgScore}/100` : undefined)
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} className="flex-1">
      <ScrollView className="flex-1 px-6" contentContainerStyle={{ paddingBottom: 24 }}>
        <Card className="mb-6 flex-row gap-3" style={{ backgroundColor: colors.lilac[100], shadowOpacity: 0 }}>
          <FileText size={18} strokeWidth={2.25} color={colors.lilac[600]} style={{ marginTop: 2 }} />
          <Text className="text-sm text-ink-700 leading-relaxed flex-1">{task.brief}</Text>
        </Card>

        <View className="gap-6">
          {task.labels.map((label, i) => {
            const slot = slots[i]
            return (
              <View key={label}>
                <Text className="font-jakarta-bold text-sm text-ink-950 mb-2">
                  {i + 1}. {label}
                </Text>
                <TextInput
                  value={slot.text}
                  onChangeText={(t) => updateSlot(i, { text: t, feedback: null })}
                  placeholder="Write your caption..."
                  placeholderTextColor={colors.ink[300]}
                  multiline
                  numberOfLines={3}
                  textAlignVertical="top"
                  className="rounded-2xl px-4 py-3.5 text-[15px] text-ink-950"
                  style={{ borderWidth: 2, borderColor: colors.ink[200], backgroundColor: '#fff', minHeight: 80 }}
                />

                {!slot.feedback && (
                  <Pressable
                    onPress={() => requestFeedback(i)}
                    disabled={!slot.text.trim() || slot.loading}
                    className="mt-2 flex-row items-center gap-1.5"
                    style={{ opacity: !slot.text.trim() || slot.loading ? 0.4 : 1 }}
                  >
                    {slot.loading ? (
                      <Loader size={14} color={colors.lilac[600]} />
                    ) : (
                      <Sparkles size={14} strokeWidth={2.5} color={colors.lilac[600]} />
                    )}
                    <Text className="text-xs font-jakarta-bold text-lilac-600">
                      {slot.loading ? 'Getting feedback...' : 'Get AI feedback'}
                    </Text>
                  </Pressable>
                )}

                {slot.error && (
                  <View className="mt-2 flex-row items-center gap-1.5">
                    <TriangleAlert size={13} strokeWidth={2.5} color={colors.pink[600]} />
                    <Text className="text-xs text-pink-600 flex-1">{slot.error}</Text>
                  </View>
                )}

                {slot.feedback && (
                  <MotiView
                    from={{ opacity: 0, translateY: 8 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    className="mt-2 rounded-2xl px-4 py-3.5"
                    style={{ backgroundColor: slot.feedback.score >= 70 ? colors.mint[200] : colors.yellow[200] }}
                  >
                    <Text className="font-jakarta-bold text-sm text-ink-950 mb-2">{slot.feedback.score}/100</Text>
                    <Text className="text-xs text-ink-700 mb-2">{slot.feedback.summary}</Text>
                    {slot.feedback.whatWorked.map((w, wi) => (
                      <View key={wi} className="flex-row gap-1.5 mb-1">
                        <Check size={13} strokeWidth={2.5} color={colors.mint[600]} style={{ marginTop: 2 }} />
                        <Text className="text-xs text-ink-700 flex-1">{w}</Text>
                      </View>
                    ))}
                    {slot.feedback.whatToImprove.map((w, wi) => (
                      <View key={wi} className="flex-row gap-1.5 mb-1">
                        <Sparkles size={13} strokeWidth={2.5} color={colors.yellow[600]} style={{ marginTop: 2 }} />
                        <Text className="text-xs text-ink-700 flex-1">{w}</Text>
                      </View>
                    ))}
                  </MotiView>
                )}
              </View>
            )
          })}
        </View>
      </ScrollView>
      <View className="px-6 py-6 bg-paper-50" style={{ borderTopWidth: 1, borderTopColor: colors.ink[100] }}>
        <Button disabled={!allWritten} onPress={handleSubmit}>
          Submit to My Portfolio
        </Button>
      </View>
    </KeyboardAvoidingView>
  )
}
