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
 *   M1  Research & Insight Foundations      -> Research Plan        [THIS FILE]
 *   M2  Audience & Personas                 -> Persona Doc
 *   M3  Competitive & Data Intelligence     -> Competitor Audit
 *   M4  Platforms Deep Dive                 -> Platform Playbook
 *   M5  Video & Short-Form                  -> Video Strategy
 *   M6  Content & AI Strategy (synthesis)   -> Content Strategy
 *   M7  Commerce & Community                -> Community/CS Playbook
 *   M8  Freelance Business (everyone)       -> Freelance Pitch Pack
 *
 *  Only M1 is written so far — shipped as the voice/depth exemplar for review.
 *  M2–M8 get added once the writing style is approved, then `track.moduleIds`
 *  and the exports below expand to include them.
 *
 *  Learning-technique tags per lesson/task are noted in comments so the
 *  pedagogy can be iterated without re-reading the prose.
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
  // Expands to m1..m8 as modules are written.
  moduleIds: ['m1'],
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
]

export const smLessons: Lesson[] = [
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
]

// ---------------------------------------------------------------------------
// M1 END TASK — Research Plan (Artifact -> Portfolio)
// TECHNIQUE: Scenario-based practice. Output is a real, exportable deliverable.
// Personalised brief per outcome (client work / own business / in-house).
// ---------------------------------------------------------------------------
export const smEndTasks: BuilderEndTask[] = [
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
]
