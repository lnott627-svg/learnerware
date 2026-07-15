import { useStore } from '../state/store'
import type { Outcome, OutcomeVariants } from '../data/types'

// Resolves an optionally-personalised field: returns the variant for the active
// outcome if one exists, otherwise the default. Used for lesson intros and task
// briefs so we reframe examples per audience without forking the content.
export function personalize<T>(
  base: T,
  variants: OutcomeVariants<T> | undefined,
  outcome: Outcome | null,
): T {
  if (!variants || !outcome) return base
  return variants[outcome] ?? base
}

// Convenience hook for components that need the current outcome.
export function useOutcome(): Outcome | null {
  return useStore((s) => s.outcome)
}

// Short, human labels for the three outcomes — handy for framing copy.
export const OUTCOME_LABELS: Record<Outcome, string> = {
  freelancer: 'Freelancer',
  business: 'Small business owner',
  marketer: 'Marketer upskilling',
}
