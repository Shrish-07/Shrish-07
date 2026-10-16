'use client'

import { useState } from 'react'
import { profile } from '@/data/profile'

/**
 * ContactForm, a private channel that sends messages straight to my inbox
 * through Web3Forms. My own email address never appears in the code, only the
 * opaque access key from profile.contactForm.
 */

type Status = 'idle' | 'setup' | 'sending' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    if (!profile.contactForm.accessKey) {
      setStatus('setup')
      return
    }
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form).entries())),
      })
      const json = await res.json()
      if (json.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input type="hidden" name="access_key" value={profile.contactForm.accessKey} />
      <input type="hidden" name="subject" value="New message from the portfolio contact form" />
      <input type="hidden" name="from_name" value="Portfolio visitor" />
      <input type="checkbox" name="botcheck" className="hidden-bot" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="form-field">
        <label htmlFor="contact-name">Name</label>
        <input id="contact-name" name="name" type="text" placeholder="Your name" required maxLength={120} />
      </div>
      <div className="form-field">
        <label htmlFor="contact-email">Your email</label>
        <input id="contact-email" name="email" type="email" placeholder="you@anywhere.com" required maxLength={200} />
      </div>
      <div className="form-field">
        <label htmlFor="contact-message">Message</label>
        <textarea id="contact-message" name="message" placeholder="What is on your mind?" required maxLength={5000} />
      </div>
      <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send the message'}
      </button>
      {status === 'success' ? (
        <p className="form-status form-status-ok" role="status">
          Sent. It landed in my inbox and I will reply soon.
        </p>
      ) : null}
      {status === 'setup' ? (
        <p className="form-status form-status-warn" role="status">
          The form is still being connected to my inbox. Reach me on the public
          channels for now.
        </p>
      ) : null}
      {status === 'error' ? (
        <p className="form-status form-status-warn" role="alert">
          Something went wrong sending that. Try again, or reach me on LinkedIn instead.
        </p>
      ) : null}
    </form>
  )
}