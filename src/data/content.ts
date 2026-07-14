import type { Lesson, Track, Unit, Template } from './types'

export const tracks: Track[] = [
  {
    id: 'smm',
    title: 'Social Media Management',
    tagline: 'Run real accounts for real clients',
    description:
      'Learn to grow and manage Instagram & TikTok accounts, then prove it with a client-ready portfolio.',
    emoji: '📱',
    color: 'brand',
    unitIds: ['smm-1', 'smm-2'],
  },
  {
    id: 'freelance',
    title: 'Freelance & Client Work',
    tagline: 'Land clients and get paid on time',
    description:
      'Master outreach, pricing, and proposals so you can land your first paying client with confidence.',
    emoji: '💼',
    color: 'streak',
    unitIds: ['freelance-1', 'freelance-2'],
  },
  {
    id: 'creator',
    title: 'Creator Monetization',
    tagline: 'Turn your own audience into income',
    description:
      'Build a personal brand, grow real fans, and land brand deals that actually pay.',
    emoji: '🚀',
    color: 'xp',
    unitIds: ['creator-1', 'creator-2'],
  },
]

export const units: Unit[] = [
  {
    id: 'smm-1',
    trackId: 'smm',
    title: 'Instagram & TikTok Fundamentals',
    description: 'The core mechanics behind content that actually gets seen.',
    lessonIds: ['smm-1-1', 'smm-1-2', 'smm-1-3'],
    portfolioPiece: {
      id: 'pp-smm-1',
      title: '30-Day Content Calendar',
      description: 'A month of content pillars and post ideas you can hand straight to a client.',
      deliverableType: 'Content Calendar',
    },
  },
  {
    id: 'smm-2',
    trackId: 'smm',
    title: 'Managing a Client Account',
    description: 'The day-to-day work of actually running someone else\'s page.',
    lessonIds: ['smm-2-1', 'smm-2-2', 'smm-2-3'],
    portfolioPiece: {
      id: 'pp-smm-2',
      title: 'Client Analytics Report',
      description: 'A mock monthly report you can screenshot and show in a pitch.',
      deliverableType: 'Analytics Report',
    },
  },
  {
    id: 'freelance-1',
    trackId: 'freelance',
    title: 'Landing Your First Client',
    description: 'Find people who\'ll actually pay and reach out the right way.',
    lessonIds: ['freelance-1-1', 'freelance-1-2', 'freelance-1-3'],
    portfolioPiece: {
      id: 'pp-freelance-1',
      title: 'Outreach + Pricing Sheet',
      description: 'A cold DM template and a starter pricing sheet ready to send.',
      deliverableType: 'Outreach Kit',
    },
  },
  {
    id: 'freelance-2',
    trackId: 'freelance',
    title: 'Proposals & Contracts',
    description: 'Turn interest into a signed, paid gig.',
    lessonIds: ['freelance-2-1', 'freelance-2-2', 'freelance-2-3'],
    portfolioPiece: {
      id: 'pp-freelance-2',
      title: 'One-Page Client Proposal',
      description: 'A clean proposal template you can customize for any client.',
      deliverableType: 'Proposal',
    },
  },
  {
    id: 'creator-1',
    trackId: 'creator',
    title: 'Building a Personal Brand',
    description: 'Pick a lane and build an audience that actually sticks around.',
    lessonIds: ['creator-1-1', 'creator-1-2', 'creator-1-3'],
    portfolioPiece: {
      id: 'pp-creator-1',
      title: 'Personal Brand One-Pager',
      description: 'A single page that sums up who you are and why people should follow.',
      deliverableType: 'Brand One-Pager',
    },
  },
  {
    id: 'creator-2',
    trackId: 'creator',
    title: 'Brand Deals & Sponsorships',
    description: 'Get brands to notice you — and pay you fairly.',
    lessonIds: ['creator-2-1', 'creator-2-2', 'creator-2-3'],
    portfolioPiece: {
      id: 'pp-creator-2',
      title: 'Media Kit Draft',
      description: 'A one-page media kit you can send to brands today.',
      deliverableType: 'Media Kit',
    },
  },
]

export const lessons: Lesson[] = [
  // ---------------- SMM UNIT 1 ----------------
  {
    id: 'smm-1-1',
    unitId: 'smm-1',
    trackId: 'smm',
    title: 'How the Algorithm Actually Works',
    subtitle: 'Stop guessing. Start posting on purpose.',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'The algorithm isn\'t magic',
        body: 'Every platform is trying to keep people scrolling. It pushes content that gets a fast, strong reaction — and buries content that doesn\'t.',
        bullets: [
          'Watch time & rewatches matter more than likes',
          'Shares and saves signal "this is worth showing to more people"',
          'The first 3 seconds decide if a post lives or dies',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'Which signal do platforms usually weight the heaviest?',
          options: ['Number of likes', 'Watch time / rewatches', 'Follower count of the poster', 'Number of hashtags used'],
          correctIndex: 1,
          correctFeedback: 'Exactly — retention is king. A rewatched 10-second clip beats a liked, skipped one.',
          incorrectFeedback: 'Not quite. Likes are easy but weak. Platforms care most about whether people actually stay and watch.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'fill',
          prompt: 'Fill in the blank',
          template: 'A save or a share tells the algorithm "this content is ___ enough to send to someone else."',
          options: ['pretty', 'valuable', 'long', 'recent'],
          correctAnswer: 'valuable',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'sort',
          prompt: 'Sort each metric by how strongly it signals "keep showing this."',
          leftLabel: 'Weak signal',
          rightLabel: 'Strong signal',
          items: [
            { text: 'Like', side: 'left' },
            { text: 'Follower count', side: 'left' },
            { text: 'Save', side: 'right' },
            { text: 'Share to a friend', side: 'right' },
            { text: 'Full watch-through', side: 'right' },
            { text: 'Profile visit after post', side: 'left' },
          ],
        },
      },
      {
        kind: 'microtask',
        title: 'Do this now',
        prompt: 'Open Instagram or TikTok and find one post in your niche with unusually high comments relative to likes. Write one sentence on why you think it triggered so many replies.',
        placeholder: 'e.g. It asked a controversial either/or question in the caption, so people argued in the comments...',
        platform: 'Instagram / TikTok',
      },
    ],
  },
  {
    id: 'smm-1-2',
    unitId: 'smm-1',
    trackId: 'smm',
    title: 'Hooks That Stop the Scroll',
    subtitle: 'You have 3 seconds. Use them.',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'The hook is the whole job',
        body: 'If the first line or first frame doesn\'t create curiosity, tension, or a promise, nobody sees the rest — no matter how good it is.',
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
          prompt: 'Which hook is strongest for a Reel about pricing freelance work?',
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
          type: 'order',
          prompt: 'Put these lines in order to build one strong hook for a Reel.',
          helper: 'Think: grab attention → make it specific → promise the payoff.',
          items: [
            'Nobody tells new freelancers this',
            'I lost a $3,000 client over one line in a DM',
            'Here\'s exactly what I\'d say instead',
          ],
        },
      },
      {
        kind: 'microtask',
        title: 'Do this now',
        prompt: 'Write a scroll-stopping hook (first line only) for an Instagram Reel promoting a local coffee shop\'s new drink.',
        placeholder: 'e.g. This $6 drink is why our line is out the door every morning...',
        platform: 'Instagram Reels',
      },
    ],
  },
  {
    id: 'smm-1-3',
    unitId: 'smm-1',
    trackId: 'smm',
    title: 'Content Pillars & Cadence',
    subtitle: 'Never run out of ideas again',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'Pillars keep you consistent',
        body: 'A content pillar is a recurring theme — usually 3 to 5 — that every post fits into. It makes planning fast and keeps an account feeling focused instead of random.',
        bullets: [
          'Educational — teach something in the niche',
          'Behind-the-scenes — build trust and relatability',
          'Social proof — testimonials, results, reactions',
          'Promotional — the actual offer, sparingly',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'sort',
          prompt: 'A skincare brand posts these ideas. Sort each into its pillar.',
          leftLabel: 'Educational',
          rightLabel: 'Behind-the-scenes',
          items: [
            { text: '"3 ingredients to avoid if you have oily skin"', side: 'left' },
            { text: 'A day filming and packing orders in the studio', side: 'right' },
            { text: '"Why your moisturizer isn\'t absorbing"', side: 'left' },
            { text: 'Founder rambling about a bad supplier day', side: 'right' },
          ],
        },
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'A client wants to post daily but has no team. What\'s the best first move?',
          options: [
            'Tell them daily posting isn\'t worth discussing',
            'Pick 3-4 pillars and batch-create a week of content in one sitting',
            'Post whatever comes to mind each morning',
            'Only post when something big happens',
          ],
          correctIndex: 1,
          correctFeedback: 'Exactly — pillars plus batching is how solo managers hit consistency without burning out.',
          incorrectFeedback: 'Not quite — the sustainable answer is pillars + batching content ahead of time, not winging it or refusing to plan.',
        },
      },
      {
        kind: 'microtask',
        title: 'Do this now',
        prompt: 'Pick a real (or imaginary) small business. Name 3 content pillars for their account, one line each.',
        placeholder: '1. Educational: quick tips on...\n2. BTS: ...\n3. Social proof: ...',
        platform: 'Content Strategy',
      },
    ],
  },

  // ---------------- SMM UNIT 2 ----------------
  {
    id: 'smm-2-1',
    unitId: 'smm-2',
    trackId: 'smm',
    title: 'Reading Analytics Like a Pro',
    subtitle: 'Numbers that actually mean something',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'Vanity metrics vs. real metrics',
        body: 'Follower count feels good but rarely pays the bills. Clients care about metrics tied to their actual goal — leads, sales, or brand reach.',
        bullets: [
          'Reach = new eyeballs on the content',
          'Engagement rate = reach quality, not just volume',
          'Profile visits + link clicks = intent to act',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'A client\'s follower count is flat but profile visits and DMs are way up. What\'s the honest read?',
          options: [
            'The account is failing, pause everything',
            'Content is working — it\'s driving intent even without new follows',
            'Only follower count matters, this is a problem',
            'This means the content should stop mentioning the product',
          ],
          correctIndex: 1,
          correctFeedback: 'Right — profile visits and DMs are stronger buying signals than raw follower growth.',
          incorrectFeedback: 'Reconsider — follower count is a vanity metric. Rising profile visits and DMs are a good sign, not a bad one.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'fill',
          prompt: 'Fill in the blank',
          template: 'Engagement ___ (engagement divided by reach) tells you if content resonated, not just how many people saw it.',
          options: ['rate', 'count', 'speed', 'length'],
          correctAnswer: 'rate',
        },
      },
      {
        kind: 'microtask',
        title: 'Do this now',
        prompt: 'Pick any public Instagram or TikTok post. Note its likes, comments, and estimate engagement rate roughly (engagement ÷ followers).',
        placeholder: 'e.g. 4,200 likes + 180 comments on a 90k account ≈ 4.9% engagement rate',
        platform: 'Instagram / TikTok Insights',
      },
    ],
  },
  {
    id: 'smm-2-2',
    unitId: 'smm-2',
    trackId: 'smm',
    title: 'Comments & DMs On-Brand',
    subtitle: 'Every reply is a mini brand impression',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'Community management is part of the job',
        body: 'Fast, on-brand replies build trust and often turn into sales. As a manager, you set the tone — and you decide what gets escalated to the client.',
        bullets: [
          'Reply fast to real questions — speed signals a real business',
          'Match the brand voice, not your own',
          'Escalate anything legal, angry, or press-related immediately',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'order',
          prompt: 'A DM asks "do you ship internationally?" Put your reply steps in the right order.',
          items: [
            'Confirm shipping availability for their country',
            'Give a clear next step (link or "reply here to order")',
            'Thank them for reaching out',
          ],
        },
      },
      {
        kind: 'question',
        question: {
          type: 'sort',
          prompt: 'Sort each DM: handle it yourself, or escalate to the client?',
          leftLabel: 'Reply yourself',
          rightLabel: 'Escalate to client',
          items: [
            { text: '"What sizes do you carry?"', side: 'left' },
            { text: '"I want a refund, this is fraud"', side: 'right' },
            { text: '"Love this, where\'s it from?"', side: 'left' },
            { text: 'A journalist asking for a comment', side: 'right' },
          ],
        },
      },
      {
        kind: 'microtask',
        title: 'Do this now',
        prompt: 'Write an on-brand, friendly reply to this DM: "hey does this actually work or is it just marketing lol"',
        placeholder: 'e.g. Ha, fair question! Here\'s what real customers say after 30 days...',
        platform: 'Instagram DMs',
      },
    ],
  },
  {
    id: 'smm-2-3',
    unitId: 'smm-2',
    trackId: 'smm',
    title: 'Reporting Results to a Client',
    subtitle: 'Show your work, keep the retainer',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'Clients renew when they see clarity',
        body: 'A good report isn\'t a data dump — it\'s a story: what you did, what happened, and what\'s next. Lead with the win, then the number that proves it.',
        bullets: [
          'Headline win first, raw numbers second',
          'Always compare against last month, not just totals',
          'End with 1-2 next steps — never end on a stat',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'sort',
          prompt: 'Sort each line: does it belong at the top of a report, or buried in the appendix?',
          leftLabel: 'Lead with this',
          rightLabel: 'Appendix / raw data',
          items: [
            { text: '"Reach grew 41% after switching to Reels"', side: 'left' },
            { text: 'Full table of every post\'s raw likes', side: 'right' },
            { text: '"3 DMs converted to paying customers"', side: 'left' },
            { text: 'Hour-by-hour posting timestamps', side: 'right' },
          ],
        },
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'What should a monthly report always end with?',
          options: ['A wall of raw numbers', 'An apology for slow weeks', 'Clear next steps for next month', 'Nothing — numbers speak for themselves'],
          correctIndex: 2,
          correctFeedback: 'Exactly — ending on next steps keeps the client looking forward, not just backward.',
          incorrectFeedback: 'Not quite — always close a report with clear next steps, so the client sees forward motion.',
        },
      },
      {
        kind: 'microtask',
        title: 'Do this now',
        prompt: 'Write a one-line "headline win" for a client report, using a made-up but realistic result.',
        placeholder: 'e.g. This month, Reels drove 3x more reach than last month and 5 new inbound DMs.',
        platform: 'Client Reporting',
      },
    ],
  },

  // ---------------- FREELANCE UNIT 1 ----------------
  {
    id: 'freelance-1-1',
    unitId: 'freelance-1',
    trackId: 'freelance',
    title: 'Finding Clients Who\'ll Pay',
    subtitle: 'Stop cold-applying into the void',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'Warm beats cold, almost always',
        body: 'Your first client is far more likely to come from a specific, findable pool of people than a job board full of hundreds of applicants.',
        bullets: [
          'Local businesses with weak or inactive social pages',
          'People in your existing network who own a business',
          'Small creators/brands you already follow and understand',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'You want your first client fast. Where should you start looking?',
          options: [
            'A massive freelance job board with 400 applicants per post',
            'Local businesses near you with outdated or inactive Instagram pages',
            'Only Fortune 500 companies',
            'Wait for clients to find you organically',
          ],
          correctIndex: 1,
          correctFeedback: 'Right — small, local, and visibly under-managed accounts are the easiest first wins.',
          incorrectFeedback: 'Rethink it — crowded job boards and huge companies are the hardest place to land a first client.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'sort',
          prompt: 'Sort each lead by how "warm" (easy to convert) it is.',
          leftLabel: 'Cold',
          rightLabel: 'Warm',
          items: [
            { text: 'Random DM to a huge celebrity account', side: 'left' },
            { text: 'Your cousin\'s small landscaping business', side: 'right' },
            { text: 'A local cafe you actually visit', side: 'right' },
            { text: 'Mass-applying to 100 job listings a day', side: 'left' },
          ],
        },
      },
      {
        kind: 'microtask',
        title: 'Do this now',
        prompt: 'Name one real local business (or person you know) who could use help with their social media. Write why they\'re a good first-client fit.',
        placeholder: 'e.g. The bakery on my street posts once a month and has no Reels at all...',
        platform: 'Lead Research',
      },
    ],
  },
  {
    id: 'freelance-1-2',
    unitId: 'freelance-1',
    trackId: 'freelance',
    title: 'Cold Outreach That Works',
    subtitle: 'Short, specific, and about them — not you',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'Nobody reads a wall of text',
        body: 'A good outreach DM is short, mentions something specific about their account, and makes one clear, low-pressure ask.',
        bullets: [
          'Open with something specific to them, not a template line',
          'State the value in one sentence',
          'End with a small, easy yes ("open to a quick chat?")',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'order',
          prompt: 'Put this cold outreach DM in the right order.',
          items: [
            'Hey! Love what you\'re doing with [business] — noticed your Reels aren\'t getting much reach yet',
            'I help small businesses like yours grow with a simple content plan and consistent posting',
            'Open to a quick 10-min chat this week to see if it\'s a fit?',
          ],
        },
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'Which opening line is most likely to get a reply?',
          options: [
            '"Hi, I am a social media manager, please let me know if interested."',
            '"Hey! Your last Reel about the new menu was great — did you make that yourself?"',
            '"DM me for a free consultation on growing your brand today!!"',
            '"Following up on my last 3 messages."',
          ],
          correctIndex: 1,
          correctFeedback: 'Right — it\'s specific, genuine, and starts a real conversation instead of a pitch.',
          incorrectFeedback: 'Try again — generic pitches and pressure tactics get ignored. Specific and genuine wins replies.',
        },
      },
      {
        kind: 'microtask',
        title: 'Do this now',
        prompt: 'Draft a cold outreach DM to a small business, using the structure: specific compliment → value in one line → easy ask.',
        placeholder: 'e.g. Hey! Saw your new product drop post — the photos were great but...',
        platform: 'Client Outreach DM',
      },
    ],
  },
  {
    id: 'freelance-1-3',
    unitId: 'freelance-1',
    trackId: 'freelance',
    title: 'Pricing Your First Package',
    subtitle: 'Charge for the outcome, not just the hours',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'Value pricing beats hourly for beginners',
        body: 'Hourly rates punish you for getting fast. A simple flat monthly package is easier to sell and easier for the client to budget.',
        bullets: [
          'Start with a clear, simple package (e.g. "12 posts/month + 2 stories/week")',
          'Price around the value delivered, not just your time',
          'It\'s fine to price lower for your first 1-2 clients to build proof',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'sort',
          prompt: 'Sort each pricing approach for a beginner\'s first package.',
          leftLabel: 'Riskier / harder to sell',
          rightLabel: 'Simple / beginner-friendly',
          items: [
            { text: 'Charge purely hourly with no clear scope', side: 'left' },
            { text: 'Flat monthly fee for a defined set of deliverables', side: 'right' },
            { text: 'Vague "we\'ll figure out pricing later"', side: 'left' },
            { text: 'A clear starter package with 2-3 tiers', side: 'right' },
          ],
        },
      },
      {
        kind: 'question',
        question: {
          type: 'fill',
          prompt: 'Fill in the blank',
          template: 'A flat monthly ___ (like "12 posts + weekly stories for $400/mo") is easier for beginners to sell than pure hourly billing.',
          options: ['package', 'guess', 'discount', 'invoice'],
          correctAnswer: 'package',
        },
      },
      {
        kind: 'microtask',
        title: 'Do this now',
        prompt: 'Sketch a simple starter package: what\'s included and a flat monthly price.',
        placeholder: 'e.g. Starter: 8 posts/mo + 4 Stories/week + monthly report — $350/mo',
        platform: 'Pricing Sheet',
      },
    ],
  },

  // ---------------- FREELANCE UNIT 2 ----------------
  {
    id: 'freelance-2-1',
    unitId: 'freelance-2',
    trackId: 'freelance',
    title: 'What Goes In a Winning Proposal',
    subtitle: 'Make "yes" the easy choice',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'A proposal is a decision-making tool',
        body: 'It should answer, in order: what\'s the problem, what will you do about it, what does it cost, and what happens next.',
        bullets: [
          'Open with their problem in their words',
          'Show the plan, then the price',
          'Always end with a clear next step and deadline',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'order',
          prompt: 'Put these proposal sections in the right order.',
          items: [
            'The problem you\'re solving for them',
            'Your proposed plan / deliverables',
            'Pricing and timeline',
            'Clear next step to get started',
          ],
        },
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'A proposal with pricing but no clear "next step" usually leads to what?',
          options: [
            'Instant sign-up',
            'The client stalling because there\'s no obvious action to take',
            'A higher price being accepted',
            'It doesn\'t matter either way',
          ],
          correctIndex: 1,
          correctFeedback: 'Right — no clear call-to-action means the decision quietly stalls out.',
          incorrectFeedback: 'Not quite — without a clear next step, most clients simply stall instead of deciding.',
        },
      },
      {
        kind: 'microtask',
        title: 'Do this now',
        prompt: 'Write the opening "problem" paragraph of a proposal for a small business with inconsistent posting.',
        placeholder: 'e.g. Right now, your account is posting once every few weeks, which means...',
        platform: 'Client Proposal',
      },
    ],
  },
  {
    id: 'freelance-2-2',
    unitId: 'freelance-2',
    trackId: 'freelance',
    title: 'Red Flags in a Client Ask',
    subtitle: 'Protect your time before you sign anything',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'Not every client is worth taking',
        body: 'Spotting red flags early saves you from scope creep, late payments, and burnout — especially as a beginner with no leverage yet.',
        bullets: [
          '"Exposure instead of payment" is not a real offer',
          'Vague scope ("just handle everything") invites endless asks',
          'Pressure to start before any agreement is a warning sign',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'sort',
          prompt: 'Sort each client statement.',
          leftLabel: 'Red flag',
          rightLabel: 'Healthy sign',
          items: [
            { text: '"We can\'t pay yet but it\'s great exposure!"', side: 'left' },
            { text: '"Here\'s our budget range, what would that get us?"', side: 'right' },
            { text: '"Just handle whatever comes up, no need for a scope doc"', side: 'left' },
            { text: '"Can we hop on a call to go over the proposal?"', side: 'right' },
          ],
        },
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'A prospective client asks you to start immediately, before signing anything. Best move?',
          options: [
            'Start right away to seem eager',
            'Politely say you\'ll begin once a simple agreement is signed',
            'Ghost them',
            'Ask for double your normal rate as a penalty',
          ],
          correctIndex: 1,
          correctFeedback: 'Exactly — a quick, friendly boundary here protects you without killing the deal.',
          incorrectFeedback: 'Reconsider — starting unpaid work with nothing signed is a common way beginners get burned.',
        },
      },
      {
        kind: 'microtask',
        title: 'Do this now',
        prompt: 'Write one polite, firm sentence you could send if a client asks you to start before anything is signed.',
        placeholder: 'e.g. Happy to get started — I just send over a quick one-page agreement first so we\'re both clear!',
        platform: 'Client Communication',
      },
    ],
  },
  {
    id: 'freelance-2-3',
    unitId: 'freelance-2',
    trackId: 'freelance',
    title: 'Getting Paid Without Ghosting',
    subtitle: 'Simple terms that protect you',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'Simple terms, stated upfront',
        body: 'You don\'t need a 10-page legal contract to start. A short written agreement covering scope, price, timeline, and payment terms protects both sides.',
        bullets: [
          'Get 50% upfront for new clients when possible',
          'State exactly what\'s included — and what costs extra',
          'Put the payment due date in writing, not just "whenever"',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'fill',
          prompt: 'Fill in the blank',
          template: 'For new clients, it\'s common to ask for ___% of payment upfront before starting work.',
          options: ['50', '5', '100', '0'],
          correctAnswer: '50',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'What belongs in even a short, simple client agreement?',
          options: [
            'Scope, price, timeline, and payment terms',
            'Nothing — a verbal "sounds good" is enough',
            'Only your Instagram handle',
            'A list of every freelancer you know',
          ],
          correctIndex: 0,
          correctFeedback: 'Right — those four things prevent almost every common payment dispute.',
          incorrectFeedback: 'Not quite — even a one-pager should cover scope, price, timeline, and payment terms.',
        },
      },
      {
        kind: 'microtask',
        title: 'Do this now',
        prompt: 'Write one payment term you\'d put in writing for a new client (e.g. deposit, due date, late fee).',
        placeholder: 'e.g. 50% deposit due before work starts, remaining 50% due on delivery.',
        platform: 'Client Agreement',
      },
    ],
  },

  // ---------------- CREATOR UNIT 1 ----------------
  {
    id: 'creator-1-1',
    unitId: 'creator-1',
    trackId: 'creator',
    title: 'Finding Your Niche',
    subtitle: 'Specific beats "a little bit of everything"',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'Riches are in the niches',
        body: 'A specific, clear niche makes it obvious who should follow you — and it\'s exactly what makes brands trust you have a real, targetable audience.',
        bullets: [
          'Pick something you can talk about for 100+ posts',
          'Narrow beats broad: "budget skincare for oily skin" beats "beauty"',
          'You can always widen later — starting broad makes you forgettable',
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
          type: 'sort',
          prompt: 'Sort each niche idea.',
          leftLabel: 'Too broad',
          rightLabel: 'Specific enough',
          items: [
            { text: '"Fitness"', side: 'left' },
            { text: '"Home workouts for busy parents"', side: 'right' },
            { text: '"Travel"', side: 'left' },
            { text: '"Solo budget travel in Southeast Asia"', side: 'right' },
          ],
        },
      },
      {
        kind: 'microtask',
        title: 'Do this now',
        prompt: 'Write a one-sentence niche statement for yourself, real or hypothetical: "I help [who] do [what]."',
        placeholder: 'e.g. I help college students eat healthy on a $50/week grocery budget.',
        platform: 'Personal Brand Strategy',
      },
    ],
  },
  {
    id: 'creator-1-2',
    unitId: 'creator-1',
    trackId: 'creator',
    title: 'Growing an Engaged Audience',
    subtitle: 'Consistency beats one viral fluke',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'Growth is a loop, not a lucky break',
        body: 'Sustainable growth comes from a repeatable loop: post useful/entertaining content → people engage → the algorithm shows more people → some of them follow.',
        bullets: [
          'One viral post means little without a system behind it',
          'Reply to your own comments early to boost momentum',
          'Post in a consistent format so the algorithm learns your "type" of content',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'order',
          prompt: 'Put the steps of the organic growth loop in order.',
          items: [
            'Post consistent, useful/entertaining content',
            'Early viewers engage (comments, shares, saves)',
            'Platform shows the content to more people',
            'A percentage of new viewers follow',
          ],
        },
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'A creator gets one viral video, then nothing for months. What\'s missing?',
          options: [
            'Nothing, one viral hit is enough',
            'A consistent system/loop instead of relying on a one-off spike',
            'A bigger camera',
            'More hashtags',
          ],
          correctIndex: 1,
          correctFeedback: 'Exactly — one viral post is luck; growth comes from a repeatable system.',
          incorrectFeedback: 'Not quite — the fix is a consistent posting system, not gear or hashtags.',
        },
      },
      {
        kind: 'microtask',
        title: 'Do this now',
        prompt: 'Write a realistic posting cadence you could sustain for 8 weeks straight (e.g. 3x/week).',
        placeholder: 'e.g. 3 Reels/week + 1 carousel/week, batched every Sunday.',
        platform: 'Content Planning',
      },
    ],
  },
  {
    id: 'creator-1-3',
    unitId: 'creator-1',
    trackId: 'creator',
    title: 'Turning Followers Into Fans',
    subtitle: 'Followers scroll past. Fans show up.',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'Fans are what brands actually pay for',
        body: 'A brand doesn\'t just buy your reach — they buy trust. Fans who feel like they know you convert far better than passive followers.',
        bullets: [
          'Show your face and personality, not just polished content',
          'Reply to comments like you\'re texting a friend',
          'Ask for opinions — people love being asked, not just told',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'sort',
          prompt: 'Sort each tactic by how well it builds real fans (vs. passive followers).',
          leftLabel: 'Builds passive followers',
          rightLabel: 'Builds real fans',
          items: [
            { text: 'Only posting polished product shots', side: 'left' },
            { text: 'Replying to comments like a real conversation', side: 'right' },
            { text: 'Asking followers to vote on your next product', side: 'right' },
            { text: 'Never showing your face or voice', side: 'left' },
          ],
        },
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'Why do brands care about "fans" more than raw follower count?',
          options: [
            'They don\'t — followers are all that matters',
            'Fans actually trust the creator, so they convert to sales',
            'Fans are easier to count',
            'Fans cost less to reach',
          ],
          correctIndex: 1,
          correctFeedback: 'Right — trust is what turns a sponsored post into an actual sale.',
          incorrectFeedback: 'Rethink it — brands ultimately want conversions, and trust (fans) is what drives those.',
        },
      },
      {
        kind: 'microtask',
        title: 'Do this now',
        prompt: 'Write one comment reply that turns a simple "love this!" into a real conversation.',
        placeholder: 'e.g. Thank you!! Which part hit hardest — the routine or the mistake I made? 👀',
        platform: 'Community Engagement',
      },
    ],
  },

  // ---------------- CREATOR UNIT 2 ----------------
  {
    id: 'creator-2-1',
    unitId: 'creator-2',
    trackId: 'creator',
    title: 'What Brands Actually Look For',
    subtitle: 'It\'s not just follower count',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'Brands buy trust and fit, not just reach',
        body: 'A smaller, highly engaged creator in the right niche often outperforms a huge, generic account for a brand\'s actual goal.',
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
          correctFeedback: 'Right — niche fit + strong engagement usually beats raw reach for actual results.',
          incorrectFeedback: 'Reconsider — brands increasingly favor engaged, niche-relevant audiences over raw follower count.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'fill',
          prompt: 'Fill in the blank',
          template: 'Brands prefer creators whose audience closely ___ their target customer.',
          options: ['matches', 'ignores', 'outnumbers', 'avoids'],
          correctAnswer: 'matches',
        },
      },
      {
        kind: 'microtask',
        title: 'Do this now',
        prompt: 'Name one brand that would be a natural fit for your (real or hypothetical) niche, and why.',
        placeholder: 'e.g. A reusable water bottle brand — my audience is all budget-fitness focused.',
        platform: 'Brand Research',
      },
    ],
  },
  {
    id: 'creator-2-2',
    unitId: 'creator-2',
    trackId: 'creator',
    title: 'Pitching Yourself to Brands',
    subtitle: 'Make it easy for them to say yes',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'A brand pitch is short and proof-based',
        body: 'Brands get flooded with pitches. Lead with proof (your niche + engagement), keep it short, and make the ask crystal clear.',
        bullets: [
          'Open with who you are and your niche in one line',
          'Show one concrete stat or result',
          'End with a specific, easy ask',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'order',
          prompt: 'Put this brand pitch email in order.',
          items: [
            'Hi! I\'m a creator focused on budget home cooking for 22k engaged followers',
            'My last recipe video hit 200k views with strong saves and comments',
            'I\'d love to feature [Product] in an upcoming Reel — open to sending a media kit?',
          ],
        },
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'What makes a brand pitch more likely to get a response?',
          options: [
            'A long personal story with no data',
            'A short pitch with a clear niche, one proof point, and a specific ask',
            'Asking for payment before showing any content examples',
            'Sending the exact same generic message to 200 brands',
          ],
          correctIndex: 1,
          correctFeedback: 'Exactly — short, specific, and proof-backed pitches stand out in a flooded inbox.',
          incorrectFeedback: 'Try again — vague, generic, or data-free pitches are the easiest to ignore.',
        },
      },
      {
        kind: 'microtask',
        title: 'Do this now',
        prompt: 'Write a 2-3 sentence pitch you\'d send a brand that fits your niche.',
        placeholder: 'e.g. Hi! I create budget meal-prep content for 15k engaged followers...',
        platform: 'Brand Pitch Email',
      },
    ],
  },
  {
    id: 'creator-2-3',
    unitId: 'creator-2',
    trackId: 'creator',
    title: 'Negotiating Your Rate',
    subtitle: 'Know your number before they ask',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'Rates should reflect real value',
        body: 'A common starting formula: your rate should reflect reach, effort, and usage rights — not just "what feels fair."',
        bullets: [
          'A common rough baseline: $10-20 per 1,000 engaged followers for a single post (varies a lot by niche)',
          'Charge more for usage rights (brand reposting your content in ads)',
          'It\'s okay to counter a lowball offer — most brands expect it',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'sort',
          prompt: 'Sort each brand offer.',
          leftLabel: 'Lowball — worth countering',
          rightLabel: 'Fair starting offer',
          items: [
            { text: '"We can only offer free product for a 20k-follower creator"', side: 'left' },
            { text: 'A flat fee roughly matching your engaged audience size', side: 'right' },
            { text: '"Full usage rights in paid ads, no extra fee"', side: 'left' },
            { text: 'Fee + separate usage rights fee clearly stated', side: 'right' },
          ],
        },
      },
      {
        kind: 'question',
        question: {
          type: 'fill',
          prompt: 'Fill in the blank',
          template: 'If a brand wants to reuse your content in their paid ads, that\'s called ___ rights and should usually cost extra.',
          options: ['usage', 'download', 'copyright', 'viewing'],
          correctAnswer: 'usage',
        },
      },
      {
        kind: 'microtask',
        title: 'Do this now',
        prompt: 'A brand offers you free product only (no cash) for a dedicated post. Write one sentence countering with a fair ask.',
        placeholder: 'e.g. I love the product, and for a dedicated post I\'d need a flat fee plus product...',
        platform: 'Rate Negotiation',
      },
    ],
  },
]

export const templates: Template[] = [
  {
    id: 'tmpl-content-calendar',
    title: '30-Day Content Calendar',
    description: 'A ready-to-fill monthly content calendar organized by pillar.',
    category: 'Content Planning',
    unlockUnitId: 'smm-1',
    emoji: '🗓️',
    body: 'WEEK 1\nMon — Educational: [tip related to your niche]\nWed — Behind-the-scenes: [process/day-in-the-life]\nFri — Social proof: [testimonial or result]\n\nWEEK 2\nMon — Educational: [common mistake + fix]\nWed — Behind-the-scenes: [team/workspace]\nFri — Promotional: [soft CTA to offer]\n\nRepeat this rhythm for weeks 3-4, swapping in fresh topics per pillar.',
  },
  {
    id: 'tmpl-analytics-report',
    title: 'Client Analytics Report',
    description: 'A simple monthly report structure clients actually read.',
    category: 'Reporting',
    unlockUnitId: 'smm-2',
    emoji: '📊',
    body: 'HEADLINE WIN\n[One sentence: the single best result this month]\n\nKEY METRICS (vs. last month)\n- Reach: ___ (+/- ___%)\n- Engagement rate: ___%\n- Profile visits: ___\n- DMs / leads: ___\n\nWHAT WORKED\n[1-2 posts that overperformed, and why]\n\nNEXT MONTH\n[1-2 clear next steps]',
  },
  {
    id: 'tmpl-outreach-dm',
    title: 'Cold Outreach DM',
    description: 'A fill-in-the-blank template for reaching out to a first client.',
    category: 'Outreach',
    unlockUnitId: 'freelance-1',
    emoji: '✉️',
    body: 'Hey [name]! Love what you\'re doing with [specific, real detail about their account/business].\n\nI help [type of business] grow with [one-line value prop — e.g. "a simple content plan and consistent posting"].\n\nOpen to a quick chat this week to see if it\'s a fit?',
  },
  {
    id: 'tmpl-pricing-sheet',
    title: 'Starter Pricing Sheet',
    description: 'A simple 3-tier pricing structure for your first packages.',
    category: 'Pricing',
    unlockUnitId: 'freelance-1',
    emoji: '💵',
    body: 'STARTER — $___/mo\n- 8 posts/month\n- Weekly Stories\n- Monthly report\n\nGROWTH — $___/mo\n- 12 posts/month + 2 Reels/week\n- Daily Stories\n- Community management\n- Monthly report + strategy call\n\nPRO — $___/mo\n- Full content calendar\n- 4 Reels/week\n- Community management + DM handling\n- Bi-weekly strategy calls',
  },
  {
    id: 'tmpl-proposal',
    title: 'One-Page Client Proposal',
    description: 'A clean proposal structure that makes "yes" easy.',
    category: 'Proposals',
    unlockUnitId: 'freelance-2',
    emoji: '📄',
    body: 'THE PROBLEM\n[Their situation, in their words]\n\nTHE PLAN\n[What you\'ll actually do, in 3-5 bullets]\n\nPRICING & TIMELINE\n[Package + price + start date]\n\nNEXT STEP\n[e.g. "Reply YES and I\'ll send over a simple agreement to get started."]',
  },
  {
    id: 'tmpl-media-kit',
    title: 'Creator Media Kit',
    description: 'A one-page media kit to send to brands.',
    category: 'Brand Deals',
    unlockUnitId: 'creator-2',
    emoji: '🗂️',
    body: 'ABOUT ME\n[Your niche in one line]\n\nAUDIENCE\n- Followers: ___\n- Engagement rate: ___%\n- Top platform: ___\n- Audience: [age range / interests]\n\nPAST RESULTS\n[1-2 standout stats or past brand work]\n\nRATES\n- Single post: $___\n- Story set: $___\n- Usage rights (30 days): +$___\n\nCONTACT\n[email]',
  },
  {
    id: 'tmpl-brand-pitch',
    title: 'Brand Pitch Email',
    description: 'A short, proof-based email to pitch yourself to brands.',
    category: 'Brand Deals',
    unlockUnitId: 'creator-1',
    emoji: '🤝',
    body: 'Hi [brand contact]!\n\nI\'m a creator focused on [your niche] for [follower count] engaged followers ([engagement rate]% engagement).\n\n[One concrete proof point — a standout result]\n\nI\'d love to feature [Product] in an upcoming post/Reel — happy to send over my media kit if you\'re open to it!\n\n[Your name]',
  },
]

export function getTrack(id: string) {
  return tracks.find((t) => t.id === id)
}

export function getUnit(id: string) {
  return units.find((u) => u.id === id)
}

export function getLesson(id: string) {
  return lessons.find((l) => l.id === id)
}

export function unitsForTrack(trackId: string) {
  return units.filter((u) => u.trackId === trackId)
}

export function lessonsForUnit(unitId: string) {
  const unit = getUnit(unitId)
  if (!unit) return []
  return unit.lessonIds.map((id) => getLesson(id)!).filter(Boolean)
}
