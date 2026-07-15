import type { McQuestion, TfQuestion } from './types'

// The diagnostic reuses the existing scorable question types (mc / tf only —
// `short` can't be auto-scored). Questions rise in difficulty; the score maps to
// a placement band (see lib/placement.ts), which picks the recommended starting
// module. Everyone can still access earlier modules as optional review.
export type DiagnosticQuestion = McQuestion | TfQuestion

export const diagnosticQuestions: DiagnosticQuestion[] = [
  // easy — foundations (maps to M1)
  {
    type: 'tf',
    prompt: '"Our Reels get more saves than our carousels" is, by itself, an insight you can build a strategy on.',
    correctAnswer: false,
    correctFeedback: "Correct — that's a data point. The insight is the *why* behind it.",
    incorrectFeedback: "It's actually just data. An insight is the actionable *why* underneath the number.",
  },
  {
    type: 'mc',
    prompt: 'Which is a usable 90-day social goal?',
    options: [
      'Go viral',
      'Grow inbound DMs from ~5 to ~20 per week, tracked in the inbox',
      'Increase brand awareness',
      'Post every single day',
    ],
    correctIndex: 1,
    correctFeedback: 'Yes — metric, direction, size, timeframe, and measurable.',
    incorrectFeedback: 'Only one option is measurable with a direction, size, and timeframe.',
  },
  // medium — audience & competitive (maps to ~M2/M3)
  {
    type: 'mc',
    prompt: 'A customer persona is most useful when it captures…',
    options: [
      'Age, gender, and location only',
      'A specific struggle, desire, and the words they use — tied to a buying trigger',
      'Their favourite colour and hobbies',
      'How many followers they have',
    ],
    correctIndex: 1,
    correctFeedback: 'Right — a persona drives content when it captures struggle, desire, and real language.',
    incorrectFeedback: 'Demographics alone don\'t drive content. The useful core is struggle + desire + language + trigger.',
  },
  {
    type: 'tf',
    prompt: 'The best way to run a competitor audit is to copy whatever the biggest account in your niche posts.',
    correctAnswer: false,
    correctFeedback: 'Correct — you study gaps and what works/why, not copy. Their audience and goals differ from yours.',
    incorrectFeedback: 'Copying misses the point. A real audit finds gaps and transferable patterns, not posts to clone.',
  },
  // harder — platforms / strategy (maps to ~M4/M5+)
  {
    type: 'mc',
    prompt: 'You want reach among a professional B2B audience for a consultancy. Strongest primary platform bet in 2025?',
    options: ['Snapchat', 'LinkedIn (with document posts + thoughtful text)', 'Pinterest', 'BeReal'],
    correctIndex: 1,
    correctFeedback: 'Yes — LinkedIn is where B2B decision-makers actively engage; doc posts and text still overperform there.',
    incorrectFeedback: 'For B2B reach, LinkedIn is the strongest primary bet — the others skew consumer/visual.',
  },
  {
    type: 'mc',
    prompt: 'What most reliably drives watch-through on a short-form video?',
    options: [
      'A logo intro and slow build',
      'A hook in the first ~1–2 seconds that creates an open loop',
      'Trending audio, regardless of relevance',
      'Posting at exactly 9am',
    ],
    correctIndex: 1,
    correctFeedback: 'Right — retention lives or dies on the first 1–2 seconds and an unresolved open loop.',
    incorrectFeedback: 'Retention is won in the first 1–2 seconds with a strong hook / open loop, not intros or timing tricks.',
  },
]
