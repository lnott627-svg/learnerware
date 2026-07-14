import type { VercelRequest, VercelResponse } from '@vercel/node'
import { getClient, JUDGE_MODEL, extractText, extractJson } from './_lib/anthropic'

interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

interface ScoreResult {
  score: number
  summary: string
  strengths: string[]
  improvements: string[]
}

const JUDGE_SYSTEM_PROMPT = `You are an experienced freelance coach reviewing a transcript of a discovery call between a freelancer (role: "user") and a prospective client (role: "assistant", a fictional character named Jordan).

Score the freelancer's performance from 0-100 based on how well they:
- Asked open questions to understand the client's real goal (not just surface-level "how can I help")
- Uncovered specifics: budget/timeline/what success looks like/why they're looking for help now
- Listened and asked good follow-up questions rather than pitching too early
- Kept a warm, professional, confident tone (not passive, not pushy)
- Ended the conversation with one clear, specific next step

Respond with ONLY a JSON object, no other text, no markdown code fences, in exactly this shape:
{"score": <integer 0-100>, "summary": "<one or two sentence overall assessment>", "strengths": ["<specific thing they did well>", "..."], "improvements": ["<specific, actionable thing to do better next time>", "..."]}

Give 2-4 strengths and 2-4 improvements. Be specific and quote or reference what they actually said — avoid generic feedback. Be encouraging but honest.`

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  const { messages } = req.body as { messages?: ChatMessage[] }

  if (!Array.isArray(messages) || messages.length === 0) {
    res.status(400).json({ error: 'messages are required' })
    return
  }

  const transcript = messages
    .map((m) => `${m.role === 'user' ? 'Freelancer' : 'Jordan (client)'}: ${m.content}`)
    .join('\n\n')

  try {
    const anthropic = getClient()
    const response = await anthropic.messages.create({
      model: JUDGE_MODEL,
      max_tokens: 800,
      system: JUDGE_SYSTEM_PROMPT,
      messages: [{ role: 'user', content: `Here is the transcript:\n\n${transcript}` }],
    })

    const result = extractJson<ScoreResult>(extractText(response))
    res.status(200).json(result)
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    res.status(500).json({ error: message })
  }
}
