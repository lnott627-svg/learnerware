import { useMemo } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Trophy } from 'lucide-react-native'
import { useStore } from '../../state/store'
import { pastelColorFor, colors } from '../../lib/colors'
import Card from '../../components/Card'

const PEERS = [
  { name: 'Jordan', base: 340 },
  { name: 'Priya', base: 275 },
  { name: 'Marcus', base: 210 },
  { name: 'Aiko', base: 160 },
  { name: 'Sam', base: 90 },
  { name: 'Devon', base: 40 },
]

export default function Leaderboard() {
  const insets = useSafeAreaInsets()
  const xp = useStore((s) => s.xp)
  const name = useStore((s) => s.name)
  const accountCreated = useStore((s) => s.accountCreated)

  const rows = useMemo(() => {
    const you = { name: accountCreated ? name! : 'You', xp, isYou: true }
    const others = PEERS.map((p) => ({ ...p, xp: p.base, isYou: false }))
    return [...others, you].sort((a, b) => b.xp - a.xp)
  }, [xp, name, accountCreated])

  return (
    <View className="flex-1 bg-paper-50">
      <View className="px-6 pb-4" style={{ paddingTop: insets.top + 20 }}>
        <Text className="font-jakarta-extrabold text-xl text-ink-950">This week</Text>
        <Text className="text-ink-500 text-sm mt-0.5">Stay ahead — the leaderboard resets every Monday.</Text>
      </View>

      <ScrollView className="flex-1 px-6" contentContainerStyle={{ paddingBottom: 32 }}>
        <Card style={{ padding: 8 }}>
          {rows.map((row, i) => {
            const pastel = pastelColorFor(i)
            return (
              <View
                key={row.name + i}
                className="flex-row items-center gap-3 px-3 py-3 rounded-2xl"
                style={{ backgroundColor: row.isYou ? colors.lilac[100] : 'transparent' }}
              >
                <View className="w-6 items-center justify-center">
                  {i === 0 ? (
                    <Trophy size={16} strokeWidth={2.25} color={colors.yellow[600]} />
                  ) : (
                    <Text
                      className="font-jakarta-bold text-sm"
                      style={{ color: i === 1 ? colors.ink[500] : i === 2 ? colors.coral[600] : colors.ink[300] }}
                    >
                      {i + 1}
                    </Text>
                  )}
                </View>
                <View
                  className="w-9 h-9 rounded-full items-center justify-center"
                  style={{ backgroundColor: pastel.bg }}
                >
                  <Text className="font-jakarta-bold text-sm" style={{ color: pastel.text }}>
                    {row.name.charAt(0).toUpperCase()}
                  </Text>
                </View>
                <Text
                  className="flex-1 text-sm font-jakarta-medium"
                  style={{ color: row.isYou ? colors.lilac[600] : colors.ink[950] }}
                >
                  {row.name}
                  {row.isYou && accountCreated ? ' (you)' : ''}
                </Text>
                <Text className="text-sm font-jakarta-bold text-ink-500">{row.xp} XP</Text>
              </View>
            )
          })}
        </Card>

        <Text className="text-center text-ink-300 text-xs mt-5">
          Friends & real leaderboards are coming soon — for now, beat your own number.
        </Text>
      </ScrollView>
    </View>
  )
}
