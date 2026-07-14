import { useState } from 'react'
import { View, Text, TextInput, Pressable, KeyboardAvoidingView, Platform } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { MotiView } from 'moti'
import { PartyPopper, Lock, ArrowUpRight } from 'lucide-react-native'
import { getLesson, getModule } from '../../../data/content'
import { useStore } from '../../../state/store'
import { isModuleLessonsComplete } from '../../../lib/progress'
import { useCountUp } from '../../../lib/useCountUp'
import { colors } from '../../../lib/colors'
import Button from '../../../components/Button'
import Confetti from '../../../components/Confetti'
import { StreakBadge } from '../../../components/Badges'

export default function LessonComplete() {
  const { lessonId } = useLocalSearchParams<{ lessonId: string }>()
  const insets = useSafeAreaInsets()
  const lesson = lessonId ? getLesson(lessonId) : undefined

  const accountCreated = useStore((s) => s.accountCreated)
  const createAccount = useStore((s) => s.createAccount)
  const xpGained = useStore((s) => s.lastLessonXpGained)
  const streakCount = useStore((s) => s.streakCount)
  const completedLessonIds = useStore((s) => s.completedLessonIds)

  const [phase, setPhase] = useState<'celebrate' | 'signup'>('celebrate')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const animatedXp = useCountUp(xpGained)

  const isFirstLessonCompletion = completedLessonIds.length === 1
  const mod = lesson ? getModule(lesson.moduleId) : undefined
  const justUnlockedEndTask = mod ? isModuleLessonsComplete(mod.id, completedLessonIds) : false

  if (!lesson || !mod) return null

  const goHome = () => router.replace('/home')
  const goToEndTask = () => router.replace(`/module/${mod.id}/task`)

  const handleCreateAccount = () => {
    if (!name.trim() || !email.trim()) return
    createAccount(name.trim(), email.trim())
    goHome()
  }

  if (phase === 'signup') {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        className="flex-1 bg-paper-50"
      >
        <View className="flex-1 px-6 pb-8" style={{ paddingTop: insets.top + 24 }}>
          <Pressable onPress={() => setPhase('celebrate')} className="mb-6 self-start">
            <Text className="text-ink-300 text-sm font-jakarta-medium">Back</Text>
          </Pressable>
          <View className="w-14 h-14 rounded-2xl bg-lilac-200 items-center justify-center mb-5">
            <Lock size={22} strokeWidth={2.25} color={colors.lilac[600]} />
          </View>
          <Text className="font-jakarta-extrabold text-2xl text-ink-950 mb-2">Save your progress</Text>
          <Text className="text-ink-500 text-[15px] leading-relaxed mb-7">
            You've already earned {animatedXp} XP. Create a free account so it doesn't disappear.
          </Text>

          <View className="gap-3">
            <TextInput
              value={name}
              onChangeText={setName}
              placeholder="First name"
              placeholderTextColor={colors.ink[300]}
              className="rounded-2xl px-4 py-3.5 text-[15px] text-ink-950"
              style={{ borderWidth: 2, borderColor: colors.ink[200], backgroundColor: '#fff' }}
            />
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Email address"
              placeholderTextColor={colors.ink[300]}
              autoCapitalize="none"
              keyboardType="email-address"
              className="rounded-2xl px-4 py-3.5 text-[15px] text-ink-950"
              style={{ borderWidth: 2, borderColor: colors.ink[200], backgroundColor: '#fff' }}
            />
            <View className="mt-4">
              <Button disabled={!name.trim() || !email.trim()} onPress={handleCreateAccount}>
                Save my progress
              </Button>
            </View>
          </View>
          <Pressable onPress={goHome} className="mt-4">
            <Text className="text-ink-300 text-sm font-jakarta-medium text-center">Maybe later</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    )
  }

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
        <Text className="font-jakarta-extrabold text-2xl text-white mb-1">Lesson complete!</Text>
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
        {!accountCreated && isFirstLessonCompletion ? (
          <>
            <View className="mb-3">
              <Button variant="secondary" onPress={() => setPhase('signup')}>
                Save my progress
              </Button>
            </View>
            <Pressable onPress={goHome}>
              <Text className="text-center text-sm font-jakarta-medium" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Maybe later
              </Text>
            </Pressable>
          </>
        ) : (
          <Button variant="secondary" onPress={goHome}>
            Continue
          </Button>
        )}
      </View>
    </View>
  )
}
