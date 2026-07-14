import { API_BASE_URL } from './config'

export interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

export interface ScoreResult {
  score: number
  summary: string
  strengths: string[]
  improvements: string[]
}

export interface CaptionFeedbackResult {
  score: number
  summary: string
  whatWorked: string[]
  whatToImprove: string[]
}

class ApiError extends Error {}

async function post<T>(path: string, body: unknown): Promise<T> {
  if (!API_BASE_URL) {
    throw new ApiError(
      'No API server configured — set expo.extra.apiBaseUrl in app.json to your deployed web app URL.',
    )
  }
  const res = await fetch(`${API_BASE_URL}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  const data = await res.json().catch(() => null)
  if (!res.ok) {
    throw new ApiError(data?.error || `Request failed (${res.status})`)
  }
  return data as T
}

export function getSimulatorReply(taskId: string, messages: ChatMessage[]) {
  return post<{ reply: string }>('/api/simulator-reply', { taskId, messages })
}

export function getSimulatorScore(messages: ChatMessage[]) {
  return post<ScoreResult>('/api/simulator-score', { messages })
}

export function getCaptionFeedback(brief: string, caption: string, label: string) {
  return post<CaptionFeedbackResult>('/api/caption-feedback', { brief, caption, label })
}

export { ApiError }
