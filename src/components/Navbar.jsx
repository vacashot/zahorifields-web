import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/download', label: 'Download' },
  { to: '/datasets', label: 'Datasets' },
  { to: '/docs', label: 'Docs' },
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

  // Close the mobile menu if the viewport grows into the desktop layout
  // and if the user presses Escape, so state never gets stuck open.
  useEffect(() => {
    if (!open) return

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const mq = window.matchMedia('(min-width: 768px)')
    const onMqChange = (e) => {
      if (e.matches) setOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    mq.addEventListener('change', onMqChange)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      mq.removeEventListener('change', onMqChange)
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-200 ${scrolled ? 'shadow-sm' : ''} border-b border-border`}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 h-16 flex items-center justify-between gap-4 md:gap-6">

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
          type="button"
          className="md:hidden -mr-2.5 flex items-center justify-center min-w-11 min-h-11 rounded-sm text-muted hover:text-text hover:bg-surface-2 active:bg-surface-2 transition-colors shrink-0"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-current transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="md:hidden absolute top-16 left-0 right-0 bg-white border-t border-border px-4 sm:px-6 pb-4 max-h-[calc(100dvh-4rem)] overflow-y-auto"
        >
          <nav aria-label="Menú principal">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block py-3 min-h-11 text-[15px] leading-[20px] border-b border-border last:border-0 ${
                    isActive ? 'text-accent font-medium' : 'text-text'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
          <Link to="/download" className="btn-primary mt-4 w-full justify-center" onClick={() => setOpen(false)}>
            Descargar
          </Link>
        </div>
      )}
    </header>
  )
}
