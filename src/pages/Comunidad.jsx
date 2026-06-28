import { MessageCircle, GitBranch, Mail, BookOpen } from 'lucide-react'

const channels = [
  {
    icon: GitBranch,
    title: 'GitHub Issues',
    desc: 'Reporta errores, sugiere funcionalidades o consulta el estado del desarrollo.',
    label: 'Abrir un issue',
    url: 'https://github.com/vacashot/zahorifields-web',
  },
  {
    icon: MessageCircle,
    title: 'Discord',
    desc: 'Canal de la comunidad para preguntas, tutoriales y compartir resultados.',
    label: 'Unirse al servidor',
    url: '#',
  },
  {
    icon: Mail,
    title: 'Contacto ITACYL',
    desc: 'Consultas institucionales, colaboraciones y soporte para centros de investigación.',
    label: 'Enviar correo',
    url: 'mailto:info@itacyl.es',
  },
  {
    icon: BookOpen,
    title: 'Documentación',
    desc: 'Guías de usuario, tutoriales paso a paso y referencia de todos los índices.',
    label: 'Ir a la docs',
    url: '/docs',
  },
]

const contribute = [
  { n: '01', title: 'Reporta un error', desc: 'Usa GitHub Issues con capturas y pasos para reproducirlo.' },
  { n: '02', title: 'Mejora la documentación', desc: 'Edita directamente los archivos Markdown en el repositorio.' },
  { n: '03', title: 'Añade un dataset', desc: 'Comparte ortofotos de tus vuelos para la biblioteca de ejemplos.' },
  { n: '04', title: 'Propón un índice', desc: 'Si calculas un índice que no está incluido, abre una propuesta.' },
]

export default function Comunidad() {
  return (
    <div className="pt-28">
      <div className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <span className="section-label">Red de usuarios</span>
          <h1 className="text-4xl font-semibold tracking-tight text-[#efefef] mb-3">Comunidad</h1>
          <p className="text-muted text-sm max-w-lg">
            ZahoriFields es un proyecto abierto. Investigadores, técnicos y agricultores
            colaboran para mejorarlo. Únete.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-14">
        {/* Canales */}
        <span className="section-label">Canales</span>
        <div className="grid sm:grid-cols-2 gap-px bg-border mb-16">
          {channels.map(({ icon: Icon, title, desc, label, url }) => (
            <div key={title} className="bg-bg p-7 hover:bg-surface transition-colors">
              <Icon className="w-5 h-5 text-accent mb-5" strokeWidth={1.5} />
              <h3 className="text-sm font-medium text-[#efefef] mb-2">{title}</h3>
              <p className="text-xs text-muted leading-relaxed mb-5">{desc}</p>
              <a
                href={url}
                className="text-xs text-accent hover:underline inline-flex items-center gap-1"
              >
                {label} →
              </a>
            </div>
          ))}
        </div>

        {/* Cómo contribuir */}
        <div className="border-t border-border pt-14">
          <span className="section-label">Cómo contribuir</span>
          <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
            {contribute.map(({ n, title, desc }) => (
              <div key={n} className="bg-bg p-6 hover:bg-surface transition-colors">
                <p className="font-mono text-xs text-accent mb-3">{n}</p>
                <h3 className="text-sm font-medium text-[#efefef] mb-1.5">{title}</h3>
                <p className="text-xs text-muted leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
