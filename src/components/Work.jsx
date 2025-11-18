import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    name: 'Cortex Analytics',
    tag: 'SaaS Platform',
    href: '#',
    img: 'https://images.unsplash.com/photo-1551281044-8b87c5f9ef3b?q=80&w=1200&auto=format&fit=crop'
  },
  {
    name: 'Pulse Mobile',
    tag: 'Mobile App',
    href: '#',
    img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop'
  },
  {
    name: 'Nimbus Cloud',
    tag: 'Cloud Infra',
    href: '#',
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop'
  }
]

export default function Work() {
  return (
    <section id="work" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Featured work</h2>
            <p className="mt-3 text-slate-300">A peek at recent launches across web, mobile, and cloud.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 text-white px-4 py-2">
            Work with us <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {projects.map(p => (
            <a key={p.name} href={p.href} className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5 flex items-center justify-between">
                <div>
                  <div className="text-white font-medium">{p.name}</div>
                  <div className="text-slate-400 text-sm">{p.tag}</div>
                </div>
                <div className="text-slate-300 group-hover:text-white transition-colors">
                  <ArrowUpRight />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
