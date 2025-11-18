import { Code2, Smartphone, Cloud, Wrench } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Web Applications',
    desc: 'Modern, responsive web apps with delightful UX and scalable architecture.'
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    desc: 'Native and cross‑platform apps for iOS and Android.'
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    desc: 'Infrastructure, CI/CD, and observability on AWS, GCP, and Azure.'
  },
  {
    icon: Wrench,
    title: 'Product Engineering',
    desc: 'MVPs to enterprise systems with testing, docs, and long‑term support.'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">What we do</h2>
          <p className="mt-3 text-slate-300">Full‑stack product teams that plug into your roadmap and ship value quickly.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-300 flex items-center justify-center">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-white font-medium">{title}</h3>
              <p className="mt-2 text-slate-400 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
