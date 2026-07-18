import { useMemo } from 'react'
import { View, Text, ScrollView, Pressable } from 'react-native'
import { router, Redirect } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ArrowUpRight, Lock, Check, Trophy } from 'lucide-react-native'
import { getTrack, modulesForTrack, lessonsForModule, endTaskForModule, PRIMARY_TRACK_ID } from '../../data/content'
import { useStore } from '../../state/store'
import { isModuleLessonsComplete, moduleProgress, trackProgress } from '../../lib/progress'
import { pastelColorFor, colors } from '../../lib/colors'
import { cardShadow } from '../../lib/shadow'
import { XpBadge, StreakBadge } from '../../components/Badges'
import ProgressBar from '../../components/ProgressBar'

export default function Home() {
  const insets = useSafeAreaInsets()
  const selectedTrackId = useStore((s) => s.selectedTrackId)
  const name = useStore((s) => s.name)
  const xp = useStore((s) => s.xp)
  const streakCount = useStore((s) => s.streakCount)
  const completedLessonIds = useStore((s) => s.completedLessonIds)
  const completedModuleIds = useStore((s) => s.completedModuleIds)

  // Single shared curriculum: fall back to the primary track if placement
  // hasn't set one yet (keeps the app coherent without a track-picker screen).
  const trackId = selectedTrackId ?? PRIMARY_TRACK_ID
  const track = getTrack(trackId)
  const trackModules = useMemo(() => modulesForTrack(trackId), [trackId])

  const current = useMemo(() => {
    for (const mod of trackModules) {
      if (!isModuleLessonsComplete(mod.id, completedLessonIds)) {
        const nextLesson = lessonsForModule(mod.id).find((l) => !completedLessonIds.includes(l.id))
        if (nextLesson) return { kind: 'lesson' as const, module: mod, lesson: nextLesson }
      } else if (!completedModuleIds.includes(mod.id)) {
        return { kind: 'task' as const, module: mod, task: endTaskForModule(mod.id) }
      }
    }
    return null
  }, [trackModules, completedLessonIds, completedModuleIds])

  if (!track) return <Redirect href="/" />

  const overallProgress = Math.round(
    trackProgress(track.moduleIds, completedLessonIds, completedModuleIds) * 100,
  )
  const pastel = pastelColorFor(track.pastelIndex)
  const Icon = track.icon

  return (
    <View className="flex-1 bg-paper-50">
      <View className="px-6 pb-2 flex-row items-center justify-between" style={{ paddingTop: insets.top + 20 }}>
        <View>
          <Text className="text-ink-300 text-xs font-jakarta-medium">{track.title}</Text>
          <Text className="font-display text-3xl text-ink-950">Hello{name ? `, ${name}` : ''}</Text>
        </View>
        <View className="flex-row items-center gap-2">
          <StreakBadge streak={streakCount} />
          <XpBadge xp={xp} />
        </View>
      </View>

      <ScrollView className="flex-1 px-6 pt-4" contentContainerStyle={{ paddingBottom: 24 }}>
        {current ? (
          <View className="mt-2 mb-3">
            <View className="relative">
              <View
                className="absolute rounded-3xl bg-ink-100"
                style={{ left: 16, right: 16, top: -12, bottom: -6 }}
              />
              <View
                className="absolute rounded-3xl"
                style={{ left: 8, right: 8, top: -6, bottom: -2, backgroundColor: 'rgba(215,213,218,0.7)' }}
              />
              <Pressable
                onPress={() =>
                  current.kind === 'lesson'
                    ? router.push(`/lesson/${current.lesson.id}`)
                    : router.push(`/module/${current.module.id}/task`)
                }
              >
                <View className="rounded-3xl p-5 gap-6" style={{ backgroundColor: pastel.bg }}>
                  <View className="flex-row items-center justify-between">
                    <View
                      className="w-11 h-11 rounded-2xl items-center justify-center"
                      style={{ backgroundColor: 'rgba(255,255,255,0.7)' }}
                    >
                      <Icon size={20} strokeWidth={2.25} color={pastel.text} />
                    </View>
                    <View className="rounded-full px-2.5 py-1" style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}>
                      <Text className="text-[10px] font-jakarta-bold text-ink-700 uppercase tracking-wide">
                        {current.kind === 'lesson' ? 'Next lesson' : 'End task'}
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Text className="text-ink-700 text-xs font-jakarta-semibold mb-1" style={{ opacity: 0.7 }}>
                      {current.module.title}
                    </Text>
                    <Text className="font-jakarta-bold text-lg text-ink-950 leading-snug">
                      {current.kind === 'lesson' ? current.lesson.title : current.task?.title}
                    </Text>
                  </View>
                  <View className="flex-row items-center justify-between">
                    <Text className="text-xs text-ink-700" style={{ opacity: 0.7 }}>
                      {current.kind === 'lesson' ? `${current.lesson.minutes} min` : `+${current.task?.xp} XP`}
                    </Text>
                    <View className="w-9 h-9 rounded-full bg-ink-950 items-center justify-center">
                      <ArrowUpRight size={18} strokeWidth={2.25} color="#ffffff" />
                    </View>
                  </View>
                </View>
              </Pressable>
            </View>
          </View>
        ) : (
          <View className="rounded-3xl bg-ink-950 p-6 items-center mb-6 mt-2">
            <Trophy size={28} strokeWidth={2} color="#ffffff" />
            <Text className="font-jakarta-bold text-white mt-2">Track complete!</Text>
            <Text className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Check My Portfolio for everything you built.
            </Text>
          </View>
        )}

        <View className="bg-white rounded-3xl p-5 mb-6 mt-8" style={cardShadow}>
          <View className="flex-row items-center justify-between mb-3">
            <Text className="font-jakarta-bold text-ink-950 text-sm">Track progress</Text>
            <Text className="font-jakarta-bold text-ink-950 text-sm">{overallProgress}%</Text>
          </View>
          <ProgressBar value={overallProgress} />
        </View>

        <View className="gap-3">
          {trackModules.map((mod, i) => {
            const progress = Math.round(moduleProgress(mod.id, completedLessonIds, completedModuleIds) * 100)
            const isComplete = completedModuleIds.includes(mod.id)
            const lessonsReady = isModuleLessonsComplete(mod.id, completedLessonIds)
            const modPastel = pastelColorFor(i)
            const nextLessonId = lessonsForModule(mod.id).find((l) => !completedLessonIds.includes(l.id))?.id
            return (
              <Pressable
                key={mod.id}
                onPress={() =>
                  lessonsReady && !isComplete
                    ? router.push(`/module/${mod.id}/task`)
                    : router.push(`/lesson/${nextLessonId ?? lessonsForModule(mod.id)[0]?.id}`)
                }
              >
                <View className="bg-white rounded-2xl p-4 flex-row items-center gap-3.5" style={cardShadow}>
                  <View
                    className="w-10 h-10 rounded-xl items-center justify-center"
                    style={{ backgroundColor: modPastel.bg }}
                  >
                    {isComplete ? (
                      <Check size={17} strokeWidth={2.5} color={colors.ink[950]} />
                    ) : (
                      <Text className="font-jakarta-bold text-sm text-ink-950">{i + 1}</Text>
                    )}
                  </View>
                  <View className="flex-1">
                    <Text className="font-jakarta-semibold text-sm text-ink-950" numberOfLines={1}>
                      {mod.title}
                    </Text>
                    <ProgressBar value={progress} height={6} className="mt-2" />
                  </View>
                  {!lessonsReady && progress === 0 && <Lock size={15} strokeWidth={2.25} color={colors.ink[300]} />}
                </View>
              </Pressable>
            )
          })}
        </View>
      </ScrollView>
    </View>
  )
}
