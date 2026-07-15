import { useRef, useState } from 'react'
import { View, Text, ScrollView, useWindowDimensions } from 'react-native'
import { router } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Compass, GraduationCap, FolderCheck } from 'lucide-react-native'
import type { LucideIcon } from 'lucide-react-native'
import { colors } from '../../lib/colors'
import Button from '../../components/Button'

// Onboarding step 2 — "what this app does", as 3 swipeable cards.
// Deliberately plain layout (styling pass comes later).
const CARDS: { Icon: LucideIcon; title: string; body: string }[] = [
  {
    Icon: Compass,
    title: 'We place you at the right level',
    body: 'A quick diagnostic figures out what you already know, so you skip the basics you\'ve got and start where it\'s actually useful.',
  },
  {
    Icon: GraduationCap,
    title: 'You learn in short, real lessons',
    body: 'No fluff and no hour-long videos. Bite-sized lessons with concrete examples, real tools, and quick questions that make it stick.',
  },
  {
    Icon: FolderCheck,
    title: 'You build a portfolio as you go',
    body: 'Every module ends in a real deliverable — a research plan, a persona doc, a strategy — saved to your portfolio to win work or pitch a plan.',
  },
]

export default function OnboardingExplainer() {
  const insets = useSafeAreaInsets()
  const { width } = useWindowDimensions()
  const scrollRef = useRef<ScrollView>(null)
  const [index, setIndex] = useState(0)

  const isLast = index >= CARDS.length - 1

  const goNext = () => {
    if (isLast) {
      router.push('/onboarding/diagnostic')
      return
    }
    const next = index + 1
    scrollRef.current?.scrollTo({ x: next * width, animated: true })
    setIndex(next)
  }

  return (
    <View className="flex-1 bg-paper-50" style={{ paddingTop: insets.top }}>
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(e) => setIndex(Math.round(e.nativeEvent.contentOffset.x / width))}
        className="flex-1"
      >
        {CARDS.map((card) => {
          const Icon = card.Icon
          return (
            <View key={card.title} style={{ width }} className="flex-1 items-center justify-center px-8">
              <View className="w-16 h-16 rounded-3xl bg-lilac-200 items-center justify-center mb-6">
                <Icon size={28} strokeWidth={2.25} color={colors.lilac[600]} />
              </View>
              <Text className="font-jakarta-extrabold text-2xl text-ink-950 text-center mb-3">{card.title}</Text>
              <Text className="text-ink-500 text-[15px] leading-relaxed text-center">{card.body}</Text>
            </View>
          )
        })}
      </ScrollView>

      <View className="flex-row items-center justify-center gap-2 mb-4">
        {CARDS.map((_, i) => (
          <View
            key={i}
            className="rounded-full"
            style={{
              width: i === index ? 20 : 8,
              height: 8,
              backgroundColor: i === index ? colors.ink[950] : colors.ink[200],
            }}
          />
        ))}
      </View>

      <View className="px-6" style={{ paddingBottom: insets.bottom + 16 }}>
        <Button onPress={goNext}>{isLast ? 'Start the quick quiz' : 'Next'}</Button>
      </View>
    </View>
  )
}
