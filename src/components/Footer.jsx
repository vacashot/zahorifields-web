import { Link } from 'react-router-dom'
import DroneIcon from './DroneIcon'

export default function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-3">
            <DroneIcon className="w-5 h-5 text-accent" />
            <span className="text-sm font-semibold text-[#efefef]">ZahoriFields</span>
          </div>
          <p className="text-xs text-muted leading-relaxed">
            Análisis de imágenes multiespectrales para agricultura de precisión.
          </p>
          <p className="text-xs text-muted mt-4">
            Desarrollado por{' '}
            <a
              href="https://www.itacyl.es"
              target="_blank"
              rel="noreferrer"
              className="text-accent hover:underline"
            >
              ITACYL
            </a>
          </p>
        </div>

        <div>
          <p className="text-[11px] font-mono tracking-widest text-muted uppercase mb-4">Software</p>
          <ul className="space-y-2.5">
            {[['Download', '/download'], ['Datasets', '/datasets'], ['Code', '/code']].map(([l, to]) => (
              <li key={to}>
                <Link to={to} className="text-sm text-muted hover:text-[#efefef] transition-colors">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-mono tracking-widest text-muted uppercase mb-4">Recursos</p>
          <ul className="space-y-2.5">
            {[['Documentación', '/docs'], ['Comunidad', '/comunidad']].map(([l, to]) => (
              <li key={to}>
                <Link to={to} className="text-sm text-muted hover:text-[#efefef] transition-colors">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-mono tracking-widest text-muted uppercase mb-4">Institución</p>
          <ul className="space-y-2.5">
            {[
              ['ITACYL', 'https://www.itacyl.es'],
              ['Junta de Castilla y León', 'https://www.jcyl.es'],
            ].map(([l, href]) => (
              <li key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted hover:text-[#efefef] transition-colors"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-muted">© 2025 ITACYL — Instituto Tecnológico Agrario de Castilla y León</p>
          <p className="text-xs text-muted">ZahoriFields — Licencia abierta</p>
        </div>
      </div>
    </footer>
  )
}
