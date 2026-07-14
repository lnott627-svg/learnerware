import { useState } from 'react'
import { View, Text, ScrollView, Pressable } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import * as Clipboard from 'expo-clipboard'
import { ChevronDown, ChevronUp, Lock, Copy } from 'lucide-react-native'
import { templates, getModule } from '../../data/content'
import { useStore } from '../../state/store'
import { colors } from '../../lib/colors'
import Card from '../../components/Card'

export default function Templates() {
  const insets = useSafeAreaInsets()
  const completedModuleIds = useStore((s) => s.completedModuleIds)
  const [openId, setOpenId] = useState<string | null>(null)
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const isUnlocked = (unlockModuleId: string | null) =>
    unlockModuleId === null || completedModuleIds.includes(unlockModuleId)

  const handleCopy = async (id: string, body: string) => {
    await Clipboard.setStringAsync(body)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 1500)
  }

  return (
    <View className="flex-1 bg-paper-50">
      <View className="px-6 pb-4" style={{ paddingTop: insets.top + 20 }}>
        <Text className="font-jakarta-extrabold text-xl text-ink-950">Templates</Text>
        <Text className="text-ink-500 text-sm mt-0.5">
          Real tools, unlocked as you finish modules — no separate paywall.
        </Text>
      </View>

      <ScrollView className="flex-1 px-6" contentContainerStyle={{ paddingBottom: 32, gap: 12 }}>
        {templates.map((tmpl) => {
          const unlocked = isUnlocked(tmpl.unlockModuleId)
          const open = openId === tmpl.id
          const lockModule = tmpl.unlockModuleId ? getModule(tmpl.unlockModuleId) : null
          const Icon = tmpl.icon

          return (
            <Card key={tmpl.id} style={{ opacity: unlocked ? 1 : 0.6 }}>
              <Pressable onPress={() => unlocked && setOpenId(open ? null : tmpl.id)} disabled={!unlocked}>
                <View className="flex-row items-start gap-3">
                  <View
                    className="w-10 h-10 rounded-xl items-center justify-center"
                    style={{ backgroundColor: colors.ink[100] }}
                  >
                    {unlocked ? (
                      <Icon size={18} strokeWidth={2.25} color={colors.ink[950]} />
                    ) : (
                      <Lock size={16} strokeWidth={2.25} color={colors.ink[300]} />
                    )}
                  </View>
                  <View className="flex-1">
                    <Text className="text-[11px] font-jakarta-bold text-lilac-600 uppercase tracking-wide">
                      {tmpl.category}
                    </Text>
                    <Text className="font-jakarta-bold text-ink-950 text-sm">{tmpl.title}</Text>
                    <Text className="text-ink-500 text-xs mt-0.5">
                      {unlocked ? tmpl.description : `Unlock by finishing "${lockModule?.title}"`}
                    </Text>
                  </View>
                  {unlocked &&
                    (open ? (
                      <ChevronUp size={18} color={colors.ink[300]} />
                    ) : (
                      <ChevronDown size={18} color={colors.ink[300]} />
                    ))}
                </View>
              </Pressable>
              {unlocked && open && (
                <View className="mt-3">
                  <View className="rounded-xl p-3" style={{ backgroundColor: colors.ink[100] }}>
                    <Text className="text-sm text-ink-700 leading-relaxed">{tmpl.body}</Text>
                  </View>
                  <Pressable
                    onPress={() => handleCopy(tmpl.id, tmpl.body)}
                    className="mt-2 flex-row items-center gap-1.5"
                  >
                    <Copy size={14} strokeWidth={2.25} color={colors.ink[950]} />
                    <Text className="text-ink-950 text-sm font-jakarta-semibold">
                      {copiedId === tmpl.id ? 'Copied!' : 'Copy to clipboard'}
                    </Text>
                  </Pressable>
                </View>
              )}
            </Card>
          )
        })}
      </ScrollView>
    </View>
  )
}
