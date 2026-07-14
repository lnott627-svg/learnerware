import { View, Text, ScrollView, Pressable } from 'react-native'
import { router } from 'expo-router'
import { MotiView } from 'moti'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { tracks, modulesForTrack } from '../data/content'
import { useStore } from '../state/store'
import { pastelColorFor } from '../lib/colors'

export default function TrackSelect() {
  const insets = useSafeAreaInsets()
  const selectTrack = useStore((s) => s.selectTrack)

  const handlePick = (trackId: string) => {
    selectTrack(trackId)
    const firstModule = modulesForTrack(trackId)[0]
    const firstLessonId = firstModule?.lessonIds[0]
    if (firstLessonId) router.push(`/lesson/${firstLessonId}`)
  }

  return (
    <ScrollView
      className="flex-1 bg-paper-50"
      contentContainerStyle={{ paddingTop: insets.top + 32, paddingHorizontal: 24, paddingBottom: 40 }}
    >
      <Text className="font-jakarta-extrabold text-2xl text-ink-950 mb-1.5">Choose your path</Text>
      <Text className="text-ink-500 text-base mb-7">
        You'll be in your first lesson in about 10 seconds.
      </Text>

      <View className="flex-row flex-wrap justify-between">
        {tracks.map((track, i) => {
          const pastel = pastelColorFor(track.pastelIndex)
          const Icon = track.icon
          return (
            <MotiView
              key={track.id}
              from={{ opacity: 0, translateY: 16 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ delay: i * 60, type: 'spring', damping: 16 }}
              style={{ width: '48%', marginBottom: 14 }}
            >
              <Pressable onPress={() => handlePick(track.id)}>
                {({ pressed }) => (
                  <View
                    className="rounded-3xl p-4"
                    style={{ backgroundColor: pastel.bg, opacity: pressed ? 0.85 : 1, gap: 32 }}
                  >
                    <View className="flex-row items-center justify-between">
                      <View
                        className="w-11 h-11 rounded-2xl items-center justify-center"
                        style={{ backgroundColor: 'rgba(255,255,255,0.7)' }}
                      >
                        <Icon size={20} strokeWidth={2.25} color={pastel.text} />
                      </View>
                      <View
                        className="rounded-full px-2 py-1"
                        style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}
                      >
                        <Text className="text-[10px] font-jakarta-bold text-ink-700">
                          {modulesForTrack(track.id).length} modules
                        </Text>
                      </View>
                    </View>
                    <View>
                      <Text className="font-jakarta-bold text-[15px] text-ink-950 leading-snug mb-1">
                        {track.title}
                      </Text>
                      <Text className="text-ink-700 text-xs leading-snug" style={{ opacity: 0.8 }}>
                        {track.tagline}
                      </Text>
                    </View>
                  </View>
                )}
              </Pressable>
            </MotiView>
          )
        })}
      </View>
    </ScrollView>
  )
}
