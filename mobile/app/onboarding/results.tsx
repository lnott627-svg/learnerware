import { useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import { router } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { MotiView } from 'moti'
import { Sparkles, Apple } from 'lucide-react-native'
import { useStore, type AuthProvider } from '../../state/store'
import { getModule, modulesForTrack } from '../../data/content'
import { colors } from '../../lib/colors'
import { signIn } from '../../lib/auth'
import Button from '../../components/Button'

// Onboarding step 4 — results + sign-up. Auth lives HERE, not at app open.
// Sign-in routes through lib/auth's feature-detected seam: real native provider
// when a dev build supports it, working mock on web/Expo Go. If the user skips,
// they still enter the app; the root gate re-prompts here next cold open.
export default function OnboardingResults() {
  const insets = useSafeAreaInsets()
  const name = useStore((s) => s.name)
  const placementModuleId = useStore((s) => s.placementModuleId)
  const selectedTrackId = useStore((s) => s.selectedTrackId)
  const signInWithProvider = useStore((s) => s.signInWithProvider)
  const finishOnboarding = useStore((s) => s.finishOnboarding)

  const [pending, setPending] = useState<AuthProvider | null>(null)

  const mod = placementModuleId ? getModule(placementModuleId) : undefined
  const moduleIndex =
    mod && selectedTrackId
      ? modulesForTrack(selectedTrackId).findIndex((m) => m.id === mod.id)
      : 0

  const enterApp = () => router.replace('/home')

  const handleSignIn = async (provider: AuthProvider) => {
    if (pending) return
    setPending(provider)
    const result = await signIn(provider)
    setPending(null)
    if (result.canceled) return // user backed out of the native sheet — stay put
    // Even a failed native attempt still lets them in with local progress; the
    // provider only *upgrades* the identity when it succeeds.
    signInWithProvider(provider, result.profile)
    enterApp()
  }

  const handleSkip = () => {
    finishOnboarding()
    enterApp()
  }

  return (
    <View className="flex-1 bg-paper-50 px-6" style={{ paddingTop: insets.top + 32, paddingBottom: insets.bottom + 16 }}>
      <View className="flex-1 justify-center">
        <MotiView
          from={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', damping: 14 }}
          className="w-16 h-16 rounded-3xl bg-mint-200 items-center justify-center mb-6"
        >
          <Sparkles size={28} strokeWidth={2.25} color={colors.mint[600]} />
        </MotiView>

        <Text className="font-jakarta-extrabold text-2xl text-ink-950 mb-2">
          {name ? `${name}, you're all set` : "You're all set"}
        </Text>
        <Text className="text-ink-500 text-[15px] leading-relaxed mb-6">
          Based on your quiz, we're starting you at:
        </Text>

        <View className="rounded-2xl p-5 mb-2" style={{ backgroundColor: colors.ink[100] }}>
          <Text className="text-xs font-jakarta-bold text-lilac-600 uppercase tracking-wide mb-1">
            Module {moduleIndex + 1} · Recommended start
          </Text>
          <Text className="font-jakarta-bold text-lg text-ink-950">{mod?.title ?? 'Research & Insight Foundations'}</Text>
          <Text className="text-ink-500 text-sm mt-1">{mod?.description}</Text>
        </View>
        <Text className="text-ink-300 text-xs">
          Earlier modules stay available any time as optional review.
        </Text>
      </View>

      <View>
        <Text className="text-ink-500 text-sm text-center mb-3">
          Save your progress and portfolio to your account:
        </Text>
        <View className="mb-2.5">
          <Button onPress={() => handleSignIn('apple')} disabled={pending !== null}>
            <View className="flex-row items-center justify-center gap-2">
              <Apple size={18} strokeWidth={2.25} color="#ffffff" />
              <Text className="font-jakarta-bold text-base text-white">
                {pending === 'apple' ? 'Signing in…' : 'Sign in with Apple'}
              </Text>
            </View>
          </Button>
        </View>
        <Button variant="secondary" onPress={() => handleSignIn('google')} disabled={pending !== null}>
          {pending === 'google' ? 'Signing in…' : 'Continue with Google'}
        </Button>
        <Pressable onPress={handleSkip} className="mt-4 py-2">
          <Text className="text-center text-ink-300 text-sm font-jakarta-medium">Maybe later</Text>
        </Pressable>
      </View>
    </View>
  )
}
