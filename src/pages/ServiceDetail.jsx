import AppLayout from '../App'
import { Code2, Smartphone, Cloud, Wrench } from 'lucide-react'
import { useParams } from 'react-router-dom'

const all = {
  web: {
    icon: Code2,
    title: 'Web Applications',
    lead: 'Blazing-fast, accessible web apps with delightful UX.',
    bullets: ['React/Next.js frontends', 'Node/Express/FastAPI services', 'Design systems & accessibility', 'API design & integrations'],
  },
  mobile: {
    icon: Smartphone,
    title: 'Mobile Development',
    lead: 'Native quality with cross-platform speed when it fits.',
    bullets: ['Swift/Kotlin & React Native', 'Offline-first & sync', 'App Store/Play Store launch', 'Telemetry & growth analytics'],
  },
  cloud: {
    icon: Cloud,
    title: 'Cloud & DevOps',
    lead: 'Reliability and speed through automation and observability.',
    bullets: ['IaC with Terraform', 'CI/CD pipelines', 'Kubernetes & serverless', 'Monitoring & incident response'],
  },
  product: {
    icon: Wrench,
    title: 'Product Engineering',
    lead: 'From idea to scale with research, design, and iteration.',
    bullets: ['User research & strategy', 'MVP scoping & delivery', 'QA automation', 'Documentation & handover'],
  },
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const item = all[slug]

  if (!item) {
    return (
      <AppLayout>
        <div className="pt-28 pb-20 mx-auto max-w-3xl px-6 text-white">Service not found.</div>
      </AppLayout>
    )
  }

  const Icon = item.icon

  return (
    <AppLayout>
      <section className="pt-28 pb-20">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h1 className="text-4xl sm:text-5xl font-semibold text-white flex items-center gap-3"><span className="w-11 h-11 rounded-xl bg-blue-500/20 text-blue-300 flex items-center justify-center"><Icon size={22} /></span>{item.title}</h1>
            <p className="mt-4 text-slate-300 text-lg">{item.lead}</p>

            <div className="mt-8 grid gap-4">
              {item.bullets.map(b => (
                <div key={b} className="rounded-xl border border-white/10 bg-white/5 p-4 text-slate-200">• {b}</div>
              ))}
            </div>
          </div>
          <aside className="lg:col-span-1">
            <div className="sticky top-28 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-white font-medium">Why Webrovise</div>
              <ul className="mt-3 text-slate-300 text-sm list-disc pl-5 space-y-2">
                <li>Small, senior team — no handoffs</li>
                <li>Transparent, weekly demos</li>
                <li>Design + engineering under one roof</li>
                <li>Security and performance by default</li>
              </ul>
              <a href="/contact" className="mt-6 inline-flex rounded-xl bg-blue-500 hover:bg-blue-400 text-white px-4 py-2">Start a project</a>
            </div>
          </aside>
        </div>
      </section>
    </AppLayout>
  )
}
