import { useState } from 'react'
import { FileText } from 'lucide-react'
import type { BuilderEndTask } from '../../data/types'
import Button from '../../components/Button'
import Card from '../../components/Card'

export default function BuilderTaskView({
  task,
  onSubmit,
}: {
  task: BuilderEndTask
  onSubmit: (content: string) => void
}) {
  const [answers, setAnswers] = useState<string[]>(() => task.prompts.map(() => ''))

  const allFilled = answers.every((a) => a.trim().length > 0)

  const handleSubmit = () => {
    const content = task.prompts
      .map((p, i) => `${p.label}\n${answers[i].trim()}`)
      .join('\n\n')
    onSubmit(content)
  }

  return (
    <div className="flex-1 flex flex-col">
      <div className="px-6 pb-6 flex-1 overflow-y-auto">
        <Card className="!p-4 mb-6 bg-lilac-100 !shadow-none flex gap-3">
          <FileText size={18} strokeWidth={2.25} className="text-lilac-600 shrink-0 mt-0.5" />
          <p className="text-sm text-ink-700 leading-relaxed">{task.brief}</p>
        </Card>

        <div className="flex flex-col gap-5">
          {task.prompts.map((prompt, i) => (
            <div key={prompt.label}>
              <label className="block font-display font-bold text-sm text-ink-950 mb-2">
                {prompt.label}
              </label>
              <textarea
                value={answers[i]}
                onChange={(e) =>
                  setAnswers((prev) => prev.map((v, idx) => (idx === i ? e.target.value : v)))
                }
                placeholder={prompt.placeholder}
                rows={3}
                className="w-full rounded-2xl border-2 border-ink-200 bg-white px-4 py-3.5 text-[15px] text-ink-950 placeholder:text-ink-300 focus:outline-none focus:border-ink-950 resize-none"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 py-6 sticky bottom-0 bg-paper-50 border-t border-ink-100">
        <Button disabled={!allFilled} onClick={handleSubmit}>
          Submit to My Portfolio
        </Button>
      </div>
    </div>
  )
}
