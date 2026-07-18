import '../global.css'
import { useEffect } from 'react'
import { Stack } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from 'expo-font'
import { InstrumentSerif_400Regular } from '@expo-google-fonts/instrument-serif'
import {
  HostGrotesk_400Regular,
  HostGrotesk_500Medium,
  HostGrotesk_600SemiBold,
  HostGrotesk_700Bold,
  HostGrotesk_800ExtraBold,
} from '@expo-google-fonts/host-grotesk'

SplashScreen.preventAutoHideAsync().catch(() => {})

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    InstrumentSerif_400Regular,
    HostGrotesk_400Regular,
    HostGrotesk_500Medium,
    HostGrotesk_600SemiBold,
    HostGrotesk_700Bold,
    HostGrotesk_800ExtraBold,
  })

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync().catch(() => {})
  }, [fontsLoaded])

  if (!fontsLoaded) return null

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: '#FAFAFA' },
            animation: 'slide_from_right',
          }}
        >
          <Stack.Screen name="index" />
          <Stack.Screen name="onboarding/profile" />
          <Stack.Screen name="onboarding/explainer" />
          <Stack.Screen name="onboarding/diagnostic" options={{ gestureEnabled: false }} />
          <Stack.Screen name="onboarding/results" options={{ gestureEnabled: false }} />
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="lesson/[lessonId]/index" />
          <Stack.Screen name="lesson/[lessonId]/complete" options={{ gestureEnabled: false }} />
          <Stack.Screen name="module/[moduleId]/task" />
        </Stack>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}
