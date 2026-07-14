import type { VercelRequest, VercelResponse } from '@vercel/node'
import { getClient, CHAT_MODEL, extractText } from './_lib/anthropic'
import { getPersona } from './_lib/personas'

interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  const { taskId, messages } = req.body as { taskId?: string; messages?: ChatMessage[] }

  if (!taskId || !Array.isArray(messages) || messages.length === 0) {
    res.status(400).json({ error: 'taskId and messages are required' })
    return
  }

  const persona = getPersona(taskId)
  if (!persona) {
    res.status(404).json({ error: `No simulator persona configured for task "${taskId}"` })
    return
  }

  try {
    const anthropic = getClient()
    const response = await anthropic.messages.create({
      model: CHAT_MODEL,
      max_tokens: 300,
      system: persona.systemPrompt,
      messages: messages.map((m) => ({ role: m.role, content: m.content })),
    })

    res.status(200).json({ reply: extractText(response) })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    res.status(500).json({ error: message })
  }
}
