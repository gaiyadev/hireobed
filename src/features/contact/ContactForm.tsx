import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import { site } from '@/data/site'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/cn'

type Status = 'idle' | 'sending' | 'sent' | 'mailto' | 'error'
type Fields = 'name' | 'email' | 'subject' | 'message'
type Errors = Partial<Record<Fields, string>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(v: Record<Fields, string>): Errors {
  const e: Errors = {}
  if (v.name.trim().length < 2) e.name = 'Please enter your name.'
  if (!EMAIL_RE.test(v.email.trim())) e.email = 'Please enter a valid email address.'
  if (v.subject.trim().length < 3) e.subject = 'Please add a short subject.'
  if (v.message.trim().length < 20) e.message = 'Please write at least 20 characters so I can understand your request.'
  return e
}

const input = 'w-full rounded-xl border bg-surface-2 px-4 py-3 text-sm outline-none transition placeholder:text-subtle focus:border-accent'

function Field({ id, label, error, children }: { id: Fields; label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs font-medium text-muted">{label}</label>
      {children}
      {error && <p id={`${id}-error`} className="mt-1.5 text-xs text-red-400 [.light_&]:text-red-700">{error}</p>}
    </div>
  )
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Errors>({})

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const raw = Object.fromEntries(new FormData(form)) as Record<string, string>
    if (raw['company']) return // honeypot: bots fill hidden fields
    const values = { name: raw['name'] ?? '', email: raw['email'] ?? '', subject: raw['subject'] ?? '', message: raw['message'] ?? '' }

    const found = validate(values)
    setErrors(found)
    const firstInvalid = (Object.keys(found) as Fields[])[0]
    if (firstInvalid) { form.querySelector<HTMLElement>(`#${firstInvalid}`)?.focus(); return }

    if (!site.formEndpoint) {
      // No form service configured: hand the message to the visitor's email app. We cannot know it was sent.
      const body = `${values.message}\n\n${values.name} (${values.email})`
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`
      setStatus('mailto')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(site.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  const aria = (id: Fields) => ({ 'aria-invalid': errors[id] ? true : undefined, 'aria-describedby': errors[id] ? `${id}-error` : undefined })
  const border = (id: Fields) => (errors[id] ? 'border-red-400/70' : 'border-line')

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4" aria-label="Contact form">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="name" label="Name" error={errors.name}>
          <input id="name" name="name" autoComplete="name" required className={cn(input, border('name'))} placeholder="Jane Doe" {...aria('name')} />
        </Field>
        <Field id="email" label="Email" error={errors.email}>
          <input id="email" name="email" type="email" autoComplete="email" required className={cn(input, border('email'))} placeholder="jane@company.com" {...aria('email')} />
        </Field>
      </div>
      <Field id="subject" label="Subject" error={errors.subject}>
        <input id="subject" name="subject" required className={cn(input, border('subject'))} placeholder="Fintech platform build" {...aria('subject')} />
      </Field>
      <Field id="message" label="Message" error={errors.message}>
        <textarea id="message" name="message" rows={5} required className={cn(input, border('message'))} placeholder="Tell me about the problem you're solving." {...aria('message')} />
      </Field>
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send message'} <Send size={15} aria-hidden /></Button>
      </div>
      <div role="status" aria-live="polite" className="min-h-5 text-sm">
        {status === 'sent' && <p className="text-accent">Thanks. Your message was sent and I'll reply by email.</p>}
        {status === 'mailto' && (
          <p className="text-muted">
            Your email app should now be open with the message ready to send. Nothing has been sent yet. If it didn't open, email me at{' '}
            <a className="text-accent underline underline-offset-2" href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        )}
        {status === 'error' && (
          <p className="text-red-400 [.light_&]:text-red-700">
            Your message could not be sent. Please try again or email <a className="underline underline-offset-2" href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        )}
      </div>
    </form>
  )
}
