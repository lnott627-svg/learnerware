import { Sparkles } from 'lucide-react'
import type { BuilderEndTask, Lesson, Module, Track } from '../types'

export const brandTrack: Track = {
  id: 'brand',
  title: 'Personal Branding',
  tagline: 'Turn your own audience into income',
  description: 'Define your brand, build an audience in public, and turn it into real offers.',
  icon: Sparkles,
  pastelIndex: 3,
  moduleIds: ['brand-m1', 'brand-m2', 'brand-m3'],
}

export const brandModules: Module[] = [
  {
    id: 'brand-m1',
    trackId: 'brand',
    title: 'Defining Your Brand',
    description: 'Your niche, your audience, and what you actually stand for.',
    lessonIds: ['brand-m1-l1', 'brand-m1-l2', 'brand-m1-l3', 'brand-m1-l4'],
    endTaskId: 'brand-m1-task',
  },
  {
    id: 'brand-m2',
    trackId: 'brand',
    title: 'Building in Public',
    description: 'What to post about, staying consistent, and growing from zero.',
    lessonIds: ['brand-m2-l1', 'brand-m2-l2', 'brand-m2-l3', 'brand-m2-l4'],
    endTaskId: 'brand-m2-task',
  },
  {
    id: 'brand-m3',
    trackId: 'brand',
    title: 'Monetising Your Brand',
    description: 'Offers, digital products, and the basics of brand deals.',
    lessonIds: ['brand-m3-l1', 'brand-m3-l2', 'brand-m3-l3', 'brand-m3-l4'],
    endTaskId: 'brand-m3-task',
  },
]

export const brandLessons: Lesson[] = [
  // MODULE 1 — Defining Your Brand
  {
    id: 'brand-m1-l1',
    moduleId: 'brand-m1',
    trackId: 'brand',
    title: 'Finding Your Niche',
    subtitle: 'Specific beats "a little bit of everything"',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'Riches are in the niches',
        body: 'A specific, clear niche makes it obvious who should follow you — and makes you memorable in a way "lifestyle content" never will.',
        bullets: [
          'Pick something you can talk about for 100+ posts',
          'Narrow beats broad: "budget skincare for oily skin" beats "beauty"',
          'You can always widen later — starting broad just makes you forgettable now',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'Which niche is most likely to build a clear, engaged following fast?',
          options: [
            '"Lifestyle content"',
            '"Budget meal prep for people who hate cooking"',
            '"A bit of everything — fashion, food, travel, fitness"',
            '"Whatever\'s trending that week"',
          ],
          correctIndex: 1,
          correctFeedback: 'Right — specific and useful beats broad every time when you\'re starting out.',
          incorrectFeedback: 'Try again — broad, catch-all niches make it hard for anyone to know why they should follow you.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'A niche you pick today locks you in permanently with no room to evolve.',
          correctAnswer: false,
          correctFeedback: 'Correct — a niche is a starting focus. Plenty of creators evolve or widen their niche as they grow.',
          incorrectFeedback: 'False — a niche is a starting point, not a permanent cage. It can evolve as you grow.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'short',
          prompt: 'Write a one-sentence niche statement for yourself, real or hypothetical: "I help [who] do [what]."',
          placeholder: 'e.g. I help college students eat healthy on a $50/week grocery budget.',
          guidance: 'A strong answer names a specific audience and a specific outcome, not a vague interest area.',
        },
      },
    ],
  },
  {
    id: 'brand-m1-l2',
    moduleId: 'brand-m1',
    trackId: 'brand',
    title: 'Understanding Your Audience',
    subtitle: 'You can\'t serve someone you haven\'t defined',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'A vague audience gets vague content',
        body: 'Knowing your audience means more than age and location — it means knowing what they\'re struggling with right now, and what they\'d actually stop scrolling for.',
        bullets: [
          'Name the specific problem your audience has today, not a broad demographic',
          'What they\'re struggling with is more useful than who they "are"',
          'If you can\'t picture one real person in your audience, it\'s still too vague',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'Which audience description is most useful for content planning?',
          options: [
            '"Women, 25-45"',
            '"New moms overwhelmed by conflicting sleep-training advice"',
            '"People who like self-improvement"',
            '"Everyone interested in wellness"',
          ],
          correctIndex: 1,
          correctFeedback: 'Right — it names a specific struggle you can build content directly around.',
          incorrectFeedback: 'Reconsider — the most useful audience description names a specific problem, not a broad demographic.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'Age and location alone are usually enough to plan content that truly resonates.',
          correctAnswer: false,
          correctFeedback: 'Correct — knowing the specific problem or struggle matters far more than basic demographics.',
          incorrectFeedback: 'False — demographics alone rarely tell you what content will actually resonate.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'short',
          prompt: 'Describe your audience by their struggle, not their demographics.',
          placeholder: 'e.g. Freelancers who land clients fine but constantly underprice their work out of fear of rejection.',
          guidance: 'A strong answer names a specific struggle or tension, not just age/location/interest labels.',
        },
      },
    ],
  },
  {
    id: 'brand-m1-l3',
    moduleId: 'brand-m1',
    trackId: 'brand',
    title: 'What You Stand For',
    subtitle: 'A point of view makes you memorable',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'Neutral is forgettable',
        body: 'The creators people remember usually have a clear point of view — an opinion, a stance, a way of doing things differently. It doesn\'t need to be controversial, just genuinely yours.',
        bullets: [
          'A point of view is something you\'d defend, not just a topic you cover',
          'It can be as simple as "I believe X shouldn\'t take as long as everyone makes it seem"',
          'Playing it safe on every opinion makes content forgettable, not "professional"',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'Which of these is closest to a genuine point of view (vs. just a topic)?',
          options: [
            '"I post about productivity"',
            '"Most productivity advice ignores that burnout is often a boundaries problem, not a time-management one"',
            '"Productivity content"',
            '"I like talking about getting things done"',
          ],
          correctIndex: 1,
          correctFeedback: 'Right — it takes an actual stance you could defend, not just naming a topic.',
          incorrectFeedback: 'Reconsider — a point of view takes a stance; the others just name a topic area.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'Avoiding any strong opinions is generally the safest way to build a memorable personal brand.',
          correctAnswer: false,
          correctFeedback: 'Correct — playing it completely safe usually makes content forgettable, not more professional.',
          incorrectFeedback: 'False — a totally neutral brand with no point of view tends to be forgettable.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'short',
          prompt: 'Write one point of view (an opinion you\'d actually defend) related to your niche.',
          placeholder: 'e.g. "Most people don\'t need a fancier camera — they need a better first sentence."',
          guidance: 'A strong answer takes an actual stance, not just a restatement of the topic.',
        },
      },
    ],
  },
  {
    id: 'brand-m1-l4',
    moduleId: 'brand-m1',
    trackId: 'brand',
    title: 'Auditing Your Current Presence',
    subtitle: 'Know what story your profile is already telling',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'Your last 9 posts are your first impression',
        body: 'Before posting more, check what a new visitor sees right now. A grid or profile with mixed, unclear messaging confuses people before they even read a caption.',
        bullets: [
          'Look at your last 9-12 posts as a stranger would',
          'Ask: could someone guess your niche and point of view from this alone?',
          'A messy first impression undercuts even great individual posts',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'A new visitor lands on a profile with 9 wildly different topics in the last 9 posts. What\'s the likely effect?',
          options: [
            'It signals versatility and impresses visitors',
            'It confuses visitors about what the account is actually about',
            'It has no real effect either way',
            'It always improves the algorithm\'s ranking',
          ],
          correctIndex: 1,
          correctFeedback: 'Right — a scattered first impression makes it harder for a stranger to decide to follow.',
          incorrectFeedback: 'Reconsider — mixed messaging in your recent posts tends to confuse, not impress, new visitors.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'A quick self-audit of your last several posts is a useful exercise before planning new content.',
          correctAnswer: true,
          correctFeedback: 'Correct — seeing your presence as a stranger would is one of the fastest ways to spot unclear messaging.',
          incorrectFeedback: 'Actually true — auditing recent posts as a stranger would is a fast, useful diagnostic.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'short',
          prompt: 'Imagine a stranger looking at your last few posts (real or hypothetical). What would they think this account is about?',
          placeholder: 'e.g. Honestly, they might think it\'s a mix of travel and productivity — not clearly one or the other.',
          guidance: 'A strong answer is honest, even if the current answer is "it\'s unclear" — that\'s a real, useful finding.',
        },
      },
    ],
  },

  // MODULE 2 — Building in Public
  {
    id: 'brand-m2-l1',
    moduleId: 'brand-m2',
    trackId: 'brand',
    title: 'What to Post About',
    subtitle: 'Turning your niche into an endless content stream',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'Document, don\'t just create',
        body: 'You don\'t need a constant stream of brand-new ideas. Documenting your actual process — what you\'re learning, building, or struggling with right now — is often more relatable and easier to sustain than purely "created" content.',
        bullets: [
          'Documenting (sharing your real process) is more sustainable than pure creation',
          'Struggles and in-progress work often connect more than polished wins',
          'Mix documentation with a few evergreen educational posts for balance',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'What\'s the advantage of "documenting" over purely "creating" content?',
          options: [
            'Documenting requires no effort at all',
            'It\'s more sustainable because it draws from what you\'re already doing',
            'It only works for large brands',
            'There\'s no real difference',
          ],
          correctIndex: 1,
          correctFeedback: 'Right — documenting pulls from real life, which is far more sustainable than inventing new ideas from scratch every time.',
          incorrectFeedback: 'Not quite — the real advantage is sustainability, since documenting draws from what\'s already happening.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'Sharing an in-progress struggle typically connects less than a fully polished win.',
          correctAnswer: false,
          correctFeedback: 'Correct — in-progress, honest struggles often connect more than polished, "finished" wins.',
          incorrectFeedback: 'False — real, in-progress struggles frequently connect more than polished wins.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'short',
          prompt: 'Describe one thing happening in your life or work right now that could become a "documenting" post.',
          placeholder: 'e.g. Struggling to get my first client to respond to a follow-up — could turn into a post about handling silence after outreach.',
          guidance: 'A strong answer names something real and current, not a hypothetical, polished achievement.',
        },
      },
    ],
  },
  {
    id: 'brand-m2-l2',
    moduleId: 'brand-m2',
    trackId: 'brand',
    title: 'Staying Consistent',
    subtitle: 'Motivation fades — systems don\'t',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'Consistency is a system problem, not a willpower problem',
        body: 'Relying on feeling motivated is why most people stop posting. A simple, low-friction system — a fixed posting day, a running idea list, batching — keeps output steady even on low-motivation weeks.',
        bullets: [
          'A fixed, repeatable schedule beats "whenever I feel inspired"',
          'A running idea list removes the "what do I post" bottleneck',
          'Missing one post occasionally is fine; the system matters more than perfection',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'What\'s the most reliable way to stay consistent long-term?',
          options: [
            'Wait until you feel motivated to post',
            'Build a low-friction system: fixed schedule + running idea list',
            'Post only when something huge happens',
            'Set an unrealistic daily goal and hope for the best',
          ],
          correctIndex: 1,
          correctFeedback: 'Right — a simple system outlasts motivation, which naturally comes and goes.',
          incorrectFeedback: 'Reconsider — a low-friction system beats relying on motivation or waiting for big moments.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'Missing an occasional post is generally more damaging than having no system at all.',
          correctAnswer: false,
          correctFeedback: 'Correct — one missed post rarely matters; having no system is what actually causes accounts to go silent for good.',
          incorrectFeedback: 'False — an occasional missed post is minor. Having no system at all is what causes long-term inconsistency.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'short',
          prompt: 'Describe a simple consistency system you could realistically stick to for 2 months.',
          placeholder: 'e.g. Post 3x/week, fixed days (Mon/Wed/Fri), with a running note of ideas I add to whenever one comes up.',
          guidance: 'A strong answer is specific about frequency and includes a way to avoid the "what do I post" bottleneck.',
        },
      },
    ],
  },
  {
    id: 'brand-m2-l3',
    moduleId: 'brand-m2',
    trackId: 'brand',
    title: 'Growing From Zero',
    subtitle: 'Every large account started at zero followers',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'Early growth comes from a loop, not luck',
        body: 'Starting from zero, growth comes from a repeatable loop: post something genuinely useful or interesting → a few people engage → the algorithm shows it to more people → a fraction of them follow. Repeat, and results compound.',
        bullets: [
          'Early on, engaging in your niche\'s existing communities matters as much as posting',
          'A handful of genuinely good posts beat a large volume of average ones',
          'Growth compounds — the first 100 followers are the slowest, hardest part',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'A brand-new account is stuck at 40 followers after a month. What\'s a reasonable next step?',
          options: [
            'Give up — it\'s clearly not working',
            'Keep posting useful content and actively engage in relevant communities',
            'Buy followers to look more credible',
            'Post 10 times a day regardless of quality',
          ],
          correctIndex: 1,
          correctFeedback: 'Right — early growth is slow by nature; consistency plus real engagement is the sustainable path.',
          incorrectFeedback: 'Reconsider — the healthy path is continued useful posting plus real engagement, not shortcuts or giving up.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'The first 100 followers are usually the fastest and easiest part of growing an account.',
          correctAnswer: false,
          correctFeedback: 'Correct — early growth is usually the slowest, since there\'s no existing audience or momentum yet.',
          incorrectFeedback: 'False — the first 100 followers are typically the hardest and slowest part of growth, not the easiest.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'short',
          prompt: 'Name one community or space (real or hypothetical) where your target audience already hangs out, and how you\'d show up there.',
          placeholder: 'e.g. A subreddit for new freelancers — I\'d answer questions genuinely, not just drop my own links.',
          guidance: 'A strong answer names a specific, real space and a genuine way to add value there, not just self-promotion.',
        },
      },
    ],
  },
  {
    id: 'brand-m2-l4',
    moduleId: 'brand-m2',
    trackId: 'brand',
    title: 'Handling Silence and Slow Weeks',
    subtitle: 'Every creator hits a plateau',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'Plateaus are normal, not a sign to quit',
        body: 'Growth isn\'t linear — expect flat or even declining weeks. The creators who eventually break through are usually the ones who kept a sustainable system running through the quiet weeks.',
        bullets: [
          'A flat week doesn\'t mean the strategy is broken — check trends over months, not days',
          'Revisit your top-performing posts during a plateau for clues, instead of abandoning the niche entirely',
          'Burnout, not lack of talent, is the most common reason people quit too early',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'An account has had a flat week after 2 months of steady growth. What\'s the healthiest response?',
          options: [
            'Assume the whole strategy has failed and start over completely',
            'Look at longer-term trends and revisit what\'s worked before making big changes',
            'Quit posting entirely',
            'Switch niches immediately',
          ],
          correctIndex: 1,
          correctFeedback: 'Right — one flat week is normal; look at the longer trend before making a big strategic change.',
          incorrectFeedback: 'Reconsider — a single flat week rarely justifies abandoning a strategy that\'s otherwise been working.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'Growth on social platforms is typically linear and steady week over week.',
          correctAnswer: false,
          correctFeedback: 'Correct — growth is usually uneven, with plateaus and spikes, not a steady straight line.',
          incorrectFeedback: 'False — growth is rarely linear. Plateaus and uneven weeks are completely normal.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'short',
          prompt: 'Write one thing you\'d tell yourself during a slow, flat growth week to stay consistent.',
          placeholder: 'e.g. "This is normal — check the 3-month trend, not this week, before changing anything."',
          guidance: 'A strong answer is specific and actionable, not just generic encouragement like "stay positive."',
        },
      },
    ],
  },

  // MODULE 3 — Monetising Your Brand
  {
    id: 'brand-m3-l1',
    moduleId: 'brand-m3',
    trackId: 'brand',
    title: 'Choosing Your First Offer',
    subtitle: 'An audience isn\'t income until there\'s something to buy',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'The best first offer solves a problem you already talk about',
        body: 'Your first offer should be a natural extension of the content you already make — not a random pivot. If you constantly get the same question in comments or DMs, that\'s usually your first offer.',
        bullets: [
          'Look at your most-asked question or most-requested help — that\'s a signal',
          'A small, focused first offer beats a huge, unfocused one',
          'Services (1:1 help, done-for-you work) are usually the fastest first offer to launch',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'A creator constantly gets DMs asking "can you just make my content calendar for me?" What\'s a smart first offer?',
          options: [
            'A completely unrelated product',
            'A paid content calendar service or template, directly answering that recurring ask',
            'Nothing — DMs don\'t count as market research',
            'A huge course covering everything they know',
          ],
          correctIndex: 1,
          correctFeedback: 'Right — a recurring, specific ask is one of the clearest signals for a first offer.',
          incorrectFeedback: 'Reconsider — the smartest first offer directly answers a recurring, specific request you\'re already getting.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'A large, broad first offer covering everything you know is usually the smartest way to start monetizing.',
          correctAnswer: false,
          correctFeedback: 'Correct — a small, focused first offer is easier to build, sell, and validate than a broad, unfocused one.',
          incorrectFeedback: 'False — a small, focused offer is much easier to launch and sell than a huge, all-encompassing one.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'short',
          prompt: 'Name a question or request you (or a hypothetical creator) gets repeatedly, and what offer it could become.',
          placeholder: 'e.g. "How do you edit your Reels so fast?" could become a paid editing preset pack or a short course.',
          guidance: 'A strong answer ties a specific, recurring request directly to a specific offer idea.',
        },
      },
    ],
  },
  {
    id: 'brand-m3-l2',
    moduleId: 'brand-m3',
    trackId: 'brand',
    title: 'Digital Products 101',
    subtitle: 'Make it once, sell it repeatedly',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'Digital products scale differently than services',
        body: 'Unlike 1:1 services, a digital product (a template, a mini-course, a preset pack) is built once and can sell many times without more of your time per sale — but it usually takes real upfront effort and an audience that already trusts you.',
        bullets: [
          'Templates, guides, and preset packs are common low-effort-to-start digital products',
          'A digital product needs an audience that already trusts your expertise in that specific area',
          'Start smaller (a single template) before building a full course',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'What\'s the main tradeoff of a digital product compared to a 1:1 service?',
          options: [
            'Digital products always sell instantly with no audience needed',
            'It takes more upfront work but doesn\'t require more of your time per additional sale',
            'Digital products are always worse to sell',
            'There\'s no meaningful difference',
          ],
          correctIndex: 1,
          correctFeedback: 'Right — more upfront effort, but it scales without linearly consuming more of your time.',
          incorrectFeedback: 'Not quite — the real tradeoff is upfront effort in exchange for scalability without more time per sale.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'A digital product usually sells well even without any existing trust or audience.',
          correctAnswer: false,
          correctFeedback: 'Correct — digital products generally need at least some existing trust or audience to sell, unlike a cold-outreach service.',
          incorrectFeedback: 'False — digital products typically need existing audience trust to sell well; they rarely work cold.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'short',
          prompt: 'Describe one small, specific digital product you could realistically create first.',
          placeholder: 'e.g. A Notion content calendar template with built-in prompts, based on what I already teach.',
          guidance: 'A strong answer is small and specific enough to actually build in a reasonable amount of time, not a huge course.',
        },
      },
    ],
  },
  {
    id: 'brand-m3-l3',
    moduleId: 'brand-m3',
    trackId: 'brand',
    title: 'Brand Deals Basics',
    subtitle: 'What brands actually look for',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'Brands buy trust and fit, not just reach',
        body: 'A smaller, highly engaged creator in the right niche often outperforms a huge, generic account for a brand\'s actual goal. Fit and engagement rate matter more than raw follower count.',
        bullets: [
          'Engagement rate matters more than raw follower count',
          'Niche fit — does your audience match their customer?',
          'Content quality and consistency = lower risk for the brand',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'A skincare brand is choosing between two creators. Who\'s the safer bet?',
          options: [
            '500k generic lifestyle followers, 0.5% engagement',
            '12k skincare-focused followers, 6% engagement',
            'Whoever has the most followers, always',
            'Whoever posts the most often, regardless of niche',
          ],
          correctIndex: 1,
          correctFeedback: 'Right — niche fit plus strong engagement usually beats raw reach for actual results.',
          incorrectFeedback: 'Reconsider — brands increasingly favor engaged, niche-relevant audiences over raw follower count.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'A smaller, highly engaged, niche-relevant audience can outperform a much larger generic one for brand deals.',
          correctAnswer: true,
          correctFeedback: 'Correct — brands care about audience fit and engagement, which a smaller focused account can deliver better.',
          incorrectFeedback: 'Actually true — a smaller, well-matched, engaged audience often outperforms a huge generic one.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'short',
          prompt: 'Name one brand that would be a natural fit for your (real or hypothetical) niche, and why.',
          placeholder: 'e.g. A reusable water bottle brand — my audience is all budget-fitness focused.',
          guidance: 'A strong answer explains the actual audience overlap, not just "it seems related."',
        },
      },
    ],
  },
  {
    id: 'brand-m3-l4',
    moduleId: 'brand-m3',
    trackId: 'brand',
    title: 'Pricing Your First Offer',
    subtitle: 'Undercharging is the default mistake — expect it, then fix it',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'Price for the outcome, not just the effort',
        body: 'New creators almost always underprice their first offer out of fear no one will pay. Anchor pricing to the value or transformation delivered, not just how long it took you to make.',
        bullets: [
          'It\'s normal (and fine) to price your very first version lower to validate demand',
          'Raise prices as proof (testimonials, results, demand) builds up',
          'A price that feels slightly uncomfortable to say out loud is often closer to correct than one that feels "safe"',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'What\'s the most common pricing mistake new creators make with their first offer?',
          options: [
            'Pricing too high from the very start',
            'Underpricing out of fear no one will pay',
            'Not pricing at all',
            'Pricing exactly like every competitor',
          ],
          correctIndex: 1,
          correctFeedback: 'Right — underpricing out of fear is by far the most common first-offer mistake.',
          incorrectFeedback: 'Not quite — the far more common mistake for new creators is underpricing, not overpricing.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'A price that feels slightly uncomfortable to say out loud is always a sign it\'s wrong.',
          correctAnswer: false,
          correctFeedback: 'Correct — a little discomfort is often a sign of underconfidence, not that the price is actually wrong.',
          incorrectFeedback: 'False — mild discomfort saying a price out loud is common and often just reflects underconfidence, not an actual pricing error.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'short',
          prompt: 'Pick your first offer idea from earlier in this module and set a starting price for it. Why that number?',
          placeholder: 'e.g. $45 for the template pack — priced to be an easy yes while still feeling like real value, based on similar products I\'ve seen.',
          guidance: 'A strong answer gives a specific number and a real reason behind it, not just a guess.',
        },
      },
    ],
  },
]

export const brandEndTasks: BuilderEndTask[] = [
  {
    kind: 'builder',
    id: 'brand-m1-task',
    moduleId: 'brand-m1',
    trackId: 'brand',
    title: 'Personal Brand Statement',
    description: 'Put your niche, audience, and point of view into one clear document.',
    deliverableType: 'Brand Statement',
    xp: 60,
    brief: 'Write the foundational statement you\'d actually use to introduce yourself as a creator — real or aspirational.',
    prompts: [
      { label: 'Your niche statement', placeholder: 'I help [who] do [what]...' },
      { label: 'Your audience\'s specific struggle', placeholder: 'Not demographics — what they\'re actually dealing with...' },
      { label: 'Your point of view', placeholder: 'An opinion or stance you\'d actually defend...' },
    ],
  },
  {
    kind: 'builder',
    id: 'brand-m2-task',
    moduleId: 'brand-m2',
    trackId: 'brand',
    title: '30-Day Content Plan',
    description: 'Plan a real month of building in public.',
    deliverableType: 'Content Plan',
    xp: 80,
    brief: 'Brief: Plan your first 30 days of consistent posting, mixing documentation and educational content, for your niche from Module 1.',
    prompts: [
      { label: 'Posting cadence for the month', placeholder: 'e.g. 4x/week, fixed days...' },
      { label: 'Week 1-2 focus (documenting ideas)', placeholder: 'e.g. Sharing the process of launching my first offer...' },
      { label: 'Week 3-4 focus (educational ideas)', placeholder: 'e.g. Teaching the top 3 questions my audience asks most...' },
      { label: 'One community or space you\'ll actively engage in', placeholder: 'e.g. A specific subreddit, Discord, or hashtag community...' },
    ],
  },
  {
    kind: 'builder',
    id: 'brand-m3-task',
    moduleId: 'brand-m3',
    trackId: 'brand',
    title: 'Offer & Monetization Plan',
    description: 'Turn your brand into a real, priced first offer.',
    deliverableType: 'Monetization Plan',
    xp: 70,
    brief: 'Brief: Design the first thing you\'d actually sell to your audience.',
    prompts: [
      { label: 'First offer (what it is)', placeholder: 'e.g. A done-for-you content calendar template...' },
      { label: 'What recurring request or problem it solves', placeholder: 'e.g. The #1 DM I get is "how do you plan a month of content?"' },
      { label: 'Starting price + reasoning', placeholder: 'e.g. $45 — easy yes, still feels like real value...' },
      { label: 'One brand or partner that could be a natural fit later', placeholder: 'e.g. A productivity app with an overlapping audience...' },
    ],
  },
]
