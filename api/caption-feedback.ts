import type { VercelRequest, VercelResponse } from '@vercel/node'
import { getClient, JUDGE_MODEL, extractText, extractJson } from './_lib/anthropic'

interface FeedbackResult {
  score: number
  summary: string
  whatWorked: string[]
  whatToImprove: string[]
}

const SYSTEM_PROMPT = `You are an experienced social media copywriter reviewing a caption a student wrote for a brand brief. Evaluate it on: hook strength (first line), whether it delivers real value or story (not just an announcement), tone fit for the brief, and whether it has a clear, specific call-to-action.

Respond with ONLY a JSON object, no other text, no markdown fences, in exactly this shape:
{"score": <integer 0-100>, "summary": "<one sentence overall take>", "whatWorked": ["<specific thing done well>", "..."], "whatToImprove": ["<specific, actionable suggestion>", "..."]}

Give 1-3 items in each list. Be specific — quote a phrase from their caption where relevant. Be encouraging but honest; a generic or weak caption should score accordingly low.`

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  const { brief, caption, label } = req.body as { brief?: string; caption?: string; label?: string }

  if (!brief || !caption) {
    res.status(400).json({ error: 'brief and caption are required' })
    return
  }

  try {
    const anthropic = getClient()
    const response = await anthropic.messages.create({
      model: JUDGE_MODEL,
      max_tokens: 500,
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: 'user',
          content: `Brand brief: ${brief}\n\nCaption type requested: ${label ?? 'general post'}\n\nStudent's caption:\n"""\n${caption}\n"""`,
        },
      ],
    })

    const result = extractJson<FeedbackResult>(extractText(response))
    res.status(200).json(result)
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    res.status(500).json({ error: message })
  }
}
