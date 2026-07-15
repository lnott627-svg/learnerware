import { View } from 'react-native'
import { Redirect } from 'expo-router'
import { useStore } from '../state/store'
import { useHasHydrated } from '../state/useHydration'

// Root gate. Decides where a returning/new user lands. Onboarding order is
// strict: profile -> explainer -> diagnostic -> results(auth). Auth is NOT
// required to use the app; an un-signed-in user is re-prompted at results on
// each cold open (per spec) but can skip into the app for the session.
export default function Index() {
  const hydrated = useHasHydrated()
  const hasProfile = useStore((s) => s.hasProfile)
  const diagnosticComplete = useStore((s) => s.diagnosticComplete)
  const isAuthenticated = useStore((s) => s.isAuthenticated)

  // Wait for AsyncStorage rehydration before deciding, to avoid a wrong-screen flash.
  if (!hydrated) return <View className="flex-1 bg-paper-50" />

  if (!hasProfile) return <Redirect href="/onboarding/profile" />
  if (!diagnosticComplete) return <Redirect href="/onboarding/diagnostic" />
  if (!isAuthenticated) return <Redirect href="/onboarding/results" />
  return <Redirect href="/home" />
}
