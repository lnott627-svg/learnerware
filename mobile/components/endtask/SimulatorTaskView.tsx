import { useRef, useState } from 'react'
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'
import { MotiView } from 'moti'
import { FileText, Send, TriangleAlert, Check, Sparkles, Loader } from 'lucide-react-native'
import type { SimulatorEndTask } from '../../data/types'
import { getSimulatorReply, getSimulatorScore, type ChatMessage, type ScoreResult } from '../../lib/api'
import Button from '../Button'
import Card from '../Card'
import { colors } from '../../lib/colors'

const OPENER = "Hey, thanks for hopping on! I've got about 15 minutes — go ahead, what would you like to know?"

function transcriptText(messages: ChatMessage[]) {
  return messages.map((m) => `${m.role === 'user' ? 'You' : 'Client'}: ${m.content}`).join('\n\n')
}

export default function SimulatorTaskView({
  task,
  onSubmit,
}: {
  task: SimulatorEndTask
  onSubmit: (content: string, score?: number, scoreSummary?: string) => void
}) {
  const [phase, setPhase] = useState<'intro' | 'chat' | 'scoring' | 'result'>('intro')
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState('')
  const [sending, setSending] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [scoreResult, setScoreResult] = useState<ScoreResult | null>(null)
  const [scoreError, setScoreError] = useState<string | null>(null)
  const scrollRef = useRef<ScrollView>(null)

  const start = () => {
    setPhase('chat')
    setMessages([{ role: 'assistant', content: OPENER }])
  }

  const send = async () => {
    const text = input.trim()
    if (!text || sending) return
    const nextMessages: ChatMessage[] = [...messages, { role: 'user', content: text }]
    setMessages(nextMessages)
    setInput('')
    setSending(true)
    setError(null)
    try {
      const { reply } = await getSimulatorReply(task.id, nextMessages)
      setMessages([...nextMessages, { role: 'assistant', content: reply }])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not reach the AI client')
    } finally {
      setSending(false)
    }
  }

  const userTurns = messages.filter((m) => m.role === 'user').length

  const endCall = async () => {
    setPhase('scoring')
    setScoreError(null)
    try {
      const result = await getSimulatorScore(messages)
      setScoreResult(result)
      setPhase('result')
    } catch (err) {
      setScoreError(err instanceof Error ? err.message : 'Could not score this call')
      setPhase('result')
    }
  }

  const handleFinish = () => {
    onSubmit(transcriptText(messages), scoreResult?.score, scoreResult?.summary)
  }

  if (phase === 'intro') {
    return (
      <View className="flex-1 px-6 pb-6">
        <Card className="mb-6 flex-row gap-3" style={{ backgroundColor: colors.lilac[100], shadowOpacity: 0 }}>
          <FileText size={18} strokeWidth={2.25} color={colors.lilac[600]} style={{ marginTop: 2 }} />
          <Text className="text-sm text-ink-700 leading-relaxed flex-1">{task.brief}</Text>
        </Card>
        <View className="flex-1" />
        <Button onPress={start}>Start the call</Button>
      </View>
    )
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      className="flex-1"
      keyboardVerticalOffset={90}
    >
      <ScrollView
        ref={scrollRef}
        className="flex-1 px-5"
        contentContainerStyle={{ paddingVertical: 8, gap: 12 }}
        onContentSizeChange={() => scrollRef.current?.scrollToEnd({ animated: true })}
      >
        {messages.map((m, i) => (
          <MotiView
            key={i}
            from={{ opacity: 0, translateY: 8 }}
            animate={{ opacity: 1, translateY: 0 }}
            className="rounded-2xl px-4 py-3"
            style={{
              maxWidth: '85%',
              alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start',
              backgroundColor: m.role === 'user' ? colors.ink[950] : colors.ink[100],
            }}
          >
            <Text
              className="text-[15px] leading-relaxed"
              style={{ color: m.role === 'user' ? '#ffffff' : colors.ink[950] }}
            >
              {m.content}
            </Text>
          </MotiView>
        ))}
        {sending && (
          <View
            className="self-start rounded-2xl px-4 py-3 flex-row items-center gap-2"
            style={{ backgroundColor: colors.ink[100] }}
          >
            <Loader size={14} color={colors.ink[500]} />
            <Text className="text-sm text-ink-500">typing...</Text>
          </View>
        )}
        {error && (
          <View
            className="self-start rounded-2xl px-4 py-3 flex-row items-start gap-2"
            style={{ maxWidth: '90%', backgroundColor: colors.pink[200] }}
          >
            <TriangleAlert size={15} strokeWidth={2.5} color={colors.pink[600]} style={{ marginTop: 2 }} />
            <Text className="text-sm text-pink-600 flex-1">{error}</Text>
          </View>
        )}

        {phase === 'scoring' && (
          <View className="self-center flex-row items-center gap-2 my-4">
            <Loader size={16} color={colors.ink[500]} />
            <Text className="text-ink-500 text-sm">Scoring your call...</Text>
          </View>
        )}

        {phase === 'result' && scoreResult && (
          <Card style={{ backgroundColor: colors.mint[100], shadowOpacity: 0, marginTop: 8 }}>
            <View className="flex-row items-center justify-between mb-3">
              <Text className="font-jakarta-extrabold text-2xl text-ink-950">{scoreResult.score}/100</Text>
              <Sparkles size={20} strokeWidth={2.25} color={colors.mint[600]} />
            </View>
            <Text className="text-sm text-ink-700 mb-4">{scoreResult.summary}</Text>
            <Text className="text-xs font-jakarta-bold text-ink-950 uppercase tracking-wide mb-2">What worked</Text>
            {scoreResult.strengths.map((s, i) => (
              <View key={i} className="flex-row gap-2 mb-1.5">
                <Check size={15} strokeWidth={2.5} color={colors.mint[600]} style={{ marginTop: 2 }} />
                <Text className="text-sm text-ink-700 flex-1">{s}</Text>
              </View>
            ))}
            <Text className="text-xs font-jakarta-bold text-ink-950 uppercase tracking-wide mb-2 mt-3">
              Next time
            </Text>
            {scoreResult.improvements.map((s, i) => (
              <View key={i} className="flex-row gap-2 mb-1.5">
                <Sparkles size={15} strokeWidth={2.5} color={colors.yellow[600]} style={{ marginTop: 2 }} />
                <Text className="text-sm text-ink-700 flex-1">{s}</Text>
              </View>
            ))}
          </Card>
        )}

        {phase === 'result' && scoreError && (
          <View
            className="rounded-2xl px-4 py-3.5 flex-row items-start gap-2"
            style={{ backgroundColor: colors.pink[200] }}
          >
            <TriangleAlert size={15} strokeWidth={2.5} color={colors.pink[600]} style={{ marginTop: 2 }} />
            <Text className="text-sm text-pink-600 flex-1">
              {scoreError} You can still save your transcript without a score.
            </Text>
          </View>
        )}
      </ScrollView>

      <View className="px-5 py-4" style={{ borderTopWidth: 1, borderTopColor: colors.ink[100] }}>
        {phase === 'chat' && (
          <View className="gap-3">
            <View className="flex-row items-end gap-2">
              <TextInput
                value={input}
                onChangeText={setInput}
                placeholder="Type your message..."
                placeholderTextColor={colors.ink[300]}
                multiline
                className="flex-1 rounded-2xl px-4 py-3 text-[15px] text-ink-950"
                style={{ borderWidth: 2, borderColor: colors.ink[200], backgroundColor: '#fff', maxHeight: 96 }}
              />
              <Pressable
                onPress={send}
                disabled={!input.trim() || sending}
                className="w-12 h-12 rounded-full bg-ink-950 items-center justify-center"
                style={{ opacity: !input.trim() || sending ? 0.4 : 1 }}
              >
                <Send size={18} strokeWidth={2.25} color="#ffffff" />
              </Pressable>
            </View>
            {userTurns >= 2 && (
              <Pressable onPress={endCall}>
                <Text className="text-center text-sm font-jakarta-bold text-lilac-600">
                  End call & get feedback
                </Text>
              </Pressable>
            )}
          </View>
        )}
        {phase === 'result' && <Button onPress={handleFinish}>Save to My Portfolio</Button>}
      </View>
    </KeyboardAvoidingView>
  )
}
