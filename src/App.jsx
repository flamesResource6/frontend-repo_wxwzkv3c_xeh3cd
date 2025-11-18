import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import Contact from './components/Contact'

function HomePage() {
  return (
    <main className="relative">
      <Hero />
      <Services />
      <Work />
    </main>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400">
        <div className="flex items-center gap-3">
          <img src="/flame-icon.svg" alt="Logo" className="w-6 h-6" />
          <span>© {new Date().getFullYear()} Webrovise — All rights reserved.</span>
        </div>
        <div className="text-sm">Built with care • Secure • Performant</div>
      </div>
    </footer>
  )
}

export default function AppLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      {children || <HomePage />}
      <Contact />
      <Footer />
    </div>
  )
}
