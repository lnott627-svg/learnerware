import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { getUnit, lessons, units } from '../data/content'

export type Pace = 'chill' | 'steady' | 'intense'

interface LessonResult {
  correct: number
  total: number
}

export interface PortfolioPiece {
  id: string
  unitId: string
  trackId: string
  title: string
  deliverableType: string
  content: string
  createdAt: string
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
  completedUnitIds: string[]
  microTaskAnswers: Record<string, string>
  portfolioPieces: PortfolioPiece[]

  hasCompletedFirstLessonEver: boolean
  lastLessonXpGained: number
  lastLessonStreakBefore: number

  selectTrack: (trackId: string) => void
  recordMicroTaskAnswer: (lessonId: string, text: string) => void
  completeLesson: (lessonId: string, result: LessonResult) => void
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

function buildPortfolioPiece(
  unitId: string,
  answers: Record<string, string>,
): PortfolioPiece | null {
  const unit = getUnit(unitId)
  if (!unit) return null
  const unitLessons = unit.lessonIds.map((id) => lessons.find((l) => l.id === id)).filter(Boolean)
  const parts = unitLessons.map((lesson) => {
    const answer = answers[lesson!.id]
    return `• ${lesson!.title}: ${answer && answer.trim() ? answer.trim() : '(add your own take here)'}`
  })
  return {
    id: `${unit.portfolioPiece.id}-${Date.now()}`,
    unitId: unit.id,
    trackId: unit.trackId,
    title: unit.portfolioPiece.title,
    deliverableType: unit.portfolioPiece.deliverableType,
    content: parts.join('\n\n'),
    createdAt: new Date().toISOString(),
  }
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
      completedUnitIds: [],
      microTaskAnswers: {},
      portfolioPieces: [],

      hasCompletedFirstLessonEver: false,
      lastLessonXpGained: 0,
      lastLessonStreakBefore: 0,

      selectTrack: (trackId) => set({ selectedTrackId: trackId }),

      recordMicroTaskAnswer: (lessonId, text) =>
        set((state) => ({
          microTaskAnswers: { ...state.microTaskAnswers, [lessonId]: text },
        })),

      completeLesson: (lessonId, result) => {
        const state = get()
        const lesson = lessons.find((l) => l.id === lessonId)
        if (!lesson) return

        const today = todayISO()
        let nextStreak = state.streakCount
        if (state.lastActiveDate === today) {
          // already active today, streak unchanged
        } else if (state.lastActiveDate && daysBetween(state.lastActiveDate, today) === 1) {
          nextStreak = state.streakCount + 1
        } else {
          nextStreak = 1
        }

        const alreadyCompleted = state.completedLessonIds.includes(lessonId)
        const xpGain = alreadyCompleted ? Math.round(lesson.xp * 0.25) : lesson.xp
        const completedLessonIds = alreadyCompleted
          ? state.completedLessonIds
          : [...state.completedLessonIds, lessonId]

        // check whether this completion finishes the unit
        const unit = getUnit(lesson.unitId)
        let completedUnitIds = state.completedUnitIds
        let portfolioPieces = state.portfolioPieces
        if (unit && !state.completedUnitIds.includes(unit.id)) {
          const allDone = unit.lessonIds.every((id) => completedLessonIds.includes(id))
          if (allDone) {
            completedUnitIds = [...state.completedUnitIds, unit.id]
            const piece = buildPortfolioPiece(unit.id, state.microTaskAnswers)
            if (piece) portfolioPieces = [...state.portfolioPieces, piece]
          }
        }

        let pace = state.pace
        let paceInferred = state.paceInferred
        const isFirstLessonEver = !state.hasCompletedFirstLessonEver
        if (isFirstLessonEver && result.total > 0) {
          pace = inferPace(result.correct / result.total)
          paceInferred = true
        }

        set({
          completedLessonIds,
          completedUnitIds,
          portfolioPieces,
          xp: state.xp + xpGain,
          streakCount: nextStreak,
          lastActiveDate: today,
          hasCompletedFirstLessonEver: true,
          lastLessonXpGained: xpGain,
          lastLessonStreakBefore: state.streakCount,
          pace,
          paceInferred,
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
          completedUnitIds: [],
          microTaskAnswers: {},
          portfolioPieces: [],
          hasCompletedFirstLessonEver: false,
          pace: 'steady',
          paceInferred: false,
        }),
    }),
    { name: 'learnerware-state' },
  ),
)

export function clientReadyChecklist() {
  return units.map((unit) => ({
    unitId: unit.id,
    trackId: unit.trackId,
    label: unit.portfolioPiece.title,
    unitTitle: unit.title,
  }))
}
