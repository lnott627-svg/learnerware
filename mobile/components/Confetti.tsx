import { useMemo } from 'react'
import { View } from 'react-native'
import { MotiView } from 'moti'
import { Easing } from 'react-native-reanimated'

const COLORS = ['#FFD6D6', '#C8F2DC', '#FDECB8', '#FFD2B8', '#DDCCFF', '#FFFFFF']

export default function Confetti({ count = 24 }: { count?: number }) {
  const pieces = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: (Math.random() - 0.5) * 260,
        rotate: Math.random() * 360,
        delay: Math.random() * 250,
        color: COLORS[i % COLORS.length],
        size: 6 + Math.random() * 6,
      })),
    [count],
  )

  return (
    <View className="absolute inset-0" pointerEvents="none">
      {pieces.map((p) => (
        <MotiView
          key={p.id}
          from={{ translateY: -20, translateX: 0, opacity: 1, rotate: '0deg' }}
          animate={{ translateY: 380, translateX: p.x, opacity: 0, rotate: `${p.rotate}deg` }}
          transition={{
            type: 'timing',
            duration: 1400 + Math.random() * 600,
            delay: p.delay,
            easing: Easing.in(Easing.ease),
          }}
          style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            width: p.size,
            height: p.size * 1.4,
            backgroundColor: p.color,
            borderRadius: 2,
          }}
        />
      ))}
    </View>
  )
}
