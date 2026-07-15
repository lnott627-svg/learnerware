import { View, Text, ScrollView } from 'react-native'
import { MotiView } from 'moti'
import { Lightbulb, Check } from 'lucide-react-native'
import type { InfoStep } from '../../data/types'
import Button from '../Button'
import { colors } from '../../lib/colors'
import { personalize, useOutcome } from '../../lib/personalize'

export default function InfoStepView({ step, onNext }: { step: InfoStep; onNext: () => void }) {
  const outcome = useOutcome()
  const body = personalize(step.body, step.bodyVariants, outcome)
  return (
    <View className="flex-1">
      <ScrollView className="flex-1 px-6 pt-4" contentContainerStyle={{ paddingBottom: 24 }}>
        <MotiView from={{ opacity: 0, translateY: 16 }} animate={{ opacity: 1, translateY: 0 }}>
          <View className="w-14 h-14 rounded-2xl bg-lilac-200 items-center justify-center mb-5">
            <Lightbulb size={24} strokeWidth={2.25} color={colors.lilac[600]} />
          </View>
          <Text className="font-jakarta-extrabold text-2xl text-ink-950 mb-3 leading-tight">
            {step.heading}
          </Text>
          <Text className="text-ink-500 text-[15px] leading-relaxed mb-5">{body}</Text>
          {step.bullets && (
            <View className="gap-3">
              {step.bullets.map((b, i) => (
                <MotiView
                  key={i}
                  from={{ opacity: 0, translateX: -8 }}
                  animate={{ opacity: 1, translateX: 0 }}
                  transition={{ delay: 100 + i * 80 }}
                  className="flex-row items-start gap-3 bg-ink-100 rounded-2xl px-4 py-3"
                >
                  <Check size={16} strokeWidth={2.5} color={colors.ink[950]} style={{ marginTop: 2 }} />
                  <Text className="text-sm text-ink-700 flex-1">{b}</Text>
                </MotiView>
              ))}
            </View>
          )}
        </MotiView>
      </ScrollView>
      <View className="px-6 py-6 bg-paper-50">
        <Button onPress={onNext}>Got it</Button>
      </View>
    </View>
  )
}
