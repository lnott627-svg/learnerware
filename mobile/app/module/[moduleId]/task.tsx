import { useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
import { MotiView } from 'moti'
import { Trophy, CircleCheck } from 'lucide-react-native'
import { endTaskForModule, getModule, getTrack } from '../../../data/content'
import { useStore } from '../../../state/store'
import { isModuleLessonsComplete } from '../../../lib/progress'
import ScreenHeader from '../../../components/ScreenHeader'
import Button from '../../../components/Button'
import Confetti from '../../../components/Confetti'
import { colors } from '../../../lib/colors'
import BuilderTaskView from '../../../components/endtask/BuilderTaskView'
import MultiCaptionTaskView from '../../../components/endtask/MultiCaptionTaskView'
import SimulatorTaskView from '../../../components/endtask/SimulatorTaskView'

export default function EndTask() {
  const { moduleId } = useLocalSearchParams<{ moduleId: string }>()
  const completedLessonIds = useStore((s) => s.completedLessonIds)
  const completedModuleIds = useStore((s) => s.completedModuleIds)
  const submitEndTask = useStore((s) => s.submitEndTask)
  const [done, setDone] = useState(false)

  const mod = moduleId ? getModule(moduleId) : undefined
  const task = moduleId ? endTaskForModule(moduleId) : undefined
  const track = mod ? getTrack(mod.trackId) : undefined

  if (!mod || !task || !track) return null

  const lessonsReady = isModuleLessonsComplete(mod.id, completedLessonIds)
  const alreadySubmitted = completedModuleIds.includes(mod.id)

  const handleSubmit = (content: string, score?: number, scoreSummary?: string) => {
    submitEndTask(
      {
        endTaskId: task.id,
        moduleId: mod.id,
        trackId: mod.trackId,
        title: task.title,
        deliverableType: task.deliverableType,
        content,
        score,
        scoreSummary,
      },
      task.xp,
    )
    setDone(true)
  }

  if (!lessonsReady) {
    return (
      <View className="flex-1 bg-paper-50">
        <ScreenHeader title={task.title} />
        <View className="flex-1 items-center justify-center px-6">
          <Text className="text-ink-500 mb-4 text-center">
            Finish all 4 lessons in this module to unlock this task.
          </Text>
          <Button onPress={() => router.replace('/home')}>Back to home</Button>
        </View>
      </View>
    )
  }

  if (done) {
    return (
      <View className="flex-1 items-center justify-center px-6 pb-10 bg-ink-950">
        <Confetti />
        <MotiView
          from={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', damping: 12 }}
          className="w-16 h-16 rounded-2xl items-center justify-center mb-5"
          style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
        >
          <Trophy size={30} strokeWidth={2} color="#ffffff" />
        </MotiView>
        <Text className="font-jakarta-extrabold text-2xl text-white mb-1">Added to My Portfolio</Text>
        <Text className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.6)' }}>
          {task.title}
        </Text>
        <View style={{ width: '100%', maxWidth: 320, gap: 12 }}>
          <Button variant="secondary" onPress={() => router.replace('/profile')}>
            View My Portfolio
          </Button>
          <Pressable onPress={() => router.replace('/home')} className="py-2">
            <Text className="text-center text-sm font-jakarta-medium" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Back to home
            </Text>
          </Pressable>
        </View>
      </View>
    )
  }

  if (alreadySubmitted) {
    return (
      <View className="flex-1 bg-paper-50">
        <ScreenHeader title={task.title} />
        <View className="flex-1 items-center justify-center px-6">
          <CircleCheck size={32} strokeWidth={2} color={colors.mint[600]} style={{ marginBottom: 12 }} />
          <Text className="text-ink-950 font-jakarta-bold mb-1">Already in your portfolio</Text>
          <Text className="text-ink-500 text-sm mb-5">You can view it any time in your profile.</Text>
          <Button onPress={() => router.replace('/profile')}>View My Portfolio</Button>
        </View>
      </View>
    )
  }

  return (
    <View className="flex-1 bg-paper-50">
      <ScreenHeader title={task.title} />
      {task.kind === 'builder' && <BuilderTaskView task={task} onSubmit={handleSubmit} />}
      {task.kind === 'multi-caption' && <MultiCaptionTaskView task={task} onSubmit={handleSubmit} />}
      {task.kind === 'simulator' && <SimulatorTaskView task={task} onSubmit={handleSubmit} />}
    </View>
  )
}
