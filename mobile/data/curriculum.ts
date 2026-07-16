import { Radar } from 'lucide-react-native'
import type { BuilderEndTask, Lesson, Module, Track } from './types'

/*
 * ============================================================================
 *  LEARNERWARE CURRICULUM — single shared path for all three audiences
 *  (freelancer / small business owner / marketer upskilling). The `outcome`
 *  from onboarding only reframes intros + task briefs (see bodyVariants /
 *  briefVariants), it never branches the path.
 *
 *  FULL MODULE PLAN (easiest -> most complex), one portfolio artifact each:
 *   M1  Research & Insight Foundations      -> Research Plan
 *   M2  Audience & Personas                 -> Persona Doc
 *   M3  Competitive & Data Intelligence     -> Competitor Audit
 *   M4  Platforms Deep Dive                 -> Platform Playbook
 *   M5  Video & Short-Form                  -> Video Strategy
 *   M6  Content & AI Strategy (synthesis)   -> Content Strategy
 *   M7  Commerce & Community                -> Community/CS Playbook
 *   M8  Freelance Business (everyone)       -> Freelance Pitch Pack
 *
 *  PEDAGOGY (tagged per lesson in comments so it can be iterated without
 *  re-reading prose):
 *   - ACTIVE RECALL: every lesson has answer-before-reveal checks + a
 *     generative short-answer at the end.
 *   - SPACED REPETITION: each module OPENS by resurfacing the previous
 *     module's core idea as a quick recall question.
 *   - INTERLEAVING: lessons deliberately pull a concept from an earlier
 *     module back in (e.g. M8 reuses M1's Research Plan as a pitch tool).
 *   - SCENARIO-BASED PRACTICE: every end task is an applied build that
 *     outputs a real, exportable portfolio artifact.
 * ============================================================================
 */

export const smTrack: Track = {
  id: 'sm',
  title: 'Social Media Marketing',
  tagline: 'Research-led social strategy you can actually sell',
  description:
    'Go from guesswork to a research-backed social strategy — and build a portfolio of real deliverables as you learn.',
  icon: Radar,
  pastelIndex: 0,
  moduleIds: ['m1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm7', 'm8'],
}

export const smModules: Module[] = [
  {
    id: 'm1',
    trackId: 'sm',
    title: 'Research & Insight Foundations',
    description: 'Why research beats guessing, how to set brand goals, and the tools that find real signal.',
    lessonIds: ['m1-l1', 'm1-l2', 'm1-l3', 'm1-l4'],
    endTaskId: 'm1-task',
  },
  {
    id: 'm2',
    trackId: 'sm',
    title: 'Audience & Personas',
    description: 'Turn research into a specific person you can serve — segments, jobs-to-be-done, and real customer language.',
    lessonIds: ['m2-l1', 'm2-l2', 'm2-l3'],
    endTaskId: 'm2-task',
  },
  {
    id: 'm3',
    trackId: 'sm',
    title: 'Competitive & Data Intelligence',
    description: 'Read competitors and analytics for signal, not vanity — and find the gap nobody is filling.',
    lessonIds: ['m3-l1', 'm3-l2', 'm3-l3'],
    endTaskId: 'm3-task',
  },
  {
    id: 'm4',
    trackId: 'sm',
    title: 'Platforms Deep Dive',
    description: 'How 2025-2026 algorithms actually work, what each platform rewards, and how to pick your stack.',
    lessonIds: ['m4-l1', 'm4-l2', 'm4-l3', 'm4-l4'],
    endTaskId: 'm4-task',
  },
  {
    id: 'm5',
    trackId: 'sm',
    title: 'Video & Short-Form',
    description: 'Hooks, retention, and repurposing — the format that drives the most reach, done deliberately.',
    lessonIds: ['m5-l1', 'm5-l2', 'm5-l3'],
    endTaskId: 'm5-task',
  },
  {
    id: 'm6',
    trackId: 'sm',
    title: 'Content & AI Strategy',
    description: 'Pillars, calendars, batching, and AI-assisted creation that keeps your voice — the synthesis of everything so far.',
    lessonIds: ['m6-l1', 'm6-l2', 'm6-l3'],
    endTaskId: 'm6-task',
  },
  {
    id: 'm7',
    trackId: 'sm',
    title: 'Commerce & Community',
    description: 'Turn attention into sales and audience into community — social commerce, UGC, and DMs as your storefront.',
    lessonIds: ['m7-l1', 'm7-l2', 'm7-l3'],
    endTaskId: 'm7-task',
  },
  {
    id: 'm8',
    trackId: 'sm',
    title: 'Freelance Business',
    description: 'Package the whole skill into income — positioning, pricing, first clients, contracts, and your channels as proof.',
    lessonIds: ['m8-l1', 'm8-l2', 'm8-l3', 'm8-l4'],
    endTaskId: 'm8-task',
  },
]

export const smLessons: Lesson[] = [
  // ===========================================================================
  //  MODULE 1 · Research & Insight Foundations
  // ===========================================================================

  // ---------------------------------------------------------------------------
  // M1 · L1 — Importance of Social Research and Insights
  // TECHNIQUE: Active recall (mid-lesson TF + end-lesson short answer, answer-before-reveal)
  // ---------------------------------------------------------------------------
  {
    id: 'm1-l1',
    moduleId: 'm1',
    trackId: 'sm',
    title: 'Research Beats Guessing',
    subtitle: 'Why the best social work starts before you post anything',
    minutes: 4,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'Most social media fails at the research step, not the posting step',
        body: "When a social account underperforms, people blame the captions, the hashtags, the posting time. Almost always the real problem is upstream: nobody defined who the content is for, what those people actually care about, or what the brand is trying to change. Research is how you replace \"let's try this and see\" with a testable point of view. It's also the least glamorous and most skipped part of the job — which is exactly why doing it well is a competitive edge.",
        bodyVariants: {
          freelancer:
            "When a client's account underperforms, they'll blame the captions, the hashtags, the posting time. Almost always the real problem is upstream: nobody defined who the content is for, what those people care about, or what the business is trying to change. Research is how you justify your recommendations with evidence instead of taste — and it's what lets you charge strategy rates instead of \"post-scheduler\" rates. It's the least glamorous, most skipped part of the job, which is exactly why doing it well wins you the pitch.",
          business:
            "When your account underperforms, it's tempting to blame the captions, the hashtags, the posting time. Almost always the real problem is upstream: you haven't nailed down who the content is really for, what they care about, or what you're trying to change in the business. Research is how you stop burning hours on posts that go nowhere and start making a few deliberate ones that move bookings, sign-ups, or sales. It's unglamorous, which is why most of your competitors skip it.",
          marketer:
            "When a channel underperforms, the team blames the creative, the cadence, the algorithm. Usually the real problem is upstream: the audience definition, the insight, or the objective was never pinned down. Research is how you bring a defensible point of view into a planning meeting instead of an opinion — and it's what gets social taken seriously next to paid and lifecycle. It's the least glamorous part of the remit, which is exactly why owning it raises your standing.",
        },
        bullets: [
          'Insight = a specific, non-obvious truth about the audience you can act on',
          'Data (a 4.2% save rate) is not an insight; the "why" behind it is',
          'Good research narrows what to test — it doesn\'t hand you certainty',
        ],
      },
      {
        // ACTIVE RECALL — mid-lesson check, must answer before the explanation reveals
        kind: 'question',
        question: {
          type: 'tf',
          prompt: '"Our Reels get more saves than our carousels" is an insight you can build a strategy on.',
          correctAnswer: false,
          correctFeedback:
            "Right. That's a data point, not an insight. The insight is the *why* — e.g. \"people save our Reels because each one ends with a specific number they want to remember.\" That's what you can deliberately repeat.",
          incorrectFeedback:
            "Not quite. That's raw data. An insight is the actionable *why* underneath it — \"they save the Reels that end with a concrete number\" — which is the thing you can intentionally do again.",
        },
      },
      {
        kind: 'info',
        heading: 'The three questions every research effort has to answer',
        body: "Before you open a single tool, know what you're trying to leave with. Strong social research answers: (1) Who exactly are we for, and who are we not for? (2) What do they already believe, want, and struggle with? (3) What's the one change in behaviour we're trying to cause — a follow, a save, a DM, a booking, a purchase? If a piece of research doesn't sharpen one of those three answers, it's trivia. A real example: a meal-kit brand assumed their audience was \"busy professionals\" and made slick time-saving content that flopped. Ten customer interviews revealed the real driver was decision fatigue, not time — people were exhausted by choosing what to cook, not short on minutes. Same audience, completely different content, and reach roughly tripled once the messaging shifted to \"we decide, you cook.\"",
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'A boutique gym wants "more engagement." What\'s the sharpest research goal to hand a strategist?',
          options: [
            'Find out which posts get the most likes',
            'Identify what current members were afraid of before they joined, and whether that fear shows up in comments and DMs',
            'Post more Reels because Reels get more reach',
            'Copy the three biggest gym accounts in the country',
          ],
          correctIndex: 1,
          correctFeedback:
            'Exactly — it targets a specific belief/struggle (pre-join fear) tied to a real behaviour change (joining). That produces content angles you can test, not vanity metrics.',
          incorrectFeedback:
            'Reconsider. "Most likes," "post more Reels," and "copy big accounts" are tactics or vanity metrics. The sharp goal digs into a specific audience belief tied to the behaviour you want (joining).',
        },
      },
      {
        // ACTIVE RECALL — end-lesson generative prompt (write before seeing guidance)
        kind: 'question',
        question: {
          type: 'short',
          prompt:
            'Pick any brand you know. Write one insight (a specific "why") about its audience that you could build content around — not a data point.',
          placeholder:
            'e.g. First-time plant buyers don\'t want more plants — they\'re scared of killing the one they have, so "hard to kill" reassurance outperforms "look how pretty."',
          guidance:
            'A strong answer states a specific belief, fear, or desire and implies a content angle. If yours could be rewritten as a metric ("they like short videos"), push deeper to the underlying "why."',
        },
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // M1 · L2 — Establishing Brand Capabilities and Goals
  // TECHNIQUE: Active recall + INTERLEAVING (ties goals back to what research you'll need)
  // ---------------------------------------------------------------------------
  {
    id: 'm1-l2',
    moduleId: 'm1',
    trackId: 'sm',
    title: 'Goals, Capabilities & Constraints',
    subtitle: 'Deciding what "good" looks like before you chase it',
    minutes: 4,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'A goal you can\'t measure is a wish',
        body: "\"Grow the brand\" is not a goal. A usable social goal names a metric, a direction, a rough size, and a timeframe: \"take inbound DMs from ~5 to ~20 a week within 90 days.\" That specificity does two things — it tells you which research matters (what makes people DM?) and it tells you when to stop or pivot. Tie every goal to one of three business jobs social actually does: build awareness (new people who've never heard of you), drive consideration (people weighing you up — saves, profile visits, link clicks, DMs), or prompt action (bookings, sign-ups, sales). Most brands try to do all three at once and do none of them well.",
      },
      {
        // INTERLEAVING — pulls the "insight vs data" idea from L1 into goal-setting
        kind: 'question',
        question: {
          type: 'mc',
          prompt:
            'Which is a usable 90-day social goal for a new coffee subscription?',
          options: [
            'Go viral on TikTok',
            'Increase brand awareness',
            'Grow website visits from Instagram from ~120/mo to ~400/mo, tracked via a UTM link in bio',
            'Post every day and stay consistent',
          ],
          correctIndex: 2,
          correctFeedback:
            'Yes — metric, direction, size, timeframe, and a tracking method. "Consistency" and "awareness" are inputs or vibes; "go viral" isn\'t controllable.',
          incorrectFeedback:
            'Look again. Only one option has a metric, a direction, a size, a timeframe, and a way to measure it. The others are vibes ("awareness"), inputs ("post every day"), or luck ("go viral").',
        },
      },
      {
        kind: 'info',
        heading: 'Capabilities and constraints decide what\'s realistic',
        body: "Strategy that ignores capacity is fantasy. Before committing to a plan, get brutally honest about four things: who can actually make content (one overworked owner vs. a team), how often (2 posts/week you sustain beats 7 you abandon in a month), what raw material exists (can you film in the space? are there customers who'll talk on camera?), and what's off-limits (regulated claims, a founder who won't be on camera, no budget for ads). A realistic constraint map is more valuable than an ambitious calendar. Example: a two-person skincare brand planned daily Reels, burned out in three weeks, and went silent. Rebuilt around a sustainable \"2 founder-filmed Reels + 3 repurposed carousels per week,\" they held it for six months and grew steadily — because the plan matched the capacity.",
      },
      {
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'A content plan the brand can only sustain for a month is still better than a smaller plan they can hold for a year.',
          correctAnswer: false,
          correctFeedback:
            'Correct. Algorithms and audiences both reward sustained presence. A smaller cadence you keep beats a big one that collapses and goes silent.',
          incorrectFeedback:
            'Not in practice. A plan that collapses in a month tanks momentum and trust. A sustainable smaller cadence almost always outperforms a burst-then-silence.',
        },
      },
      {
        // ACTIVE RECALL + interleave (goal -> research need)
        kind: 'question',
        question: {
          type: 'short',
          prompt:
            'Write one specific 90-day goal (metric + direction + size + timeframe) for a business of your choice, then name the ONE research question that goal makes most important to answer.',
          placeholder:
            'e.g. Goal: grow trial-class bookings from IG from ~8 to ~25/mo in 90 days. Key research question: what fear or objection stops first-timers from booking a class?',
          guidance:
            'A strong answer has a measurable goal AND a research question that clearly serves it. If your research question could be answered without changing the goal, it\'s probably not the one that matters most.',
        },
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // M1 · L3 — Audience Research Tools
  // TECHNIQUE: Scenario mini + INTERLEAVING (introduces persona thinking early, before M2)
  // ---------------------------------------------------------------------------
  {
    id: 'm1-l3',
    moduleId: 'm1',
    trackId: 'sm',
    title: 'The Audience Research Toolkit',
    subtitle: 'Where real signal actually lives (and what each tool is good for)',
    minutes: 5,
    xp: 25,
    steps: [
      {
        kind: 'info',
        heading: 'Four tiers of audience research, cheapest to richest',
        body: "You don't need a research budget — you need to know where signal lives. Tier 1, native platform analytics: Instagram Insights, TikTok Analytics, and YouTube Studio show you who already engages (age, location, active times) and which posts overperformed. Tier 2, the audience's own words: read comments, DMs, and — underrated — relevant subreddits and Amazon/Google reviews in the niche, where people describe problems unprompted. Tier 3, search and trend tools: Google Trends, AnswerThePublic and AlsoAsked (the questions people type), and TikTok's Creator Search Insights (what people search for on TikTok, with 'content gap' flags). Tier 4, dedicated tools: SparkToro (where an audience already hangs out and who they follow), and social listening like Brand24 or Brandwatch for tracking mentions at scale.",
        bullets: [
          'Native analytics tell you who you HAVE, not who you could reach',
          'Reviews and subreddits are goldmines of unprompted, real language',
          'TikTok Creator Search Insights flags searched-for topics with low supply',
          'SparkToro answers "what else does my audience follow / listen to / read?"',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt:
            'You want the exact words real people use to describe a problem your product solves. Best first source?',
          options: [
            'Your own Instagram Insights demographics tab',
            'Competitor follower counts',
            'Reviews, comments, and niche subreddit threads where people describe the problem unprompted',
            'A generic "top hashtags" list',
          ],
          correctIndex: 2,
          correctFeedback:
            'Exactly — unprompted, real language is what makes captions and hooks land. Demographics tell you who; reviews and threads tell you how they talk and what they actually struggle with.',
          incorrectFeedback:
            'Reconsider. Demographics and hashtag lists don\'t give you language. People\'s own words live in reviews, comments, and niche forums where they describe the problem without being asked.',
        },
      },
      {
        // INTERLEAVING — a light persona sketch dropped inside a research lesson (M2 preview)
        kind: 'info',
        heading: 'Turn signal into a rough "who," immediately',
        body: "Research is only useful when it collapses into a picture of a person. You'll build proper personas in the next module, but start sketching now — it keeps research honest. After an hour in the tools, you should be able to fill a sentence: \"Our core person is [rough who], trying to [job/desire], but blocked by [struggle], who currently hangs out on [platform/community] and describes the problem as '[their exact words].'\" If you can't fill that in, you haven't researched enough yet — you've just collected tabs. Example from a real audit: a local bookshop's Instagram skewed 25–34 women (native analytics), those people over-indexed on 'cosy/slow living' content and followed indie-lifestyle accounts (SparkToro), and reviews repeatedly used the phrase 'a place to escape.' That collapses to: 'a 30-something seeking a small weekly escape, who calls the shop a refuge' — a far better content brief than 'people who like books.'",
      },
      {
        // SCENARIO MINI — applied, previews the end-of-module task
        kind: 'question',
        question: {
          type: 'short',
          prompt:
            "A café with ~400 followers hired you to figure out who its content should target. List the first three tools/sources you'd open and the ONE thing you'd try to learn from each.",
          placeholder:
            'e.g. 1) Instagram Insights — who already engages + when. 2) Google reviews — the exact words regulars use about why they come. 3) TikTok Creator Search Insights — what local coffee topics people search but few make.',
          guidance:
            'A strong answer picks sources that each return a *different* type of signal (who / their language / demand gaps) rather than three that all tell you demographics. Naming the specific learning per tool is the point.',
        },
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // M1 · L4 — AI-Powered Social Research
  // TECHNIQUE: SPACED REPETITION (recaps L1 insight-vs-data) + active recall
  // ---------------------------------------------------------------------------
  {
    id: 'm1-l4',
    moduleId: 'm1',
    trackId: 'sm',
    title: 'AI-Powered Research (Without the Slop)',
    subtitle: 'Using AI to go faster without inventing facts',
    minutes: 5,
    xp: 25,
    steps: [
      {
        // SPACED REPETITION — resurfaces the L1 core distinction before adding new material
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'Quick recap from Lesson 1: a metric like "6% save rate" counts as an insight on its own.',
          correctAnswer: false,
          correctFeedback:
            "Still false — and this matters here. AI will happily hand you tidy-sounding data. Your job is to push it to the *why*, which is the actual insight.",
          incorrectFeedback:
            "Recall from L1: that's data, not insight. Keep this sharp — AI tools produce confident-sounding metrics, and you have to drive them to the actionable *why*.",
        },
      },
      {
        kind: 'info',
        heading: 'What AI is genuinely good (and dangerous) at in research',
        body: "Used well, AI compresses days of synthesis into an hour. Used lazily, it invents plausible nonsense. The reliable jobs: synthesising messy input you provide (paste 50 real reviews and ask for recurring themes and verbatim phrases), drafting interview and survey questions, clustering comments into objections, and — with sourced tools like Perplexity — pulling cited trend data you can verify. The dangerous jobs: asking a chatbot to 'tell me about my audience' with no input (it will confidently generalise), or trusting any statistic it states without a link. Rule of thumb: AI is a synthesiser of evidence you feed it, not a source of evidence. A practitioner move — paste real reviews into Claude or ChatGPT and prompt: 'Cluster these into the top 5 recurring problems, quote 2 real phrases per cluster, and flag anything only one person said so I don't overweight it.' That last clause is what separates useful from misleading.",
        bullets: [
          'Feed it real input (reviews, comments, transcripts) — don\'t ask it to imagine',
          'Perplexity/Gemini with citations > a bare chatbot claim you can\'t check',
          'Always ask it to quote real phrases and flag weak/single-source signals',
          'Great for first-draft survey + interview questions you then sharpen',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'Which is the most trustworthy way to use AI in audience research?',
          options: [
            'Ask ChatGPT "who is the audience for a vegan bakery?" and use its answer as your persona',
            'Paste 40 real customer reviews and ask it to cluster recurring problems and quote real phrases',
            'Ask it for "the top 10 TikTok trends right now" and post about all of them',
            'Have it invent three customer testimonials to use as social proof',
          ],
          correctIndex: 1,
          correctFeedback:
            'Right — it\'s synthesising real evidence you supplied, and quoting real language you can verify. That\'s the safe, high-leverage use.',
          incorrectFeedback:
            'Reconsider. Two options ask AI to *invent* (a persona from nothing, fake testimonials) and one trusts unsourced trend claims. The trustworthy use is synthesising real input you provide.',
        },
      },
      {
        // ACTIVE RECALL — generative, applies the "feed it real input" rule
        kind: 'question',
        question: {
          type: 'short',
          prompt:
            'Write a single AI prompt you could paste your real customer reviews into that would return useful, verifiable research (not generic slop).',
          placeholder:
            "e.g. \"Here are 30 real reviews. Group them into the top 5 recurring frustrations, quote 2 real phrases per group, note which appear most often, and flag any that only one reviewer mentioned.\"",
          guidance:
            'A strong prompt (1) supplies real input, (2) asks for grouping/synthesis not invention, (3) demands real quotes, and (4) asks it to flag weak signal. If your prompt would work with zero data pasted in, it\'s asking AI to hallucinate.',
        },
      },
    ],
  },

  // ===========================================================================
  //  MODULE 2 · Audience & Personas
  // ===========================================================================

  // ---------------------------------------------------------------------------
  // M2 · L1 — Segmentation
  // TECHNIQUE: SPACED REPETITION (opens recalling M1 "rough who") + active recall
  // ---------------------------------------------------------------------------
  {
    id: 'm2-l1',
    moduleId: 'm2',
    trackId: 'sm',
    title: 'From "Everyone" to a Few You Can Serve',
    subtitle: 'Why narrowing your audience grows your reach',
    minutes: 4,
    xp: 20,
    steps: [
      {
        // SPACED REPETITION — resurfaces the "collapse research into a rough who" idea from M1L3
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'Recall from Module 1: the point of audience research is to collapse signal into a picture of a specific person, not a demographic bracket.',
          correctAnswer: true,
          correctFeedback:
            "Yes — and that's exactly what this module turns into a usable tool. \"25–34 women\" is a bracket; \"a 30-something seeking a weekly escape\" is a person you can write for.",
          incorrectFeedback:
            "Look back at M1L3. Research is only useful once it becomes a picture of a person — a 'rough who' — not a demographic range. That's the raw material for this module.",
        },
      },
      {
        kind: 'info',
        heading: 'Targeting everyone means reaching no one',
        body: "New brands fear that narrowing their audience shrinks their market. The opposite is true on social. Algorithms reward content that makes a specific group react strongly; broad content that mildly interests everyone gets shown to no one, because the platform can't tell who to serve it to. Segmentation is the act of splitting a vague market into groups distinct enough that you'd say different things to each. The mistake is segmenting on demographics alone (age, gender, location) — those are easy to measure but rarely explain behaviour. Segment instead on behaviour and need: what someone is trying to do, what stage they're at, and what's stopping them.",
        bodyVariants: {
          freelancer:
            "Clients fear that narrowing the audience shrinks their market — part of your job is to show them the opposite is true on social. Algorithms reward content that makes a specific group react strongly; broad content that mildly interests everyone gets shown to no one, because the platform can't tell who to serve it to. Segmentation is splitting a vague market into groups distinct enough that you'd say different things to each. The amateur move is segmenting on demographics (age, gender, location) — easy to measure, rarely explains behaviour. The move that justifies your fee is segmenting on behaviour and need: what someone is trying to do, what stage they're at, and what's stopping them.",
          business:
            "It feels safer to aim your content at 'anyone who might buy' — but on social that's the fastest way to reach no one. Algorithms reward content that makes a specific group react strongly; broad content that mildly interests everyone gets buried, because the platform can't tell who to serve it to. Segmentation is splitting your vague market into groups distinct enough that you'd say different things to each. Don't split on demographics alone (age, location) — those rarely explain why someone buys. Split on behaviour and need: what they're trying to do, what stage they're at, and what's stopping them.",
          marketer:
            "The instinct in a planning meeting is to keep the target broad so nothing's left on the table. On social that backfires: algorithms reward content that makes a specific segment react strongly, and broad content that mildly interests everyone gets suppressed because the system can't route it. Segmentation splits a vague market into groups distinct enough to warrant different messaging. Resist demographic-only segments (age, region) — they're reportable but rarely predictive. Segment on behaviour and need: job-to-be-done, lifecycle stage, and the blocker in the way.",
        },
        bullets: [
          'Demographic segments are measurable but rarely explain WHY someone acts',
          'Behavioural/need-based segments ("first-timers scared of X") drive content',
          'You can serve 2-3 segments — but you write to ONE at a time per post',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'A yoga studio is segmenting its audience. Which split is most useful for content?',
          options: [
            'Women 25-45 vs. women 45-65',
            'People within 5km vs. people 5-15km away',
            'Nervous first-timers who think they\'re "not flexible enough" vs. lapsed regulars who fell out of routine',
            'iPhone users vs. Android users',
          ],
          correctIndex: 2,
          correctFeedback:
            'Exactly — those two groups have different fears and need different content (reassurance vs. re-motivation). The others are demographics that don\'t tell you what to say.',
          incorrectFeedback:
            'Reconsider. Age, distance, and device don\'t tell you what content to make. The behavioural/need split (first-timer fear vs. lapsed-regular guilt) does — each needs a different message.',
        },
      },
      {
        kind: 'info',
        heading: 'Pick a primary segment, then write to one person',
        body: "You can serve two or three segments over time, but every individual post should speak to one, in the second person, as if to a single reader. Vague inclusivity (\"whether you're a beginner or a pro...\") dilutes the emotional hit that earns reach. A real example: a meal-prep brand had three segments — new parents, shift workers, and gym-goers. When they made one Reel that spoke only to exhausted new parents (\"It's 6pm, the baby's finally down, and you have zero energy to think about dinner\"), it outperformed their previous 'something for everyone' posts 8-to-1 on saves. Gym-goers didn't feel excluded; specificity read as understanding, and the algorithm had a clear group to push it to.",
      },
      {
        // ACTIVE RECALL — generative
        kind: 'question',
        question: {
          type: 'short',
          prompt:
            'Take any business you know and write two behaviour/need-based segments for it (not demographics). For each, name the one thing they\'re trying to do and the blocker in their way.',
          placeholder:
            'e.g. A. Time-poor parents trying to feed the family well but paralysed by nightly "what\'s for dinner." B. Fitness-focused singles trying to hit protein targets but bored of the same three meals.',
          guidance:
            'Strong segments describe a job + a blocker, not a demographic. If you could tell your two segments apart only by age or location, push toward what each is trying to DO and what stops them.',
        },
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // M2 · L2 — Building Personas (Jobs-to-be-Done)
  // TECHNIQUE: INTERLEAVING (pulls M1 research tools into persona-building) + active recall
  // ---------------------------------------------------------------------------
  {
    id: 'm2-l2',
    moduleId: 'm2',
    trackId: 'sm',
    title: 'Personas That Change Decisions',
    subtitle: 'The difference between a cardboard cutout and a useful tool',
    minutes: 5,
    xp: 25,
    steps: [
      {
        kind: 'info',
        heading: 'Most personas are useless. Here\'s what makes one work.',
        body: "The classic persona — \"Marketing Mary, 34, drives a Prius, loves yoga and oat milk\" — is a cardboard cutout. None of those details change a single content decision. A persona is only worth making if you'd write different content because of it. The fix is the Jobs-to-be-Done lens: people don't buy products, they 'hire' them to make progress in a situation. A useful persona is built around the job, not the biography: the situation they're in, the progress they want, the anxieties holding them back, and the habits (what they already do instead). Milkshake sales famously jumped when a chain realised commuters 'hired' a thick milkshake to make a boring morning drive less dull and keep them full till lunch — nothing to do with age or taste preference.",
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'Which detail actually belongs in a decision-useful persona for a language-learning app?',
          options: [
            'Enjoys travel and cooking, aged 28-40',
            'Owns a mid-range Android phone',
            'Wants to hold a real conversation on an upcoming trip, but quit before because lessons felt like homework and progress felt invisible',
            'Follows several lifestyle influencers',
          ],
          correctIndex: 2,
          correctFeedback:
            'Yes — situation (upcoming trip), desired progress (real conversation), and the anxiety/past failure (felt like homework, invisible progress). That directly shapes content: show fast, visible wins.',
          incorrectFeedback:
            'Reconsider. Hobbies, device, and follows don\'t change what content you make. The job — "hold a conversation on a trip," blocked by "it felt like homework" — tells you exactly what to show.',
        },
      },
      {
        // INTERLEAVING — explicitly reuses the M1 research toolkit to source persona details
        kind: 'info',
        heading: 'Build the persona from evidence, not imagination',
        body: "Here's where Module 1 pays off: every field in a good persona should be sourced from real research, not invented at a desk. Pull the situation and anxieties from the reviews, comments, and subreddit threads you learned to mine. Pull the 'where they already are' from SparkToro and native analytics. Pull the exact phrasing from customer language you collected. A persona assembled from evidence reads differently — it's full of real quotes and specific situations, not adjectives. One practical format that stays useful: name the job ('get gym-fit without feeling judged'), the trigger situation, the top two anxieties (in their words), what they currently do instead, and the one message that would move them. If any field is a guess, mark it as a hypothesis to validate — don't launder a guess into a 'fact' by putting it in a nice template.",
        bullets: [
          'Every persona field should trace back to a research source from M1',
          'Real quotes > adjectives — "I always feel like everyone\'s watching me" beats "self-conscious"',
          'Flag guessed fields as hypotheses to test, not settled facts',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'It\'s fine to fill persona fields with reasonable assumptions when you don\'t have research, as long as the persona looks complete.',
          correctAnswer: false,
          correctFeedback:
            'Right. A complete-looking persona built on guesses is more dangerous than an incomplete one, because the whole team treats it as fact. Mark guesses as hypotheses to validate.',
          incorrectFeedback:
            'Careful — a polished persona full of assumptions gets treated as truth by everyone who uses it. Better to leave a field marked "hypothesis: test this" than to launder a guess into a fact.',
        },
      },
      {
        // ACTIVE RECALL — generative, sets up the end task
        kind: 'question',
        question: {
          type: 'short',
          prompt:
            'For a business you know, write the "job" its main customer is really hiring it to do — phrased as progress in a situation, plus the top anxiety holding them back.',
          placeholder:
            'e.g. Job: "look pulled-together for work mornings without spending 40 minutes on my hair." Anxiety: "I\'ve wasted money on products that didn\'t work for my hair type."',
          guidance:
            'A strong answer frames a job as progress-in-a-situation (not "wants nice hair") and names a real, specific anxiety. If your anxiety is generic ("wants value"), dig for the concrete past disappointment behind it.',
        },
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // M2 · L3 — Voice of Customer
  // TECHNIQUE: Scenario mini + active recall
  // ---------------------------------------------------------------------------
  {
    id: 'm2-l3',
    moduleId: 'm2',
    trackId: 'sm',
    title: 'Voice of Customer',
    subtitle: 'Steal your messaging from the people you serve',
    minutes: 4,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'The best copy is transcribed, not written',
        body: "Marketers burn hours inventing clever phrases when the winning language is already sitting in their reviews and DMs. Voice-of-Customer (VoC) research is the discipline of collecting the audience's exact words and using them, unedited, in hooks and captions. Why it works: people trust language that sounds like their own inner monologue, and 'their words' beat 'your words' on comprehension and emotion every time. The richest VoC sources are review sites (especially 3-star reviews — they're specific about both what worked and what didn't), Reddit and Facebook-group threads, sales-call notes, and your own comment section. Look especially for the 'so that' behind a feature: people don't want a 'lightweight moisturiser,' they want it 'so that my makeup doesn't slide off by noon.'",
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'You\'re writing hooks for a project-management tool. Which line is doing VoC right?',
          options: [
            '"Streamline your workflow with our intuitive platform"',
            '"Best-in-class productivity software for modern teams"',
            '"For when your \'quick sync\' becomes the fourth meeting about the same thing"',
            '"Unlock synergy and maximise efficiency"',
          ],
          correctIndex: 2,
          correctFeedback:
            'Exactly — it uses a real, specific frustration in the audience\'s own voice. The others are generic marketing-speak nobody actually says out loud.',
          incorrectFeedback:
            'Reconsider. "Streamline," "best-in-class," and "synergy" are words brands use, not words customers say. The winning line echoes a real, specific frustration in the audience\'s own language.',
        },
      },
      {
        kind: 'info',
        heading: 'Turn raw quotes into a swipe file',
        body: "Don't just read VoC — bank it. Keep a running 'swipe file' (a simple doc or Notion table) with three columns: the exact quote, the source, and the emotion/job it reveals. When it's time to write, you're assembling from real material instead of staring at a blank page. A concrete example: a bookkeeping service mined 40 reviews and kept noticing the phrase 'I finally stopped dreading the end of the month.' They made that the literal hook of a Reel — 'The feeling when you stop dreading month-end' — over a calm time-lapse of a tidy inbox. It became their best-performing post of the quarter, because it named an emotion their audience felt but had never seen a brand say out loud. That's VoC's superpower: it makes people feel understood before you've sold them anything.",
      },
      {
        // SCENARIO MINI — applied, feeds the end task
        kind: 'question',
        question: {
          type: 'short',
          prompt:
            'Imagine (or recall) three real things a customer might say about a business you know — in their own casual words. Then turn ONE of them into a hook.',
          placeholder:
            'e.g. Quotes: "I never know what to cook", "by 6pm I\'m too tired to decide", "we always end up ordering takeaway again." Hook: "It\'s 6pm and you\'re about to order takeaway again, aren\'t you?"',
          guidance:
            'A strong answer keeps the customer\'s casual phrasing intact in the hook — no corporate translation. If your hook sounds like a brand slogan, you\'ve over-polished it; put the messy real words back in.',
        },
      },
    ],
  },

  // ===========================================================================
  //  MODULE 3 · Competitive & Data Intelligence
  // ===========================================================================

  // ---------------------------------------------------------------------------
  // M3 · L1 — Analyzing Competitors
  // TECHNIQUE: SPACED REPETITION (opens recalling M2 persona) + active recall
  // ---------------------------------------------------------------------------
  {
    id: 'm3-l1',
    moduleId: 'm3',
    trackId: 'sm',
    title: 'Analyze Competitors, Don\'t Copy Them',
    subtitle: 'What to actually extract from the accounts you envy',
    minutes: 5,
    xp: 25,
    steps: [
      {
        // SPACED REPETITION — recalls the persona idea from M2
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'Recall from Module 2: a useful persona is built around the "job" someone is hiring a product to do, not their demographics.',
          correctAnswer: true,
          correctFeedback:
            "Yes. Hold onto that — because the best competitor analysis asks which 'job' each competitor is winning, not just how many followers they have.",
          incorrectFeedback:
            "Revisit M2: personas are built on the job-to-be-done, not age/location. You'll use that lens here — competitors compete on jobs, not follower counts.",
        },
      },
      {
        kind: 'info',
        heading: 'Copying competitors makes you a worse version of them',
        body: "The point of competitor analysis is not to mimic what's working for someone else — it's to find where you can be different and better. If you copy the market leader's format and topics, the best case is that you look like a discount version of an account people already follow. The useful extraction has four parts: positioning (what do they stand for, and who for?), format mix (what content types do they lean on?), what actually performs (their top posts, not their average), and — most valuable — the gaps (what does the whole category ignore or do badly?). A worked example: a new protein-snack brand studied five competitors and found every single one leaned on gym-bro, aesthetic-abs content. The gap was obvious — nobody spoke to 'normal people who just want a decent snack that isn't junk.' They owned that lane and grew fast, precisely by not copying.",
        bodyVariants: {
          freelancer:
            "When a client points at a competitor and says 'make us like them,' the analysis that earns your fee is the one that finds where they can be different and better — not a mimicry plan. Copying the market leader's format and topics, best case, makes the client look like a discount version of an account people already follow. Extract four things: positioning (what they stand for, and who for), format mix, what actually performs (their top posts, not their average), and — most valuable to hand a client — the gaps the whole category ignores. A protein-snack brand once found all five competitors leaned on gym-bro aesthetics; the gap ('normal people who just want a decent snack') was open, and owning it beat copying it.",
          business:
            "It's tempting to look at the biggest account in your space and try to do what they do. But if you copy the leader's format and topics, the best you can be is a discount version of an account people already follow. Analyse competitors to find where you can be different and better. Look at four things: their positioning (what they stand for, for whom), their format mix, what actually performs (their top posts, not their average), and — most useful for you — the gaps nobody's filling. One protein-snack brand noticed every competitor leaned on gym-bro abs content; they spoke to 'normal people who just want a decent snack' instead, and grew fast by owning the lane no one wanted.",
          marketer:
            "In a competitive review, the low-value output is a 'they do X, we should too' deck. The high-value output finds the whitespace. Copying a category leader's format and topics, at best, positions you as a discount alternative to an account the audience already follows. Extract four things: positioning (what they stand for, and for whom), format mix, actual top performers (not channel averages), and the category gaps — the most defensible thing you can bring to a planning meeting. A protein brand's review found every competitor leaning on gym-bro aesthetics; the open lane ('normal people who want a decent snack') was the strategy, and it came from analysis, not imitation.",
        },
        bullets: [
          'Study top posts (outliers), not average posts — averages hide what works',
          'The most valuable finding is a GAP, not a tactic to copy',
          'Ask "what does this whole category do badly?" — that\'s your opening',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'You\'re auditing three competitors for a skincare brand. Which finding is most strategically valuable?',
          options: [
            'The biggest account posts every day at 9am',
            'They all use the same trending audio',
            'Every competitor talks about ingredients and science, but none addresses the confusion beginners feel about where to even start',
            'The market leader has 240k followers',
          ],
          correctIndex: 2,
          correctFeedback:
            'Exactly — that\'s a category-wide gap (beginner confusion) you can own. Posting time, audio, and follower counts are tactics or vanity numbers you can\'t build a position on.',
          incorrectFeedback:
            'Reconsider. Posting times, audio, and follower counts are surface tactics. The strategic gold is the unmet need the whole category ignores — beginner confusion — which you can build a differentiated position around.',
        },
      },
      {
        // ACTIVE RECALL — generative
        kind: 'question',
        question: {
          type: 'short',
          prompt:
            'Name a category you know (e.g. local gyms, meal kits, accountants). What\'s one thing almost every account in it does the same — and what\'s the gap that sameness creates?',
          placeholder:
            'e.g. Every local gym posts "beast mode" transformation content. Gap: nobody makes the gym feel welcoming to unfit, intimidated beginners — huge underserved group.',
          guidance:
            'A strong answer names a real pattern of sameness AND the specific audience or angle it leaves unserved. If your "gap" is just "do it better," push for a distinct angle or audience nobody is speaking to.',
        },
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // M3 · L2 — Metrics That Matter
  // TECHNIQUE: INTERLEAVING (ties back to M1 goal-setting) + active recall
  // ---------------------------------------------------------------------------
  {
    id: 'm3-l2',
    moduleId: 'm3',
    trackId: 'sm',
    title: 'Metrics That Matter (and the Ones That Lie)',
    subtitle: 'Reading analytics without fooling yourself',
    minutes: 5,
    xp: 25,
    steps: [
      {
        kind: 'info',
        heading: 'Likes are the metric you watch when you don\'t know what to watch',
        body: "In 2025 the metrics that predict business results are not the ones on the front of the post. Likes and follower count are lagging, low-signal vanity metrics — nice, but they don't tell you whether content is working. The metrics that matter map to intent and distribution: SAVES and SHARES (someone found it useful enough to keep or send — the strongest organic signal on Instagram and the one the algorithm weights heavily), WATCH TIME / retention (are people actually watching, or scrolling past?), PROFILE VISITS and LINK CLICKS (consideration — they want to know more), and DMs / replies (the closest thing to a raised hand). Follower growth is a lagging result of doing the above well, not a lever you pull directly. Reach tells you distribution; engagement RATE (actions ÷ reach) tells you quality.",
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'A Reel got 50k views but only 40 likes. A carousel got 3k views and 600 saves. Which is more likely doing real work for the business?',
          options: [
            'The Reel — 50k views is far more reach',
            'The carousel — 600 saves signals genuine usefulness and strong intent, and the algorithm rewards it',
            'Neither, only follower growth matters',
            'The Reel, because views always beat saves',
          ],
          correctIndex: 1,
          correctFeedback:
            'Right. 50k passive views with almost no saves is weak signal; 600 saves on 3k views is a very high save rate — real usefulness the algorithm and your audience both reward.',
          incorrectFeedback:
            'Reconsider. Raw views can be passive scroll-bys. 600 saves on just 3k views is an exceptional intent signal — people are keeping it to act on later. That\'s the content doing real work.',
        },
      },
      {
        // INTERLEAVING — connects metric choice back to the M1 goal
        kind: 'info',
        heading: 'The right metric is the one your goal points to',
        body: "This is where Module 1 comes back: there's no universal 'best' metric — the metric that matters is the one downstream of your goal. If the goal is awareness, reach and follower growth are fair. If it's consideration, watch saves, profile visits, and link clicks. If it's action, track DMs, 'get directions' taps, bookings, or sales via a UTM link. Watching the wrong metric quietly wastes months. A real example: a course creator obsessed over view counts and kept chasing viral Reels that brought in the wrong crowd — huge reach, near-zero sales. When they switched their scoreboard to 'email signups from bio link' (their actual goal), they realised their boring, specific how-to carousels drove 10x the signups of any viral hit, and rebuilt the whole strategy around them. Same account, opposite conclusion, just by measuring the thing that mattered.",
      },
      {
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'A post with lower reach but a much higher save + share rate can be more valuable than a higher-reach post, depending on your goal.',
          correctAnswer: true,
          correctFeedback:
            'Correct. Reach is distribution; saves and shares are intent. For consideration or action goals, a smaller, highly-engaged reach often beats a big passive one.',
          incorrectFeedback:
            'It usually can. Reach alone is passive distribution. High save/share rates signal real usefulness and intent, which for most business goals matters more than raw view count.',
        },
      },
      {
        // ACTIVE RECALL — generative, ties goal -> metric
        kind: 'question',
        question: {
          type: 'short',
          prompt:
            'Pick a business goal (e.g. more bookings). Name the ONE primary metric you\'d put on the scoreboard for it — and one vanity metric you\'d deliberately ignore.',
          placeholder:
            'e.g. Goal: more trial bookings. Primary metric: booking-link clicks from bio (via UTM). Deliberately ignore: total likes, which don\'t predict bookings.',
          guidance:
            'A strong answer picks a metric genuinely downstream of the goal (clicks/DMs/bookings for action goals) and names a tempting vanity metric to ignore. If your primary metric is likes or follower count, re-check what the goal actually needs.',
        },
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // M3 · L3 — Finding Content Gaps
  // TECHNIQUE: INTERLEAVING (reuses M1 Creator Search Insights) + scenario
  // ---------------------------------------------------------------------------
  {
    id: 'm3-l3',
    moduleId: 'm3',
    trackId: 'sm',
    title: 'Finding Content Gaps & White Space',
    subtitle: 'Demand that exists but nobody is meeting',
    minutes: 4,
    xp: 20,
    steps: [
      {
        // INTERLEAVING — explicitly reuses the M1 search/trend tools for gap-hunting
        kind: 'info',
        heading: 'The best content lives where demand is high and supply is low',
        body: "A content gap is a topic people actively want but few are making well. Find them by crossing two things you already learned to check: demand (are people searching for or asking about this?) and supply (how much good content already exists?). Your tools from Module 1 do double duty here — TikTok's Creator Search Insights literally flags high-search, low-content topics; AnswerThePublic and AlsoAsked show the questions people type; and reading the comments on competitors' popular posts surfaces the follow-up questions nobody answered. The unanswered questions in a big competitor's comments are pure gold: high proven demand, zero supply. A concrete find: a personal-finance creator noticed dozens of 'but what if I'm self-employed?' comments under generic budgeting videos that only spoke to salaried workers. They made a self-employed budgeting series into that exact gap and it became their most-followed content.",
        bullets: [
          'Gap = high demand (searches, questions) + low supply (little good content)',
          'Creator Search Insights flags this directly; comments reveal it for free',
          'Unanswered questions under competitors\' top posts = proven demand, no supply',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'Which is the strongest evidence of a real content gap worth filling?',
          options: [
            'A topic you personally find interesting',
            'A hashtag with millions of posts already',
            'A question that keeps appearing in comments under popular videos but that none of those videos actually answer',
            'A trend every big account in your niche is already covering',
          ],
          correctIndex: 2,
          correctFeedback:
            'Exactly — repeated unanswered questions prove demand (people keep asking) and low supply (no one answered). That\'s the definition of a gap worth filling.',
          incorrectFeedback:
            'Reconsider. A saturated hashtag or a trend everyone covers is the opposite of a gap. Personal interest isn\'t evidence of demand. Repeated UNanswered questions are — proven demand, missing supply.',
        },
      },
      {
        // SCENARIO MINI — feeds the end task
        kind: 'question',
        question: {
          type: 'short',
          prompt:
            'For a niche you know, describe how you\'d hunt for one content gap in 15 minutes — which two sources you\'d check and what you\'d look for in each.',
          placeholder:
            'e.g. 1) Creator Search Insights for "meal prep" — find high-search sub-topics with few videos. 2) Comments under the top 3 meal-prep Reels — look for repeated questions (e.g. "for one person?") nobody answered.',
          guidance:
            'A strong answer pairs a demand source (search/trends) with a supply-check source (competitor comments/results) and says what signal each should reveal. If both your sources only measure demand, you can\'t confirm the supply side of the gap.',
        },
      },
    ],
  },

  // ===========================================================================
  //  MODULE 4 · Platforms Deep Dive
  // ===========================================================================

  // ---------------------------------------------------------------------------
  // M4 · L1 — How Algorithms Work
  // TECHNIQUE: SPACED REPETITION (opens recalling M3 saves/shares) + active recall
  // ---------------------------------------------------------------------------
  {
    id: 'm4-l1',
    moduleId: 'm4',
    trackId: 'sm',
    title: 'How the Algorithm Actually Works',
    subtitle: 'One mental model for every platform in 2025-2026',
    minutes: 5,
    xp: 25,
    steps: [
      {
        // SPACED REPETITION — recalls saves/shares/watch-time from M3L2
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'Recall from Module 3: saves, shares, and watch time are stronger signals of good content than likes.',
          correctAnswer: true,
          correctFeedback:
            "Yes — and this lesson explains WHY the algorithm treats them that way. Those actions predict that the next person will value the content too.",
          incorrectFeedback:
            "Revisit M3L2: likes are low-signal; saves, shares, and watch time show real value. This lesson explains why the recommendation systems weight exactly those actions.",
        },
      },
      {
        kind: 'info',
        heading: 'Every feed is a prediction engine',
        body: "Instagram, TikTok, YouTube, LinkedIn — under the hood they run the same play. For each piece of content, the system predicts how likely YOU are to take a valued action (watch to the end, save, share, comment, click), and ranks your feed by those predictions. It doesn't 'boost' or 'suppress' morally — it optimises for predicted engagement per impression. That's why the model works the same everywhere: content earns distribution by proving, on a small first test audience, that people take those actions; strong signals expand the test to larger audiences, weak signals stop it. Three 2025-2026 realities sharpen this: (1) reach is now mostly interest-based, not follower-based — TikTok and Instagram Reels routinely show content to non-followers, so a small account CAN reach millions; (2) social platforms are search engines now — people search on TikTok and Instagram, so keywords in captions and on-screen text matter; (3) 'broadcast channels' and DMs are rising as the retention layer beneath discovery.",
        bodyVariants: {
          freelancer:
            "Clients often think reach is bought or gamed. Explain the real machine: Instagram, TikTok, YouTube and LinkedIn all run the same play — for each post, the system predicts how likely a viewer is to take a valued action (watch to the end, save, share, comment, click) and ranks feeds by that. It doesn't 'boost' or 'suppress' morally; it optimises predicted engagement per impression. Content earns distribution by proving on a small test audience that people act, then the test expands. Three 2025-2026 realities to bring to clients: reach is now interest-based, not follower-based (a small account can reach millions); social platforms are search engines (keywords in captions and on-screen text matter); and DMs/broadcast channels are the retention layer under discovery.",
          business:
            "You don't need to 'beat' the algorithm — you need to understand what it's doing. Instagram, TikTok, YouTube and LinkedIn all run the same play: for each post they predict how likely a viewer is to take a valued action (watch to the end, save, share, comment, click) and rank feeds by that prediction. Nothing is 'boosted' or 'suppressed' out of spite — it optimises predicted engagement per impression. Your content earns reach by proving on a small test audience that people act on it, then the test grows. Three things that work in your favour in 2025-2026: reach is interest-based now (a tiny account can still reach thousands of the right people), social is a search engine (put keywords in captions and on-screen text), and DMs are where relationships and sales actually deepen.",
          marketer:
            "For stakeholders who think reach is a budget line, here's the real model: Instagram, TikTok, YouTube and LinkedIn all rank each impression by predicted valued action (watch-through, save, share, comment, click). It's not moral 'boosting' or 'shadow-banning' — it's predicted engagement per impression, tested on a small audience and expanded when signals are strong. Three 2025-2026 shifts worth putting in a deck: distribution is interest-based, not follower-based (organic can still scale); social platforms double as search engines (keyword the captions and on-screen text); and DMs/broadcast channels are the emerging retention layer beneath discovery.",
        },
        bullets: [
          'The system predicts YOUR likelihood of a valued action, then ranks by it',
          'Reach is interest-based now — small accounts can reach non-followers at scale',
          'Social platforms are search engines: keyword your captions + on-screen text',
          'Content is tested on a small audience first; strong signals expand the test',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'Given how the "prediction engine" works, what most directly earns a post wider distribution?',
          options: [
            'Having a large follower count already',
            'Posting at exactly the "best" time of day',
            'Strong early signals (watch-through, saves, shares) from the first small test audience',
            'Using 30 hashtags',
          ],
          correctIndex: 2,
          correctFeedback:
            'Exactly — the system expands distribution when the first test audience takes valued actions. Followers, timing, and hashtag-stuffing are minor next to real early engagement.',
          incorrectFeedback:
            'Reconsider. Distribution expands based on how the first small test audience responds (watch-through, saves, shares). Follower count, perfect timing, and hashtag counts are secondary to those early signals.',
        },
      },
      {
        // ACTIVE RECALL — generative
        kind: 'question',
        question: {
          type: 'short',
          prompt:
            'In one or two sentences, explain to a total beginner why a brand-new account with zero followers can still get a video seen by 100,000 people in 2025.',
          placeholder:
            'e.g. Because reach is interest-based, not follower-based — the platform tests your video on a small audience, and if they watch and share it, it keeps showing it to more people who\'ll likely do the same.',
          guidance:
            'A strong answer captures interest-based distribution + the test-and-expand mechanic. If your explanation relies on "getting lucky" or "the algorithm liked it," reframe around predicted valued actions on a test audience.',
        },
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // M4 · L2 — Instagram & TikTok Mechanics
  // TECHNIQUE: Active recall + concrete format-fit
  // ---------------------------------------------------------------------------
  {
    id: 'm4-l2',
    moduleId: 'm4',
    trackId: 'sm',
    title: 'Instagram & TikTok, Format by Format',
    subtitle: 'What each surface rewards, and what to make for it',
    minutes: 5,
    xp: 25,
    steps: [
      {
        kind: 'info',
        heading: 'Instagram: three surfaces, three jobs',
        body: "Treat Instagram as three tools, not one. REELS are the reach engine — short video shown heavily to non-followers, best for top-of-funnel discovery; Instagram's 'trial reels' feature (2025) even lets you test a Reel on non-followers before committing it to your grid. CAROUSELS are the save-and-teach format — multi-slide posts people swipe and save, ideal for how-tos, frameworks, and depth; they punch above their weight on the save metric that drives ranking. STORIES are the retention layer — low-reach but high-trust, for the existing audience: polls, behind-the-scenes, DMs. A practical split many brands use: Reels to be found, carousels to be useful and saved, Stories to stay close to the people who already follow. On-screen text and a keyworded caption help all three get surfaced in search.",
        bullets: [
          'Reels = discovery/reach (non-followers); test with trial reels first',
          'Carousels = saves + teaching depth; strong ranking signal',
          'Stories = retention + trust with existing followers (polls, DMs)',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'A brand wants to reach NEW people who\'ve never heard of them. Which Instagram format fits best?',
          options: [
            'A Story poll',
            'A Reel designed for strong watch-through and shares',
            'A carousel of internal team photos',
            'A text-only Note',
          ],
          correctIndex: 1,
          correctFeedback:
            'Right — Reels are the discovery surface shown to non-followers. Stories reach existing followers; the carousel described here isn\'t built for reach or saves.',
          incorrectFeedback:
            'Reconsider. Stories mostly reach people who already follow you. For NEW audiences, Reels are the discovery engine — especially ones built for watch-through and shares.',
        },
      },
      {
        kind: 'info',
        heading: 'TikTok: search-first, watch-through-driven, shop-native',
        body: "TikTok in 2025-2026 rewards three things above all. First, WATCH-THROUGH and rewatches — a 12-second video watched fully often beats a 60-second video half-watched, so front-load value and cut dead air. Second, SEARCH — TikTok is a genuine search engine for its users (especially under-30s), and its Creator Search Insights shows what people look for; captions, spoken words (it transcribes), and on-screen text all get indexed, so 'say the keyword out loud.' Third, longer content and TikTok Shop — the platform now pushes 1-3 minute videos when retention holds, and Shop makes in-app buying frictionless, so 'show the product being used' content converts directly. Comments are a distribution surface too: a good comment section (and creators replying with video replies) extends a video's life for days. A worked example: a small kitchenware brand posted a 15-second 'the one thing you're doing wrong when you sharpen a knife' clip, front-loaded the mistake in the first second, and its 95% watch-through rate pushed it to 2M views and a Shop sell-out.",
      },
      {
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'On TikTok, a 15-second video watched all the way through can out-distribute a 60-second video that most people swipe away from halfway.',
          correctAnswer: true,
          correctFeedback:
            'Correct. Watch-through rate is a core signal — full completion (and rewatches) on a short video often beats partial views on a long one. Front-load value and cut filler.',
          incorrectFeedback:
            'It genuinely can. Length isn\'t the lever — completion is. High watch-through on a tight 15-second clip is a stronger signal than a 60-second video people abandon midway.',
        },
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // M4 · L3 — LinkedIn, YouTube & Matching Platform to Objective
  // TECHNIQUE: INTERLEAVING (M1 goals + M2 persona -> platform choice) + active recall
  // ---------------------------------------------------------------------------
  {
    id: 'm4-l3',
    moduleId: 'm4',
    trackId: 'sm',
    title: 'LinkedIn, YouTube & Platform Fit',
    subtitle: 'Match the platform to the objective and the person',
    minutes: 5,
    xp: 25,
    steps: [
      {
        kind: 'info',
        heading: 'LinkedIn and YouTube play a different game',
        body: "LINKEDIN is where B2B and personal-brand-for-professionals lives. In 2025 it rewards dwell time and comments heavily: text posts and document/carousel posts (PDFs) that make people stop and read outperform link-out posts (LinkedIn suppresses external links in-feed, so put them in the first comment). It's a relationship engine — a post that sparks a thoughtful comment thread reaches far beyond your connections. YOUTUBE is the long-game evergreen library: it's the second-biggest search engine, so a good video keeps earning views for years (unlike a Reel that dies in a week). YouTube Shorts act as a discovery funnel feeding subscribers into long-form. The two suit different objectives — LinkedIn for trust and inbound leads in professional niches; YouTube for durable, searchable authority and depth. Neither rewards daily posting the way TikTok does; quality and searchability beat frequency.",
        bullets: [
          'LinkedIn: dwell time + comments; document/text posts win; links go in comment 1',
          'YouTube: evergreen search library — content earns views for years',
          'YouTube Shorts funnel discovery into long-form + subscribers',
        ],
      },
      {
        // INTERLEAVING — explicitly combines M1 goal + M2 persona to choose a platform
        kind: 'info',
        heading: 'The platform is a consequence of the goal and the person',
        body: "Beginners pick platforms by hype ('everyone says be on TikTok'). Professionals derive the platform from two things you've already defined: the objective (Module 1) and where the persona actually is (Module 2). If your goal is B2B leads and your persona is a procurement manager, LinkedIn beats TikTok no matter how 'hot' TikTok is. If your goal is local footfall and your persona is 20-something locals, Instagram + TikTok beat YouTube. Match on three axes: where the audience already spends time, which format suits your raw material (can you film? write? design?), and which platform's strengths fit the objective. A real mismatch story: a B2B accounting firm poured months into TikTok dances that got views but zero clients, while a single well-argued LinkedIn post about a tax-deadline mistake brought in five leads in a week. Same effort, right platform, opposite result — because the platform finally matched the goal and the person.",
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'A B2B software consultant wants inbound leads from decision-makers. Best primary platform?',
          options: [
            'TikTok, because it has the most reach',
            'LinkedIn, because that\'s where professional decision-makers are and it rewards thoughtful, comment-driving posts',
            'Whichever platform is trending this month',
            'All five platforms at once, posting daily',
          ],
          correctIndex: 1,
          correctFeedback:
            'Exactly — you matched the objective (B2B leads) and the persona (professional decision-makers) to the platform. Raw reach on the wrong platform brings the wrong people.',
          incorrectFeedback:
            'Reconsider. Reach on the wrong platform brings the wrong audience. The objective (B2B leads) and persona (decision-makers) point clearly to LinkedIn — and spreading across all five thinly usually fails.',
        },
      },
      {
        // ACTIVE RECALL — generative, sets up the M4 end task
        kind: 'question',
        question: {
          type: 'short',
          prompt:
            'For a business you know, name its main objective and its core persona, then justify ONE primary platform choice from those two facts.',
          placeholder:
            'e.g. Objective: bookings for a local tattoo studio. Persona: 20-35 locals browsing for artist styles. Primary platform: Instagram — visual portfolio format + that audience lives there.',
          guidance:
            'A strong answer derives the platform from the objective + persona, not from hype. If your justification is "because it\'s popular," tie it instead to where the persona is and what the objective needs.',
        },
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // M4 · L4 — Your Platform Stack
  // TECHNIQUE: INTERLEAVING (M1 capacity + this module) + scenario
  // ---------------------------------------------------------------------------
  {
    id: 'm4-l4',
    moduleId: 'm4',
    trackId: 'sm',
    title: 'Choosing Your Platform Stack',
    subtitle: 'Why "be everywhere" is a trap',
    minutes: 4,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'One core platform, one experiment — not five half-efforts',
        body: "The most common beginner mistake is spreading thin across every platform and doing all of them badly. Attention and capacity are finite (remember the constraints from Module 1). The professional model is a stack: ONE core platform where you go deep and win, plus at most ONE experimental platform you test with repurposed content. Everything else is either off or on autopilot. Why one core? Because each platform has its own format, culture, and learning curve, and mastery compounds — a year of focused TikTok beats a year of thin presence on five apps. The 'hub and spoke' approach makes this efficient: create for your core platform (the hub), then adapt the best pieces into platform-native versions for the spoke (not lazy cross-posts with another app's watermark, which every algorithm demotes). A two-person brand that dropped from 'posting everywhere' to 'TikTok core + Instagram Reels spoke' actually grew faster, because focus let them get genuinely good at one thing.",
      },
      {
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'For a small team with limited time, going deep on one core platform usually beats maintaining a thin presence on five.',
          correctAnswer: true,
          correctFeedback:
            'Correct. Mastery compounds and each platform has its own learning curve. Focused depth on one, plus maybe one experiment, beats five shallow efforts almost every time.',
          incorrectFeedback:
            'In practice it does. Five thin presences means five learning curves and no mastery. One core platform (plus maybe one experiment via repurposing) lets a small team actually get good.',
        },
      },
      {
        // SCENARIO — feeds the end task directly
        kind: 'question',
        question: {
          type: 'short',
          prompt:
            'Design a minimal platform stack for a solo baker who can realistically make content ~3 times a week: name the core platform, one experimental platform, and how content flows from one to the other.',
          placeholder:
            'e.g. Core: Instagram (Reels of bakes + carousels of tips). Experiment: TikTok, using the same Reels re-edited natively. Flow: film once, cut a vertical Reel for IG, re-export a TikTok-native version with on-screen keywords.',
          guidance:
            'A strong answer picks ONE core, at most one experiment, and describes a realistic hub-and-spoke flow that respects the 3x/week limit. If your stack needs daily output across four apps, it ignores the capacity constraint.',
        },
      },
    ],
  },

  // ===========================================================================
  //  MODULE 5 · Video & Short-Form
  // ===========================================================================

  // ---------------------------------------------------------------------------
  // M5 · L1 — The Hook
  // TECHNIQUE: SPACED REPETITION (opens recalling M4 watch-through) + active recall
  // ---------------------------------------------------------------------------
  {
    id: 'm5-l1',
    moduleId: 'm5',
    trackId: 'sm',
    title: 'The Hook: Your First 2 Seconds',
    subtitle: 'Win the scroll or lose the video',
    minutes: 5,
    xp: 25,
    steps: [
      {
        // SPACED REPETITION — recalls watch-through from M4
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'Recall from Module 4: watch-through rate is one of the strongest signals that pushes a video to more people.',
          correctAnswer: true,
          correctFeedback:
            "Yes — which is why the hook matters so much. If people bail in the first 2 seconds, watch-through collapses and distribution stops before it starts.",
          incorrectFeedback:
            "Revisit M4: watch-through is a core distribution signal. That's the whole reason hooks matter — a weak opening kills watch-through, and the video never gets its chance.",
        },
      },
      {
        kind: 'info',
        heading: 'The hook decides whether the algorithm ever tests your video',
        body: "On short-form, the first 1-2 seconds do 80% of the work. Most viewers who leave, leave immediately — there's a brutal retention cliff in the first 3 seconds. If they drop, your watch-through tanks and the platform stops showing the video, no matter how good the payoff was. So the hook isn't decoration; it's the single highest-leverage part of the whole video. Strong hooks do one of a few jobs fast: create a curiosity gap ('I was doing this completely wrong for years'), call out the exact audience ('If you run a small café, stop doing this'), promise a specific payoff ('3 tools that replaced my whole content workflow'), or open with visual/tension surprise (start mid-action, not with a slow intro). Weak hooks waste the window: logo intros, 'Hey guys, welcome back,' slow pans, and throat-clearing context nobody asked for. The rule: get to the interesting part before the viewer's thumb decides.",
        bodyVariants: {
          freelancer:
            "When a client's videos flop, the hook is usually why — and it's the fastest thing you can fix to show early wins. On short-form the first 1-2 seconds do 80% of the work; most people who leave, leave immediately, and that retention cliff kills watch-through and distribution regardless of how good the payoff was. Strong hooks create a curiosity gap ('I was doing this wrong for years'), call out the exact audience ('If you run a café, stop doing this'), promise a specific payoff ('3 tools that replaced my workflow'), or open on visual tension. Weak hooks — logo intros, 'hey guys welcome back,' slow pans — waste the window. Fixing hooks is often the single highest-ROI thing you can do on a client account.",
          business:
            "If your videos aren't landing, the hook is the first thing to fix — it's the highest-leverage second you'll ever edit. On short-form the first 1-2 seconds do 80% of the work; most people who scroll away do it immediately, and that kills your watch-through (and therefore reach) before the good part arrives. Strong hooks create curiosity ('I was doing this wrong for years'), call out your exact customer ('If you run a small shop, stop doing this'), promise a specific payoff ('3 things that doubled our bookings'), or open mid-action. Weak hooks waste it: logo intros, 'hey everyone,' slow pans, long context. Get to the interesting part before the thumb decides.",
          marketer:
            "The hook is where most underperforming short-form dies, and it's the cheapest place to improve ROI. The first 1-2 seconds do 80% of the work; the retention cliff in the first 3 seconds means most abandoners leave instantly, collapsing watch-through and distribution before the payoff. Effective hooks create a curiosity gap, call out the precise segment, promise a specific payoff, or open on visual tension. The usual culprits behind weak performance are logo stings, 'welcome back' intros, and slow establishing shots. Auditing and rewriting hooks is one of the highest-leverage optimisations you can bring to a content review.",
        },
        bullets: [
          'Most drop-off happens in the first 3 seconds — the hook is make-or-break',
          'Hook jobs: curiosity gap, call out the audience, promise a payoff, or visual tension',
          'Kill logo intros, "hey guys," slow pans, and pre-amble',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'Which opening line is the strongest short-form hook for a video about saving money on groceries?',
          options: [
            'Hey everyone, welcome back to my channel, today we\'re going to talk about groceries',
            'So, groceries have gotten really expensive lately, as you probably know',
            'You\'re overpaying for groceries because of one habit — here\'s the fix',
            'In this video I will share some tips that might be helpful for some people',
          ],
          correctIndex: 2,
          correctFeedback:
            'Exactly — it opens a curiosity gap AND promises a specific payoff in the first second. The others bury the value under greetings, throat-clearing, or vague hedging.',
          incorrectFeedback:
            'Reconsider. Greetings, slow context, and vague "some tips" all waste the critical first seconds. The winner opens a curiosity gap and promises a concrete payoff immediately.',
        },
      },
      {
        // ACTIVE RECALL — generative
        kind: 'question',
        question: {
          type: 'short',
          prompt:
            'Write three different hooks for the SAME video topic (your choice), each using a different technique: one curiosity gap, one audience call-out, one specific-payoff promise.',
          placeholder:
            'Topic: home coffee. 1) Curiosity: "You\'ve been ruining your coffee at one specific step." 2) Call-out: "If you own a moka pot, watch this." 3) Payoff: "Better café-quality coffee in 90 seconds, no machine."',
          guidance:
            'A strong answer produces three genuinely different openings for one topic, each clearly using its named technique and getting to the point fast. If all three sound the same, vary the mechanism — curiosity vs. call-out vs. payoff.',
        },
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // M5 · L2 — Retention & Structure
  // TECHNIQUE: Active recall + scripting skeleton
  // ---------------------------------------------------------------------------
  {
    id: 'm5-l2',
    moduleId: 'm5',
    trackId: 'sm',
    title: 'Retention & Structure',
    subtitle: 'Keeping people watching after the hook lands',
    minutes: 5,
    xp: 25,
    steps: [
      {
        kind: 'info',
        heading: 'Design the whole video around the retention curve',
        body: "The hook gets people in; structure keeps them. In your analytics, every short video has a retention graph — the % still watching at each second. Your job is to flatten the drop-offs. Three tools do most of the work. OPEN LOOPS: promise something early that only resolves later ('the third one surprised me' — now they have to stay for it). PACING and PATTERN INTERRUPTS: change the shot, angle, or energy every few seconds so the brain never settles into 'I've got the gist, I can leave.' CAPTIONS: most people watch on mute, so on-screen text keeps muted viewers watching and doubles as searchable keywords. A reliable short-form skeleton: Hook (1-2s) → restate the promise/payoff → deliver value in tight beats (no filler between them) → a small loop or twist near the end to hold the last stretch → a clear, single call to action. Avoid the classic killer: a great hook followed by 10 seconds of slow setup. If the retention graph shows a cliff at 0:04, that's usually where your setup dragged.",
        bullets: [
          'Open loops ("the last one shocked me") pull viewers past the middle',
          'Change shot/angle/energy every few seconds to prevent settling',
          'Captions retain muted viewers AND feed search keywords',
          'One clear CTA — not three competing asks',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'Your retention graph shows a steep drop right after the hook, around 4 seconds in. What\'s the most likely fix?',
          options: [
            'Add a longer intro to explain more context',
            'Cut the slow setup after the hook and deliver the first payoff faster',
            'Post at a different time of day',
            'Add more hashtags',
          ],
          correctIndex: 1,
          correctFeedback:
            'Exactly — an early cliff usually means you hooked them, then made them wait through setup. Deliver the first bit of value immediately after the hook.',
          incorrectFeedback:
            'Reconsider. A drop right after the hook means the payoff came too slowly — the fix is cutting the setup, not adding more of it. Timing and hashtags won\'t fix a retention cliff.',
        },
      },
      {
        kind: 'info',
        heading: 'A worked example of structure fixing a flop',
        body: "A skincare creator had a video with a great hook ('The order you apply products is wrong') that still underperformed. The retention graph showed a cliff at 5 seconds. The problem: after the hook, they spent 8 seconds explaining their skin history before getting to the actual order. The re-edit cut all of it — hook, then straight into 'Step one, and everyone gets this backwards...', with a shot change on every step and an open loop ('the last step is the one nobody does'). Same information, same face, same audio. The re-cut held retention flat through the middle and did 6x the views. Nothing about the content changed — only the structure. That's the lesson: retention is an editing decision as much as a content one.",
      },
      {
        // ACTIVE RECALL — generative, feeds end task
        kind: 'question',
        question: {
          type: 'short',
          prompt:
            'Write a short-form script skeleton (just the beats, not full script) for one video: hook → promise → 2-3 value beats → a loop/twist → one CTA.',
          placeholder:
            'e.g. Hook: "You\'re watering your plants wrong." Promise: "3 signs you\'re overwatering." Beats: 1) droopy-but-wet leaves 2) yellowing 3) gnats. Loop: "sign 3 is the one people miss." CTA: "Follow for the fix video."',
          guidance:
            'A strong skeleton has a fast hook, an explicit promise, tight value beats with no filler, a loop or twist to hold the end, and ONE CTA. If you have multiple CTAs or a slow setup beat, trim it.',
        },
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // M5 · L3 — Repurposing
  // TECHNIQUE: INTERLEAVING (M4 hub-and-spoke) + efficiency + scenario
  // ---------------------------------------------------------------------------
  {
    id: 'm5-l3',
    moduleId: 'm5',
    trackId: 'sm',
    title: 'One Shoot, Many Cuts',
    subtitle: 'Repurposing without spreading yourself thin',
    minutes: 4,
    xp: 20,
    steps: [
      {
        // INTERLEAVING — builds on hub-and-spoke from M4L4
        kind: 'info',
        heading: 'Create once, atomise into many',
        body: "Sustainable content isn't about making more from scratch — it's about extracting more from what you already make. This is the hub-and-spoke idea from Module 4 applied to production. One substantial 'hub' asset — a long video, a podcast episode, a customer interview, a live workshop — can be atomised into a week of content: short clips of the best moments, carousels of the key points, quote graphics, a written post, and a Stories teaser. The key rule from Module 4 still applies: repurpose NATIVELY. Don't export a TikTok with its watermark onto Reels (every algorithm demotes competitor watermarks); re-edit for each platform's format, aspect ratio, and culture. A concrete workflow: a consultant records one 30-minute talk, then a) pulls 8 short clips (one idea each), b) turns the framework into a carousel, c) writes a LinkedIn post from the transcript, d) grabs 3 quote cards. One afternoon of recording becomes two weeks of content — and because each piece is native, none of it looks recycled.",
        bullets: [
          'One "hub" asset → clips + carousel + written post + quote cards + teaser',
          'Repurpose NATIVELY — no competitor watermarks, re-edit per platform',
          'Best clips are single-idea moments; don\'t just chop the long video in order',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'Downloading your best TikTok (with the TikTok watermark) and posting the exact file to Instagram Reels is a smart, efficient repurposing move.',
          correctAnswer: false,
          correctFeedback:
            'Right — platforms demote content carrying a competitor\'s watermark. Efficient repurposing means re-exporting a clean, native version for each platform, not moving the watermarked file.',
          incorrectFeedback:
            'Careful — Instagram (and others) demote videos with a rival platform\'s watermark. Repurpose natively: re-export a clean version formatted for Reels, don\'t just move the watermarked file.',
        },
      },
      {
        // SCENARIO — feeds end task
        kind: 'question',
        question: {
          type: 'short',
          prompt:
            'Pick one "hub" asset a business could realistically create (e.g. a Q&A, a how-to, a customer story). List at least four different pieces of content you\'d atomise it into.',
          placeholder:
            'e.g. Hub: a 20-min "how we make our sourdough" video. → 1) 3 short Reels (one step each) 2) a carousel of the 5 tips 3) a quote card of the best line 4) a Stories behind-the-scenes teaser 5) a written post on why slow-fermented bread matters.',
          guidance:
            'A strong answer lists genuinely different formats (not four near-identical clips) from a single realistic source, each suited to where it\'ll live. If every output is "another short clip," diversify into carousel/written/quote/teaser forms.',
        },
      },
    ],
  },

  // ===========================================================================
  //  MODULE 6 · Content & AI Strategy (synthesis)
  // ===========================================================================

  // ---------------------------------------------------------------------------
  // M6 · L1 — Content Pillars & Strategy
  // TECHNIQUE: SPACED REPETITION (opens recalling M2 persona + M4 platform) + synthesis
  // ---------------------------------------------------------------------------
  {
    id: 'm6-l1',
    moduleId: 'm6',
    trackId: 'sm',
    title: 'Content Pillars & the Strategy That Ties It Together',
    subtitle: 'Where research, persona, and platform finally become a plan',
    minutes: 5,
    xp: 25,
    steps: [
      {
        // SPACED REPETITION / synthesis — recalls persona (M2) and platform fit (M4)
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'Recall the chain so far. In what order should these actually drive your content? (A) platform, (B) audience persona & their job, (C) the business goal, (D) individual post ideas.',
          options: [
            'D → A → B → C (start with post ideas)',
            'A → D → C → B (start with the platform)',
            'C → B → A → D (goal → persona → platform → posts)',
            'B → D → A → C',
          ],
          correctIndex: 2,
          correctFeedback:
            'Exactly — goal (M1) sets the target, persona (M2) says who and what job, platform (M4) says where and how, and only THEN do post ideas fall out. Ideas-first is why most content feels random.',
          incorrectFeedback:
            'Think back through the modules: goal (M1) → persona (M2) → platform (M4) → posts. Starting from post ideas or the platform is exactly the backwards approach this module fixes.',
        },
      },
      {
        kind: 'info',
        heading: 'Content pillars turn strategy into repeatable topics',
        body: "Everything in the last five modules converges here. A content strategy is the document that connects your goal → persona → platform → the actual themes you'll post about, so content stops being a scramble for ideas. The workhorse concept is content pillars: 3-5 recurring themes that every post ladders up to. Pillars keep you consistent, make ideation fast (you're never staring at a blank page — you're filling a known bucket), and train the audience on what you're about. Good pillars come straight from your research and persona: each one should address a real audience job, fear, or desire. A balanced mix many creators use is roughly value/educational (teach the thing), proof/credibility (results, testimonials, behind-the-scenes competence), and personality/connection (story, POV, relatability) — often weighted something like 70/20/10 toward value, with proof and personality building the trust that makes the value convert. A café's pillars might be: '90-second coffee skills' (value), 'meet the people behind your morning' (personality), and 'why our sourcing is different' (proof).",
        bodyVariants: {
          freelancer:
            "This is where you turn a client's research into something they can see and approve. A content strategy connects goal → persona → platform → the themes you'll post about, so content stops being a monthly scramble. The workhorse is content pillars: 3-5 recurring themes every post ladders up to. Pillars make ideation fast, keep the account consistent, and — crucially for you — make your strategy legible to a client who's paying for more than 'vibes.' Draw each pillar from the research and persona so it addresses a real job, fear, or desire. A common balance is value/educational (~70%), proof/credibility (~20%), and personality/connection (~10%). Presenting pillars is often the moment a client 'gets' why the research mattered.",
          business:
            "This is where all your research finally becomes a simple plan you can run. A content strategy connects your goal → your customer → your platform → the themes you'll actually post about, so you stop scrambling for ideas every week. The key tool is content pillars: 3-5 recurring themes every post fits into. Pillars mean you're never staring at a blank page — you're filling a known bucket — and they train customers on what you're about. Pull each pillar from what you learned about your customer so it hits a real need. A good balance is roughly value/teaching (~70%), proof like results and behind-the-scenes (~20%), and personality (~10%). For a café: '90-second coffee skills,' 'meet the team,' and 'why our beans are different.'",
          marketer:
            "This is the synthesis deliverable — where research, persona, and platform become an approved plan. A content strategy connects objective → audience → platform → the themes you'll post about, so output stops being reactive. The core construct is content pillars: 3-5 recurring themes every post ladders to, which make ideation efficient, keep the channel coherent, and give stakeholders something concrete to sign off. Derive each pillar from the research so it maps to a real audience job or barrier. A defensible balance is value/educational (~70%), proof/credibility (~20%), and personality/connection (~10%) — with proof and personality doing the trust-building that makes the educational content convert.",
        },
        bullets: [
          'Pillars = 3-5 recurring themes every post ladders up to',
          'Each pillar must map to a real audience job, fear, or desire (from M2)',
          'Rough mix: ~70% value, ~20% proof/credibility, ~10% personality',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'Which set of content pillars is strongest for a personal-trainer brand targeting intimidated beginners?',
          options: [
            'Motivation Mondays, Workout Wednesdays, Fun Fridays',
            '"Beginner-friendly form fixes" (value), "real client transformations from zero" (proof), "the honest truth about gym anxiety" (personality)',
            'Random fitness facts, memes, and reposts',
            'Whatever is trending each week',
          ],
          correctIndex: 1,
          correctFeedback:
            'Exactly — each pillar maps to the persona\'s real needs (learning safely, seeing it\'s possible, feeling understood) and mixes value/proof/personality. The day-of-week themes are just scheduling labels with no strategic link.',
          incorrectFeedback:
            'Reconsider. Day-of-week labels, memes, and "whatever\'s trending" aren\'t strategic pillars. The strong set maps each pillar to the intimidated-beginner persona\'s real jobs and fears, balancing value, proof, and personality.',
        },
      },
      {
        // ACTIVE RECALL — generative, feeds the end task
        kind: 'question',
        question: {
          type: 'short',
          prompt:
            'For a business you know, write 3 content pillars. Label each as value, proof, or personality, and note the audience job/fear it addresses.',
          placeholder:
            'e.g. 1) "Fix-it-yourself plumbing tips" (value — fear of being overcharged). 2) "Before/after emergency callouts" (proof — will they actually solve it?). 3) "A day in the life of a plumber" (personality — trust a stranger in your home).',
          guidance:
            'A strong answer ties each pillar to a specific persona job or fear and spans value/proof/personality rather than three flavours of the same thing. If a pillar doesn\'t map to a real audience need, it\'s a topic, not a pillar.',
        },
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // M6 · L2 — Calendars, Batching & Systems
  // TECHNIQUE: INTERLEAVING (M1 capacity + M4 cadence) + active recall
  // ---------------------------------------------------------------------------
  {
    id: 'm6-l2',
    moduleId: 'm6',
    trackId: 'sm',
    title: 'Calendars, Batching & Systems',
    subtitle: 'How consistency actually happens (it\'s not willpower)',
    minutes: 4,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'Consistency is a system, not a personality trait',
        body: "Nobody sustains 'post every day' on motivation alone. Consistency comes from two systems: a calendar and batching. A content calendar isn't a fancy spreadsheet — it's a simple, forward-looking plan mapping pillars to slots (e.g. 'Mon: value Reel, Wed: proof carousel, Fri: personality Story'), so you always know what's next without deciding daily. Batching is the real unlock: instead of doing the whole make-a-post cycle every day (which forces a cold start each time), you group like tasks — a scripting session for the week, one filming block for 6 videos, one editing block, one scheduling session. Batching kills the constant context-switching that makes content feel exhausting. Tools that help in 2025: Notion or a simple sheet for the calendar and idea backlog; schedulers like Later, Buffer, or Metricool to queue a week of posts in one sitting. Crucially, tie the cadence to the capacity you defined back in Module 1 — the calendar should reflect what you can actually sustain, not an aspirational maximum.",
        bullets: [
          'Calendar = pillars mapped to slots, so "what do I post?" is pre-decided',
          'Batch by task (script all, film all, edit all) to avoid daily cold starts',
          'Notion/sheet for planning; Later/Buffer/Metricool to schedule a week at once',
          'Set cadence to sustainable capacity (M1), not an aspirational max',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'Which workflow is most likely to keep a busy solo founder consistent for six months?',
          options: [
            'Wake up each day and decide what to post based on how they feel',
            'One morning a month: plan the calendar; one afternoon a week: film and edit a batch; then schedule it all to auto-post',
            'Only post when something goes viral in their niche',
            'Post 3x a day every day with no plan',
          ],
          correctIndex: 1,
          correctFeedback:
            'Exactly — a planning block plus a weekly batch-and-schedule removes daily decisions and cold starts, which is what actually sustains consistency. Willpower and reactivity don\'t scale.',
          incorrectFeedback:
            'Reconsider. Deciding daily, posting only when inspired, or 3x/day with no plan all collapse fast. The sustainable path is batching + scheduling, so the system carries consistency instead of daily willpower.',
        },
      },
      {
        // ACTIVE RECALL — generative, feeds end task
        kind: 'question',
        question: {
          type: 'short',
          prompt:
            'Sketch a realistic weekly batching + posting system for someone with ~3 hours a week for content. Include when they plan, create, and schedule.',
          placeholder:
            'e.g. Sun 30 min: pick 3 posts from the idea backlog + write hooks. Mid-week 90 min: film all 3 + edit. Fri 20 min: write captions + schedule in Metricool for the following week. Backlog lives in Notion.',
          guidance:
            'A strong answer batches by task, fits inside the 3-hour budget, and schedules ahead rather than posting live daily. If your system requires daily touches or exceeds the time budget, it won\'t survive a busy week.',
        },
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // M6 · L3 — AI-Assisted Creation
  // TECHNIQUE: SPACED REPETITION (recalls M1L4 AI rules) + active recall
  // ---------------------------------------------------------------------------
  {
    id: 'm6-l3',
    moduleId: 'm6',
    trackId: 'sm',
    title: 'AI-Assisted Creation Without Losing Your Voice',
    subtitle: 'Faster output that still sounds like you',
    minutes: 5,
    xp: 25,
    steps: [
      {
        // SPACED REPETITION — recalls the M1L4 rule "AI synthesises input you feed it"
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'Recall from Module 1: AI is most trustworthy when it synthesises real input you give it, not when it invents from nothing.',
          correctAnswer: true,
          correctFeedback:
            "Yes — the same rule governs creation. AI briefed with your real voice, offers, and examples produces usable drafts; AI asked to 'write me a viral post' produces generic slop.",
          incorrectFeedback:
            "Revisit M1L4: AI shines at synthesising real input, not inventing. That rule carries straight into content creation — feed it your voice and material, don't ask it to conjure.",
        },
      },
      {
        kind: 'info',
        heading: 'AI is a drafting and multiplying tool, not a voice',
        body: "Used well, AI roughly doubles content output; used lazily, it floods your feed with generic 'AI slop' that audiences increasingly recognise and distrust. The line is about what job you give it. GOOD jobs: brainstorming angles against your pillars, turning one long transcript into ten hook options, drafting first-pass scripts you then rewrite in your voice, generating caption variations to test, and repurposing (that podcast → carousel → post pipeline). BAD jobs: publishing its raw output, inventing facts/testimonials, or letting it flatten your specific voice into corporate mush. The technique that keeps your voice is briefing: give the AI your real brand-voice examples ('here are 5 of my best posts — match this tone'), your persona, and real inputs, then treat its output as a first draft, not a final one. Disclosure and authenticity matter too — audiences forgive AI assistance but punish content that feels fake or soulless. A practical prompt pattern: 'Here are 3 posts in my voice and my persona doc. Draft 5 hook options for a video about X that sound like me and speak to that persona's fear of Y. Keep my casual, no-jargon tone.'",
        bullets: [
          'Good: ideation, hook variations, first-draft scripts, caption A/Bs, repurposing',
          'Bad: publishing raw output, inventing facts/testimonials, flattening your voice',
          'Brief it with real voice examples + persona, then rewrite — never ship draft 1',
          'Audiences forgive AI help but punish soulless, generic "slop"',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'What\'s the healthiest way to use AI in your content workflow?',
          options: [
            'Ask it to "write me 30 viral posts" and schedule them as-is',
            'Feed it your best existing posts and persona, have it draft hook and script options, then rewrite the best in your own voice',
            'Have it invent customer testimonials to boost credibility',
            'Never use AI for anything, on principle',
          ],
          correctIndex: 1,
          correctFeedback:
            'Exactly — briefed with your real voice and audience, used for drafts you then refine. That multiplies output without surrendering authenticity or inventing fake proof.',
          incorrectFeedback:
            'Reconsider. Shipping raw "viral post" output creates slop; inventing testimonials is dishonest; banning AI outright leaves speed on the table. The healthy path is briefing it with your real material and editing its drafts.',
        },
      },
      {
        // ACTIVE RECALL — generative, applies the briefing technique, feeds end task
        kind: 'question',
        question: {
          type: 'short',
          prompt:
            'Write an AI prompt you\'d actually use to draft content that still sounds like a specific brand — it must reference the brand\'s voice/examples and its persona, and ask for drafts you\'ll refine.',
          placeholder:
            "e.g. \"Here are 3 of our posts (pasted) and our persona doc. Draft 5 Reel hooks for a video on 'meal prep for one person,' matching our warm, slightly funny tone and speaking to a busy single who hates cooking for one. Give options I can edit, not final copy.\"",
          guidance:
            'A strong prompt supplies real voice examples + persona, asks for drafts/options (not finished copy), and specifies tone. If your prompt would produce the same output for any brand, add the specific voice and audience inputs that make it yours.',
        },
      },
    ],
  },

  // ===========================================================================
  //  MODULE 7 · Commerce & Community
  // ===========================================================================

  // ---------------------------------------------------------------------------
  // M7 · L1 — Social Commerce
  // TECHNIQUE: SPACED REPETITION (opens recalling M6 CTA/pillars) + active recall
  // ---------------------------------------------------------------------------
  {
    id: 'm7-l1',
    moduleId: 'm7',
    trackId: 'sm',
    title: 'Turning Attention Into Sales',
    subtitle: 'Selling on social without feeling like a salesperson',
    minutes: 5,
    xp: 25,
    steps: [
      {
        // SPACED REPETITION — recalls the "one clear CTA" + value/proof mix from M6
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'Recall from Module 6: a healthy content mix leans heavily on value, with proof and personality building the trust that makes value convert.',
          correctAnswer: true,
          correctFeedback:
            "Yes — hold that, because selling on social works precisely when it sits on a base of value and proof. Pure selling with no trust foundation is what feels gross and gets ignored.",
          incorrectFeedback:
            "Revisit M6: value carries the mix, with proof and personality building trust. That trust base is exactly what makes the selling in this module land instead of repel.",
        },
      },
      {
        kind: 'info',
        heading: 'The path from scroll to sale is shorter than it used to be',
        body: "Social commerce in 2025-2026 has collapsed the distance between discovery and purchase. TikTok Shop, Instagram Shopping, and in-app checkout mean someone can go from 'never heard of you' to 'bought' in one session, without leaving the app. But the mechanics matter less than the content that drives them. The brands that sell without feeling salesy use three content moves: DEMONSTRATION (show the product solving the real problem, in use — not a glossy ad, a genuine 'here's what it does'), OBJECTION-HANDLING (make content that answers the exact hesitation that stops the sale — 'but does it work on X?'), and SOCIAL PROOF (real results, UGC, reviews on screen). The failure mode is 'buy now' with no trust built; the winning mode is content so useful or convincing that buying is the obvious next step. A concrete example: a small skincare brand stopped posting product beauty-shots and started posting 'watch me patch-test this on reactive skin for 14 days' — demonstration plus objection-handling (does it irritate?) — and their TikTok Shop conversion roughly tripled, because the content pre-answered the fear that blocked the purchase.",
        bodyVariants: {
          freelancer:
            "When a client wants sales (not just 'engagement'), this is what you deliver. Social commerce in 2025-2026 — TikTok Shop, Instagram Shopping, in-app checkout — has collapsed the gap between discovery and purchase; someone can go from stranger to buyer in one session. But the content drives the sale, not the button. The three moves that sell without feeling salesy: demonstration (product solving the real problem in genuine use), objection-handling (content answering the exact hesitation — 'does it work on X?'), and social proof (real results/UGC on screen). The failure mode you'll be hired to fix is 'buy now' with no trust built. A skincare brand that swapped beauty-shots for '14-day patch test on reactive skin' tripled Shop conversion by pre-answering the fear behind the purchase.",
          business:
            "This is where content turns into revenue. In 2025-2026, TikTok Shop, Instagram Shopping and in-app checkout mean a customer can go from discovering you to buying in a single session — without leaving the app. But it's the content that sells, not the checkout button. Three moves let you sell without feeling pushy: demonstration (show your product actually solving the problem, in real use), objection-handling (make posts that answer the exact worry that stops people buying — 'but will it work for me?'), and social proof (real reviews and customer results on screen). The mistake is jumping to 'buy now' before building trust. One skincare brand swapped pretty product shots for a '14-day patch test on sensitive skin' series and roughly tripled sales — because it answered the fear behind the hesitation.",
          marketer:
            "This is the conversion layer stakeholders care about. Social commerce in 2025-2026 — TikTok Shop, Instagram Shopping, native checkout — has compressed the funnel so discovery-to-purchase can happen in one session. But content, not the storefront, drives conversion. Three content moves sell without feeling salesy: demonstration (product solving the real job in authentic use), objection-handling (content addressing the specific purchase blocker), and social proof (UGC, reviews, results on screen). The common failure is CTA-heavy 'buy now' content with no trust foundation. A skincare brand replacing beauty-shots with a '14-day patch test on reactive skin' series roughly tripled Shop conversion by pre-empting the primary objection — a repeatable, reportable pattern.",
        },
        bullets: [
          'Demonstration: product solving a real problem in genuine use, not a glossy ad',
          'Objection-handling: answer the exact hesitation that blocks the sale',
          'Social proof: real reviews, results, and UGC on screen',
          '"Buy now" with no trust fails; useful/convincing content makes buying obvious',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'A kitchen-gadget brand keeps posting glossy product shots with "Shop now" but few people buy. What content change is most likely to lift sales?',
          options: [
            'Add more "Shop now" text and post more often',
            'Show the gadget solving a specific annoying problem in a real kitchen, and answer the top objection ("is it hard to clean?")',
            'Lower the price and hope for the best',
            'Buy more followers to look popular',
          ],
          correctIndex: 1,
          correctFeedback:
            'Exactly — demonstration plus objection-handling turns "nice photo" into "I need that." More "Shop now" without trust or usefulness just repeats the thing that isn\'t working.',
          incorrectFeedback:
            'Reconsider. Glossy shots + "Shop now" already isn\'t converting; more of it won\'t help, and buying followers does nothing for sales. The lift comes from demonstrating the product solving a real problem and answering the key objection.',
        },
      },
      {
        // ACTIVE RECALL — generative, feeds end task
        kind: 'question',
        question: {
          type: 'short',
          prompt:
            'Pick a product. Write one content idea that DEMONSTRATES it solving a real problem, and one that HANDLES the biggest objection to buying it.',
          placeholder:
            'e.g. Product: reusable food wraps. Demo: "packing a messy lunch with zero cling film." Objection ("do they actually seal / stay clean?"): "I\'ve used these daily for 6 months — here\'s how they\'ve held up and how I wash them."',
          guidance:
            'A strong answer shows the product in genuine use solving a specific problem, and directly names + answers a real purchase objection. If your objection post is just more features, dig for the actual doubt that stops people buying.',
        },
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // M7 · L2 — Community & UGC
  // TECHNIQUE: Active recall + concrete tactics
  // ---------------------------------------------------------------------------
  {
    id: 'm7-l2',
    moduleId: 'm7',
    trackId: 'sm',
    title: 'Community & User-Generated Content',
    subtitle: 'An audience watches you; a community carries you',
    minutes: 4,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'Community is the difference between renting and owning attention',
        body: "An audience is people who watch your content; a community is people who feel part of something and talk to each other and about you. The difference shows up in retention, word of mouth, and resilience to algorithm swings. You build community with deliberate moves: rituals (a recurring format people look forward to — a weekly Q&A, a named series, a running in-joke), genuinely responding (replying to comments and DMs so people feel seen, not broadcast at), spotlighting members (features, shout-outs, reposting their content), and giving the group an identity (a name for your audience, shared language). User-generated content (UGC) is community's highest-leverage output: when customers post about you, it converts far better than brand content because it's trusted social proof, and it's free reach. You engineer UGC rather than wait for it — make it easy and rewarding: a branded prompt or hashtag, a 'show us yours' challenge, featuring everyone who participates, or simply asking. A meal-kit brand that started reposting every customer's plated photo (with credit) saw customer posts multiply, because being featured felt good — turning buyers into a content engine.",
        bullets: [
          'Audience = watchers; community = members who talk to each other + about you',
          'Build it: rituals, real replies, spotlighting members, a shared identity',
          'UGC out-converts brand content (trusted proof) and is free reach',
          'Engineer UGC: prompts, challenges, features, and simply asking',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'Which move most directly turns customers into a source of UGC?',
          options: [
            'Posting more polished brand ads',
            'Featuring and crediting every customer who shares a photo of your product, and prompting others to join',
            'Turning off comments to avoid negativity',
            'Only replying to influencers',
          ],
          correctIndex: 1,
          correctFeedback:
            'Exactly — featuring and crediting customers makes participation rewarding, so more people do it. Polished ads, disabled comments, and ignoring regular customers all suppress community.',
          incorrectFeedback:
            'Reconsider. More brand ads, disabled comments, and only engaging influencers all discourage everyday participation. Featuring and crediting real customers is what makes UGC multiply.',
        },
      },
      {
        // ACTIVE RECALL — generative, feeds end task
        kind: 'question',
        question: {
          type: 'short',
          prompt:
            'Design one community ritual (a recurring format people look forward to) and one specific way you\'d generate UGC for a business you know.',
          placeholder:
            'e.g. Ritual: "Friday First Sips" — every Friday, feature a regular\'s go-to order + their story. UGC: a "#MyCornerCafé" prompt on receipts + repost every tagged photo with credit each week.',
          guidance:
            'A strong answer names a genuinely recurring ritual (not a one-off) and a concrete, low-effort UGC mechanism with a reason people would participate. If your UGC idea has no reward or prompt, add the "what\'s in it for them."',
        },
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // M7 · L3 — DMs & Comments as CS / Conversion
  // TECHNIQUE: INTERLEAVING (M2 VoC — mining DMs) + active recall
  // ---------------------------------------------------------------------------
  {
    id: 'm7-l3',
    moduleId: 'm7',
    trackId: 'sm',
    title: 'DMs & Comments: Your Storefront and Support Desk',
    subtitle: 'The conversations that actually close and keep customers',
    minutes: 4,
    xp: 20,
    steps: [
      {
        // INTERLEAVING — reuses VoC from M2 (DMs/comments as language + intent source)
        kind: 'info',
        heading: 'The DM is where trust converts and problems get solved',
        body: "Public content earns attention; private conversation converts and retains it. In 2025, DMs are simultaneously a storefront (people ask 'is this available?', 'how much?', 'does it do X?' — high-intent buying questions) and a support desk (issues, returns, questions), and how you handle them decides whether interest becomes a customer and whether a customer stays. Three things matter: RESPONSE TIME (fast replies convert dramatically better — a warm lead cools within hours), TONE (human, helpful, not a copy-paste bot — but saved replies for genuine FAQs keep you fast without being cold), and PUBLIC handling of comments (answering questions and even complaints publicly and gracefully builds trust with everyone watching, not just the one person). There's a bonus that ties back to Module 2: your DMs and comments are a live voice-of-customer feed — the exact objections and language appearing there are your next content ideas and your best captions. A boutique that started treating every 'is this still in stock?' DM as both a sale to close AND a signal ('we get this constantly — let's make a post') turned its comment section into a content pipeline and its DMs into a real sales channel.",
        bullets: [
          'DMs are high-intent: buying questions + support, in one inbox',
          'Fast response converts; warm leads cool within hours',
          'Human tone + saved replies for true FAQs = fast without cold',
          'Handle comments/complaints publicly + gracefully — everyone\'s watching',
          'Your DMs/comments are a live VoC feed for content (callback to M2)',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'Answering a customer\'s complaint publicly and gracefully in the comments can build more trust than quietly handling it in DMs, because everyone watching sees how you treat people.',
          correctAnswer: true,
          correctFeedback:
            'Correct. A calm, helpful public reply is social proof of good service for every future customer reading it. (Genuinely sensitive cases still move to DMs — but don\'t hide every issue.)',
          incorrectFeedback:
            'It often does. A graceful public response is watched by everyone and signals how you treat customers. Hiding all issues in DMs misses that trust-building — though truly sensitive matters do move private.',
        },
      },
      {
        // ACTIVE RECALL — generative, feeds end task
        kind: 'question',
        question: {
          type: 'short',
          prompt:
            'Write a saved-reply template you could use for a common DM (a FAQ, an objection, OR a complaint) — human in tone, but reusable. Then note the content idea that same question suggests.',
          placeholder:
            'e.g. Template (FAQ "do you ship to X?"): "Hi! Yes — we ship to X, usually 3-5 days, and I\'ll pop the link here for you 🙂 anything else you want to check before ordering?" Content idea: a post/highlight answering "where we ship + how long."',
          guidance:
            'A strong answer sounds human (not robotic), is genuinely reusable, and connects the recurring question to a content idea — using DMs as a VoC feed. If your template reads like an auto-bot, warm it up while keeping it fast.',
        },
      },
    ],
  },

  // ===========================================================================
  //  MODULE 8 · Freelance Business (everyone)
  // ===========================================================================

  // ---------------------------------------------------------------------------
  // M8 · L1 — Positioning & Pricing
  // TECHNIQUE: SPACED REPETITION (opens recalling M3 differentiation) + active recall
  // ---------------------------------------------------------------------------
  {
    id: 'm8-l1',
    moduleId: 'm8',
    trackId: 'sm',
    title: 'Positioning & Pricing',
    subtitle: 'How to be chosen, and how to charge',
    minutes: 5,
    xp: 25,
    steps: [
      {
        // SPACED REPETITION — recalls differentiation/whitespace from M3
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'Recall from Module 3: the strongest strategic finding is usually a GAP you can own, not a tactic to copy from a competitor.',
          correctAnswer: true,
          correctFeedback:
            "Yes — and the same logic positions YOU. A freelancer who owns a specific gap ('social for independent cafés') gets chosen over a generic 'social media manager' every time.",
          incorrectFeedback:
            "Revisit M3: owning a gap beats copying tactics. That applies to your own positioning too — a specific niche beats being one more generic 'social media manager.'",
        },
      },
      {
        kind: 'info',
        heading: 'Specialists get chosen and get paid more',
        body: "Whether you want to freelance, run your own brand's social, or package this skill inside a job, the same principle holds: specific beats general. A 'social media manager' competes with thousands on price; 'I help independent fitness studios fill their classes through Instagram' is an easy yes for exactly that person and can charge far more. Positioning is choosing who you're for and the outcome you deliver — ideally a gap you spotted (Module 3). On pricing, the amateur trap is charging hourly, which punishes you for getting faster and caps your income at your hours. Professionals price by PACKAGE or VALUE: a fixed monthly retainer for a defined scope (e.g. '12 posts + strategy + reporting: £X/month'), or pricing tied to the outcome's worth to the client. Rough 2025 UK/US market reality for social media management: entry freelancers often start around £300-600/mo per client for a basic package, experienced strategists command £1,000-3,000+/mo retainers, and one-off deliverables (an audit, a strategy) are priced as fixed projects. The number matters less than the model: packages and retainers, not hours.",
        bodyVariants: {
          freelancer:
            "This is the module you came for. 'Social media manager' competes with thousands on price; 'I help independent fitness studios fill their classes through Instagram' is an easy yes for that exact person — and charges far more. Positioning is choosing who you're for and the outcome you deliver, ideally a gap you spotted back in Module 3. On pricing, ditch hourly — it punishes you for getting faster and caps income at your hours. Price by package or value: a fixed monthly retainer for a defined scope ('12 posts + strategy + reporting: £X/mo') or tied to the outcome's worth. 2025 reality: entry freelancers often start ~£300-600/mo per client, experienced strategists command £1,000-3,000+/mo retainers, and audits/strategies are fixed projects. The model — packages and retainers, not hours — matters more than the exact number.",
          business:
            "Even if you're running your own brand's social rather than freelancing, this lesson sharpens how you think about value — and helps you judge anyone you might hire. Specific beats general: a 'social media manager' is a commodity, but 'I help independent cafés fill tables through Instagram' is a clear, valuable offer. Positioning means choosing exactly who you serve and the outcome you deliver. On pricing (useful when you hire help): avoid paying hourly, which rewards slowness; look for package or retainer pricing tied to a defined scope and outcome. 2025 reality: a basic freelance package often runs ~£300-600/mo, experienced strategists £1,000-3,000+/mo. Knowing this protects you from both overpaying and hiring someone with no real positioning.",
          marketer:
            "Even inside a job, positioning and pricing literacy raises your standing — and it's your on-ramp if you ever go independent. 'Social media manager' is a commodity title; 'I grow consideration for challenger DTC brands on TikTok' is a specialist others seek out. Positioning is choosing who you're for and the outcome you own, ideally a gap (Module 3). On pricing — relevant for managing freelancers or freelancing on the side — avoid hourly (it rewards slowness and caps value); use packages or retainers scoped to outcomes. 2025 reality: basic freelance packages ~£300-600/mo, experienced strategists £1,000-3,000+/mo retainers, audits/strategies as fixed projects. The model beats the number: package and retain, don't bill hours.",
        },
        bullets: [
          'Specific positioning ("social for indie fitness studios") > generic title',
          'Position around a gap/outcome, ideally one you spotted in M3',
          'Hourly pricing caps income + punishes speed — use packages/retainers',
          '2025 rough range: ~£300-600/mo entry, £1,000-3,000+/mo experienced retainers',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'Which pricing/positioning setup is strongest for a freelancer who wants to earn well and grow?',
          options: [
            '"Social media manager, £15/hour, any industry"',
            '"I help independent dental practices book more new patients via Instagram — £900/month retainer for content + strategy + monthly reporting"',
            '"I do all social platforms for anyone, pay what you think is fair"',
            '"Cheapest social media help in town, hourly rates"',
          ],
          correctIndex: 1,
          correctFeedback:
            'Exactly — specific audience, specific outcome, and a scoped monthly retainer. That commands higher rates and attracts the right clients. The others compete on price and cap income at hours.',
          incorrectFeedback:
            'Reconsider. Hourly, "anyone," and "cheapest" all commoditise you and cap your income. The strong option pairs a specific niche and outcome with a scoped retainer — the professional model.',
        },
      },
      {
        // ACTIVE RECALL — generative, feeds end task
        kind: 'question',
        question: {
          type: 'short',
          prompt:
            'Write a positioning statement in the form "I help [specific who] achieve [specific outcome] through [how]." Then name whether you\'d price it as a retainer or a project, and roughly what\'s included.',
          placeholder:
            'e.g. "I help independent yoga studios fill their beginner classes through Instagram Reels + a booking-focused content strategy." Retainer: £750/mo — 10 Reels, monthly strategy call, and a simple bookings report.',
          guidance:
            'A strong answer names a SPECIFIC audience and outcome (not "businesses" and "grow"), and pairs it with a scoped package/retainer rather than an hourly rate. If your "who" is everyone, narrow it until one type of client would feel it\'s made for them.',
        },
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // M8 · L2 — Finding & Landing First Clients
  // TECHNIQUE: INTERLEAVING (reuses M1 Research Plan as a pitch tool) + active recall
  // ---------------------------------------------------------------------------
  {
    id: 'm8-l2',
    moduleId: 'm8',
    trackId: 'sm',
    title: 'Finding & Landing Your First Clients',
    subtitle: 'Where the first "yes" actually comes from',
    minutes: 5,
    xp: 25,
    steps: [
      {
        kind: 'info',
        heading: 'Your first clients are closer than a cold DM to a stranger',
        body: "Beginners imagine landing clients means cold-pitching big brands. In reality, first clients almost always come from four warmer places: your existing network (people who already know you — mention what you now do), local businesses (a café, gym, or salon near you with a weak Instagram is an easy, low-competition first client), niche communities (Facebook groups, subreddits, Slack/Discord where your target businesses ask for help), and inbound from your own content (post about the work and let clients come — covered next lesson). The winning approach isn't 'hire me' — it's leading with THEIR problem and a taste of your thinking. This is where Module 1 pays off directly: a short, specific mini-audit or a one-page research plan for their business, offered up front, massively out-converts a generic pitch, because it proves competence instead of claiming it. A real pattern: a beginner freelancer sent five local businesses a two-minute Loom walking through three specific things wrong with their Instagram plus what she'd do — three replied, one became a £600/mo retainer. The audit did the selling.",
        bullets: [
          'First clients: warm network, local businesses, niche communities, content inbound',
          'Lead with THEIR problem, not "hire me"',
          'A mini-audit or one-page research plan (M1!) out-converts any generic pitch',
          'Proof of thinking beats claims of skill — show, don\'t tell',
        ],
      },
      {
        // INTERLEAVING — explicitly reuses the M1 Research Plan artifact as an outreach asset
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'You want to land a local gym as your first client. Which outreach is most likely to work?',
          options: [
            'A DM saying "Hi, I\'m a social media manager, do you need help? I have great rates."',
            'A short message pointing out two specific things holding their Instagram back, plus a quick outline of what you\'d research and change first',
            'Mass-messaging 200 gyms the same copy-paste pitch',
            'Waiting until you have 10k followers before reaching out',
          ],
          correctIndex: 1,
          correctFeedback:
            'Exactly — specific observations + a taste of your research thinking prove value up front. Generic pitches, spray-and-pray, and "wait until I\'m big" all underperform badly.',
          incorrectFeedback:
            'Reconsider. Generic "do you need help?" DMs and mass copy-paste get ignored, and waiting for 10k followers is a stall. Leading with specific observations + your research approach is what earns the reply.',
        },
      },
      {
        // ACTIVE RECALL — generative, feeds end task
        kind: 'question',
        question: {
          type: 'short',
          prompt:
            'Write a short outreach message (3-4 sentences) to one specific type of local business, leading with their problem and offering a taste of your thinking — not just "hire me."',
          placeholder:
            'e.g. "Hi — I noticed your Reels get way more reach than your photo posts, but the account leans on photos. I put together a quick note on 3 changes that\'d likely bring in more bookings from Instagram. Happy to send it over free — want me to?"',
          guidance:
            'A strong message is specific to that business, leads with an observation about THEIR account, and offers value (a taste/audit) before asking for anything. If it opens with "I\'m a social media manager, hire me," rewrite it to lead with their problem.',
        },
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // M8 · L3 — Contracts, Scope & Retainers
  // TECHNIQUE: Active recall + protect-yourself specifics
  // ---------------------------------------------------------------------------
  {
    id: 'm8-l3',
    moduleId: 'm8',
    trackId: 'sm',
    title: 'Contracts, Scope & Retainers',
    subtitle: 'The boring stuff that keeps you paid and sane',
    minutes: 4,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'Scope creep is the number one killer of freelance income',
        body: "The fastest way to burn out and resent a client is undefined scope: you agreed to '12 posts a month,' and three weeks in you're also writing their emails, designing a flyer, and answering DMs at 10pm 'real quick.' A simple written agreement prevents almost all of it. Every freelance agreement should specify: exact deliverables (numbers and types — '12 posts, 8 Stories, 1 monthly report'), what counts as a revision and how many are included, what's explicitly OUT of scope (and that extras are quoted separately), payment terms (amount, date, late fees, and ideally payment up front or 50% up front), and how either side can end it (notice period, kill fee). Retainers — a fixed monthly fee for a defined ongoing scope — are the freelancer's best friend: predictable income, deeper client relationships, and no constant re-selling. Move clients onto retainers as soon as the one-off project proves your value. And raise your rates deliberately: with each new client or each year, nudge the number up — your early rate should not be your rate forever. A one-line scope note in writing ('anything beyond the listed deliverables is quoted separately') has saved more freelance businesses than any productivity hack.",
        bullets: [
          'Undefined scope = unpaid work + resentment; define it in writing',
          'Specify: deliverables, revisions included, what\'s OUT, payment terms, exit',
          'Retainers = predictable income + deeper relationships; move clients onto them',
          'Take payment up front (or 50%); raise rates with each client/year',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'Putting "anything beyond the listed deliverables is quoted separately" in your agreement is a smart, standard way to prevent scope creep.',
          correctAnswer: true,
          correctFeedback:
            'Correct. That one line lets you say yes to extra work — for extra pay — without awkward renegotiation or silently absorbing it. It protects the relationship and your income.',
          incorrectFeedback:
            'It genuinely is standard and smart. That single clause turns "can you just also..." into a quotable request instead of unpaid extra work, protecting both your time and the relationship.',
        },
      },
      {
        // ACTIVE RECALL — generative, feeds end task
        kind: 'question',
        question: {
          type: 'short',
          prompt:
            'Write a simple scope for a monthly retainer: list what\'s INCLUDED, what\'s explicitly NOT included (costs extra), and your payment term.',
          placeholder:
            'e.g. Included: 12 posts, 8 Stories, 1 strategy call, monthly report. Not included (quoted separately): paid-ad management, website work, event coverage. Payment: £800/mo, invoiced on the 1st, due within 7 days.',
          guidance:
            'A strong answer has concrete numbers for what\'s included, a clear list of what costs extra, and a specific payment term. If "not included" is blank, add it — that\'s the section that actually prevents scope creep.',
        },
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // M8 · L4 — Your Channels as Proof + Building the Book
  // TECHNIQUE: INTERLEAVING (synthesises the whole course) + active recall
  // ---------------------------------------------------------------------------
  {
    id: 'm8-l4',
    moduleId: 'm8',
    trackId: 'sm',
    title: 'Your Channels as Proof',
    subtitle: 'Turn everything you built into a client-winning flywheel',
    minutes: 5,
    xp: 25,
    steps: [
      {
        // INTERLEAVING — pulls the whole course together, especially the portfolio artifacts
        kind: 'info',
        heading: 'The best proof you can do the work is doing it — in public',
        body: "Here's the flywheel that ties this entire course together. The single most persuasive thing to a potential client is evidence you can do the job — and you now have two kinds. First, your OWN channels: a freelancer who grows their own social is walking proof; you don't need a huge following, just a channel that visibly applies what you teach (a designer's beautiful grid, a copywriter's sharp hooks). Post about the work itself — mini-audits, before/afters, lessons — and clients come inbound (the 'content inbound' from lesson 2). Second, your PORTFOLIO of artifacts: every end task in this course produced a real deliverable — a research plan, a persona doc, a competitor audit, a platform playbook, a video strategy, a content strategy, a community playbook, and this pitch pack. Those ARE your portfolio, even before you have paying clients. Package the best into short case studies ('here's the research plan and strategy I built for a café, and the thinking behind it'). Add testimonials as they come. The flywheel: do good work → show it on your channels + as case studies → attract inbound clients → do more good work. A freelancer who posted one honest 'here's how I'd fix this local restaurant's Instagram' breakdown a week landed three clients in two months purely from inbound — the content was the proof and the pitch at once.",
        bullets: [
          'Your own channel is walking proof — apply what you teach, visibly',
          'Every course end task IS a portfolio piece, even pre-clients',
          'Package artifacts into short case studies + add testimonials over time',
          'Flywheel: do the work → show it → attract inbound → repeat',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'A new freelancer with no paying clients yet asks how to prove they can do the work. Best answer?',
          options: [
            'Wait until a client hires them, then they\'ll have proof',
            'Buy followers to look established',
            'Use the real deliverables they built (research plan, strategy, audit) as portfolio case studies, and apply the same skills visibly on their own channel',
            'Just say they\'re experienced and hope no one checks',
          ],
          correctIndex: 2,
          correctFeedback:
            'Exactly — real artifacts plus a channel that demonstrates the skill are proof you can generate before anyone hires you. Waiting, faking, and buying followers all fail.',
          incorrectFeedback:
            'Reconsider. Waiting for a client is circular, and buying followers or bluffing fools no one. The real deliverables you\'ve built + a channel that visibly applies the skill are proof you can show right now.',
        },
      },
      {
        // ACTIVE RECALL — generative, sets up the final end task
        kind: 'question',
        question: {
          type: 'short',
          prompt:
            'Name two portfolio artifacts you\'ve built (or will build) in this course, and describe how you\'d turn ONE into a short case study or a post on your own channel.',
          placeholder:
            'e.g. Artifacts: the Research Plan + the Content Strategy for the café. Post: a carousel — "How I\'d fix a struggling café\'s Instagram in 30 days" — walking through the research plan and the 3 content pillars, ending with "this is the kind of thinking I bring to clients."',
          guidance:
            'A strong answer names concrete artifacts from the course and turns one into a specific, public-facing case study or post that doubles as proof and a soft pitch. If it stays private, describe how you\'d make it visible to potential clients.',
        },
      },
    ],
  },
]

// ===========================================================================
//  END TASKS — one scenario-based build per module, each outputs a portfolio
//  artifact. Briefs are personalised per outcome (client work / own business /
//  in-house) via briefVariants; the prompts stay shared.
//  TECHNIQUE: Scenario-based practice (application + spacing across modules).
// ===========================================================================
export const smEndTasks: BuilderEndTask[] = [
  // ---------------------------------------------------------------------------
  // M1 END TASK — Research Plan
  // ---------------------------------------------------------------------------
  {
    kind: 'builder',
    id: 'm1-task',
    moduleId: 'm1',
    trackId: 'sm',
    title: 'Build a Research Plan',
    description: 'Turn a real brief into a one-page research plan you can act on — and show off.',
    deliverableType: 'Research Plan',
    xp: 60,
    brief:
      "Scenario: A neighbourhood café, Rowan & Rye, has ~400 Instagram followers, posts pretty latte photos a few times a week, and gets almost no saves, DMs, or new footfall from it. The owner wants social to actually bring people in. Draft the research plan you'd run BEFORE changing a single post.",
    briefVariants: {
      freelancer:
        "Scenario: A prospective client — Rowan & Rye, a neighbourhood café with ~400 Instagram followers — posts pretty latte photos a few times a week and gets almost no saves, DMs, or footfall from it. They've asked what you'd do. Draft the research plan you'd run (and could put in a proposal) BEFORE changing a single post. This becomes a portfolio piece that shows you lead with strategy, not just scheduling.",
      business:
        "Scenario: Your own café-style business, Rowan & Rye, has ~400 Instagram followers, posts pretty product photos a few times a week, and gets almost no saves, DMs, or new customers from it. Before you change how you post, draft the research plan you'll run on your own business so your next month of content is aimed, not guessed.",
      marketer:
        "Scenario: An in-house brand you support — Rowan & Rye, a café with ~400 Instagram followers — posts pretty latte photos and gets almost no saves, DMs, or footfall. Leadership wants social to drive visits. Draft the research plan you'd bring to a planning meeting BEFORE changing the content, so the team aligns on audience and objective first.",
    },
    prompts: [
      {
        label: '1. The objective (metric + direction + size + timeframe)',
        placeholder: 'e.g. Grow "get directions" taps + saves from IG, from ~X to ~Y over 90 days.',
      },
      {
        label: '2. The 2–3 research questions that objective makes most important',
        placeholder: 'e.g. Why do current regulars actually come? What stops nearby people from trying it?',
      },
      {
        label: '3. Sources/tools you\'ll use, and the one thing each should tell you',
        placeholder: 'e.g. IG Insights → who + when. Google reviews → regulars’ real words. Creator Search Insights → local demand gaps.',
      },
      {
        label: '4. A first rough "who" (one sentence: who, their job/desire, their struggle, their words)',
        placeholder: 'e.g. A 30-something local seeking a small weekly escape, who calls it "my spot," blocked by not knowing it does mornings.',
      },
      {
        label: '5. What you\'ll do differently once you have answers (1–2 lines)',
        placeholder: 'e.g. Shift from latte-art photos to "your morning escape" angle + a clear "we open at 7" message.',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // M2 END TASK — Persona Doc
  // ---------------------------------------------------------------------------
  {
    kind: 'builder',
    id: 'm2-task',
    moduleId: 'm2',
    trackId: 'sm',
    title: 'Build a Persona Doc',
    description: 'Turn research into one decision-useful persona built on a real job-to-be-done.',
    deliverableType: 'Persona Doc',
    xp: 65,
    brief:
      "Scenario: Rowan & Rye's research is in. Regulars mention it being 'my quiet reset before work'; nearby office workers don't realise it opens early. Build ONE decision-useful persona for the café — the kind that would actually change what you post.",
    briefVariants: {
      freelancer:
        "Scenario: You've run the research for your café client, Rowan & Rye. Regulars call it 'my quiet reset before work'; nearby office workers don't know it opens early. Build ONE decision-useful persona you could present to the client — evidence-based, job-led, and clearly shaping the content to come.",
      business:
        "Scenario: You've done the research on your own café, Rowan & Rye. Regulars describe it as 'my quiet reset before work'; nearby office workers don't realise you open early. Build ONE clear persona of the customer you most want more of — specific enough to change what you actually post.",
      marketer:
        "Scenario: Research is in for the café brand you support, Rowan & Rye. Regulars call it 'my quiet reset before work'; nearby office workers don't know it opens early. Build ONE decision-useful persona the team can align on — job-led and evidence-based, not a demographic sketch.",
    },
    prompts: [
      {
        label: '1. Segment + name (a behaviour/need-based label, not a demographic)',
        placeholder: 'e.g. "The Pre-Work Resetter" — locals who want a calm ritual before the day starts.',
      },
      {
        label: '2. The job they\'re hiring the café for (progress in a situation)',
        placeholder: 'e.g. "Carve out 15 minutes of calm and a good coffee before a stressful workday."',
      },
      {
        label: '3. Their top 1–2 anxieties or blockers (ideally in their words)',
        placeholder: 'e.g. "I don\'t want somewhere loud or slow" / "I didn\'t even know they opened before 9."',
      },
      {
        label: '4. Where they already are + a real phrase they use',
        placeholder: 'e.g. On Instagram + local Facebook groups; describes good spots as "my little reset."',
      },
      {
        label: '5. One content angle this persona unlocks (mark any guesses as "to validate")',
        placeholder: 'e.g. "Your 7am reset" morning-ritual series showing the calm, quick open. (Hypothesis: early-open awareness is the gap — validate.)',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // M3 END TASK — Competitor Audit
  // ---------------------------------------------------------------------------
  {
    kind: 'builder',
    id: 'm3-task',
    moduleId: 'm3',
    trackId: 'sm',
    title: 'Build a Competitor Audit',
    description: 'Analyse the field for signal and whitespace — and define the gap you can own.',
    deliverableType: 'Competitor Audit',
    xp: 65,
    brief:
      "Scenario: Before planning Rowan & Rye's content, size up the competition — a few nearby cafés and the big local coffee accounts. Find what they all do the same, what actually performs, and the gap the café can own.",
    briefVariants: {
      freelancer:
        "Scenario: For your café client, Rowan & Rye, audit a few nearby cafés and the big local coffee accounts before you plan content. Deliver the kind of competitor audit a client pays for: what everyone does the same, what actually performs, and the specific gap they can own.",
      business:
        "Scenario: Before you plan Rowan & Rye's content, take an honest look at your competition — nearby cafés and the big local coffee accounts. Work out what they all do the same, what actually performs for them, and the gap your café can own.",
      marketer:
        "Scenario: For the café brand you support, Rowan & Rye, audit the competitive set — nearby cafés and big local coffee accounts — before content planning. Surface the sameness, the real top performers, and the defensible whitespace the team can claim.",
    },
    prompts: [
      {
        label: '1. 3 competitors + each one\'s positioning in a single line',
        placeholder: 'e.g. A: aesthetic latte-art brand. B: loud "specialty nerd" coffee. C: cosy neighbourhood spot.',
      },
      {
        label: '2. What format/topic each one actually wins with (look at top posts, not averages)',
        placeholder: 'e.g. A: trending-audio Reels. B: bean-science carousels. C: staff/personality content.',
      },
      {
        label: '3. The sameness — what does almost everyone in this category do?',
        placeholder: 'e.g. Everyone posts pretty product shots; nobody speaks to the "why I come here" ritual.',
      },
      {
        label: '4. The gap you can own (high interest, low supply)',
        placeholder: 'e.g. The "morning reset ritual" angle for early-open locals — nobody\'s claiming it.',
      },
      {
        label: '5. One metric benchmark you\'ll aim to beat',
        placeholder: 'e.g. Competitors average ~10 saves/post; target 25+ by making genuinely save-worthy content.',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // M4 END TASK — Platform Playbook
  // ---------------------------------------------------------------------------
  {
    kind: 'builder',
    id: 'm4-task',
    moduleId: 'm4',
    trackId: 'sm',
    title: 'Build a Platform Playbook',
    description: 'Choose the stack, format, and cadence that fit the goal, the person, and the capacity.',
    deliverableType: 'Platform Playbook',
    xp: 70,
    brief:
      "Scenario: Rowan & Rye can realistically make content ~3 times a week (one owner, filmed on a phone). Decide the platform stack and format plan that fit the goal (footfall), the persona (early-open locals), and that limited capacity.",
    briefVariants: {
      freelancer:
        "Scenario: Your client Rowan & Rye can realistically produce content ~3x/week (one owner, phone-filmed). Build the platform playbook you'd hand them: a focused stack, lead formats, and a cadence matched to the goal (footfall), the persona (early-open locals), and that real capacity — not an aspirational everywhere-at-once plan.",
      business:
        "Scenario: Realistically, you can make content about 3 times a week for Rowan & Rye, filmed on your phone. Decide the platform stack and format plan that fit your goal (footfall), your customer (early-open locals), and the time you actually have — so you go deep somewhere instead of thin everywhere.",
      marketer:
        "Scenario: The Rowan & Rye account has capacity for ~3 posts/week (one person, phone-filmed). Define the platform playbook — focused stack, lead formats, cadence — that fits the objective (footfall), the persona (early-open locals), and that capacity, so the team doesn't spread thin.",
    },
    prompts: [
      {
        label: '1. Core platform + why (tie it to the goal AND the persona)',
        placeholder: 'e.g. Instagram — early-open locals browse it, and Reels/carousels suit footfall + saves.',
      },
      {
        label: '2. One secondary/experimental platform (or "none, on purpose")',
        placeholder: 'e.g. TikTok as an experiment, using re-edited native versions of the best Reels.',
      },
      {
        label: '3. The format you\'ll lead with on each, and why it fits',
        placeholder: 'e.g. IG: Reels for reach + carousels for "morning ritual" saves. TikTok: short POV clips.',
      },
      {
        label: '4. What "good" looks like per platform (a real metric)',
        placeholder: 'e.g. IG: 25+ saves/post and rising "get directions" taps. TikTok: 70%+ watch-through.',
      },
      {
        label: '5. Your sustainable cadence (must fit ~3 pieces/week)',
        placeholder: 'e.g. Mon Reel, Wed carousel, Fri Story set; film all in one Sunday phone session.',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // M5 END TASK — Video Strategy
  // ---------------------------------------------------------------------------
  {
    kind: 'builder',
    id: 'm5-task',
    moduleId: 'm5',
    trackId: 'sm',
    title: 'Build a Video Strategy',
    description: 'Hooks, a retention-first script, and a repurposing plan for one real video.',
    deliverableType: 'Video Strategy',
    xp: 70,
    brief:
      "Scenario: Rowan & Rye's first proper short-form video will sell the 'morning reset' ritual to early-open locals. Design the hooks, the retention-first structure, and how you'll repurpose the one shoot.",
    briefVariants: {
      freelancer:
        "Scenario: For your client Rowan & Rye, design their first real short-form video around the 'morning reset' ritual for early-open locals. Deliver a client-ready mini video strategy: hook options, a retention-first script skeleton, and a repurposing plan that gets maximum content from one phone shoot.",
      business:
        "Scenario: Your café's first proper short-form video will sell the 'morning reset' ritual to early-open locals. Plan the hooks, the retention-first structure, and how you'll squeeze several pieces of content out of one filming session.",
      marketer:
        "Scenario: The Rowan & Rye account's first flagship short-form video targets early-open locals with the 'morning reset' ritual. Design the hook options, a retention-first script skeleton, and a repurposing plan so one shoot yields a week of native content.",
    },
    prompts: [
      {
        label: '1. Three hook options (use different techniques: curiosity / call-out / payoff)',
        placeholder: 'e.g. Curiosity: "The 7am ritual half your neighbours don\'t know exists." Call-out: "If you commute past North St before 9…"',
      },
      {
        label: '2. A retention-first script skeleton (hook → promise → beats → loop → one CTA)',
        placeholder: 'e.g. Hook → "here\'s the 60-second morning reset" → order/quiet/seat beats → "the last part\'s the best bit" → "we open at 7, come find your seat."',
      },
      {
        label: '3. Your main retention tactic (open loop, pacing, captions…)',
        placeholder: 'e.g. Shot change every 2–3s + captions throughout + an open loop teased in the hook.',
      },
      {
        label: '4. Repurposing plan (one shoot → how many native pieces?)',
        placeholder: 'e.g. One 60s film → a Reel, a "3 reasons to come before work" carousel, a quiet quote-card, a Stories teaser.',
      },
      {
        label: '5. The metric you\'ll judge it on',
        placeholder: 'e.g. Watch-through rate (target 60%+) and saves, not raw views.',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // M6 END TASK — Content Strategy
  // ---------------------------------------------------------------------------
  {
    kind: 'builder',
    id: 'm6-task',
    moduleId: 'm6',
    trackId: 'sm',
    title: 'Build a Content Strategy',
    description: 'Pillars, calendar, batching, and an AI plan — the whole system on one page.',
    deliverableType: 'Content Strategy',
    xp: 75,
    brief:
      "Scenario: Time to turn all of Rowan & Rye's research, persona, and platform choices into one running system: content pillars, a weekly calendar, a batching plan, and where AI helps (and where it doesn't).",
    briefVariants: {
      freelancer:
        "Scenario: Pull everything you've built for your client Rowan & Rye into one running content system — the deliverable that shows the client exactly what they're paying for: pillars, a weekly calendar, a batching plan they (or you) can sustain, and a clear line on how you'll use AI without losing their voice.",
      business:
        "Scenario: Turn all your Rowan & Rye research, persona, and platform decisions into one simple system you can actually run: your content pillars, a weekly calendar, a batching plan that fits your time, and where AI will (and won't) help.",
      marketer:
        "Scenario: Synthesise the Rowan & Rye research, persona, and platform work into one approvable content system: pillars mapped to audience needs, a weekly calendar, a batching plan, and a responsible AI-usage line — the document stakeholders sign off on.",
    },
    prompts: [
      {
        label: '1. Your 3–4 content pillars (label each value / proof / personality + the need it hits)',
        placeholder: 'e.g. "60-sec coffee skills" (value), "the 7am regulars" (personality), "why we open early" (proof).',
      },
      {
        label: '2. Your rough value / proof / personality balance',
        placeholder: 'e.g. ~70% value, ~20% proof, ~10% personality.',
      },
      {
        label: '3. A one-week calendar sketch (pillar → slot)',
        placeholder: 'e.g. Mon: value Reel. Wed: proof/behind-the-scenes carousel. Fri: personality Story + regular spotlight.',
      },
      {
        label: '4. Your batching system (when you plan, create, schedule)',
        placeholder: 'e.g. Sun 30m plan + hooks; Tue 90m film+edit a batch of 3; Fri 20m caption + schedule in Metricool.',
      },
      {
        label: '5. How you\'ll use AI — and where you won\'t',
        placeholder: 'e.g. Use it to draft hook options from our voice + persona; never for fake reviews or final captions unedited.',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // M7 END TASK — Community / CS Playbook
  // ---------------------------------------------------------------------------
  {
    kind: 'builder',
    id: 'm7-task',
    moduleId: 'm7',
    trackId: 'sm',
    title: 'Build a Community & CS Playbook',
    description: 'Turn attention into sales, buyers into a community, and DMs into a real channel.',
    deliverableType: 'Community/CS Playbook',
    xp: 75,
    brief:
      "Scenario: Rowan & Rye is getting more attention — now make it convert and stick. Design the commerce content, the community ritual and UGC engine, and the DM/comment standards that turn interest into loyal regulars.",
    briefVariants: {
      freelancer:
        "Scenario: Your client Rowan & Rye is finally getting attention — now show them how to convert and keep it. Build a playbook covering selling content, a community ritual + UGC engine, and DM/comment standards that turn one-time visitors into regulars (and gives the client a clear operating manual).",
      business:
        "Scenario: Rowan & Rye is getting more attention at last — now make it turn into sales and loyal regulars. Design your selling content, a community ritual and a way to generate customer posts, and your DM/comment standards for turning interest into repeat visits.",
      marketer:
        "Scenario: The Rowan & Rye account is gaining attention — the task now is conversion and retention. Design the commerce content approach, a community ritual + UGC engine, and DM/comment service standards that convert interest into loyal, repeat customers.",
    },
    prompts: [
      {
        label: '1. One "sells without feeling salesy" content idea (demonstration or objection-handling)',
        placeholder: 'e.g. "What £4.20 actually gets you at 7am" — demonstrating the ritual + value, handling the "just get instant at home" objection.',
      },
      {
        label: '2. A community ritual (a recurring format people look forward to)',
        placeholder: 'e.g. "Regular of the Week" — feature a real regular\'s order + why this is their reset.',
      },
      {
        label: '3. How you\'ll generate UGC (make it easy + rewarding)',
        placeholder: 'e.g. A "#My7amReset" prompt on cups + reposting every tagged morning photo with credit.',
      },
      {
        label: '4. Your DM/comment standard (response time + tone)',
        placeholder: 'e.g. Reply within a few hours, warm + human; saved replies for hours/opening-time FAQs.',
      },
      {
        label: '5. One recurring question you\'d turn into content',
        placeholder: 'e.g. "What time do you open?" keeps coming up → a pinned "we open at 7" post + Story highlight.',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // M8 END TASK — Freelance Pitch Pack (everyone)
  // ---------------------------------------------------------------------------
  {
    kind: 'builder',
    id: 'm8-task',
    moduleId: 'm8',
    trackId: 'sm',
    title: 'Build Your Freelance Pitch Pack',
    description: 'Package positioning, price, outreach, and proof into a pack that wins the first client.',
    deliverableType: 'Freelance Pitch Pack',
    xp: 90,
    brief:
      "Scenario: You've built a full body of work (research plan, persona, audit, playbooks, strategy). Now package it into a pitch pack that could win your first paying client — positioning, a priced offer, an outreach message, and the proof you'll show.",
    briefVariants: {
      freelancer:
        "Scenario: You now have a real body of work — research plan, persona, competitor audit, platform playbook, video and content strategies, community playbook. Package it into a pitch pack that wins your first paying client: your positioning, a priced offer, a specific outreach message, and the proof (artifacts + your own channel) you'll show.",
      business:
        "Scenario: You've built a full strategy for your own business — and the same skills could earn you income or help you evaluate any freelancer you hire. Package your work into a pitch pack: a clear positioning of the value, a scoped offer + price, an outreach message, and the proof you'd show. (Even if you never freelance, this clarifies exactly what good social work is worth.)",
      marketer:
        "Scenario: You've produced a full body of work and could package these skills for internal influence or an independent side income. Build a pitch pack: your positioning, a scoped/priced offer, an outreach message to an ideal client, and the proof (your artifacts + own channel) you'd present — the asset that turns skills into opportunities.",
    },
    prompts: [
      {
        label: '1. Your positioning statement ("I help [specific who] achieve [outcome] through [how]")',
        placeholder: 'e.g. "I help independent cafés turn Instagram into real footfall through research-led content."',
      },
      {
        label: '2. Your packaged offer + price (retainer or project — what\'s included)',
        placeholder: 'e.g. £750/mo retainer: 10 posts, monthly strategy call, simple footfall/saves report. Audits: £250 one-off.',
      },
      {
        label: '3. An outreach message to one ideal client (lead with their problem)',
        placeholder: 'e.g. "Hi — noticed your Reels outperform your photos but the grid leans on photos. I sketched 3 changes that\'d likely lift bookings — want me to send it over?"',
      },
      {
        label: '4. The proof you\'ll show (which artifacts + any own-channel results)',
        placeholder: 'e.g. The café research plan + content strategy as a case study, plus my own IG applying the same approach.',
      },
      {
        label: '5. Your scope guardrails (what\'s in / what costs extra)',
        placeholder: 'e.g. In: agreed posts, strategy, reporting. Extra (quoted): paid ads, photoshoots, website work.',
      },
    ],
  },
]
