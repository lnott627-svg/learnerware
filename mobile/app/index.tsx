import { View, Text } from 'react-native'
import { router, Redirect } from 'expo-router'
import { MotiView } from 'moti'
import { useStore } from '../state/store'
import { useHasHydrated } from '../state/useHydration'
import Button from '../components/Button'
import PersonWithPhone from '../components/illustrations/PersonWithPhone'

export default function Splash() {
  const hydrated = useHasHydrated()
  const selectedTrackId = useStore((s) => s.selectedTrackId)

  if (!hydrated) return <View className="flex-1 bg-paper-50" />
  if (selectedTrackId) return <Redirect href="/home" />

  return (
    <View className="flex-1 bg-paper-50 px-6 pb-8 justify-between">
      <View className="flex-1 items-center justify-center">
        <MotiView
          from={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', damping: 16 }}
          className="w-56 h-56 items-center justify-center mb-8"
        >
          <View className="absolute w-44 h-44 rounded-full bg-mint-200" />
          <View className="absolute top-2 right-2 w-16 h-16 rounded-full bg-yellow-200" />
          <PersonWithPhone size={192} color="#0f0e13" />
        </MotiView>

        <MotiView
          from={{ opacity: 0, translateY: 12 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 150, duration: 400 }}
        >
          <Text className="uppercase tracking-[3px] text-xs font-jakarta-bold text-ink-300 mb-3">
            Learnerware
          </Text>
        </MotiView>

        <MotiView
          from={{ opacity: 0, translateY: 16 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 250, duration: 450 }}
        >
          <Text className="font-jakarta-extrabold text-[32px] leading-10 text-center text-ink-950 mb-4">
            Learn to run social media for real clients — starting today
          </Text>
        </MotiView>

        <MotiView from={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 400, duration: 400 }}>
          <Text className="text-ink-500 text-base text-center max-w-xs">
            Bite-sized lessons. Real deliverables. No fluff, no video lectures.
          </Text>
        </MotiView>
      </View>

      <MotiView
        from={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 500, duration: 400 }}
      >
        <Button onPress={() => router.push('/tracks')}>Get started</Button>
        <Text className="text-center text-ink-300 text-xs mt-4">
          No account needed to try your first lesson
        </Text>
      </MotiView>
    </View>
  )
}
