export type QuestionType = 'mc' | 'order' | 'fill' | 'sort'

export interface McQuestion {
  type: 'mc'
  prompt: string
  options: string[]
  correctIndex: number
  correctFeedback: string
  incorrectFeedback: string
}

export interface OrderQuestion {
  type: 'order'
  prompt: string
  helper?: string
  items: string[] // in correct order
}

export interface FillQuestion {
  type: 'fill'
  prompt: string
  template: string // sentence with a single "___" marker
  options: string[] // word bank, includes correct answer + distractors
  correctAnswer: string
}

export interface SortItem {
  text: string
  side: 'left' | 'right'
}

export interface SortQuestion {
  type: 'sort'
  prompt: string
  leftLabel: string
  rightLabel: string
  items: SortItem[]
}

export type Question = McQuestion | OrderQuestion | FillQuestion | SortQuestion

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

export interface MicroTaskStep {
  kind: 'microtask'
  title: string
  prompt: string
  placeholder: string
  platform: string
}

export type LessonStep = InfoStep | QuestionStep | MicroTaskStep

export interface Lesson {
  id: string
  unitId: string
  trackId: string
  title: string
  subtitle: string
  minutes: number
  xp: number
  steps: LessonStep[]
}

export interface PortfolioPieceDef {
  id: string
  title: string
  description: string
  deliverableType: string
}

export interface Unit {
  id: string
  trackId: string
  title: string
  description: string
  lessonIds: string[]
  portfolioPiece: PortfolioPieceDef
}

export interface Track {
  id: string
  title: string
  tagline: string
  description: string
  emoji: string
  color: string
  unitIds: string[]
}

export interface Template {
  id: string
  title: string
  description: string
  category: string
  unlockUnitId: string | null // null = unlocked from the start
  emoji: string
  body: string
}
