import {
  ClipboardList,
  Search,
  Target,
  Users,
  Swords,
  LayoutGrid,
  Clapperboard,
  CalendarDays,
  MessagesSquare,
  Briefcase,
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
  {
    id: 'tmpl-persona-doc',
    title: 'Persona Doc (Jobs-to-be-Done)',
    description: 'A decision-useful persona built on a real job, not a demographic sketch.',
    category: 'Audience',
    unlockModuleId: 'm2',
    icon: Users,
    body: 'SEGMENT + NAME (behaviour/need-based, not demographic)\n[e.g. "The Pre-Work Resetter"]\n\nTHE JOB THEY\'RE HIRING YOU FOR (progress in a situation)\n[e.g. "carve out 15 min of calm before a stressful day"]\n\nTOP 1–2 ANXIETIES / BLOCKERS (in their words)\n1. "..."\n2. "..."\n\nWHERE THEY ALREADY ARE + A REAL PHRASE THEY USE\n[platforms/communities] — "[their words]"\n\nONE CONTENT ANGLE THIS UNLOCKS\n[angle]  (mark guesses as "hypothesis: validate")',
  },
  {
    id: 'tmpl-competitor-audit',
    title: 'Competitor Audit Grid',
    description: 'Read the field for signal and whitespace — and name the gap you can own.',
    category: 'Intelligence',
    unlockModuleId: 'm3',
    icon: Swords,
    body: 'FOR EACH OF 3 COMPETITORS\n- Positioning (one line):\n- What they actually win with (top posts, not averages):\n- Format mix:\n\nTHE SAMENESS (what does almost everyone do?)\n-\n\nTHE GAP YOU CAN OWN (high interest, low supply)\n-\n\nONE BENCHMARK TO BEAT\n[metric] — they average ~____, target ____',
  },
  {
    id: 'tmpl-platform-playbook',
    title: 'Platform Playbook',
    description: 'Choose a focused stack, lead formats, and a cadence that fits your capacity.',
    category: 'Platforms',
    unlockModuleId: 'm4',
    icon: LayoutGrid,
    body: 'CORE PLATFORM + WHY (tie to goal AND persona)\n-\n\nSECONDARY / EXPERIMENTAL (or "none, on purpose")\n-\n\nLEAD FORMAT PER PLATFORM + WHY IT FITS\n-\n\nWHAT "GOOD" LOOKS LIKE (a real metric per platform)\n-\n\nSUSTAINABLE CADENCE (match your real capacity)\n-',
  },
  {
    id: 'tmpl-video-strategy',
    title: 'Short-Form Video Strategy',
    description: 'Hooks, a retention-first script skeleton, and a repurposing plan.',
    category: 'Video',
    unlockModuleId: 'm5',
    icon: Clapperboard,
    body: 'THREE HOOKS (different techniques)\n- Curiosity gap:\n- Audience call-out:\n- Specific payoff:\n\nSCRIPT SKELETON\nHook (1–2s) → restate promise → value beats (no filler) → loop/twist → ONE CTA\n\nRETENTION TACTIC\n[open loop / shot changes / captions]\n\nREPURPOSING (one shoot → N native pieces)\n-\n\nJUDGE IT ON\n[watch-through %, saves] — not raw views',
  },
  {
    id: 'tmpl-content-strategy',
    title: 'Content Strategy + Calendar',
    description: 'Pillars, a weekly calendar, a batching system, and an AI-usage line.',
    category: 'Strategy',
    unlockModuleId: 'm6',
    icon: CalendarDays,
    body: 'CONTENT PILLARS (3–4; label value/proof/personality + the need)\n1.\n2.\n3.\n\nMIX\n~70% value / ~20% proof / ~10% personality\n\nONE-WEEK CALENDAR (pillar → slot)\nMon:  Wed:  Fri:\n\nBATCHING SYSTEM (plan / create / schedule)\n-\n\nAI: WHERE IT HELPS (and where it doesn\'t)\nUse for: ideation, hook drafts, repurposing.  Never: fake proof, unedited final copy.',
  },
  {
    id: 'tmpl-community-cs',
    title: 'Community & CS Playbook',
    description: 'A community ritual, a UGC engine, and DM/comment service standards.',
    category: 'Community',
    unlockModuleId: 'm7',
    icon: MessagesSquare,
    body: 'SELLS-WITHOUT-SELLING CONTENT IDEA (demo or objection-handling)\n-\n\nCOMMUNITY RITUAL (a recurring format people await)\n-\n\nUGC ENGINE (make it easy + rewarding)\n-\n\nDM/COMMENT STANDARD (response time + tone)\n-\n\nSAVED REPLIES (FAQ / objection / complaint)\n-\n\nA RECURRING QUESTION → CONTENT\n-',
  },
  {
    id: 'tmpl-pitch-pack',
    title: 'Freelance Pitch Pack',
    description: 'Positioning, a priced offer, outreach, proof, and scope guardrails.',
    category: 'Business',
    unlockModuleId: 'm8',
    icon: Briefcase,
    body: 'POSITIONING\n"I help [specific who] achieve [outcome] through [how]."\n\nPACKAGED OFFER + PRICE (retainer or project)\n-\n\nOUTREACH MESSAGE (lead with THEIR problem)\n-\n\nPROOF YOU\'LL SHOW (which artifacts + own-channel results)\n-\n\nSCOPE GUARDRAILS (in / costs extra)\nIn:\nExtra (quoted separately):',
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
