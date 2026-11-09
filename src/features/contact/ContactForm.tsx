import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import { site } from '@/data/site'
import { Button } from '@/components/ui/Button'

type Status = 'idle' | 'sending' | 'sent' | 'error'
const field = 'w-full rounded-xl border border-line bg-surface-2 px-4 py-3 text-sm outline-none transition placeholder:text-subtle focus:border-accent'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>
    if (data['company']) return // honeypot

    if (!site.formEndpoint) {
      // No backend configured: open the visitor's mail client with the message prefilled.
      const body = `${data['message'] ?? ''}\n\n— ${data['name'] ?? ''} (${data['email'] ?? ''})`
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(data['subject'] ?? '')}&body=${encodeURIComponent(body)}`
      setStatus('sent')
      return
    }
    setStatus('sending')
    try {
      const res = await fetch(site.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data) })
      if (!res.ok) throw new Error(String(res.status))
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" aria-label="Contact form">
      <div className="grid gap-4 sm:grid-cols-2">
        <div><label htmlFor="name" className="mb-1.5 block text-xs text-muted">Name</label><input id="name" name="name" required autoComplete="name" className={field} placeholder="Jane Doe" /></div>
        <div><label htmlFor="email" className="mb-1.5 block text-xs text-muted">Email</label><input id="email" name="email" type="email" required autoComplete="email" className={field} placeholder="jane@company.com" /></div>
      </div>
      <div><label htmlFor="subject" className="mb-1.5 block text-xs text-muted">Subject</label><input id="subject" name="subject" required className={field} placeholder="Fintech platform build" /></div>
      <div><label htmlFor="message" className="mb-1.5 block text-xs text-muted">Message</label><textarea id="message" name="message" required rows={5} className={field} placeholder="Tell me about the problem you're solving." /></div>
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send message'} <Send size={15} /></Button>
        <p role="status" aria-live="polite" className="text-sm text-muted">
          {status === 'sent' && (site.formEndpoint ? 'Thanks, your message was sent.' : 'Opening your email app…')}
          {status === 'error' && 'Something went wrong. Please email me directly.'}
        </p>
      </div>
    </form>
  )
}
