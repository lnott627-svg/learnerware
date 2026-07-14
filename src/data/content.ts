import {
  Mail,
  DollarSign,
  PhoneCall,
  ClipboardList,
  Calendar,
  BarChart3,
  Lightbulb,
  Palette,
  Fingerprint,
  Rocket,
} from 'lucide-react'
import type { EndTask, Lesson, Module, Template, Track } from './types'

import { smmTrack, smmModules, smmLessons, smmEndTasks } from './tracks/socialMedia'
import { freelanceTrack, freelanceModules, freelanceLessons, freelanceEndTasks } from './tracks/freelancing'
import { contentTrack, contentModules, contentLessons, contentEndTasks } from './tracks/contentCreation'
import { brandTrack, brandModules, brandLessons, brandEndTasks } from './tracks/personalBranding'

export const tracks: Track[] = [smmTrack, freelanceTrack, contentTrack, brandTrack]

export const modules: Module[] = [...smmModules, ...freelanceModules, ...contentModules, ...brandModules]

export const lessons: Lesson[] = [...smmLessons, ...freelanceLessons, ...contentLessons, ...brandLessons]

export const endTasks: EndTask[] = [
  ...smmEndTasks,
  ...freelanceEndTasks,
  ...contentEndTasks,
  ...brandEndTasks,
]

export const templates: Template[] = [
  {
    id: 'tmpl-outreach-dm',
    title: 'Cold Outreach DM',
    description: 'A fill-in-the-blank template for reaching out to a first client.',
    category: 'Outreach',
    unlockModuleId: 'freelance-m1',
    icon: Mail,
    body: 'Hey [name]! Love what you\'re doing with [specific, real detail about their account/business].\n\nI help [type of business] grow with [one-line value prop — e.g. "a simple content plan and consistent posting"].\n\nOpen to a quick chat this week to see if it\'s a fit?',
  },
  {
    id: 'tmpl-pricing-sheet',
    title: 'Starter Pricing Sheet',
    description: 'A simple 3-tier pricing structure for your first packages.',
    category: 'Pricing',
    unlockModuleId: 'freelance-m1',
    icon: DollarSign,
    body: 'STARTER — $___/mo\n- 8 posts/month\n- Weekly Stories\n- Monthly report\n\nGROWTH — $___/mo\n- 12 posts/month + 2 Reels/week\n- Daily Stories\n- Community management\n- Monthly report + strategy call\n\nPRO — $___/mo\n- Full content calendar\n- 4 Reels/week\n- Community management + DM handling\n- Bi-weekly strategy calls',
  },
  {
    id: 'tmpl-discovery-call',
    title: 'Discovery Call Cheat Sheet',
    description: 'The questions to ask on every discovery call, in order.',
    category: 'Client Work',
    unlockModuleId: 'freelance-m2',
    icon: PhoneCall,
    body: 'OPEN\n"What made you decide to look for help with this now?"\n\nUNDERSTAND THE GOAL\n"What would success look like in 3 months?"\n\nCONFIRM FIT\n"What\'s your budget range for this?"\n"What\'s your ideal timeline to start?"\n\nCLOSE\n"Here\'s what I\'d suggest as next steps — I\'ll send a proposal by [date], sound good?"',
  },
  {
    id: 'tmpl-onboarding',
    title: 'Client Onboarding Checklist',
    description: 'Everything to collect before a new project starts.',
    category: 'Client Work',
    unlockModuleId: 'freelance-m3',
    icon: ClipboardList,
    body: 'ACCESS\n[ ] Platform logins\n[ ] Brand assets (logo, fonts, colors)\n[ ] Past top-performing content\n\nEXPECTATIONS\n[ ] Communication tool + response time\n[ ] Meeting cadence\n[ ] Scope + revision rounds in writing\n\nKICKOFF\n[ ] 15-30 min kickoff call scheduled',
  },
  {
    id: 'tmpl-content-calendar',
    title: '2-Week Content Calendar',
    description: 'A ready-to-fill content calendar organized by theme.',
    category: 'Content Planning',
    unlockModuleId: 'smm-m2',
    icon: Calendar,
    body: 'WEEK 1 — Theme: ___\nMon — [format] — [topic]\nWed — [format] — [topic]\nFri — [format] — [topic]\n\nWEEK 2 — Theme: ___\nMon — [format] — [topic]\nWed — [format] — [topic]\nFri — [format] — [topic]',
  },
  {
    id: 'tmpl-analytics-report',
    title: 'Client Analytics Report',
    description: 'A simple monthly report structure clients actually read.',
    category: 'Reporting',
    unlockModuleId: 'smm-m3',
    icon: BarChart3,
    body: 'HEADLINE WIN\n[One sentence: the single best result this month]\n\nKEY METRICS (vs. last month)\n- Reach: ___ (+/- ___%)\n- Engagement rate: ___%\n- Profile visits: ___\n- DMs / leads: ___\n\nWHAT WORKED\n[1-2 posts that overperformed, and why]\n\nNEXT MONTH\n[1-2 clear next steps]',
  },
  {
    id: 'tmpl-idea-bank',
    title: 'Content Idea Bank',
    description: 'A running template for never running out of ideas.',
    category: 'Content Planning',
    unlockModuleId: 'content-m1',
    icon: Lightbulb,
    body: 'AUDIENCE QUESTIONS\n- \n- \n- \n\nMYTHS / MISCONCEPTIONS\n- \n- \n- \n\nSMALL WINS TO SHARE\n- \n- \n- ',
  },
  {
    id: 'tmpl-brand-kit',
    title: 'Mini Brand Kit Worksheet',
    description: 'Lock in colors, fonts, and thumbnail rules in one place.',
    category: 'Visuals',
    unlockModuleId: 'content-m3',
    icon: Palette,
    body: 'COLORS\n1. ___ (primary)\n2. ___ (secondary)\n3. ___ (accent)\n\nFONTS\nHeading: ___\nBody: ___\n\nTHUMBNAIL RULES\n- High contrast, one clear focal point\n- 3-5 words of text max\n- Consistent placement across posts',
  },
  {
    id: 'tmpl-brand-statement',
    title: 'Personal Brand Statement',
    description: 'Define your niche, audience, and point of view in one page.',
    category: 'Personal Branding',
    unlockModuleId: 'brand-m1',
    icon: Fingerprint,
    body: 'NICHE\nI help ___ do ___.\n\nAUDIENCE\'S REAL STRUGGLE\n___\n\nMY POINT OF VIEW\n___\n\nWHAT I POST ABOUT\n1. \n2. \n3. ',
  },
  {
    id: 'tmpl-media-kit',
    title: 'Creator Media Kit',
    description: 'A one-page media kit to send to brands.',
    category: 'Brand Deals',
    unlockModuleId: 'brand-m3',
    icon: Rocket,
    body: 'ABOUT ME\n[Your niche in one line]\n\nAUDIENCE\n- Followers: ___\n- Engagement rate: ___%\n- Top platform: ___\n- Audience: [age range / interests]\n\nPAST RESULTS\n[1-2 standout stats or past work]\n\nRATES\n- Single post: $___\n- Story set: $___\n- Usage rights (30 days): +$___\n\nCONTACT\n[email]',
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
