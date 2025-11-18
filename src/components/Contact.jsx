import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const base = import.meta.env.VITE_BACKEND_URL || ''
      const res = await fetch(`${base}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        })
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('Thanks! We will reach out shortly.')
      e.target.reset()
    } catch (err) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Tell us about your project</h2>
          <p className="mt-3 text-slate-300">We’ll get back within 24 hours.</p>
        </div>

        <form onSubmit={onSubmit} className="mt-10 grid gap-4 max-w-2xl">
          <input name="name" required placeholder="Your name" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-slate-400 outline-none focus:border-blue-400" />
          <input type="email" name="email" required placeholder="Email" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-slate-400 outline-none focus:border-blue-400" />
          <textarea name="message" required placeholder="What are you building?" rows="5" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-slate-400 outline-none focus:border-blue-400" />
          <button className="mt-2 rounded-xl bg-blue-500 hover:bg-blue-400 text-white px-5 py-3 transition-colors w-fit">Send message</button>
          <div className="text-sm text-slate-300">{status}</div>
        </form>
      </div>
    </section>
  )
}
