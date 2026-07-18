import { View, Text, Pressable } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { MotiView } from 'moti'
import { PartyPopper, ArrowUpRight } from 'lucide-react-native'
import { getLesson, getModule } from '../../../data/content'
import { useStore } from '../../../state/store'
import { isModuleLessonsComplete } from '../../../lib/progress'
import { useCountUp } from '../../../lib/useCountUp'
import { colors } from '../../../lib/colors'
import Button from '../../../components/Button'
import Confetti from '../../../components/Confetti'
import { StreakBadge } from '../../../components/Badges'

// Auth/signup now lives entirely in onboarding (results screen), so this screen
// is purely the completion celebration — no more inline account prompt.
export default function LessonComplete() {
  const { lessonId } = useLocalSearchParams<{ lessonId: string }>()
  const insets = useSafeAreaInsets()
  const lesson = lessonId ? getLesson(lessonId) : undefined

  const xpGained = useStore((s) => s.lastLessonXpGained)
  const streakCount = useStore((s) => s.streakCount)
  const completedLessonIds = useStore((s) => s.completedLessonIds)

  const animatedXp = useCountUp(xpGained)

  const mod = lesson ? getModule(lesson.moduleId) : undefined
  const justUnlockedEndTask = mod ? isModuleLessonsComplete(mod.id, completedLessonIds) : false

  if (!lesson || !mod) return null

  const goHome = () => router.replace('/home')
  const goToEndTask = () => router.replace(`/module/${mod.id}/task`)

  return (
    <View className="flex-1 bg-ink-950 px-6 pb-8" style={{ paddingTop: insets.top + 24 }}>
      <Confetti />
      <View className="flex-1 items-center justify-center">
        <MotiView
          from={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', damping: 12 }}
          className="w-16 h-16 rounded-2xl items-center justify-center mb-5"
          style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
        >
          <PartyPopper size={30} strokeWidth={2} color="#ffffff" />
        </MotiView>
        <Text className="font-display text-3xl text-white mb-1">Lesson complete!</Text>
        <Text className="text-sm mb-7" style={{ color: 'rgba(255,255,255,0.6)' }}>
          {lesson.title}
        </Text>

        <View className="flex-row items-center gap-3 mb-8">
          <View
            className="rounded-2xl px-5 py-3.5 items-center"
            style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
          >
            <Text className="text-2xl font-jakarta-extrabold text-white">+{animatedXp}</Text>
            <Text
              className="text-[11px] uppercase tracking-wide font-jakarta-semibold"
              style={{ color: 'rgba(255,255,255,0.6)' }}
            >
              XP earned
            </Text>
          </View>
          <StreakBadge streak={streakCount} className="!bg-white/10" />
        </View>

        {justUnlockedEndTask && (
          <MotiView
            from={{ opacity: 0, translateY: 12 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 400 }}
            className="w-full"
          >
            <Pressable onPress={goToEndTask}>
              <View className="bg-white rounded-2xl px-5 py-4 flex-row items-center justify-between gap-3">
                <View className="flex-1">
                  <Text className="text-xs font-jakarta-bold text-lilac-600 uppercase tracking-wide mb-1">
                    End task unlocked
                  </Text>
                  <Text className="font-jakarta-bold text-sm text-ink-950">
                    Go build your {mod.title.toLowerCase()} deliverable
                  </Text>
                </View>
                <ArrowUpRight size={20} strokeWidth={2.25} color={colors.ink[950]} />
              </View>
            </Pressable>
          </MotiView>
        )}
      </View>

      <View>
        <Button variant="secondary" onPress={goHome}>
          Continue
        </Button>
      </View>
    </View>
  )
}
