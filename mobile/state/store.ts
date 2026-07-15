import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getModule, lessons } from '../data/content'
import type { Outcome } from '../data/types'

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

// ---- Auth scaffold -----------------------------------------------------------
// This is deliberately backend-free. `signInWith*` currently create a LOCAL mock
// session so the whole flow is testable on web without a dev build. The real
// native calls (expo-apple-authentication / expo-auth-session Google) get wired
// in later behind these same actions — the rest of the app only depends on
// `isAuthenticated` / `authUser`, so plugging in a real provider (or a backend)
// is a drop-in replacement that doesn't touch any screens.
export type AuthProvider = 'apple' | 'google'

export interface AuthUser {
  id: string
  provider: AuthProvider
  name: string | null
  email: string | null
}

interface LearnerwareState {
  // profile (captured at onboarding step 1, before any auth)
  name: string | null
  outcome: Outcome | null

  // auth (lives at the results screen, step 4)
  authUser: AuthUser | null
  isAuthenticated: boolean

  // onboarding progress gates
  hasProfile: boolean // completed step 1 (name + outcome)
  diagnosticComplete: boolean // completed step 3
  hasOnboarded: boolean // reached the app proper (post-results)

  // legacy account flag kept so old screens compile; superseded by isAuthenticated
  accountCreated: boolean
  email: string | null

  // curriculum placement (from the diagnostic). Everyone shares one track.
  selectedTrackId: string | null
  placementModuleId: string | null // recommended starting module; earlier ones become optional review

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

  // actions
  setProfile: (name: string, outcome: Outcome) => void
  setPlacement: (trackId: string, moduleId: string) => void
  completeDiagnostic: () => void
  finishOnboarding: () => void
  signInWithProvider: (provider: AuthProvider, profile?: { name?: string | null; email?: string | null }) => void
  signOut: () => void

  selectTrack: (trackId: string) => void
  completeLesson: (lessonId: string, result: LessonResult) => void
  submitEndTask: (entry: Omit<PortfolioEntry, 'id' | 'createdAt'>, xpReward: number) => void
  createAccount: (name: string, email: string) => void
  setPace: (pace: Pace) => void
  resetProgress: () => void
  resetEverything: () => void // clears profile + onboarding + progress (used to restart onboarding)
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

const initialState = {
  name: null,
  outcome: null,

  authUser: null,
  isAuthenticated: false,

  hasProfile: false,
  diagnosticComplete: false,
  hasOnboarded: false,

  accountCreated: false,
  email: null,

  selectedTrackId: null,
  placementModuleId: null,

  pace: 'steady' as Pace,
  paceInferred: false,

  xp: 0,
  streakCount: 0,
  lastActiveDate: null,

  completedLessonIds: [] as string[],
  completedModuleIds: [] as string[],
  portfolio: [] as PortfolioEntry[],

  hasCompletedFirstLessonEver: false,
  lastLessonXpGained: 0,
}

export const useStore = create<LearnerwareState>()(
  persist(
    (set, get) => ({
      ...initialState,

      setProfile: (name, outcome) =>
        set({ name: name.trim(), outcome, hasProfile: true }),

      setPlacement: (trackId, moduleId) =>
        set({ selectedTrackId: trackId, placementModuleId: moduleId }),

      completeDiagnostic: () => set({ diagnosticComplete: true }),

      finishOnboarding: () => set({ hasOnboarded: true }),

      // Mock sign-in for now (see AuthUser comment above). Keeps the learner's
      // existing local progress intact and just attaches an identity.
      signInWithProvider: (provider, profile) => {
        const state = get()
        set({
          isAuthenticated: true,
          accountCreated: true,
          authUser: {
            id: `${provider}-${Date.now()}`,
            provider,
            name: profile?.name ?? state.name,
            email: profile?.email ?? state.email,
          },
          email: profile?.email ?? state.email,
          hasOnboarded: true,
        })
      },

      signOut: () => set({ isAuthenticated: false, authUser: null }),

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

      // legacy — kept so the old lesson-complete signup path still compiles.
      createAccount: (name, email) => set({ accountCreated: true, name, email }),
      setPace: (pace) => set({ pace, paceInferred: false }),

      resetProgress: () =>
        set({
          selectedTrackId: null,
          placementModuleId: null,
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

      resetEverything: () => set({ ...initialState }),
    }),
    {
      name: 'learnerware-state-v3',
      storage: createJSONStorage(() => AsyncStorage),
      version: 3,
      // Pre-release: the v2→v3 shape change (outcome, auth, onboarding, new
      // curriculum) isn't worth a field-by-field migration, so we reset to a
      // clean state on upgrade. Old test progress is intentionally discarded.
      migrate: () => ({ ...initialState }) as unknown as LearnerwareState,
    },
  ),
)
