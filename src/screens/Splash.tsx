import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

export default function Splash() {
  const navigate = useNavigate()

  return (
    <div className="flex-1 flex flex-col px-6 pt-[calc(env(safe-area-inset-top)+28px)] pb-[calc(env(safe-area-inset-bottom)+28px)] bg-gradient-to-b from-brand-500 to-brand-700 text-white overflow-hidden relative">
      <div className="absolute -top-10 -right-16 w-56 h-56 rounded-full bg-white/10" />
      <div className="absolute top-40 -left-20 w-40 h-40 rounded-full bg-white/10" />
      <div className="absolute bottom-24 right-4 w-24 h-24 rounded-full bg-xp-400/30" />

      <div className="flex-1 flex flex-col items-center justify-center text-center relative z-10">
        <motion.div
          initial={{ scale: 0.7, opacity: 0, rotate: -8 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 180, damping: 14 }}
          className="w-24 h-24 rounded-3xl bg-white flex items-center justify-center text-5xl shadow-[0_10px_0_0_rgb(0_0_0_/_0.15)] mb-8"
        >
          🚀
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="uppercase tracking-[0.2em] text-xs font-bold text-xp-300 mb-3"
        >
          Learnerware
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.45 }}
          className="font-display font-extrabold text-[32px] leading-[1.15] mb-4"
        >
          Learn to run social media for real clients — starting today
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="text-white/80 text-base max-w-xs"
        >
          Bite-sized lessons. Real deliverables. No fluff, no video lectures.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="relative z-10"
      >
        <Button variant="secondary" className="!shadow-[0_6px_0_0_white] !border-0" onClick={() => navigate('/tracks')}>
          Start learning — it's free
        </Button>
        <p className="text-center text-white/60 text-xs mt-4">
          No account needed to try your first lesson
        </p>
      </motion.div>
    </div>
  )
}
