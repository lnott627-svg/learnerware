import { PenTool } from 'lucide-react'
import type { BuilderEndTask, Lesson, Module, MultiCaptionEndTask, Track } from '../types'

export const contentTrack: Track = {
  id: 'content',
  title: 'Content Creation',
  tagline: 'Make content people actually stop for',
  description: 'Strategy, writing, and visuals — the full toolkit for content that performs.',
  icon: PenTool,
  pastelIndex: 2,
  moduleIds: ['content-m1', 'content-m2', 'content-m3'],
}

export const contentModules: Module[] = [
  {
    id: 'content-m1',
    trackId: 'content',
    title: 'Content Strategy',
    description: 'What makes content perform, hooks, and formats that work right now.',
    lessonIds: ['content-m1-l1', 'content-m1-l2', 'content-m1-l3', 'content-m1-l4'],
    endTaskId: 'content-m1-task',
  },
  {
    id: 'content-m2',
    trackId: 'content',
    title: 'Writing for Social',
    description: 'Captions, CTAs, storytelling frameworks, and tone of voice.',
    lessonIds: ['content-m2-l1', 'content-m2-l2', 'content-m2-l3', 'content-m2-l4'],
    endTaskId: 'content-m2-task',
  },
  {
    id: 'content-m3',
    trackId: 'content',
    title: 'Visual Content Basics',
    description: 'Canva fundamentals, brand kits, image vs. video, and thumbnails.',
    lessonIds: ['content-m3-l1', 'content-m3-l2', 'content-m3-l3', 'content-m3-l4'],
    endTaskId: 'content-m3-task',
  },
]

export const contentLessons: Lesson[] = [
  // MODULE 1 — Content Strategy
  {
    id: 'content-m1-l1',
    moduleId: 'content-m1',
    trackId: 'content',
    title: 'What Makes Content Perform',
    subtitle: 'It\'s rarely luck — it\'s a repeatable pattern',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'Performance is a formula, not magic',
        body: 'High-performing content usually shares three traits: a strong hook, a clear payoff, and a reason to engage (comment, save, or share). Miss any one and reach suffers, no matter how nice the production is.',
        bullets: [
          'Hook: earns the first 2 seconds of attention',
          'Payoff: delivers on what the hook promised',
          'Engagement trigger: gives a reason to comment, save, or share',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'A beautifully shot video gets almost no views. What\'s the most likely culprit?',
          options: [
            'The lighting wasn\'t good enough',
            'The hook failed to earn attention in the first couple seconds',
            'It was posted on the wrong day',
            'The video was too short',
          ],
          correctIndex: 1,
          correctFeedback: 'Right — production quality rarely saves a weak hook. The first 2 seconds do most of the work.',
          incorrectFeedback: 'Reconsider — a weak hook is the most common reason well-made content still underperforms.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'High production value is generally more important than a strong hook for performance.',
          correctAnswer: false,
          correctFeedback: 'Correct — hook strength consistently outweighs production polish for reach.',
          incorrectFeedback: 'False — a strong hook matters more than polish. Plenty of rough, high-performing content proves this.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'short',
          prompt: 'Think of a piece of content you remember well. What was its hook, and what did it pay off?',
          placeholder: 'e.g. "I got scammed out of $4,000 — here\'s exactly how" — the hook promised a specific, dramatic story, and it delivered.',
          guidance: 'A strong answer names the actual hook line/moment and explains what payoff it delivered on.',
        },
      },
    ],
  },
  {
    id: 'content-m1-l2',
    moduleId: 'content-m1',
    trackId: 'content',
    title: 'Hooks That Stop the Scroll',
    subtitle: 'You have about two seconds. Use them.',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'A hook creates curiosity, tension, or a promise',
        body: 'If the first line or first frame doesn\'t do one of those three things, most viewers scroll past — no matter how good the rest is.',
        bullets: [
          'Call out the exact person you\'re talking to ("If you run a small skincare brand...")',
          'Promise a specific, useful outcome',
          'Open a loop the viewer needs closed ("Here\'s the mistake killing your reach")',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'Which hook is strongest for a video about pricing freelance work?',
          options: [
            'Hi everyone, today\'s video is about pricing!',
            'I used to undercharge by $2,000 a month — here\'s the exact fix',
            'Pricing is important for freelancers to think about',
            'Let\'s talk about money and freelancing today',
          ],
          correctIndex: 1,
          correctFeedback: 'Right — specific number, personal stakes, and a promised fix. That\'s a real hook.',
          incorrectFeedback: 'Try again — the strongest hook has a specific number and a clear payoff, not a generic intro.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'A hook that opens an unanswered question tends to perform better than one that gives everything away upfront.',
          correctAnswer: true,
          correctFeedback: 'Correct — an open loop creates curiosity that keeps people watching to get the answer.',
          incorrectFeedback: 'Actually true — hooks that withhold the answer (open loops) generally hold attention longer.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'short',
          prompt: 'Write a scroll-stopping hook (first line only) for a video promoting a local coffee shop\'s new drink.',
          placeholder: 'e.g. This $6 drink is why our line is out the door every morning...',
          guidance: 'A strong answer creates curiosity or promises something specific — not a generic "check out our new drink."',
        },
      },
    ],
  },
  {
    id: 'content-m1-l3',
    moduleId: 'content-m1',
    trackId: 'content',
    title: 'Formats Working Right Now',
    subtitle: 'What\'s actually earning reach in 2025',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'The current landscape favors raw over polished',
        body: 'Right now, unpolished, native-feeling content ("shot on phone" energy) consistently outperforms heavily produced ads. Formats like POV, "get ready with me" narration, and text-on-screen storytelling are earning strong reach.',
        bullets: [
          'Native-feeling, low-production content often beats polished ads',
          'Text-on-screen storytelling helps silent/muted viewing (most social video is watched muted)',
          'Trends shift fast — the underlying skill (a good hook, a real payoff) doesn\'t',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'Why does text-on-screen matter so much for short-form video right now?',
          options: [
            'It looks more professional',
            'Most social video is watched with the sound off',
            'It\'s required by every platform',
            'It has no real impact',
          ],
          correctIndex: 1,
          correctFeedback: 'Right — a huge share of video is watched muted, so on-screen text often carries the message.',
          incorrectFeedback: 'Not quite — the real reason is that most viewers watch with sound off, so text carries the story.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'Heavily polished, ad-like production is currently the top-performing style on most short-form platforms.',
          correctAnswer: false,
          correctFeedback: 'Correct — raw, native-feeling content is currently outperforming polished ad-style production in most feeds.',
          incorrectFeedback: 'False — right now, raw and native-feeling content tends to outperform heavily polished production.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'short',
          prompt: 'Describe one piece of "raw" or unpolished content you\'ve seen perform surprisingly well, and why you think it worked.',
          placeholder: 'e.g. A shaky, one-take video of someone reacting to a bad customer review — felt real and unscripted.',
          guidance: 'A strong answer names a specific, believable example and connects it to why authenticity or rawness worked there.',
        },
      },
    ],
  },
  {
    id: 'content-m1-l4',
    moduleId: 'content-m1',
    trackId: 'content',
    title: 'Building a Content Idea Bank',
    subtitle: 'Never stare at a blank page again',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'Ideas come from patterns, not inspiration',
        body: 'Instead of waiting for a spark, build an ongoing "idea bank": recurring questions from your audience, common myths in your niche, and small wins worth sharing. Pull from it whenever you sit down to plan.',
        bullets: [
          'Every DM or comment question is a potential post idea',
          'Myths and misconceptions in your niche make strong educational hooks',
          'Small, specific wins ("here\'s what happened when...") often outperform big vague advice',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'What\'s the most sustainable source of new content ideas over time?',
          options: [
            'Waiting for random inspiration to strike',
            'An ongoing list built from real audience questions, myths, and small wins',
            'Copying whatever a competitor posted last',
            'Posting only when something goes viral elsewhere',
          ],
          correctIndex: 1,
          correctFeedback: 'Right — a running idea bank fed by real audience signals is far more sustainable than waiting for inspiration.',
          incorrectFeedback: 'Reconsider — the sustainable source is an ongoing idea bank, not inspiration or copying.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'A comment or DM asking a common question is generally a weak source of content ideas.',
          correctAnswer: false,
          correctFeedback: 'Correct — real audience questions are one of the strongest, most reliable content idea sources.',
          incorrectFeedback: 'False — real audience questions are actually one of the best sources of content ideas.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'short',
          prompt: 'Write 3 content idea bank entries for a niche of your choice (a question, a myth, and a small win).',
          placeholder: 'Question: "How long does X take?"\nMyth: "You need expensive gear to start"\nWin: "Client went from 0 to 50 bookings in a month"',
          guidance: 'A strong answer has 3 genuinely distinct entries that could each become a real post.',
        },
      },
    ],
  },

  // MODULE 2 — Writing for Social
  {
    id: 'content-m2-l1',
    moduleId: 'content-m2',
    trackId: 'content',
    title: 'Captions That Do Real Work',
    subtitle: 'A caption isn\'t decoration — it\'s a tool',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'Every caption has a job',
        body: 'A caption should either add context the visual can\'t, deepen the hook, or drive a specific action. "Cute pic 📸" wastes prime real estate that could be doing real work.',
        bullets: [
          'First line repeats or extends the hook — most captions get cut off after 1-2 lines',
          'Middle adds context, story, or value the image/video alone can\'t',
          'Last line drives one clear action',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'Why does the first line of a caption matter so much?',
          options: [
            'It\'s required to be a certain length',
            'Most platforms truncate captions after 1-2 lines until tapped "more"',
            'The algorithm reads it for keywords only',
            'It doesn\'t actually matter much',
          ],
          correctIndex: 1,
          correctFeedback: 'Right — since captions get cut off, the first line has to earn the tap to "see more."',
          incorrectFeedback: 'Not quite — the real reason is that captions are truncated, so the first line has to earn attention.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'A caption\'s only real purpose is to describe what\'s in the image or video.',
          correctAnswer: false,
          correctFeedback: 'Correct — a good caption adds context, story, or a call to action, not just a description.',
          incorrectFeedback: 'False — captions should add something the visual alone can\'t, not just describe it.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'short',
          prompt: 'Rewrite this weak caption to do more work: "New product just dropped! 🎉"',
          placeholder: 'e.g. "We spent 6 months getting this recipe right — here\'s what changed (and why it\'s worth the wait)."',
          guidance: 'A strong answer adds a hook, some real context or story, and points toward an action — not just an announcement.',
        },
      },
    ],
  },
  {
    id: 'content-m2-l2',
    moduleId: 'content-m2',
    trackId: 'content',
    title: 'Writing CTAs People Actually Follow',
    subtitle: 'A vague CTA gets a vague result',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'Specific asks outperform generic ones',
        body: '"Follow for more" is easy to ignore. A specific, low-friction ask tied to the post\'s content converts far better — because it\'s obvious exactly what to do and why.',
        bullets: [
          'Tie the CTA to the specific content, not a generic catch-all',
          'Make the action tiny: comment one word, save for later, tap the link',
          'Give a reason, not just an instruction',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'Which CTA is strongest for a post listing 5 budgeting tips?',
          options: [
            '"Follow for more!"',
            '"Comment \'BUDGET\' and I\'ll send you the free template"',
            '"Like if you agree"',
            '"Check out my other posts"',
          ],
          correctIndex: 1,
          correctFeedback: 'Right — it\'s specific, tied to the content, and gives a concrete reason to act.',
          incorrectFeedback: 'Reconsider — the strongest CTA is specific to the content and gives a clear reason to take action.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'tf',
          prompt: '"Follow for more" is generally one of the highest-converting calls to action.',
          correctAnswer: false,
          correctFeedback: 'Correct — it\'s so generic that most viewers scroll right past it without acting.',
          incorrectFeedback: 'False — "follow for more" is a weak, generic CTA compared to a specific, content-tied ask.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'short',
          prompt: 'Write a specific CTA for a post sharing a free resource (template, checklist, guide).',
          placeholder: 'e.g. "Comment \'GUIDE\' and I\'ll drop the link in your DMs."',
          guidance: 'A strong answer names a tiny, specific action and a clear reason — not a vague "engage with this post."',
        },
      },
    ],
  },
  {
    id: 'content-m2-l3',
    moduleId: 'content-m2',
    trackId: 'content',
    title: 'Storytelling Frameworks',
    subtitle: 'Structure makes a story land',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'A simple structure beats a rambling story',
        body: 'A reliable framework: Situation (where things stood) → Complication (what went wrong or changed) → Resolution (what happened next) → Lesson (what it means for the reader). It works for captions, video scripts, and case studies alike.',
        bullets: [
          'Situation: set the scene fast, don\'t overexplain',
          'Complication: the tension that makes people want to keep reading/watching',
          'Resolution + lesson: the payoff, tied back to something useful for the audience',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'In the Situation → Complication → Resolution → Lesson framework, what usually creates the "hook" pull?',
          options: ['The situation', 'The complication', 'The resolution', 'The lesson'],
          correctIndex: 1,
          correctFeedback: 'Right — the complication is the tension that makes people want to know what happens next.',
          incorrectFeedback: 'Not quite — the complication is what creates tension and keeps people engaged.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'A good story for social content should skip the "lesson" step and just end on the resolution.',
          correctAnswer: false,
          correctFeedback: 'Correct — tying the story back to a lesson is what makes it useful and shareable, not just entertaining.',
          incorrectFeedback: 'False — the lesson is what turns an anecdote into something genuinely useful to the audience.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'short',
          prompt: 'Outline a short story using Situation → Complication → Resolution → Lesson, one line each.',
          placeholder: 'Situation: ...\nComplication: ...\nResolution: ...\nLesson: ...',
          guidance: 'A strong answer fills in all four steps with something concrete, not generic placeholders.',
        },
      },
    ],
  },
  {
    id: 'content-m2-l4',
    moduleId: 'content-m2',
    trackId: 'content',
    title: 'Finding Your Tone of Voice',
    subtitle: 'Consistency, not perfection',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'Tone is a set of choices, not a personality test',
        body: 'Tone of voice comes down to a handful of concrete choices: formal or casual, short sentences or flowing ones, humor or none, first person or brand voice. Pick a few and apply them consistently.',
        bullets: [
          'Write down 3-4 tone rules (e.g. "casual, short sentences, no corporate jargon")',
          'Consistency builds recognition — people should sense who\'s writing before seeing the name',
          'Tone can flex slightly by platform (LinkedIn vs. TikTok) while staying recognizably "you"',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'What\'s the most practical way to define a brand\'s tone of voice?',
          options: [
            'Leave it undefined and "just write naturally" every time',
            'Write down a few concrete rules (formality, sentence length, humor) and apply them consistently',
            'Copy a competitor\'s tone exactly',
            'Change tone completely with every single post for variety',
          ],
          correctIndex: 1,
          correctFeedback: 'Right — a few concrete, written rules make tone consistent and easy for anyone on the team to follow.',
          incorrectFeedback: 'Reconsider — the practical approach is writing down a few concrete tone rules, not leaving it undefined.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'Tone of voice should be identical across every single platform with zero adjustment.',
          correctAnswer: false,
          correctFeedback: 'Correct — tone can flex slightly by platform while staying recognizably consistent.',
          incorrectFeedback: 'False — tone can adapt slightly per platform (LinkedIn vs. TikTok) while staying core-consistent.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'short',
          prompt: 'Write 3 tone-of-voice rules for a brand (real or made up).',
          placeholder: 'e.g. 1. Casual, like texting a friend. 2. Short sentences, no jargon. 3. Playful but never sarcastic about customers.',
          guidance: 'A strong answer gives 3 concrete, checkable rules — not vague words like "authentic" or "fun."',
        },
      },
    ],
  },

  // MODULE 3 — Visual Content Basics
  {
    id: 'content-m3-l1',
    moduleId: 'content-m3',
    trackId: 'content',
    title: 'Canva Fundamentals',
    subtitle: 'You don\'t need a design degree to look consistent',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'Templates + consistency beat "designed from scratch"',
        body: 'A small set of reusable Canva templates — one per content type — saves hours and keeps a brand looking consistent, even without formal design training.',
        bullets: [
          'Build one template per repeating content type (quote graphic, carousel, testimonial)',
          'Lock in 2-3 brand fonts and a small color set to reuse everywhere',
          'Duplicate and edit beats starting from a blank canvas every time',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'What\'s the fastest way to keep visuals consistent without a design background?',
          options: [
            'Design every post completely from scratch',
            'Build a small set of reusable templates and duplicate them',
            'Use a different font on every single post for variety',
            'Avoid using templates entirely',
          ],
          correctIndex: 1,
          correctFeedback: 'Right — a handful of reusable templates is the fastest path to consistent, professional-looking visuals.',
          incorrectFeedback: 'Reconsider — reusable templates are the practical way to stay consistent without starting from scratch each time.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'Using the same 2-3 fonts and a small color palette across posts generally looks more professional than constant variation.',
          correctAnswer: true,
          correctFeedback: 'Correct — consistency in fonts and color reads as intentional and professional, even without formal design skill.',
          incorrectFeedback: 'Actually true — a locked-in, small set of fonts and colors reads far more professional than constant variety.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'short',
          prompt: 'Name 3 content types you\'d build a reusable template for.',
          placeholder: 'e.g. Quote graphic, carousel cover slide, testimonial card.',
          guidance: 'A strong answer picks 3 genuinely recurring formats that would each get used many times.',
        },
      },
    ],
  },
  {
    id: 'content-m3-l2',
    moduleId: 'content-m3',
    trackId: 'content',
    title: 'Building a Brand Kit',
    subtitle: 'Decide once, reuse everywhere',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'A brand kit is a small, reusable decision set',
        body: 'At minimum, a working brand kit needs 2-3 core colors, 1-2 fonts (a heading font and a body font), and a logo variant that works on both light and dark backgrounds.',
        bullets: [
          'Fewer colors used consistently beats a huge unused palette',
          'One heading font + one body font is usually enough',
          'Test your logo on both light and dark backgrounds before finalizing it',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'What\'s a common beginner mistake when building a brand kit?',
          options: [
            'Choosing too few colors',
            'Picking too many colors and fonts, so nothing feels consistent',
            'Testing the logo on multiple backgrounds',
            'Reusing the same fonts across posts',
          ],
          correctIndex: 1,
          correctFeedback: 'Right — an overloaded palette or too many fonts is the most common way brand kits lose consistency.',
          incorrectFeedback: 'Not quite — the common mistake is too many colors/fonts, which undermines consistency.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'A logo should be tested on both light and dark backgrounds before it\'s considered final.',
          correctAnswer: true,
          correctFeedback: 'Correct — a logo that only works on one background will look broken somewhere eventually.',
          incorrectFeedback: 'Actually true — testing on both light and dark backgrounds avoids a broken-looking logo later.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'short',
          prompt: 'Sketch a mini brand kit: 2-3 colors and 1-2 fonts for a business of your choice.',
          placeholder: 'Colors: deep green, cream, terracotta accent.\nFonts: a bold serif for headings, a clean sans for body.',
          guidance: 'A strong answer keeps the palette small and pairs fonts that would actually look good together.',
        },
      },
    ],
  },
  {
    id: 'content-m3-l3',
    moduleId: 'content-m3',
    trackId: 'content',
    title: 'Image vs. Video: Choosing Right',
    subtitle: 'Match the format to the job',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'Neither format wins every time',
        body: 'Video tends to win for reach and storytelling; static images and carousels tend to win for saves, dwell time, and quick-scan information. Choosing right depends on the goal, not a blanket rule.',
        bullets: [
          'Reach/discovery goal → lean video',
          'Save/reference goal (a checklist, a comparison) → lean static or carousel',
          'When in doubt, plan the content\'s job first, then pick the format',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'A client wants people to save and reference a "5 tools we use" list later. What\'s the better format?',
          options: ['A 30-second fast-cut video', 'A static carousel they can screenshot or save', 'A Story that disappears in 24 hours', 'An audio-only post'],
          correctIndex: 1,
          correctFeedback: 'Right — a saveable, scannable carousel fits a reference-style goal better than fleeting video or Stories.',
          incorrectFeedback: 'Reconsider — for something meant to be saved and referenced later, a carousel outperforms fast, disappearing formats.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'Video is always the better choice regardless of the content\'s goal.',
          correctAnswer: false,
          correctFeedback: 'Correct — the right format depends on the goal; static/carousel content often wins for saves and reference use.',
          incorrectFeedback: 'False — video isn\'t always best. Static and carousel formats often win when the goal is saves or reference.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'short',
          prompt: 'Pick a piece of content and explain whether image or video fits its goal better, and why.',
          placeholder: 'e.g. A "before and after" transformation works better as a single image — the comparison needs to be seen at a glance, not watched.',
          guidance: 'A strong answer ties the format choice to the specific goal of that content, not a general preference.',
        },
      },
    ],
  },
  {
    id: 'content-m3-l4',
    moduleId: 'content-m3',
    trackId: 'content',
    title: 'Thumbnail Principles',
    subtitle: 'The thumbnail is a second hook',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'A thumbnail has to work at a glance, tiny',
        body: 'Thumbnails get seen small, often for a split second, next to dozens of others. High contrast, a clear focal point, and minimal (or zero) cluttered text are what actually get a tap.',
        bullets: [
          'High contrast makes a thumbnail stand out in a crowded feed',
          'One clear focal point beats a busy, cluttered frame',
          'If you use text, keep it to 3-5 words max — it has to read instantly',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'Which thumbnail is most likely to earn a tap in a crowded feed?',
          options: [
            'A busy frame with 4 different focal points and a paragraph of text',
            'A single clear subject, high contrast, and 3-4 words max',
            'A blurry frame grabbed at random from the video',
            'No thumbnail at all',
          ],
          correctIndex: 1,
          correctFeedback: 'Right — clarity and contrast at a glance is what wins in a crowded, fast-scrolling feed.',
          incorrectFeedback: 'Reconsider — the strongest thumbnail is clear, high-contrast, and minimal on text.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'More text on a thumbnail generally performs better than minimal text.',
          correctAnswer: false,
          correctFeedback: 'Correct — thumbnails are seen tiny and fast, so minimal text (3-5 words) reads far better than a lot.',
          incorrectFeedback: 'False — less text (3-5 words max) generally performs better since thumbnails are seen small and fast.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'short',
          prompt: 'Describe a strong thumbnail concept for a video titled "3 Instagram Mistakes Killing Your Reach."',
          placeholder: 'e.g. A shocked facial expression, bold red "3 MISTAKES" text, high contrast background.',
          guidance: 'A strong answer describes a specific visual with high contrast and minimal, punchy text — not just "make it eye-catching."',
        },
      },
    ],
  },
]

export const contentEndTasks: (BuilderEndTask | MultiCaptionEndTask)[] = [
  {
    kind: 'builder',
    id: 'content-m1-task',
    moduleId: 'content-m1',
    trackId: 'content',
    title: 'Content Idea Bank',
    description: 'Build a real idea bank you could pull from for weeks.',
    deliverableType: 'Idea Bank',
    xp: 60,
    brief: 'Brief: Pick a niche (real or fictional). Build a starter idea bank across three sources: audience questions, common myths, and small wins worth sharing.',
    prompts: [
      { label: '3 audience questions worth answering', placeholder: '1. ...\n2. ...\n3. ...' },
      { label: '3 myths or misconceptions in this niche', placeholder: '1. ...\n2. ...\n3. ...' },
      { label: '3 "small win" story ideas', placeholder: '1. ...\n2. ...\n3. ...' },
    ],
  },
  {
    kind: 'multi-caption',
    id: 'content-m2-task',
    moduleId: 'content-m2',
    trackId: 'content',
    title: '5 Captions, 5 Feedback Reports',
    description: 'Write 5 real captions for a brand brief and get instant feedback on each one.',
    deliverableType: 'Caption Set',
    xp: 90,
    count: 5,
    brief:
      'Brief: "Northside Cycles" is a neighborhood bike shop launching a weekend group ride series for beginners. Write 5 captions across formats: an announcement, an educational tip, a behind-the-scenes moment, a testimonial-style post, and a direct CTA post to sign up for the first ride.',
  },
  {
    kind: 'builder',
    id: 'content-m3-task',
    moduleId: 'content-m3',
    trackId: 'content',
    title: 'Mini Brand Kit + Thumbnail Concepts',
    description: 'Design the visual system a client could hand straight to a designer.',
    deliverableType: 'Brand Kit',
    xp: 70,
    brief: 'Brief: Build a mini brand kit and 3 thumbnail concepts for a fictional brand of your choice.',
    prompts: [
      { label: 'Brand colors (2-3) + why they fit', placeholder: 'e.g. Deep green + cream — calm, natural, trustworthy...' },
      { label: 'Font pairing (heading + body)', placeholder: 'e.g. Bold serif headline, clean sans body...' },
      { label: 'Thumbnail concept 1', placeholder: 'Subject, text, and why it stands out...' },
      { label: 'Thumbnail concept 2', placeholder: '...' },
      { label: 'Thumbnail concept 3', placeholder: '...' },
    ],
  },
]
