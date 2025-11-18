import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

function NavLink({ to, children, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="text-slate-200 hover:text-white transition-colors"
    >
      {children}
    </Link>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 backdrop-blur-xl bg-slate-900/50 border border-white/10 rounded-2xl">
          <div className="flex items-center justify-between px-6 py-4">
            <Link to="/" className="flex items-center gap-3">
              <img src="/flame-icon.svg" alt="Logo" className="w-9 h-9" />
              <span className="text-white font-semibold text-lg">Webrovise</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/work">Work</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/contact">Contact</NavLink>
              <Link to="/contact" className="inline-flex items-center rounded-xl bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 transition-colors">
                Start a project
              </Link>
            </nav>

            <button onClick={() => setOpen(v => !v)} className="md:hidden text-white p-2 rounded-lg hover:bg-white/10">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-6 pb-6">
              <div className="grid gap-4 text-sm">
                <NavLink to="/services" onClick={close}>Services</NavLink>
                <NavLink to="/work" onClick={close}>Work</NavLink>
                <NavLink to="/about" onClick={close}>About</NavLink>
                <NavLink to="/contact" onClick={close}>Contact</NavLink>
                <Link to="/contact" onClick={close} className="inline-flex items-center justify-center rounded-xl bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 transition-colors">
                  Start a project
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
