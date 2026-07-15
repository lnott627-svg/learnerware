import { smTrack } from '../data/curriculum'

// Maps a diagnostic score (number correct out of total) to a recommended
// starting module. Bands are intentionally simple and tunable. With the full
// 8-module curriculum the bands target M1–M4; earlier modules stay available as
// optional review. While only M1 is shipped, everything clamps to M1.
//
// Band design (as a fraction of the max score):
//   < 0.4  -> module index 0 (start from the beginning)
//   < 0.6  -> module index 1
//   < 0.85 -> module index 2
//   >=0.85 -> module index 3
// Never places past index 3, so nobody skips the strategy synthesis + freelance modules.
export function placementModuleIndexForScore(correct: number, total: number): number {
  if (total <= 0) return 0
  const ratio = correct / total
  if (ratio < 0.4) return 0
  if (ratio < 0.6) return 1
  if (ratio < 0.85) return 2
  return 3
}

export interface PlacementResult {
  trackId: string
  moduleId: string
  moduleIndex: number // clamped to available modules
  requestedIndex: number // what the score suggested (may exceed available modules)
}

export function computePlacement(correct: number, total: number): PlacementResult {
  const requestedIndex = placementModuleIndexForScore(correct, total)
  const moduleIds = smTrack.moduleIds
  const moduleIndex = Math.min(requestedIndex, moduleIds.length - 1)
  return {
    trackId: smTrack.id,
    moduleId: moduleIds[moduleIndex],
    moduleIndex,
    requestedIndex,
  }
}
