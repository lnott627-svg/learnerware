import { Smartphone } from 'lucide-react'
import type { BuilderEndTask, Lesson, Module, Track } from '../types'

export const smmTrack: Track = {
  id: 'smm',
  title: 'Social Media Management',
  tagline: 'Run real accounts for real clients',
  description: 'Grow and manage Instagram, TikTok, and beyond — then prove it with a client-ready portfolio.',
  icon: Smartphone,
  pastelIndex: 0,
  moduleIds: ['smm-m1', 'smm-m2', 'smm-m3'],
}

export const smmModules: Module[] = [
  {
    id: 'smm-m1',
    trackId: 'smm',
    title: 'Platform Fundamentals',
    description: 'How algorithms, formats, timing, and profiles actually work.',
    lessonIds: ['smm-m1-l1', 'smm-m1-l2', 'smm-m1-l3', 'smm-m1-l4'],
    endTaskId: 'smm-m1-task',
  },
  {
    id: 'smm-m2',
    trackId: 'smm',
    title: 'Content Planning',
    description: 'Calendars, pillars, repurposing, and batching so you never run dry.',
    lessonIds: ['smm-m2-l1', 'smm-m2-l2', 'smm-m2-l3', 'smm-m2-l4'],
    endTaskId: 'smm-m2-task',
  },
  {
    id: 'smm-m3',
    trackId: 'smm',
    title: 'Analytics & Reporting',
    description: 'Read the numbers that matter and turn them into a report clients trust.',
    lessonIds: ['smm-m3-l1', 'smm-m3-l2', 'smm-m3-l3', 'smm-m3-l4'],
    endTaskId: 'smm-m3-task',
  },
]

export const smmLessons: Lesson[] = [
  // MODULE 1 — Platform Fundamentals
  {
    id: 'smm-m1-l1',
    moduleId: 'smm-m1',
    trackId: 'smm',
    title: 'How Algorithms Actually Decide',
    subtitle: 'Stop guessing, start posting on purpose',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'The algorithm has one job',
        body: 'Every platform is optimizing for one thing: keeping people scrolling. It pushes content that earns a fast, strong reaction and buries content that doesn\'t — regardless of how good it "should" be.',
        bullets: [
          'Watch time and rewatches outrank likes',
          'Shares and saves signal "worth showing to more people"',
          'The first 2-3 seconds decide if a post lives or dies',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'Which signal do platforms usually weight the heaviest?',
          options: ['Number of likes', 'Watch time and rewatches', 'Follower count of the poster', 'Number of hashtags used'],
          correctIndex: 1,
          correctFeedback: 'Right — retention is king. A rewatched 10-second clip beats a liked, skipped one.',
          incorrectFeedback: 'Not quite. Likes are easy but weak — platforms care most about whether people actually stay and watch.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'A post with a huge follower count will always outperform a post from a small account.',
          correctAnswer: false,
          correctFeedback: 'Correct — algorithms today favor engagement and relevance over the size of the account posting.',
          incorrectFeedback: 'Actually false — modern feeds are driven by engagement and relevance, not just follower count.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'short',
          prompt: 'Open Instagram or TikTok and find one post with unusually high comments relative to likes. Why do you think it triggered so many replies?',
          placeholder: 'e.g. It asked a controversial either/or question in the caption, so people argued in the comments...',
          guidance: 'A strong answer names the specific hook or prompt (a question, a debate, an incomplete thought) that made replying feel easy or irresistible — not just "it was good content."',
        },
      },
    ],
  },
  {
    id: 'smm-m1-l2',
    moduleId: 'smm-m1',
    trackId: 'smm',
    title: 'Content Formats Per Platform',
    subtitle: 'Reels, Shorts, Stories, carousels, and feed posts each play a different role',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'Same idea, different shape',
        body: 'The best managers don\'t post the same asset everywhere. Each format has a job: short video drives reach, carousels drive saves and time-on-post, and Stories drive intimacy and quick polls.',
        bullets: [
          'Short-form video (Reels/Shorts/TikTok): discovery and reach',
          'Carousels: teaching, saves, and dwell time',
          'Stories: daily touchpoints, polls, behind-the-scenes',
          'Single feed image: brand consistency, less reach-driving',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'A single static feed photo is generally the strongest format for reaching new (non-follower) audiences.',
          correctAnswer: false,
          correctFeedback: 'Correct — short-form video is currently the strongest reach format on most platforms.',
          incorrectFeedback: 'False — short-form video, not static photos, is what platforms push hardest to new audiences right now.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'A client wants more people to save and revisit their content. Which format fits best?',
          options: ['A 3-second Story', 'A single emoji-only caption', 'A carousel with a clear step-by-step', 'A repost with no new caption'],
          correctIndex: 2,
          correctFeedback: 'Exactly — carousels with real, structured value are the format most likely to get saved.',
          incorrectFeedback: 'Reconsider — carousels that teach something step-by-step are built for saves; the other options aren\'t.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'short',
          prompt: 'Pick a business you know. Name one idea for a Reel and one idea for a carousel that would each work for them.',
          placeholder: 'e.g. Reel: a 10-second "day in the life" at the shop. Carousel: "5 questions to ask before booking us."',
          guidance: 'A strong answer matches the format to its job — the Reel idea should be fast and visual, the carousel idea should teach something worth saving.',
        },
      },
    ],
  },
  {
    id: 'smm-m1-l3',
    moduleId: 'smm-m1',
    trackId: 'smm',
    title: 'Posting Cadence & Timing',
    subtitle: 'Consistency beats a lucky viral post',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'Rhythm builds trust — with people and the algorithm',
        body: 'Posting on a predictable rhythm trains both your audience and the platform to expect you. Timing matters less than most people think; consistency and format mix matter more.',
        bullets: [
          'A sustainable cadence beats a burst-and-burnout schedule',
          'Post when your specific audience is active — check native insights, don\'t guess',
          'Missing a day occasionally won\'t tank an account; going silent for weeks will',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'A new client wants to post daily but has no team or content backlog. What\'s the smartest first move?',
          options: [
            'Tell them daily posting isn\'t worth discussing',
            'Commit to daily immediately and figure it out later',
            'Set a realistic 3-4x/week cadence and batch content ahead of time',
            'Only post whenever something exciting happens',
          ],
          correctIndex: 2,
          correctFeedback: 'Right — a realistic, sustainable cadence with batching beats an ambitious plan that collapses in week two.',
          incorrectFeedback: 'Not quite — the sustainable answer is a realistic cadence plus batching, not over-promising or posting at random.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'The single best posting time is the same for every account, regardless of niche or audience.',
          correctAnswer: false,
          correctFeedback: 'Correct — "best time to post" varies by audience. Native analytics for that specific account are the real answer.',
          incorrectFeedback: 'False — best posting time depends on when that account\'s specific audience is actually online.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'short',
          prompt: 'Write a realistic posting cadence you could sustain for 8 straight weeks for a small business account.',
          placeholder: 'e.g. 3 Reels/week + 1 carousel/week + daily Stories, all batched every Sunday.',
          guidance: 'A strong answer is specific about frequency and format, and realistic enough that you could actually keep it up for two months without burning out.',
        },
      },
    ],
  },
  {
    id: 'smm-m1-l4',
    moduleId: 'smm-m1',
    trackId: 'smm',
    title: 'Profile & Bio Optimization',
    subtitle: 'Your bio does the selling while you\'re not in the room',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'A profile visit is a moment of intent',
        body: 'When someone taps into a profile, they\'re deciding whether to follow in about two seconds. A clear bio, a strong profile photo, and one obvious next step (link, DM, "book now") convert that intent into action.',
        bullets: [
          'Say exactly who you help and how, not just a vibe or a tagline',
          'One clear call-to-action beats five vague ones',
          'Highlight covers and pinned posts should answer common questions before a DM is needed',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'Which bio line is doing its job best?',
          options: [
            '"Living my best life ✨"',
            '"Helping busy parents cook healthy dinners in 20 minutes — new recipe every Tuesday"',
            '"Content creator | Dreamer | Coffee addict"',
            '"DM for collabs"',
          ],
          correctIndex: 1,
          correctFeedback: 'Right — it names the audience, the value, and a reason to keep checking back.',
          incorrectFeedback: 'Try again — the strongest bio names a specific audience and a specific value, not a vibe.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'A profile with five different links and calls-to-action converts better than one with a single clear action.',
          correctAnswer: false,
          correctFeedback: 'Correct — too many options usually leads to fewer people taking any action at all.',
          incorrectFeedback: 'False — more options often means decision fatigue and lower conversion. One clear action wins.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'short',
          prompt: 'Write a one-line bio for a small business of your choice: who you help + how, in under 15 words.',
          placeholder: 'e.g. Helping first-time homebuyers in Austin find a place they actually love.',
          guidance: 'A strong answer is specific (names an audience and an outcome) and skips vague words like "passionate" or "the best."',
        },
      },
    ],
  },

  // MODULE 2 — Content Planning
  {
    id: 'smm-m2-l1',
    moduleId: 'smm-m2',
    trackId: 'smm',
    title: 'Building a Content Calendar',
    subtitle: 'Plan the month so you never stare at a blank caption box',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'A calendar turns chaos into a system',
        body: 'A content calendar maps what gets posted, when, and why — so you\'re never improvising at 9pm. Plan by week, mixing formats and pillars, and leave a little room for real-time, timely posts.',
        bullets: [
          'Plan 2-4 weeks out, not just one post at a time',
          'Mix formats across the week — don\'t post five carousels in a row',
          'Leave 10-20% of the calendar open for trends or timely moments',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'What\'s the main risk of planning every single post a full month in advance with zero flexibility?',
          options: [
            'It takes too much time to plan',
            'You can\'t react to trends, news, or real-time opportunities',
            'The client won\'t understand it',
            'There is no real risk',
          ],
          correctIndex: 1,
          correctFeedback: 'Exactly — a fully rigid calendar can\'t flex for trends, which is often where the best reach comes from.',
          incorrectFeedback: 'Think again — the real risk is losing the ability to jump on timely, in-the-moment opportunities.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'A good content calendar should still leave some space unplanned for real-time or trending content.',
          correctAnswer: true,
          correctFeedback: 'Correct — 10-20% flexible space keeps the account able to jump on trends and timely moments.',
          incorrectFeedback: 'Actually true — leaving some room for real-time content is a best practice, not a sign of poor planning.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'short',
          prompt: 'Sketch one week of a content calendar (day + format + rough topic) for a niche of your choice.',
          placeholder: 'e.g. Mon: Reel — quick tip. Wed: Carousel — myth vs fact. Fri: Story poll — this or that.',
          guidance: 'A strong answer varies the format across the week and ties each post to a clear topic, not just "post something."',
        },
      },
    ],
  },
  {
    id: 'smm-m2-l2',
    moduleId: 'smm-m2',
    trackId: 'smm',
    title: 'Content Pillars That Keep You Consistent',
    subtitle: 'Never run out of ideas again',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'Pillars are your idea generator',
        body: 'A content pillar is a recurring theme — usually 3 to 5 — that every post fits into. Pillars make planning fast and keep an account feeling focused instead of random.',
        bullets: [
          'Educational — teach something in the niche',
          'Behind-the-scenes — build trust and relatability',
          'Social proof — testimonials, results, reactions',
          'Promotional — the actual offer, used sparingly',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'A skincare brand posts "3 ingredients to avoid if you have oily skin." Which pillar is this?',
          options: ['Behind-the-scenes', 'Educational', 'Promotional', 'Social proof'],
          correctIndex: 1,
          correctFeedback: 'Right — it teaches the audience something useful, which is the definition of educational content.',
          incorrectFeedback: 'Not quite — teaching a tip to the audience is educational content, not BTS, promo, or proof.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'Promotional content should typically make up the majority of a healthy content mix.',
          correctAnswer: false,
          correctFeedback: 'Correct — promotional posts work best sparingly, layered on top of educational and trust-building content.',
          incorrectFeedback: 'False — an account that\'s mostly promotional tends to lose reach and audience trust fast.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'short',
          prompt: 'Name 3 content pillars for a business (real or made up), one line each explaining what fits in it.',
          placeholder: '1. Educational: quick tips on...\n2. BTS: behind the process...\n3. Social proof: customer stories...',
          guidance: 'A strong answer has 3 genuinely distinct pillars (not overlapping) that could each generate many post ideas on their own.',
        },
      },
    ],
  },
  {
    id: 'smm-m2-l3',
    moduleId: 'smm-m2',
    trackId: 'smm',
    title: 'Repurposing One Piece Into Five',
    subtitle: 'Work smarter, not five times harder',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'One good idea, many formats',
        body: 'Professional managers rarely create from scratch every time. A single solid piece of content — a client testimonial, a how-to, a hot take — can be reshaped into a Reel, a carousel, a Story series, a caption-only post, and a quote graphic.',
        bullets: [
          'Long-form (a blog post, a YouTube video) breaks into many short clips',
          'A single client testimonial becomes a quote graphic, a Reel voiceover, and a caption story',
          'Repurposing isn\'t "lazy" — it\'s how sustainable accounts keep quality high without burning out',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'Repurposing the same core idea into multiple formats is generally seen as a lazy shortcut by audiences.',
          correctAnswer: false,
          correctFeedback: 'Correct — most audiences don\'t see every format you post, so repurposing usually goes unnoticed and saves real time.',
          incorrectFeedback: 'False — audiences rarely see everything you post everywhere, so repurposing is a smart efficiency move, not a lazy one.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'A client just did a great podcast interview. What\'s the best next move for their social content?',
          options: [
            'Post the full hour-long audio with no edits',
            'Ignore it — podcasts don\'t translate to social',
            'Clip 3-4 short, standalone moments into separate Reels',
            'Wait for a completely new idea instead',
          ],
          correctIndex: 2,
          correctFeedback: 'Right — chopping one long asset into several short, self-contained clips is classic, effective repurposing.',
          incorrectFeedback: 'Reconsider — the highest-leverage move is clipping the interview into several short, standalone pieces.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'short',
          prompt: 'Pick one piece of content (real or hypothetical) and list 3 different formats you could repurpose it into.',
          placeholder: 'e.g. A client case study becomes: a carousel breakdown, a Reel voiceover, and a quote graphic for Stories.',
          guidance: 'A strong answer names one clear source asset and 3 genuinely different output formats, not just "post it again."',
        },
      },
    ],
  },
  {
    id: 'smm-m2-l4',
    moduleId: 'smm-m2',
    trackId: 'smm',
    title: 'Scheduling Tools & Batching',
    subtitle: 'Do a week of work in one sitting',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'Batching is the manager\'s superpower',
        body: 'Batching means creating multiple pieces of content in one focused session instead of daily from scratch. Paired with a scheduling tool, it lets one person realistically manage several accounts.',
        bullets: [
          'Batch by task — write all captions first, then shoot all clips, then edit',
          'Scheduling tools queue posts in advance so nothing depends on you remembering at 8am',
          'Batching one day a week is more sustainable than daily improvisation',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'What\'s the main benefit of batching content creation into one session per week?',
          options: [
            'It guarantees more views',
            'It reduces decision fatigue and makes the workload sustainable',
            'It\'s required by every platform\'s algorithm',
            'It removes the need for a content calendar',
          ],
          correctIndex: 1,
          correctFeedback: 'Exactly — batching trades daily scrambling for one focused, sustainable session.',
          incorrectFeedback: 'Not quite — batching\'s real benefit is sustainability and less daily decision fatigue, not guaranteed views.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'Using a scheduling tool removes the need to ever check in on the account once posts are queued.',
          correctAnswer: false,
          correctFeedback: 'Correct — scheduling handles publishing, but comments, DMs, and real-time engagement still need a human.',
          incorrectFeedback: 'False — scheduling automates posting, not community management. Someone still needs to show up and engage.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'short',
          prompt: 'Describe your ideal weekly batching session: when it happens and what gets done in it.',
          placeholder: 'e.g. Every Sunday 2 hours: write 5 captions, film 3 Reels, schedule the whole week in one sitting.',
          guidance: 'A strong answer names a specific time block and breaks the session into concrete steps, not just "batch content."',
        },
      },
    ],
  },

  // MODULE 3 — Analytics & Reporting
  {
    id: 'smm-m3-l1',
    moduleId: 'smm-m3',
    trackId: 'smm',
    title: 'Reading Native Analytics',
    subtitle: 'Reach, impressions, and engagement — what they actually mean',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'Know your numbers before you explain them',
        body: 'Reach is how many unique accounts saw a post. Impressions count every view, including repeats. Engagement covers likes, comments, shares, and saves. Each tells a different part of the story.',
        bullets: [
          'Reach = new eyeballs on the content',
          'Impressions = total views, including repeats from the same person',
          'Engagement = how people reacted once they saw it',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'A post has 10,000 impressions but only 6,000 reach. What does that gap most likely mean?',
          options: [
            'The numbers are an error',
            'The same people saw it more than once',
            'It reached 10,000 different accounts',
            'Engagement is fake',
          ],
          correctIndex: 1,
          correctFeedback: 'Right — impressions count repeat views, so a gap between reach and impressions means rewatches or refeeds.',
          incorrectFeedback: 'Not quite — the gap between impressions and reach simply reflects people seeing the post more than once.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'Reach and impressions always mean exactly the same thing.',
          correctAnswer: false,
          correctFeedback: 'Correct — reach counts unique accounts, impressions count total views including repeats.',
          incorrectFeedback: 'False — they measure different things: reach is unique accounts, impressions include repeat views.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'short',
          prompt: 'Pick any public post. Note its reach or impressions if visible, plus likes and comments, and describe what that combination suggests.',
          placeholder: 'e.g. 12k reach, 4k likes, 90 comments — high engagement rate suggests the content strongly resonated with who saw it.',
          guidance: 'A strong answer connects the specific numbers to a conclusion about how well the post performed, not just restating the numbers.',
        },
      },
    ],
  },
  {
    id: 'smm-m3-l2',
    moduleId: 'smm-m3',
    trackId: 'smm',
    title: 'Metrics That Actually Matter',
    subtitle: 'Vanity metrics vs. metrics tied to real goals',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'Follower count rarely pays the bills',
        body: 'Follower count feels good but doesn\'t always reflect business impact. The metrics that matter depend on the goal: engagement rate for brand awareness, profile visits and link clicks for sales, DMs for lead generation.',
        bullets: [
          'Engagement rate = engagement divided by reach, shows content quality',
          'Profile visits + link clicks = intent to act',
          'DMs and saves often predict future sales better than likes',
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
          type: 'tf',
          prompt: 'Engagement rate is generally a better quality signal than raw like count alone.',
          correctAnswer: true,
          correctFeedback: 'Correct — engagement rate accounts for how many people actually saw the post, making it a fairer comparison.',
          incorrectFeedback: 'Actually true — engagement rate normalizes for reach, so it\'s a fairer quality signal than raw likes.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'short',
          prompt: 'A local bakery wants more walk-in customers, not just followers. Name 2 metrics you\'d actually track for them.',
          placeholder: 'e.g. Profile visits with a "get directions" tap, and DMs asking about hours or custom orders.',
          guidance: 'A strong answer picks metrics tied to the specific business goal (foot traffic/sales), not generic vanity metrics like follower count.',
        },
      },
    ],
  },
  {
    id: 'smm-m3-l3',
    moduleId: 'smm-m3',
    trackId: 'smm',
    title: 'Turning Data Into a Client Report',
    subtitle: 'Show your work, keep the retainer',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'A report is a story, not a data dump',
        body: 'A good report leads with the win, then the numbers that prove it, then what\'s next. Clients renew when they feel progress, not when they see a spreadsheet.',
        bullets: [
          'Headline win first, raw numbers second',
          'Always compare against last month, not just totals',
          'End with 1-2 clear next steps — never end on a stat',
        ],
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
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'A strong monthly report should lead with the headline win before showing raw numbers.',
          correctAnswer: true,
          correctFeedback: 'Correct — leading with the win gives the numbers context and keeps the client engaged.',
          incorrectFeedback: 'Actually true — leading with the win first makes the numbers land better than a data dump upfront.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'short',
          prompt: 'Write a one-line "headline win" for a client report, using a made-up but realistic result.',
          placeholder: 'e.g. This month, Reels drove 3x more reach than last month and 5 new inbound DMs.',
          guidance: 'A strong answer is specific, comparative ("vs. last month"), and tied to a real outcome — not vague like "great progress this month."',
        },
      },
    ],
  },
  {
    id: 'smm-m3-l4',
    moduleId: 'smm-m3',
    trackId: 'smm',
    title: 'Spotting What\'s Working',
    subtitle: 'Do more of what already works before chasing something new',
    minutes: 3,
    xp: 20,
    steps: [
      {
        kind: 'info',
        heading: 'Your best data source is your own past posts',
        body: 'Before testing something totally new, look at your top 3 performing posts from the last month and ask why. Often the winning pattern is already sitting in your own analytics.',
        bullets: [
          'Look for repeat patterns across your top performers, not just one lucky post',
          'A pattern could be a format, a topic, a posting time, or a hook style',
          'Double down on what\'s proven before diversifying into new formats',
        ],
      },
      {
        kind: 'question',
        question: {
          type: 'mc',
          prompt: 'Three of a client\'s top five posts this month were all "myth vs. fact" carousels. What\'s the smartest next move?',
          options: [
            'Ignore the pattern and try something totally different',
            'Make one more, then stop',
            'Lean into that format more deliberately while still testing new ideas',
            'Assume it was a fluke',
          ],
          correctIndex: 2,
          correctFeedback: 'Right — a repeated pattern across top performers is a real signal worth building on.',
          incorrectFeedback: 'Reconsider — a pattern repeating across your top posts is a real signal, not a fluke to ignore.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'tf',
          prompt: 'A single viral post is usually a more reliable signal than a repeated pattern across several top-performing posts.',
          correctAnswer: false,
          correctFeedback: 'Correct — one outlier post can be luck; a repeated pattern across several posts is a real, trackable signal.',
          incorrectFeedback: 'False — a repeated pattern across multiple top posts is more reliable than one lucky outlier.',
        },
      },
      {
        kind: 'question',
        question: {
          type: 'short',
          prompt: 'Describe a pattern (real or hypothetical) you noticed across an account\'s top-performing posts, and what you\'d do next because of it.',
          placeholder: 'e.g. All 3 of the top posts were filmed handheld, not on a tripod — feels more personal, so I\'d test more handheld clips.',
          guidance: 'A strong answer names a specific, concrete pattern (not just "good content") and a clear next action based on it.',
        },
      },
    ],
  },
]

export const smmEndTasks: BuilderEndTask[] = [
  {
    kind: 'builder',
    id: 'smm-m1-task',
    moduleId: 'smm-m1',
    trackId: 'smm',
    title: 'Profile Optimization Audit',
    description: 'Rewrite a profile so it actually converts a visit into a follow.',
    deliverableType: 'Profile Audit',
    xp: 60,
    brief:
      'Brief: "Maple & Co." is a small home bakery. Their current bio just says "Baker. Wife. Mom. Coffee lover ☕." They want more local customers to find them and place custom cake orders.',
    prompts: [
      { label: 'New bio (under 150 characters)', placeholder: 'Who they help + what they offer + one clear next step...' },
      { label: 'Highlight covers you\'d create', placeholder: 'e.g. Menu, Reviews, How to Order, Delivery Area...' },
      { label: 'One pinned post idea and why', placeholder: 'e.g. A carousel of past cakes with prices — answers the #1 DM question before it\'s asked...' },
    ],
  },
  {
    kind: 'builder',
    id: 'smm-m2-task',
    moduleId: 'smm-m2',
    trackId: 'smm',
    title: '2-Week Content Calendar',
    description: 'Build a real, postable content calendar from a client brief.',
    deliverableType: 'Content Calendar',
    xp: 80,
    brief:
      'Brief: "Trailhead Coffee Roasters" wants to grow local foot traffic and online bean sales over the next two weeks. They roast in small batches, host a weekend cupping every Saturday, and just launched a subscription box.',
    prompts: [
      { label: 'Week 1 theme + 3 post ideas (format + topic each)', placeholder: 'Theme: ...\n1. Reel — ...\n2. Carousel — ...\n3. Story series — ...' },
      { label: 'Week 2 theme + 3 post ideas (format + topic each)', placeholder: 'Theme: ...\n1. ...\n2. ...\n3. ...' },
      { label: 'How you\'d promote the Saturday cupping event', placeholder: 'e.g. Countdown Stories Thu-Sat + a Reel recap posted Sunday...' },
      { label: 'How you\'d introduce the new subscription box', placeholder: 'e.g. A carousel comparing subscription vs. one-off bags...' },
    ],
  },
  {
    kind: 'builder',
    id: 'smm-m3-task',
    moduleId: 'smm-m3',
    trackId: 'smm',
    title: 'Client Analytics Report',
    description: 'Turn a month of made-up-but-realistic data into a report a client would actually read.',
    deliverableType: 'Analytics Report',
    xp: 70,
    brief:
      'Brief: You managed a client\'s account this month. Reach grew from 8,200 to 14,600. Two Reels overperformed (a "behind the scenes" and a "customer reaction" clip). Profile visits doubled. Follower growth was modest.',
    prompts: [
      { label: 'Headline win (one sentence)', placeholder: 'e.g. Reach grew 78% this month, driven almost entirely by two Reels...' },
      { label: 'Key metrics vs. last month', placeholder: 'Reach: ...\nProfile visits: ...\nFollower growth: ...' },
      { label: 'What worked and why', placeholder: 'e.g. Both top Reels featured real people, not just product shots...' },
      { label: 'Next month\'s plan (1-2 next steps)', placeholder: 'e.g. Double down on behind-the-scenes format, test one per week...' },
    ],
  },
]
