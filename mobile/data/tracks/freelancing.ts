import { Briefcase } from 'lucide-react-native'
import type { BuilderEndTask, Lesson, Module, SimulatorEndTask, Track } from '../types'

export const freelanceTrack: Track = {
  id: 'freelance',
  title: 'Freelancing & Client Work',
  tagline: 'Land clients and get paid on time',
  description: 'Position yourself, get discovered, and manage real projects without getting burned.',
  icon: Briefcase,
  pastelIndex: 1,
  moduleIds: ['freelance-m1', 'freelance-m2', 'freelance-m3'],
}

export const freelanceModules: Module[] = [
  {
    id: 'freelance-m1',
    trackId: 'freelance',
    title: 'Setting Up as a Freelancer',
    description: 'Positioning, niching down, your bio, and setting rates that hold up.',
    lessonIds: ['freelance-m1-l1', 'freelance-m1-l2', 'freelance-m1-l3', 'freelance-m1-l4'],
    endTaskId: 'freelance-m1-task',
  },
  {
    id: 'freelance-m2',
    trackId: 'freelance',
    title: 'Getting Clients',
    description: 'Outreach, a portfolio with no experience, and running a discovery call.',
    lessonIds: ['freelance-m2-l1', 'freelance-m2-l2', 'freelance-m2-l3', 'freelance-m2-l4'],
    endTaskId: 'freelance-m2-task',
  },
  {
    id: 'freelance-m3',
    trackId: 'freelance',
    title: 'Managing Projects',
    description: 'Onboarding, scoping, revisions, and offboarding without drama.',
    lessonIds: ['freelance-m3-l1', 'freelance-m3-l2', 'freelance-m3-l3', 'freelance-m3-l4'],
    endTaskId: 'freelance-m3-task',
  },
]

export const freelanceLessons: Lesson[] = [
  // MODULE 1 — Setting Up as a Freelancer
  {
    id: 'freelance-m1-l1',
    moduleId: 'freelance-m1',
    trackId: 'freelance',
    title: 'Positioning Yourself',
    subtitle: 'Nobody hires "someone who does a bit of everything"',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'Clear beats impressive',
        body: 'Positioning is the one sentence that tells a stranger exactly who you help and how. Vague positioning ("I do social media stuff") forces the client to do the work of figuring out if you\'re a fit — most won\'t bother.',
        bullets: [
          'A strong position names a service + an audience or outcome',
          '"I help X do Y" beats a list of ten loosely related skills',
          'You can always expand later — starting broad just makes you forgettable now',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'Which positioning statement is strongest for a new freelancer?',
          options: [
            '"I do graphic design, social media, copywriting, and web stuff"',
            '"I help local restaurants get more reservations through Instagram content"',
            '"Creative professional available for hire"',
            '"I can do anything you need, just ask"',
          ],
          correctIndex: 1,
          correctFeedback: 'Right — it names a specific service, a specific audience, and a specific outcome.',
          incorrectFeedback: 'Reconsider — the strongest option names a specific audience and outcome, not a broad list of skills.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'Being able to do "a little bit of everything" is generally an advantage when trying to land your first client.',
          correctAnswer: false,
          correctFeedback: 'Correct — clear, specific positioning almost always outperforms a broad, generalist pitch for a first client.',
          incorrectFeedback: 'False — a generalist pitch usually makes it harder, not easier, for a stranger to say yes quickly.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'short',
          prompt: 'Write your own (or a hypothetical) one-line positioning statement: "I help [who] do [what]."',
          placeholder: 'e.g. I help early-stage founders turn their story into a pitch deck investors actually read.',
          guidance: 'A strong answer names a specific audience and a specific, concrete outcome — not a skill list or a vague vibe.',
        },
      },
    ],
  },
  {
    id: 'freelance-m1-l2',
    moduleId: 'freelance-m1',
    trackId: 'freelance',
    title: 'Niching Down',
    subtitle: 'Riches are in the niches',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'Narrow now, expand later',
        body: 'A niche isn\'t a cage — it\'s a way to become the obvious choice for a specific type of client fast. You can always widen later once you have proof of work; starting broad just delays getting your first "yes."',
        bullets: [
          'A niche can be an industry ("dentists"), a service ("email design"), or both',
          'Niching makes referrals easier — people remember specific, not general',
          'Your first niche doesn\'t have to be your forever niche',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'Which is the strongest niche for someone just starting out?',
          options: [
            '"I work with any small business"',
            '"I design Instagram templates for wellness coaches"',
            '"I\'m open to any industry, any budget"',
            '"General marketing help"',
          ],
          correctIndex: 1,
          correctFeedback: 'Right — specific service + specific audience makes referrals and outreach dramatically easier.',
          incorrectFeedback: 'Try again — the strongest niche pairs a specific service with a specific type of client.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'Choosing a niche today means you\'re locked into it forever.',
          correctAnswer: false,
          correctFeedback: 'Correct — a first niche is a starting point, not a life sentence. Many freelancers shift niches as they grow.',
          incorrectFeedback: 'False — a niche is a starting focus, not a permanent commitment. It\'s common to evolve it over time.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'short',
          prompt: 'Write a niche statement combining a service and an audience.',
          placeholder: 'e.g. Email newsletter setup for independent online course creators.',
          guidance: 'A strong answer is specific enough that you could picture the exact type of client it would attract.',
        },
      },
    ],
  },
  {
    id: 'freelance-m1-l3',
    moduleId: 'freelance-m1',
    trackId: 'freelance',
    title: 'Writing a Bio That Sells',
    subtitle: 'Your bio works for you 24/7',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'A bio should answer three questions fast',
        body: 'Who you help, what you actually do for them, and why they should trust you. Skip the life story — a client scanning your profile decides in seconds whether to keep reading.',
        bullets: [
          'Lead with the client\'s outcome, not your job title',
          'One credibility signal (results, experience, or a relevant detail) goes a long way',
          'End with a clear way to take the next step',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'Which bio opener is strongest?',
          options: [
            '"Hi! I\'m a hard-working, passionate creative."',
            '"I help small ecommerce brands cut cart abandonment with better checkout copy."',
            '"Freelancer. Multi-passionate. Coffee-fueled."',
            '"Open to any opportunity, big or small!"',
          ],
          correctIndex: 1,
          correctFeedback: 'Right — it leads with a specific outcome for a specific audience, which builds instant credibility.',
          incorrectFeedback: 'Reconsider — the strongest opener leads with a concrete outcome for a specific type of client.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'A freelance bio should generally lead with your personality and hobbies before your service.',
          correctAnswer: false,
          correctFeedback: 'Correct — lead with the outcome you deliver; personality can come later once trust is established.',
          incorrectFeedback: 'False — a bio should lead with the client\'s outcome, not personal hobbies, to earn attention fast.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'short',
          prompt: 'Write a 2-sentence freelance bio for yourself (or a hypothetical freelancer).',
          placeholder: 'e.g. I help local service businesses turn their Google reviews into social proof that converts. 3 years running my own studio\'s marketing before going independent.',
          guidance: 'A strong answer names a clear outcome in sentence one and a credibility signal in sentence two.',
        },
      },
    ],
  },
  {
    id: 'freelance-m1-l4',
    moduleId: 'freelance-m1',
    trackId: 'freelance',
    title: 'Setting Rates That Hold Up',
    subtitle: 'Price the outcome, not just your time',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'Flat packages beat guessing hourly',
        body: 'Hourly rates punish you for getting faster with experience. A simple flat package for a defined scope is easier to sell, easier for the client to budget, and easier for you to price up over time.',
        bullets: [
          'Start with a clear, bounded package instead of open-ended hourly work',
          'It\'s fine to price lower for your first 1-2 clients to build proof — just don\'t make it a habit',
          'Raise rates as your portfolio and confidence grow, not just when you feel awkward asking',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'Why do many beginner freelancers prefer flat packages over pure hourly billing?',
          options: [
            'Packages are always more expensive for the client',
            'Hourly billing is illegal for freelancers',
            'Flat packages are easier to sell and don\'t punish you for working faster',
            'There\'s no real difference',
          ],
          correctIndex: 2,
          correctFeedback: 'Right — a flat package rewards efficiency and gives the client a predictable number to say yes to.',
          incorrectFeedback: 'Not quite — the real advantage of flat packages is predictability and not being penalized for speed.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'It\'s reasonable to price your very first client or two slightly lower to build proof of work.',
          correctAnswer: true,
          correctFeedback: 'Correct — a modest discount early on, in exchange for a testimonial or case study, is a common and reasonable trade.',
          incorrectFeedback: 'Actually true — pricing slightly lower for your first proof-of-work clients is a common, reasonable strategy.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'short',
          prompt: 'Sketch a simple starter package: what\'s included and a flat monthly or project price.',
          placeholder: 'e.g. Starter: 8 posts/mo + weekly Stories + monthly report — $350/mo',
          guidance: 'A strong answer lists concrete deliverables (not "social media help") and attaches a specific price.',
        },
      },
    ],
  },

  // MODULE 2 — Getting Clients
  {
    id: 'freelance-m2-l1',
    moduleId: 'freelance-m2',
    trackId: 'freelance',
    title: 'Outreach That Doesn\'t Sound Like Spam',
    subtitle: 'Short, specific, and about them — not you',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'Nobody reads a wall of text',
        body: 'A good outreach message is short, mentions something specific about the recipient, and makes one clear, low-pressure ask. Generic pitches get ignored; specific ones get replies.',
        bullets: [
          'Open with something specific to them, not a template line',
          'State the value in one sentence',
          'End with a small, easy yes ("open to a quick chat?")',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'Which opening line is most likely to get a reply?',
          options: [
            '"Hi, I am a freelancer, please let me know if interested."',
            '"Hey! Your last post about the new product launch was great — did you shoot that yourself?"',
            '"DM me for a free consultation today!!"',
            '"Following up on my last 3 messages."',
          ],
          correctIndex: 1,
          correctFeedback: 'Right — it\'s specific and genuine, and starts a real conversation instead of a pitch.',
          incorrectFeedback: 'Try again — generic pitches and pressure tactics get ignored. Specific and genuine wins replies.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'A warm lead (someone you have some connection to) is generally easier to convert than a fully cold one.',
          correctAnswer: true,
          correctFeedback: 'Correct — warm leads already have some trust built in, which makes the first "yes" much easier.',
          incorrectFeedback: 'Actually true — warm leads convert more easily because some trust already exists.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'short',
          prompt: 'Draft a cold outreach message using: specific compliment → value in one line → easy ask.',
          placeholder: 'e.g. Hey! Saw your new product drop post — the photos were great but the caption didn\'t have a clear CTA...',
          guidance: 'A strong answer opens with something genuinely specific to the recipient and ends with a low-pressure next step.',
        },
      },
    ],
  },
  {
    id: 'freelance-m2-l2',
    moduleId: 'freelance-m2',
    trackId: 'freelance',
    title: 'A Portfolio With No Experience',
    subtitle: 'You can build proof before you have clients',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'Spec work and self-projects count',
        body: 'No paying clients yet doesn\'t mean no portfolio. Redesign a real brand\'s content as a spec project, offer one free or discounted project in exchange for a testimonial, or document your own process publicly.',
        bullets: [
          'A "redesign" of an existing brand\'s content shows skill even without a client relationship',
          'One well-documented free/discounted project can unlock your first real testimonial',
          'Case studies matter more than a long list of logos',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'A freelancer has zero paying clients yet. What\'s a legitimate way to start a portfolio?',
          options: [
            'Wait until a client hires you before making anything',
            'Create a spec redesign of a real brand\'s content to demonstrate skill',
            'Use stock photos with no real work behind them',
            'Claim work you didn\'t actually do',
          ],
          correctIndex: 1,
          correctFeedback: 'Right — spec work is an honest, common way to demonstrate skill before your first client.',
          incorrectFeedback: 'Reconsider — an honest spec project is the standard way to build proof before paid work exists.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'A portfolio with fewer, well-explained case studies is usually stronger than one with many logos and no context.',
          correctAnswer: true,
          correctFeedback: 'Correct — clients want to understand the problem and result, not just see a list of brand names.',
          incorrectFeedback: 'Actually true — a few detailed case studies build more trust than a wall of unexplained logos.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'short',
          prompt: 'Describe one spec project you could realistically create this week to start a portfolio.',
          placeholder: 'e.g. Redesign a week of Instagram captions for a local coffee shop and post the before/after as a case study.',
          guidance: 'A strong answer is specific and doable within days, not a vague idea like "make some samples."',
        },
      },
    ],
  },
  {
    id: 'freelance-m2-l3',
    moduleId: 'freelance-m2',
    trackId: 'freelance',
    title: 'Running a Discovery Call',
    subtitle: 'The structure that turns a chat into a signed client',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'A discovery call has a shape',
        body: 'A good discovery call isn\'t a free-flowing chat — it follows a loose structure: understand their problem, confirm the goal, explain how you\'d approach it, and agree on a clear next step.',
        bullets: [
          'Ask about their goal before pitching your service',
          'Confirm budget range early so nobody wastes time',
          'End every call with one specific next step and a date',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'What should happen first on a discovery call?',
          options: [
            'Launch straight into your pricing',
            'Ask questions to understand their actual problem and goal',
            'Talk about your own background for ten minutes',
            'Send the contract immediately',
          ],
          correctIndex: 1,
          correctFeedback: 'Right — understanding their real problem first makes everything that follows land better.',
          incorrectFeedback: 'Not quite — a discovery call should start by understanding their goal, not pitching first.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'Every discovery call should end with a clear, specific next step and a date.',
          correctAnswer: true,
          correctFeedback: 'Correct — without a specific next step, most conversations quietly stall out.',
          incorrectFeedback: 'Actually true — ending on a vague note is one of the most common reasons good calls go nowhere.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'short',
          prompt: 'Write 2 questions you\'d ask early in a discovery call to understand a prospect\'s real goal.',
          placeholder: 'e.g. "What made you decide to look for help with this now?" and "What would success look like in 3 months?"',
          guidance: 'A strong answer asks open questions about goals or timing, not yes/no questions about services.',
        },
      },
    ],
  },
  {
    id: 'freelance-m2-l4',
    moduleId: 'freelance-m2',
    trackId: 'freelance',
    title: 'Reading Red Flags Early',
    subtitle: 'Not every lead is worth chasing',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'Spotting red flags saves your time',
        body: 'Some prospects reveal problems before you ever start work — vague scope, pressure to start free, or disrespect for your time. Catching these early protects you from a painful project later.',
        bullets: [
          '"Exposure instead of payment" is not a real offer',
          'Vague scope ("just handle everything") invites endless asks',
          'Pressure to start before any agreement is a warning sign',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'A prospect says "we can\'t pay yet but it\'ll be great exposure." What\'s the healthiest response?',
          options: [
            'Accept immediately to get the experience',
            'Politely decline or propose a small paid trial instead',
            'Ghost them without a word',
            'Offer to work for free indefinitely',
          ],
          correctIndex: 1,
          correctFeedback: 'Right — a polite decline or a small paid trial protects your time while staying professional.',
          incorrectFeedback: 'Reconsider — "exposure" alone usually isn\'t a sustainable trade. A polite decline or paid trial is healthier.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'A client asking you to start work before anything is signed is generally a good sign of trust.',
          correctAnswer: false,
          correctFeedback: 'Correct — it\'s actually a common red flag, not a trust signal. Protect yourself with a simple agreement first.',
          incorrectFeedback: 'False — starting unsigned work is a classic way beginners get burned, not a sign of trust.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'short',
          prompt: 'Write one polite, firm sentence you could send if a client asks you to start before anything is signed.',
          placeholder: 'e.g. Happy to get started — I just send over a quick one-page agreement first so we\'re both clear!',
          guidance: 'A strong answer sets a boundary without sounding defensive or killing the relationship.',
        },
      },
    ],
  },

  // MODULE 3 — Managing Projects
  {
    id: 'freelance-m3-l1',
    moduleId: 'freelance-m3',
    trackId: 'freelance',
    title: 'Onboarding a New Client',
    subtitle: 'The first week sets the tone for the whole project',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'A good onboarding prevents most future problems',
        body: 'A short onboarding process — a welcome doc, access checklist, and kickoff call — sets expectations early and avoids the confusion that causes most client friction later.',
        bullets: [
          'Collect access (logins, brand assets, past content) in one organized ask',
          'Set communication expectations up front: response time, tools used, meeting cadence',
          'A short kickoff call beats a long back-and-forth email thread',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'What belongs in a solid client onboarding process?',
          options: [
            'Nothing formal — just start working immediately',
            'A clear access checklist and agreed communication expectations',
            'A surprise invoice halfway through the project',
            'Skipping the kickoff call to save time',
          ],
          correctIndex: 1,
          correctFeedback: 'Right — clear access and communication expectations prevent most early friction.',
          incorrectFeedback: 'Not quite — the strongest onboarding sets access and communication expectations clearly upfront.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'Setting communication expectations (response time, tools, meeting cadence) upfront reduces conflict later.',
          correctAnswer: true,
          correctFeedback: 'Correct — most client friction comes from mismatched expectations that were never actually stated.',
          incorrectFeedback: 'Actually true — clear expectations early on prevent the most common source of client conflict.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'short',
          prompt: 'List 3 things you\'d include in a new client\'s onboarding checklist.',
          placeholder: 'e.g. Platform logins, brand guidelines/assets, preferred communication tool and response time.',
          guidance: 'A strong answer lists concrete, collectible items — not vague ideas like "get to know them."',
        },
      },
    ],
  },
  {
    id: 'freelance-m3-l2',
    moduleId: 'freelance-m3',
    trackId: 'freelance',
    title: 'Scoping Work Clearly',
    subtitle: 'Scope creep starts with a vague agreement',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'If it\'s not written down, it\'s not agreed',
        body: 'A clear scope document lists exactly what\'s included, what\'s not, how many revision rounds are covered, and what counts as "extra" work that gets billed separately.',
        bullets: [
          'List deliverables specifically — "content" is not a scope, "12 posts + 4 Stories/week" is',
          'State revision rounds explicitly (e.g. "2 rounds included")',
          'Anything outside the written scope should be a separate, priced add-on',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'A client keeps asking for "just one more small thing" outside the agreed scope. What\'s the healthiest fix?',
          options: [
            'Keep saying yes to avoid conflict',
            'Refer back to the written scope and price the extra work separately',
            'End the relationship immediately',
            'Complain to the client about being taken advantage of',
          ],
          correctIndex: 1,
          correctFeedback: 'Right — pointing back to the written scope and pricing extras is professional and protects the relationship.',
          incorrectFeedback: 'Reconsider — the healthiest fix is referencing the written scope, not silently absorbing extra work.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'A vague scope like "handle our social media" is enough protection against scope creep.',
          correctAnswer: false,
          correctFeedback: 'Correct — vague scope is exactly what invites endless "just one more thing" requests.',
          incorrectFeedback: 'False — a vague scope is a leading cause of scope creep, not protection against it.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'short',
          prompt: 'Write one specific, bounded scope line for a project (not vague).',
          placeholder: 'e.g. 12 feed posts and 3 Reels per month, with up to 2 rounds of revisions per piece.',
          guidance: 'A strong answer includes a quantity and a boundary (revision limit, timeframe) — not a general description.',
        },
      },
    ],
  },
  {
    id: 'freelance-m3-l3',
    moduleId: 'freelance-m3',
    trackId: 'freelance',
    title: 'Handling Revisions Professionally',
    subtitle: 'Feedback isn\'t personal — treat it like data',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'Structure makes feedback painless',
        body: 'Vague feedback rounds drag on forever. Give clients a simple way to leave feedback (numbered comments, a specific doc), and always confirm you understood a change before making it.',
        bullets: [
          'Ask for feedback in one consolidated round, not five scattered messages',
          'Restate unclear feedback back to the client before acting on it',
          'A revision limit in the scope protects both sides from endless loops',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'A client leaves vague feedback: "this just doesn\'t feel right." Best next move?',
          options: [
            'Guess and redo the whole thing from scratch',
            'Ask a specific follow-up question to understand what "doesn\'t feel right" means',
            'Ignore the feedback',
            'Get defensive and explain why it\'s correct as-is',
          ],
          correctIndex: 1,
          correctFeedback: 'Right — a specific follow-up question turns vague feedback into something actually actionable.',
          incorrectFeedback: 'Reconsider — the professional move is clarifying vague feedback with a specific question, not guessing.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'Confirming your understanding of feedback before acting on it usually wastes time.',
          correctAnswer: false,
          correctFeedback: 'Correct — a quick confirmation prevents wasted revision rounds caused by misunderstood feedback.',
          incorrectFeedback: 'False — confirming feedback first usually saves time by preventing wrong-direction revisions.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'short',
          prompt: 'Write a reply to a client who left the vague feedback "this just doesn\'t feel right."',
          placeholder: 'e.g. Totally hear you — can you point to a specific part (the headline, the colors, the tone) that\'s off?',
          guidance: 'A strong answer stays warm but asks a specific, narrowing question rather than accepting the vague note as-is.',
        },
      },
    ],
  },
  {
    id: 'freelance-m3-l4',
    moduleId: 'freelance-m3',
    trackId: 'freelance',
    title: 'Offboarding Without Drama',
    subtitle: 'How a project ends shapes your reputation as much as how it starts',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'A clean ending earns referrals',
        body: 'Whether a project ends naturally or a client leaves, a professional offboarding — final deliverables handed off cleanly, a wrap-up note, and an ask for a testimonial — leaves the door open for referrals.',
        bullets: [
          'Hand off all files and access cleanly, even if the relationship is ending',
          'Always ask for a testimonial while the good work is still fresh',
          'A short, warm wrap-up message costs nothing and buys goodwill',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'A project is wrapping up on good terms. What\'s the smartest last move?',
          options: [
            'Say nothing and move on quietly',
            'Ask for a testimonial while the work is still fresh',
            'Wait 6 months before asking for anything',
            'Assume they\'ll refer you without being asked',
          ],
          correctIndex: 1,
          correctFeedback: 'Right — asking for a testimonial right at the high point of the relationship gets the best response.',
          incorrectFeedback: 'Reconsider — the smartest move is asking for a testimonial while the good work is still top of mind.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'Offboarding cleanly, even from a difficult client, can still protect your reputation and future referrals.',
          correctAnswer: true,
          correctFeedback: 'Correct — how you end a project is remembered as much as how you started it.',
          incorrectFeedback: 'Actually true — a professional exit, even from a hard project, protects your reputation going forward.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'short',
          prompt: 'Write a short, warm wrap-up message for a client whose project just ended successfully.',
          placeholder: 'e.g. This was such a fun project to work on! I\'ve handed off everything in the shared folder — let me know if you\'d be open to a quick testimonial.',
          guidance: 'A strong answer is warm, confirms the handoff, and includes a specific ask (testimonial or referral).',
        },
      },
    ],
  },
]

export const freelanceEndTasks: (BuilderEndTask | SimulatorEndTask)[] = [
  {
    kind: 'builder',
    id: 'freelance-m1-task',
    moduleId: 'freelance-m1',
    trackId: 'freelance',
    title: 'Positioning Statement + Rate Sheet',
    description: 'Turn what you learned into two documents you could actually use today.',
    deliverableType: 'Outreach Kit',
    xp: 60,
    brief: 'Build your own starter positioning and pricing — real or aspirational. This becomes the foundation for every pitch you send.',
    prompts: [
      { label: 'Positioning statement', placeholder: 'I help [who] do [what]...' },
      { label: 'Niche (service + audience)', placeholder: 'e.g. Email design for independent course creators...' },
      { label: 'Starter package: what\'s included + price', placeholder: 'e.g. 8 posts/mo + weekly Stories + report — $350/mo' },
    ],
  },
  {
    kind: 'simulator',
    id: 'freelance-m2-task',
    moduleId: 'freelance-m2',
    trackId: 'freelance',
    title: 'Discovery Call Simulator',
    description: 'Handle a live discovery call with a fictional client, then get scored on how you did.',
    deliverableType: 'Discovery Call Transcript',
    xp: 90,
    brief:
      'You\'re on a discovery call with a prospective client. Ask good questions, confirm scope and budget, and end with a clear next step — the way you\'d do it for real.',
  },
  {
    kind: 'builder',
    id: 'freelance-m3-task',
    moduleId: 'freelance-m3',
    trackId: 'freelance',
    title: 'Client Onboarding Packet',
    description: 'Build the doc you\'d actually send a new client on day one.',
    deliverableType: 'Onboarding Packet',
    xp: 70,
    brief: 'Brief: You just signed a new client for a 3-month content project. Build the onboarding packet you\'d send them before work starts.',
    prompts: [
      { label: 'Access/info checklist', placeholder: 'e.g. Platform logins, brand assets, past top-performing posts...' },
      { label: 'Communication expectations', placeholder: 'e.g. Slack for quick Qs, email for approvals, 24hr response time...' },
      { label: 'Scope summary + revision policy', placeholder: 'e.g. 12 posts/mo, 2 revision rounds per piece...' },
      { label: 'Offboarding plan (even this early)', placeholder: 'e.g. Final file handoff via shared folder, testimonial ask at month 3...' },
    ],
  },
]
