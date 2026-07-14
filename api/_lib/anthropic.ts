import Anthropic from '@anthropic-ai/sdk'

let client: Anthropic | null = null

export function getClient(): Anthropic {
  if (!process.env.ANTHROPIC_API_KEY) {
    throw new Error('ANTHROPIC_API_KEY is not set on the server')
  }
  if (!client) {
    client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
  }
  return client
}

// Fast, cheap — used for the live back-and-forth chat reply
export const CHAT_MODEL = 'claude-haiku-4-5-20251001'
// Most capable — used for scoring/feedback, which needs better judgment
export const JUDGE_MODEL = 'claude-sonnet-5'

export function extractText(message: Anthropic.Messages.Message): string {
  const block = message.content.find((b) => b.type === 'text')
  return block && block.type === 'text' ? block.text : ''
}

export function extractJson<T>(text: string): T {
  // Claude sometimes wraps JSON in prose or code fences despite instructions — pull out the object.
  const match = text.match(/\{[\s\S]*\}/)
  if (!match) throw new Error('No JSON object found in model response')
  return JSON.parse(match[0]) as T
}
