import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import PersonWithPhone from '../components/illustrations/PersonWithPhone'

export default function Splash() {
  const navigate = useNavigate()

  return (
    <div className="flex-1 flex flex-col px-6 pt-[calc(env(safe-area-inset-top)+28px)] pb-[calc(env(safe-area-inset-bottom)+28px)] bg-paper-50 relative overflow-hidden">
      <div className="flex-1 flex flex-col items-center justify-center text-center relative z-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 160, damping: 16 }}
          className="relative w-56 h-56 mb-8 flex items-center justify-center"
        >
          <div className="absolute w-44 h-44 rounded-full bg-mint-200" />
          <div className="absolute top-2 right-2 w-16 h-16 rounded-full bg-yellow-200" />
          <PersonWithPhone className="relative w-48 h-48 text-ink-950" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="uppercase tracking-[0.2em] text-xs font-bold text-ink-300 mb-3"
        >
          Learnerware
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.45 }}
          className="font-display font-extrabold text-[32px] leading-[1.15] mb-4 text-ink-950"
        >
          Learn to run social media for real clients — starting today
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="text-ink-500 text-base max-w-xs"
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
        <Button onClick={() => navigate('/tracks')}>Get started</Button>
        <p className="text-center text-ink-300 text-xs mt-4">
          No account needed to try your first lesson
        </p>
      </motion.div>
    </div>
  )
}
