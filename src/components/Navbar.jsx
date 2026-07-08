import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/download', label: 'Download' },
  { to: '/datasets', label: 'Datasets' },
  { to: '/docs', label: 'Docs' },
  { to: '/docker', label: 'Docker' },
  { to: '/comunidad', label: 'Comunidad' },
  { to: '/galeria', label: 'Galería' },
  { to: '/blog', label: 'Blog' },
  { to: '/swag', label: 'Swag' },
  { to: '/code', label: 'Code' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-200 ${scrolled ? 'shadow-sm' : ''} border-b border-border`}>
      <div className="max-w-screen-xl mx-auto px-8 h-16 flex items-center justify-between gap-6">

        <Link to="/" className="flex items-center shrink-0">
          <img
            src="/images/logo-horizontal.png"
            alt="ZahoriFields"
            className="h-9 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-0.5 flex-1 justify-center">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `px-3 py-2 text-sm transition-colors duration-150 rounded-sm whitespace-nowrap ${
                  isActive
                    ? 'text-accent font-medium bg-accent-light'
                    : 'text-muted hover:text-text hover:bg-surface-2'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <Link to="/download" className="hidden md:inline-flex btn-primary text-sm px-5 py-2 shrink-0">
          Descargar
        </Link>

        <button
          className="md:hidden text-muted hover:text-text transition-colors shrink-0"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`block h-px bg-current transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-px bg-current transition-all ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-px bg-current transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-border px-6 pb-4">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block py-3 text-sm border-b border-border last:border-0 ${
                  isActive ? 'text-accent font-medium' : 'text-muted'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link to="/download" className="btn-primary mt-4 w-full justify-center" onClick={() => setOpen(false)}>
            Descargar
          </Link>
        </div>
      )}
    </header>
  )
}
