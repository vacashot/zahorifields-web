import { ExternalLink, GitFork, FileCode, Shield, GitPullRequest, Bug } from 'lucide-react'

const stats = [
  { label: 'Licencia', value: 'GPL-3.0', icon: Shield },
  { label: 'Lenguaje', value: 'Python / C++', icon: null },
  { label: 'Plataforma', value: 'Windows', icon: null },
  { label: 'Versión', value: '1.0.0', icon: null },
]

const repos = [
  {
    name: 'zahorifields',
    desc: 'Aplicación principal. Motor de procesamiento multiespectral, índices de vegetación y calculadora ULV.',
    lang: 'Python',
    main: true,
  },
  {
    name: 'zahorifields-web',
    desc: 'Este sitio web. Construido con React + Vite + Tailwind CSS.',
    lang: 'JavaScript',
    main: false,
  },
  {
    name: 'zahorifields-indices',
    desc: 'Librería de índices de vegetación. Más de 50 implementaciones documentadas.',
    lang: 'Python',
    main: false,
  },
]

export default function Code() {
  return (
    <div className="pt-28">
      <div className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <span className="section-label">Código fuente</span>
          <h1 className="text-4xl font-semibold tracking-tight text-[#efefef] mb-3">Code</h1>
          <p className="text-muted text-sm max-w-lg">
            ZahoriFields es software libre. Puedes usar, estudiar, modificar y distribuir el código
            bajo los términos de la licencia GPL-3.0.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-14">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border mb-14">
          {stats.map(({ label, value }) => (
            <div key={label} className="bg-bg px-6 py-5 hover:bg-surface transition-colors">
              <p className="text-[11px] font-mono text-muted uppercase tracking-wider mb-1.5">{label}</p>
              <p className="text-sm font-medium text-[#efefef] font-mono">{value}</p>
            </div>
          ))}
        </div>

        {/* Repositorios */}
        <span className="section-label">Repositorios</span>
        <div className="space-y-px">
          {repos.map(({ name, desc, lang, main }) => (
            <div
              key={name}
              className="border border-border bg-bg hover:bg-surface transition-colors p-6 flex items-start justify-between gap-6"
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-sm font-medium text-accent font-mono">{name}</h3>
                  {main && (
                    <span className="text-[10px] font-mono border border-accent text-accent px-2 py-0.5">
                      principal
                    </span>
                  )}
                </div>
                <p className="text-xs text-muted leading-relaxed mb-3">{desc}</p>
                <span className="text-[11px] font-mono text-muted">{lang}</span>
              </div>
              <a
                href={`https://github.com/vacashot/${name}`}
                target="_blank"
                rel="noreferrer"
                className="shrink-0 inline-flex items-center gap-2 btn-ghost text-xs px-4 py-2"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                GitHub
              </a>
            </div>
          ))}
        </div>

        {/* Contribuir */}
        <div className="border-t border-border mt-14 pt-14">
          <span className="section-label">Contribuir al código</span>
          <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
            {[
              { icon: GitFork, title: 'Fork & Pull Request', desc: 'Haz un fork, crea una rama, desarrolla y abre un PR con tu propuesta.' },
              { icon: Bug, title: 'Reportar bugs', desc: 'Usa GitHub Issues con la plantilla de error. Incluye logs y versión del SO.' },
              { icon: GitPullRequest, title: 'Revisión de código', desc: 'Los PRs son revisados por el equipo de ITACYL antes de fusionarse.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-bg p-6 hover:bg-surface transition-colors">
                <Icon className="w-4 h-4 text-accent mb-4" strokeWidth={1.5} />
                <h3 className="text-sm font-medium text-[#efefef] mb-2">{title}</h3>
                <p className="text-xs text-muted leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
