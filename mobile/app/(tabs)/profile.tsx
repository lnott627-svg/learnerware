import { useState } from 'react'
import { View, Text, ScrollView, Pressable, Alert } from 'react-native'
import { router } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import * as Clipboard from 'expo-clipboard'
import { ChevronDown, ChevronUp, Copy, Check, User, Sparkles } from 'lucide-react-native'
import { getTrack, modules } from '../../data/content'
import { useStore, type Pace } from '../../state/store'
import { colors } from '../../lib/colors'
import Card from '../../components/Card'
import { XpBadge, StreakBadge } from '../../components/Badges'

const paceOptions: { id: Pace; label: string; hint: string }[] = [
  { id: 'chill', label: 'Chill', hint: 'A lesson or two, no pressure' },
  { id: 'steady', label: 'Steady', hint: 'A little every day' },
  { id: 'intense', label: 'Intense', hint: 'Push hard, move fast' },
]

export default function Profile() {
  const insets = useSafeAreaInsets()
  const name = useStore((s) => s.name)
  const email = useStore((s) => s.email)
  const accountCreated = useStore((s) => s.accountCreated)
  const xp = useStore((s) => s.xp)
  const streakCount = useStore((s) => s.streakCount)
  const completedLessonIds = useStore((s) => s.completedLessonIds)
  const completedModuleIds = useStore((s) => s.completedModuleIds)
  const portfolio = useStore((s) => s.portfolio)
  const pace = useStore((s) => s.pace)
  const paceInferred = useStore((s) => s.paceInferred)
  const setPace = useStore((s) => s.setPace)
  const selectedTrackId = useStore((s) => s.selectedTrackId)
  const resetProgress = useStore((s) => s.resetProgress)

  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [openPieceId, setOpenPieceId] = useState<string | null>(null)

  const handleCopy = async (id: string, content: string) => {
    await Clipboard.setStringAsync(content)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 1500)
  }

  const handleSwitchTrack = () => {
    Alert.alert(
      'Switch tracks?',
      'Your XP and portfolio stay, but path progress resets.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Switch',
          style: 'destructive',
          onPress: () => {
            resetProgress()
            router.replace('/tracks')
          },
        },
      ],
    )
  }

  return (
    <View className="flex-1 bg-paper-50">
      <View className="px-6 pb-6 bg-ink-950" style={{ paddingTop: insets.top + 20 }}>
        <View className="w-14 h-14 rounded-2xl items-center justify-center mb-3" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
          <User size={22} strokeWidth={2.25} color="#ffffff" />
        </View>
        <Text className="font-jakarta-extrabold text-xl text-white">
          {accountCreated ? name : 'Welcome, guest'}
        </Text>
        <Text className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
          {accountCreated ? email : 'Complete a lesson to save your progress'}
        </Text>
        <View className="flex-row gap-2">
          <StreakBadge streak={streakCount} className="!bg-white/10" />
          <XpBadge xp={xp} className="!bg-white/10" />
        </View>
      </View>

      <ScrollView className="flex-1 px-6" contentContainerStyle={{ paddingTop: 24, paddingBottom: 32, gap: 24 }}>
        <View>
          <Text className="font-jakarta-bold text-ink-950 mb-3">Client Ready checklist</Text>
          <Card>
            <View>
              {modules.map((mod, idx) => {
                const done = completedModuleIds.includes(mod.id)
                return (
                  <View
                    key={mod.id}
                    className="flex-row items-center gap-3 py-2.5"
                    style={idx > 0 ? { borderTopWidth: 1, borderTopColor: colors.ink[100] } : undefined}
                  >
                    <View
                      className="w-6 h-6 rounded-full items-center justify-center"
                      style={{ backgroundColor: done ? colors.mint[600] : colors.ink[100] }}
                    >
                      {done && <Check size={13} strokeWidth={3} color="#ffffff" />}
                    </View>
                    <View className="flex-1">
                      <Text
                        className="text-sm font-jakarta-medium"
                        style={{ color: done ? colors.ink[950] : colors.ink[300] }}
                      >
                        {mod.title}
                      </Text>
                      <Text className="text-[11px] text-ink-300">{getTrack(mod.trackId)?.title}</Text>
                    </View>
                  </View>
                )
              })}
            </View>
          </Card>
        </View>

        <View>
          <Text className="font-jakarta-bold text-ink-950 mb-3">My Portfolio ({portfolio.length})</Text>
          {portfolio.length === 0 ? (
            <Card>
              <Text className="text-center text-ink-300 text-sm py-4">
                Finish a module's end task to build your first real deliverable here.
              </Text>
            </Card>
          ) : (
            <View className="gap-3">
              {portfolio.map((piece) => {
                const open = openPieceId === piece.id
                return (
                  <Card key={piece.id}>
                    <Pressable onPress={() => setOpenPieceId(open ? null : piece.id)}>
                      <View className="flex-row items-center justify-between gap-3">
                        <View className="flex-1">
                          <Text className="text-[11px] font-jakarta-bold text-lilac-600 uppercase tracking-wide">
                            {piece.deliverableType}
                          </Text>
                          <Text className="font-jakarta-bold text-ink-950 text-sm" numberOfLines={1}>
                            {piece.title}
                          </Text>
                          {piece.score !== undefined && (
                            <View className="flex-row items-center gap-1 mt-1">
                              <Sparkles size={12} strokeWidth={2.5} color={colors.mint[600]} />
                              <Text className="text-xs text-mint-600 font-jakarta-bold">{piece.score}/100</Text>
                            </View>
                          )}
                        </View>
                        {open ? (
                          <ChevronUp size={18} color={colors.ink[300]} />
                        ) : (
                          <ChevronDown size={18} color={colors.ink[300]} />
                        )}
                      </View>
                    </Pressable>
                    {open && (
                      <View className="mt-3">
                        <View className="rounded-xl p-3" style={{ backgroundColor: colors.ink[100] }}>
                          <Text className="text-sm text-ink-700 leading-relaxed">{piece.content}</Text>
                        </View>
                        <Pressable
                          onPress={() => handleCopy(piece.id, piece.content)}
                          className="mt-2 flex-row items-center gap-1.5"
                        >
                          <Copy size={14} strokeWidth={2.25} color={colors.ink[950]} />
                          <Text className="text-ink-950 text-sm font-jakarta-semibold">
                            {copiedId === piece.id ? 'Copied!' : 'Copy to clipboard'}
                          </Text>
                        </Pressable>
                      </View>
                    )}
                  </Card>
                )
              })}
            </View>
          )}
        </View>

        <View>
          <Text className="font-jakarta-bold text-ink-950 mb-3">Learning pace</Text>
          <Card>
            {paceInferred && (
              <Text className="text-xs text-ink-300 mb-3">
                We set this based on how your first lesson went — change it anytime.
              </Text>
            )}
            <View className="gap-2">
              {paceOptions.map((opt) => {
                const selected = pace === opt.id
                return (
                  <Pressable key={opt.id} onPress={() => setPace(opt.id)}>
                    <View
                      className="rounded-2xl px-4 py-3 flex-row items-center justify-between"
                      style={{
                        borderWidth: 2,
                        borderColor: selected ? colors.ink[950] : colors.ink[200],
                        backgroundColor: selected ? colors.ink[100] : 'transparent',
                      }}
                    >
                      <View>
                        <Text className="font-jakarta-semibold text-sm text-ink-950">{opt.label}</Text>
                        <Text className="text-xs text-ink-300">{opt.hint}</Text>
                      </View>
                      {selected && <Check size={18} strokeWidth={2.5} color={colors.ink[950]} />}
                    </View>
                  </Pressable>
                )
              })}
            </View>
          </Card>
        </View>

        <View>
          <Text className="font-jakarta-bold text-ink-950 mb-3">Stats</Text>
          <View className="flex-row gap-3">
            <Card style={{ flex: 1, alignItems: 'center' }}>
              <Text className="font-jakarta-extrabold text-2xl text-ink-950">{completedLessonIds.length}</Text>
              <Text className="text-xs text-ink-300">Lessons done</Text>
            </Card>
            <Card style={{ flex: 1, alignItems: 'center' }}>
              <Text className="font-jakarta-extrabold text-2xl text-ink-950">{completedModuleIds.length}</Text>
              <Text className="text-xs text-ink-300">Modules done</Text>
            </Card>
          </View>
        </View>

        {selectedTrackId && (
          <Pressable onPress={handleSwitchTrack} className="py-2">
            <Text className="text-ink-300 text-sm font-jakarta-medium text-center">Switch track</Text>
          </Pressable>
        )}
      </ScrollView>
    </View>
  )
}
