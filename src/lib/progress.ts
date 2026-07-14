import { getModule } from '../data/content'

export function isModuleLessonsComplete(moduleId: string, completedLessonIds: string[]): boolean {
  const mod = getModule(moduleId)
  if (!mod) return false
  return mod.lessonIds.every((id) => completedLessonIds.includes(id))
}

// Treats each module as (lessons + 1 end task) units of work.
export function moduleProgress(
  moduleId: string,
  completedLessonIds: string[],
  completedModuleIds: string[],
): number {
  const mod = getModule(moduleId)
  if (!mod) return 0
  const totalUnits = mod.lessonIds.length + 1
  const doneLessons = mod.lessonIds.filter((id) => completedLessonIds.includes(id)).length
  const doneEndTask = completedModuleIds.includes(mod.id) ? 1 : 0
  return (doneLessons + doneEndTask) / totalUnits
}

export function trackProgress(
  moduleIds: string[],
  completedLessonIds: string[],
  completedModuleIds: string[],
): number {
  if (moduleIds.length === 0) return 0
  const sum = moduleIds.reduce(
    (acc, id) => acc + moduleProgress(id, completedLessonIds, completedModuleIds),
    0,
  )
  return sum / moduleIds.length
}
