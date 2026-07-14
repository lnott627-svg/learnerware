import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { getModule, lessons } from '../data/content'

export type Pace = 'chill' | 'steady' | 'intense'

interface LessonResult {
  correct: number
  total: number
}

export interface SimulatorTranscriptMessage {
  role: 'user' | 'assistant'
  content: string
}

export interface PortfolioEntry {
  id: string
  endTaskId: string
  moduleId: string
  trackId: string
  title: string
  deliverableType: string
  content: string
  createdAt: string
  score?: number
  scoreSummary?: string
}

interface LearnerwareState {
  accountCreated: boolean
  name: string | null
  email: string | null

  selectedTrackId: string | null
  pace: Pace
  paceInferred: boolean

  xp: number
  streakCount: number
  lastActiveDate: string | null

  completedLessonIds: string[]
  completedModuleIds: string[]
  portfolio: PortfolioEntry[]

  hasCompletedFirstLessonEver: boolean
  lastLessonXpGained: number

  selectTrack: (trackId: string) => void
  completeLesson: (lessonId: string, result: LessonResult) => void
  submitEndTask: (entry: Omit<PortfolioEntry, 'id' | 'createdAt'>, xpReward: number) => void
  createAccount: (name: string, email: string) => void
  setPace: (pace: Pace) => void
  resetProgress: () => void
}

function todayISO() {
  return new Date().toISOString().slice(0, 10)
}

function daysBetween(a: string, b: string) {
  const da = new Date(a + 'T00:00:00')
  const db = new Date(b + 'T00:00:00')
  return Math.round((db.getTime() - da.getTime()) / 86400000)
}

function inferPace(ratio: number): Pace {
  if (ratio >= 0.8) return 'intense'
  if (ratio >= 0.5) return 'steady'
  return 'chill'
}

function bumpStreak(lastActiveDate: string | null, streakCount: number) {
  const today = todayISO()
  if (lastActiveDate === today) return streakCount
  if (lastActiveDate && daysBetween(lastActiveDate, today) === 1) return streakCount + 1
  return 1
}

export const useStore = create<LearnerwareState>()(
  persist(
    (set, get) => ({
      accountCreated: false,
      name: null,
      email: null,

      selectedTrackId: null,
      pace: 'steady',
      paceInferred: false,

      xp: 0,
      streakCount: 0,
      lastActiveDate: null,

      completedLessonIds: [],
      completedModuleIds: [],
      portfolio: [],

      hasCompletedFirstLessonEver: false,
      lastLessonXpGained: 0,

      selectTrack: (trackId) => set({ selectedTrackId: trackId }),

      completeLesson: (lessonId, result) => {
        const state = get()
        const lesson = lessons.find((l) => l.id === lessonId)
        if (!lesson) return

        const today = todayISO()
        const nextStreak = bumpStreak(state.lastActiveDate, state.streakCount)

        const alreadyCompleted = state.completedLessonIds.includes(lessonId)
        const xpGain = alreadyCompleted ? Math.round(lesson.xp * 0.25) : lesson.xp
        const completedLessonIds = alreadyCompleted
          ? state.completedLessonIds
          : [...state.completedLessonIds, lessonId]

        let pace = state.pace
        let paceInferred = state.paceInferred
        const isFirstLessonEver = !state.hasCompletedFirstLessonEver
        if (isFirstLessonEver && result.total > 0) {
          pace = inferPace(result.correct / result.total)
          paceInferred = true
        }

        set({
          completedLessonIds,
          xp: state.xp + xpGain,
          streakCount: nextStreak,
          lastActiveDate: today,
          hasCompletedFirstLessonEver: true,
          lastLessonXpGained: xpGain,
          pace,
          paceInferred,
        })
      },

      submitEndTask: (entry, xpReward) => {
        const state = get()
        const today = todayISO()
        const nextStreak = bumpStreak(state.lastActiveDate, state.streakCount)
        const mod = getModule(entry.moduleId)

        const portfolioEntry: PortfolioEntry = {
          ...entry,
          id: `${entry.endTaskId}-${Date.now()}`,
          createdAt: new Date().toISOString(),
        }

        const completedModuleIds =
          mod && !state.completedModuleIds.includes(mod.id)
            ? [...state.completedModuleIds, mod.id]
            : state.completedModuleIds

        set({
          portfolio: [...state.portfolio, portfolioEntry],
          completedModuleIds,
          xp: state.xp + xpReward,
          streakCount: nextStreak,
          lastActiveDate: today,
          lastLessonXpGained: xpReward,
        })
      },

      createAccount: (name, email) => set({ accountCreated: true, name, email }),
      setPace: (pace) => set({ pace, paceInferred: false }),

      resetProgress: () =>
        set({
          selectedTrackId: null,
          xp: 0,
          streakCount: 0,
          lastActiveDate: null,
          completedLessonIds: [],
          completedModuleIds: [],
          portfolio: [],
          hasCompletedFirstLessonEver: false,
          pace: 'steady',
          paceInferred: false,
        }),
    }),
    { name: 'learnerware-state-v2' },
  ),
)
