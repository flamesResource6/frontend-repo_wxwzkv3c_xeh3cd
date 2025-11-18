import AppLayout from '../App'

export default function AboutPage() {
  return (
    <AppLayout>
      <section className="pt-28 pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="text-4xl sm:text-5xl font-semibold text-white">About Webrovise</h1>
          <p className="mt-4 text-slate-300 text-lg">We are a boutique software house crafting exceptional digital products. Our team blends product strategy, design, and engineering to deliver outcomes that move businesses forward.</p>
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-300">Small, senior team with deep experience shipping complex systems.</div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-300">Transparent, async-friendly process with weekly demos and metrics.</div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-300">Design systems, accessibility, and performance by default.</div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-300">Security-first mindset with rigorous code reviews and automation.</div>
          </div>
        </div>
      </section>
    </AppLayout>
  )
}
