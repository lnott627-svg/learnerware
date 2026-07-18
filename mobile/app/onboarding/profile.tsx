import { useState } from 'react'
import { View, Text, TextInput, Pressable, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { router } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Check } from 'lucide-react-native'
import { useStore } from '../../state/store'
import type { Outcome } from '../../data/types'
import { colors } from '../../lib/colors'
import Button from '../../components/Button'

// Onboarding step 1 — name + outcome. No login here (auth lives at results).
const OUTCOMES: { id: Outcome; label: string; hint: string }[] = [
  { id: 'freelancer', label: 'Freelance social media manager', hint: 'I want to get paid to run social for clients' },
  { id: 'business', label: 'Small business owner', hint: 'I want to run my own social, better' },
  { id: 'marketer', label: 'Marketer upskilling', hint: 'I want to add social to my existing role' },
]

export default function OnboardingProfile() {
  const insets = useSafeAreaInsets()
  const setProfile = useStore((s) => s.setProfile)
  const [name, setName] = useState('')
  const [outcome, setOutcome] = useState<Outcome | null>(null)

  const canContinue = name.trim().length > 0 && outcome !== null

  const handleContinue = () => {
    if (!canContinue || !outcome) return
    setProfile(name, outcome)
    router.push('/onboarding/explainer')
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} className="flex-1 bg-paper-50">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingTop: insets.top + 32, paddingHorizontal: 24, paddingBottom: 24 }}
        keyboardShouldPersistTaps="handled"
      >
        <Text className="font-display text-3xl text-ink-950 mb-1.5">Let's set you up</Text>
        <Text className="text-ink-500 text-[15px] mb-7">
          Two quick things so we can tailor examples to you. No account needed yet.
        </Text>

        <Text className="font-jakarta-bold text-sm text-ink-950 mb-2">What should we call you?</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="First name"
          placeholderTextColor={colors.ink[300]}
          className="rounded-2xl px-4 py-3.5 text-[15px] text-ink-950 mb-7"
          style={{ borderWidth: 2, borderColor: colors.ink[200], backgroundColor: '#fff' }}
        />

        <Text className="font-jakarta-bold text-sm text-ink-950 mb-2">What are you here to do?</Text>
        <View className="gap-2.5">
          {OUTCOMES.map((o) => {
            const selected = outcome === o.id
            return (
              <Pressable key={o.id} onPress={() => setOutcome(o.id)}>
                <View
                  className="rounded-2xl px-4 py-3.5 flex-row items-center justify-between"
                  style={{
                    borderWidth: 2,
                    borderColor: selected ? colors.ink[950] : colors.ink[200],
                    backgroundColor: selected ? colors.ink[100] : '#fff',
                  }}
                >
                  <View className="flex-1 pr-3">
                    <Text className="font-jakarta-semibold text-sm text-ink-950">{o.label}</Text>
                    <Text className="text-xs text-ink-500 mt-0.5">{o.hint}</Text>
                  </View>
                  {selected && <Check size={18} strokeWidth={2.5} color={colors.ink[950]} />}
                </View>
              </Pressable>
            )
          })}
        </View>
      </ScrollView>
      <View className="px-6 pb-8 pt-3 bg-paper-50">
        <Button disabled={!canContinue} onPress={handleContinue}>
          Continue
        </Button>
      </View>
    </KeyboardAvoidingView>
  )
}
