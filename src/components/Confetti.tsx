import { motion } from 'framer-motion'
import { useMemo } from 'react'

const COLORS = ['#7C3AED', '#A3E635', '#F59E0B', '#F472B6', '#38BDF8']

export default function Confetti({ count = 24 }: { count?: number }) {
  const pieces = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: (Math.random() - 0.5) * 320,
        rotate: Math.random() * 360,
        delay: Math.random() * 0.25,
        color: COLORS[i % COLORS.length],
        size: 6 + Math.random() * 6,
      })),
    [count],
  )

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {pieces.map((p) => (
        <motion.span
          key={p.id}
          initial={{ x: 0, y: -20, opacity: 1, rotate: 0 }}
          animate={{ x: p.x, y: 380, opacity: 0, rotate: p.rotate }}
          transition={{ duration: 1.4 + Math.random() * 0.6, delay: p.delay, ease: 'easeIn' }}
          style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            width: p.size,
            height: p.size * 1.4,
            background: p.color,
            borderRadius: 2,
          }}
        />
      ))}
    </div>
  )
}
