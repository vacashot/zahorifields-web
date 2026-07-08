import { Link } from 'react-router-dom'

const posts = [
  {
    to: '/blog/mascaras-vegetacion',
    tag: 'Preprocesamiento',
    title: 'Máscaras de vegetación: cómo separar el cultivo del suelo en imágenes de dron',
    excerpt: 'Cuatro estrategias para aislar píxeles de planta antes de calcular cualquier índice: índice espectral, color HSV, umbral térmico y método mixto. Imprescindible para un CWSI fiable.',
    meta: '5 min · ITACYL · 2026',
    img: '/blog/mascaras-vegetacion-infografia.svg',
  },
  {
    to: '/blog/cwsi',
    tag: 'Índices térmicos',
    title: 'Cómo calcular el índice de estrés hídrico (CWSI) con imágenes térmicas de dron',
    excerpt: 'El CWSI cuantifica la falta de agua en el cultivo a partir de la temperatura foliar. Con ZahoriFields se calcula directamente sobre la ortofoto térmica, sin MATLAB ni software comercial.',
    meta: '6 min · ITACYL · 2026',
    img: '/blog/cwsi-infografia.svg',
  },
]

export default function Blog() {
  return (
    <div className="pt-16">
      <div className="bg-white border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <span className="section-label">Recursos</span>
          <h1 className="text-4xl font-semibold tracking-tight text-text mb-3">Blog</h1>
          <p className="text-muted text-sm max-w-md">
            Tutoriales y guías técnicas sobre análisis de imágenes de dron para agricultura de precisión.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map(({ to, tag, title, excerpt, meta, img }) => (
            <Link
              key={to}
              to={to}
              className="group border border-border bg-white rounded-sm overflow-hidden hover:border-accent transition-colors duration-150 flex flex-col"
            >
              {/* Thumbnail */}
              <div className="bg-[#0F1F1A] overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-44 object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <span className="text-[10px] font-mono tracking-widest text-accent uppercase mb-3">{tag}</span>
                <h2 className="text-sm font-semibold text-text leading-snug mb-3 group-hover:text-accent transition-colors" style={{ textWrap: 'balance' }}>
                  {title}
                </h2>
                <p className="text-xs text-muted leading-relaxed flex-1 mb-4">{excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-muted">{meta}</span>
                  <span className="text-xs text-accent font-medium">Leer →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
