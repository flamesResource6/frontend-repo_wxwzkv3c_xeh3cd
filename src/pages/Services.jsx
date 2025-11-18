import AppLayout from '../App'
import { Link } from 'react-router-dom'
import { Code2, Smartphone, Cloud, Wrench } from 'lucide-react'

const services = [
  { key: 'web', icon: Code2, title: 'Web Applications', desc: 'React, Next.js, Node, and modern APIs for fast, accessible web experiences.' },
  { key: 'mobile', icon: Smartphone, title: 'Mobile Development', desc: 'Native Swift/Kotlin and React Native for polished iOS and Android apps.' },
  { key: 'cloud', icon: Cloud, title: 'Cloud & DevOps', desc: 'Scalable infra, CI/CD, observability across AWS, GCP, Azure.' },
  { key: 'product', icon: Wrench, title: 'Product Engineering', desc: 'MVP to enterprise: research, design, build, test, iterate.' },
]

export default function ServicesPage() {
  return (
    <AppLayout>
      <section className="pt-28 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-semibold text-white">Services</h1>
            <p className="mt-3 text-slate-300">Strategic, end-to-end delivery tailored to your roadmap.</p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ key, icon: Icon, title, desc }) => (
              <Link key={key} to={`/services/${key}`} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-300 flex items-center justify-center">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 text-white font-medium">{title}</h3>
                <p className="mt-2 text-slate-400 text-sm">{desc}</p>
                <div className="mt-4 text-blue-300 text-sm">Learn more →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </AppLayout>
  )
}
