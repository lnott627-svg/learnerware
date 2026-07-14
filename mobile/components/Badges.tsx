import { View, Text } from 'react-native'
import { Zap, Flame } from 'lucide-react-native'
import { colors } from '../lib/colors'

export function XpBadge({ xp, className }: { xp: number; className?: string }) {
  return (
    <View className={`flex-row items-center gap-1.5 bg-yellow-200 rounded-full px-3 py-1.5 ${className ?? ''}`}>
      <Zap size={14} strokeWidth={2.5} color={colors.yellow[600]} />
      <Text className="font-jakarta-bold text-sm text-yellow-600">{xp} XP</Text>
    </View>
  )
}

export function StreakBadge({ streak, className }: { streak: number; className?: string }) {
  return (
    <View className={`flex-row items-center gap-1.5 bg-coral-200 rounded-full px-3 py-1.5 ${className ?? ''}`}>
      <Flame size={14} strokeWidth={2.5} color={colors.coral[600]} />
      <Text className="font-jakarta-bold text-sm text-coral-600">
        {streak} day{streak === 1 ? '' : 's'}
      </Text>
    </View>
  )
}
