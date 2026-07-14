import type { LucideIcon } from 'lucide-react-native'

export type QuestionType = 'mc' | 'tf' | 'short'

export interface McQuestion {
  type: 'mc'
  prompt: string
  options: string[]
  correctIndex: number
  correctFeedback: string
  incorrectFeedback: string
}

export interface TfQuestion {
  type: 'tf'
  prompt: string
  correctAnswer: boolean
  correctFeedback: string
  incorrectFeedback: string
}

export interface ShortQuestion {
  type: 'short'
  prompt: string
  placeholder: string
  guidance: string // what a strong answer includes — shown after the learner submits
}

export type Question = McQuestion | TfQuestion | ShortQuestion

export interface InfoStep {
  kind: 'info'
  heading: string
  body: string
  bullets?: string[]
}

export interface QuestionStep {
  kind: 'question'
  question: Question
}

export type LessonStep = InfoStep | QuestionStep

export interface Lesson {
  id: string
  moduleId: string
  trackId: string
  title: string
  subtitle: string
  minutes: number
  xp: number
  steps: LessonStep[]
}

export interface EndTaskPrompt {
  label: string
  placeholder: string
}

interface EndTaskBase {
  id: string
  moduleId: string
  trackId: string
  title: string
  description: string
  deliverableType: string
  xp: number
}

export interface BuilderEndTask extends EndTaskBase {
  kind: 'builder'
  brief: string
  prompts: EndTaskPrompt[]
}

export interface SimulatorEndTask extends EndTaskBase {
  kind: 'simulator'
  brief: string
}

export interface MultiCaptionEndTask extends EndTaskBase {
  kind: 'multi-caption'
  brief: string
  count: number
  labels: string[]
}

export type EndTask = BuilderEndTask | SimulatorEndTask | MultiCaptionEndTask

export interface Module {
  id: string
  trackId: string
  title: string
  description: string
  lessonIds: string[]
  endTaskId: string
}

export interface Track {
  id: string
  title: string
  tagline: string
  description: string
  icon: LucideIcon
  pastelIndex: number
  moduleIds: string[]
}

export interface Template {
  id: string
  title: string
  description: string
  category: string
  unlockModuleId: string | null // null = unlocked from the start
  icon: LucideIcon
  body: string
}
