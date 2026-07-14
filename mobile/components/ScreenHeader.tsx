import type { ReactNode } from 'react'
import { View, Text, Pressable } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import { ArrowLeft } from 'lucide-react-native'
import { colors } from '../lib/colors'

export default function ScreenHeader({
  title,
  onBack,
  right,
}: {
  title: string
  onBack?: () => void
  right?: ReactNode
}) {
  const insets = useSafeAreaInsets()
  return (
    <View
      className="flex-row items-center justify-between px-5 pb-3"
      style={{ paddingTop: insets.top + 16 }}
    >
      <Pressable
        onPress={() => (onBack ? onBack() : router.back())}
        className="w-9 h-9 rounded-full bg-ink-100 items-center justify-center"
      >
        <ArrowLeft size={17} strokeWidth={2.25} color={colors.ink[700]} />
      </Pressable>
      <Text className="font-jakarta-bold text-lg text-ink-950">{title}</Text>
      <View className="w-9 h-9 items-center justify-center">{right}</View>
    </View>
  )
}
