import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[85vh] pt-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" />

      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-24 -left-24 w-[40rem] h-[40rem] bg-blue-500/30 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 -right-24 w-[40rem] h-[40rem] bg-indigo-500/30 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div className="py-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-200">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            Available for new projects
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            We design and build remarkable software products
          </h1>
          <p className="mt-4 text-slate-300 text-lg">
            A boutique team crafting web apps, mobile experiences and cloud platforms for startups and enterprises.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="rounded-xl bg-blue-500 hover:bg-blue-400 text-white px-5 py-3 transition-colors">Start a project</a>
            <a href="#work" className="rounded-xl bg-white/10 hover:bg-white/15 text-white px-5 py-3 transition-colors">See our work</a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-semibold text-white">50+</div>
              <div className="text-slate-400 text-sm">Projects shipped</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-white">12</div>
              <div className="text-slate-400 text-sm">Team members</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-white">5⭐</div>
              <div className="text-slate-400 text-sm">Client rating</div>
            </div>
          </div>
        </div>

        <div className="relative h-[480px] lg:h-[640px]">
          <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-white/0">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-blue-500/30 to-indigo-500/30 blur-2xl pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
