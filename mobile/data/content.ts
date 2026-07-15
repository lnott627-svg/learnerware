import {
  ClipboardList,
  Search,
  Target,
  Users,
} from 'lucide-react-native'
import type { EndTask, Lesson, Module, Template, Track } from './types'

import { smTrack, smModules, smLessons, smEndTasks } from './curriculum'

export const tracks: Track[] = [smTrack]

export const modules: Module[] = [...smModules]

export const lessons: Lesson[] = [...smLessons]

export const endTasks: EndTask[] = [...smEndTasks]

// Templates unlock as modules are completed. All free (no paywall gate for now).
// unlockModuleId: null = available from the start.
export const templates: Template[] = [
  {
    id: 'tmpl-research-goal',
    title: 'Goal-Setting Worksheet',
    description: 'Turn a vague "grow the brand" into a measurable 90-day social goal.',
    category: 'Foundations',
    unlockModuleId: null,
    icon: Target,
    body: 'OBJECTIVE (fill the blanks)\nGrow ______ (metric)\nfrom ~____ to ~____ (size)\nby ______ (date, ~90 days out),\ntracked via ______ (method).\n\nWHICH JOB IS THIS?\n[ ] Awareness  [ ] Consideration  [ ] Action\n\nTHE ONE RESEARCH QUESTION THIS MAKES MOST IMPORTANT:\n______',
  },
  {
    id: 'tmpl-research-plan',
    title: 'Research Plan (1-page)',
    description: 'The exact structure from the Module 1 task — reusable for any brand.',
    category: 'Research',
    unlockModuleId: 'm1',
    icon: ClipboardList,
    body: 'OBJECTIVE\n[metric + direction + size + timeframe]\n\nKEY RESEARCH QUESTIONS (2–3)\n1.\n2.\n3.\n\nSOURCES & WHAT EACH SHOULD TELL YOU\n- Native analytics →\n- Reviews / comments / forums →\n- Search / trend tools →\n- (optional) SparkToro / listening →\n\nFIRST ROUGH "WHO" (one sentence)\n[who] trying to [job] but blocked by [struggle], who says "[their words]"\n\nWHAT CHANGES ONCE WE KNOW\n-',
  },
  {
    id: 'tmpl-research-sources',
    title: 'Audience Research Source List',
    description: 'A checklist of tools by tier, with what each is actually good for.',
    category: 'Research',
    unlockModuleId: 'm1',
    icon: Search,
    body: 'TIER 1 — NATIVE ANALYTICS (who you already have)\n[ ] Instagram Insights\n[ ] TikTok Analytics\n[ ] YouTube Studio\n\nTIER 2 — THEIR OWN WORDS (unprompted language)\n[ ] Comments & DMs\n[ ] Google / Amazon reviews\n[ ] Niche subreddits / forums\n\nTIER 3 — SEARCH & TRENDS (demand + gaps)\n[ ] Google Trends\n[ ] AnswerThePublic / AlsoAsked\n[ ] TikTok Creator Search Insights\n\nTIER 4 — DEDICATED\n[ ] SparkToro (where they hang out)\n[ ] Brand24 / Brandwatch (listening)',
  },
  {
    id: 'tmpl-ai-research-prompt',
    title: 'AI Research Prompt Pack',
    description: 'Prompts that synthesise real evidence instead of inventing it.',
    category: 'AI',
    unlockModuleId: 'm1',
    icon: Users,
    body: 'CLUSTER REVIEWS\n"Here are [N] real reviews. Group them into the top 5 recurring problems, quote 2 real phrases per group, rank by frequency, and flag anything only one person said."\n\nDRAFT INTERVIEW QUESTIONS\n"I sell [X] to [audience]. Draft 8 open, non-leading interview questions that uncover their real struggle and buying triggers."\n\nOBJECTION MAP\n"Here are [N] comments/DMs. List the distinct objections/hesitations, with a real quote for each."\n\nRULE: never ask AI to invent audiences, stats, or testimonials — only to synthesise evidence you paste in.',
  },
]

export function getTrack(id: string) {
  return tracks.find((t) => t.id === id)
}

export function getModule(id: string) {
  return modules.find((m) => m.id === id)
}

export function getLesson(id: string) {
  return lessons.find((l) => l.id === id)
}

export function getEndTask(id: string) {
  return endTasks.find((t) => t.id === id)
}

export function endTaskForModule(moduleId: string) {
  const mod = getModule(moduleId)
  if (!mod) return undefined
  return getEndTask(mod.endTaskId)
}

export function modulesForTrack(trackId: string) {
  return modules.filter((m) => m.trackId === trackId)
}

export function lessonsForModule(moduleId: string) {
  const mod = getModule(moduleId)
  if (!mod) return []
  return mod.lessonIds.map((id) => getLesson(id)!).filter(Boolean)
}

// The single shared curriculum track everyone is placed into.
export const PRIMARY_TRACK_ID = smTrack.id
