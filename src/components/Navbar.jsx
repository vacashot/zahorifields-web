import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import DroneIcon from './DroneIcon'

const links = [
  { to: '/download', label: 'Download' },
  { to: '/datasets', label: 'Datasets' },
  { to: '/docs', label: 'Docs' },
  { to: '/comunidad', label: 'Comunidad' },
  { to: '/code', label: 'Code' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? 'bg-bg border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <DroneIcon className="w-7 h-7 text-accent" />
          <span className="text-[15px] font-semibold tracking-tight text-[#efefef]">
            ZahoriFields
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `px-3 py-1.5 text-sm transition-colors duration-150 ${
                  isActive ? 'text-accent' : 'text-muted hover:text-[#efefef]'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden text-muted hover:text-[#efefef] transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <div className="w-5 flex flex-col gap-1">
            <span className={`block h-px bg-current transition-all ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block h-px bg-current transition-all ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-px bg-current transition-all ${open ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-bg border-b border-border px-6 pb-4">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block py-2.5 text-sm border-b border-border last:border-0 ${
                  isActive ? 'text-accent' : 'text-muted'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}
