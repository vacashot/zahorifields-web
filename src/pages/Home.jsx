import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ArrowRight, Layers, Thermometer, Droplets, Flower2, Map, Calculator, ScanLine, Sliders, Download as DownloadIcon, Globe } from 'lucide-react'
import { useDownloadCount, useVisitCount, formatCount } from '../hooks/useStats'

const heroImages = [
  '/hero/campo1.jpg',
  '/hero/campo2.jpg',
  '/hero/campo3.jpg',
]

function HeroCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurrent(i => (i + 1) % heroImages.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <>
      {heroImages.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        />
      ))}
      {/* malla de análisis */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(34,197,94,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.35) 1px, transparent 1px)`,
          backgroundSize: '52px 52px',
        }}
      />
      {/* gradiente oscuro — texto legible a la izquierda */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/10" />
      {/* dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Imagen ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-accent w-5' : 'bg-white/40 hover:bg-white/70'}`}
          />
        ))}
      </div>
    </>
  )
}

const features = [
  { icon: Layers, title: 'Índices de Vegetación', desc: 'Más de 50 índices multiespectrales: NDVI, NDRE, SAVI y variantes avanzadas.' },
  { icon: Droplets, title: 'Estrés Hídrico (CWSI)', desc: 'Índice de Estrés Hídrico de Cultivos a partir de imágenes térmicas.' },
  { icon: Flower2, title: 'Índice de Floración (EBI)', desc: 'Detección de estados fenológicos mediante índice espectral especializado.' },
  { icon: Thermometer, title: 'Imágenes Térmicas', desc: 'Procesamiento de ortofotos térmicas calibradas para agricultura de precisión.' },
  { icon: Map, title: 'Zonas de Manejo', desc: 'Definición de parcelas, ensayos, tratamientos y repeticiones sobre el mapa.' },
  { icon: Calculator, title: 'Métricas por Parcela', desc: 'Estadísticas zonales, histogramas y comparación de resultados entre fechas.' },
  { icon: ScanLine, title: 'Calibración Radiométrica', desc: 'Calibración guiada para MicaSense, Sentera, MAPIR, Tetracam y RGB.' },
  { icon: Sliders, title: 'Modular y Extensible', desc: 'Nuevas herramientas de análisis incorporadas de forma continua.' },
]

const steps = [
  {
    n: '01',
    title: 'Carga tus datos UAS',
    desc: 'Importa ortomosaicos RGB, multiespectrales, térmicos o capas derivadas de vuelos con dron.',
  },
  {
    n: '02',
    title: 'Define zonas de análisis',
    desc: 'Dibuja o carga parcelas, ensayos, tratamientos, repeticiones o áreas de interés.',
  },
  {
    n: '03',
    title: 'Obtén resultados agronómicos',
    desc: 'Calcula índices, compara mapas y extrae estadísticas útiles para interpretar la variabilidad del cultivo.',
  },
]

function StatsBar() {
  const downloads = useDownloadCount()
  const visits    = useVisitCount()

  const stats = [
    { icon: DownloadIcon, label: 'descargas', value: formatCount(downloads) },
    { icon: Globe,        label: 'visitas',   value: formatCount(visits) },
    { icon: Layers,       label: 'índices espectrales', value: '50+' },
    { icon: Map,          label: 'sensores compatibles', value: '8+' },
  ]

  return (
    <div className="border-b border-border bg-surface-2">
      <div className="max-w-screen-xl mx-auto px-6 py-4 grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
        {stats.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-center gap-3 px-4 first:pl-0 last:pr-0">
            <Icon className="w-4 h-4 text-accent shrink-0" strokeWidth={1.5} />
            <div>
              <p className="text-base font-semibold text-text font-mono leading-none">
                {value}
              </p>
              <p className="text-[10px] text-muted mt-0.5">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-28 px-6 border-b border-border overflow-hidden" style={{ minHeight: '580px' }}>
        <HeroCarousel />
        <div className="relative z-10 max-w-screen-xl mx-auto">
          <span className="inline-block text-[11px] font-mono tracking-widest text-white/60 uppercase bg-white/10 border border-white/20 backdrop-blur-sm px-3 py-1 mb-8">
            ZAHORI FIELDS · HERRAMIENTA GEOINFORMÁTICA LOCAL
          </span>

          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight mb-6 text-white">
            Convierte imágenes de dron en<br />
            <span className="text-accent">información agronómica útil</span>
          </h1>

          <p className="text-base text-white/75 max-w-2xl leading-relaxed mb-10">
            Zahori Fields es una aplicación local, ejecutada desde el navegador, para analizar imágenes RGB,
            multiespectrales, térmicas y modelos derivados de vuelos UAS. Permite calcular índices, delimitar
            zonas de interés, comparar resultados y extraer métricas para ensayos y seguimiento de cultivos.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link to="/download" className="btn-primary">
              Descargar gratis <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/docs" className="bg-white/15 backdrop-blur-sm border border-white/30 text-white hover:bg-white/25 transition-colors text-sm font-medium px-5 py-2.5 rounded-sm inline-flex items-center gap-2">
              Documentación técnica
            </Link>
          </div>

          <p className="text-xs text-white/50 mt-6 font-mono">
            Windows · Ejecución local · Agricultura de precisión
          </p>
        </div>
      </section>

      <StatsBar />

      {/* Flujo de 3 pasos */}
      <section className="section">
        <span className="section-label">Flujo de trabajo</span>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map(({ n, title, desc }) => (
            <div key={n} className="card">
              <p className="font-mono text-xs text-accent mb-4 font-medium">{n}</p>
              <h3 className="text-base font-semibold text-text mb-2">{title}</h3>
              <p className="text-sm text-muted leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-white border-t border-b border-border">
        <div className="section">
          <span className="section-label">Capacidades</span>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group">
                <div className="w-10 h-10 bg-accent-light rounded-sm flex items-center justify-center mb-4 group-hover:bg-accent transition-colors duration-150">
                  <Icon className="w-5 h-5 text-accent group-hover:text-white transition-colors duration-150" strokeWidth={1.5} />
                </div>
                <h3 className="text-sm font-semibold text-text mb-1.5">{title}</h3>
                <p className="text-xs text-muted leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cámaras compatibles */}
      <section className="section">
        <span className="section-label">Cámaras compatibles</span>
        <div className="flex flex-wrap gap-3">
          {['MicaSense RedEdge', 'MicaSense Altum', 'Sentera 6X', 'MAPIR Survey3', 'Tetracam ADC', 'DJI P4 Multispectral', 'Cámaras RGB', 'FLIR Térmica'].map((cam) => (
            <span key={cam} className="border border-border bg-white text-muted text-xs px-4 py-2 font-mono">
              {cam}
            </span>
          ))}
        </div>
      </section>

      {/* Socios */}
      <section className="border-t border-border" style={{ background: '#f4f3ef' }}>
        <div className="max-w-screen-xl mx-auto px-6 py-12">
          <p className="text-[10px] font-mono tracking-widest text-muted uppercase mb-8 text-center">
            Proyecto avalado por
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {[
              { src: '/images/socios/fertinagro.svg', alt: 'Fertinagro Biotech' },
              { src: '/images/socios/syngenta.svg',   alt: 'Syngenta' },
              { src: '/images/socios/aerobur.svg',    alt: 'Aerobur' },
              { src: '/images/socios/unileon.svg',    alt: 'Universidad de León' },
              { src: '/images/socios/ubu.svg',        alt: 'Universidad de Burgos' },
              { src: '/images/socios/aepla.png',      alt: 'AEPLA' },
            ].map(({ src, alt }) => (
              <div key={alt}
                title={alt}
                className="bg-white border border-border flex items-center justify-center h-16 px-4 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:shadow-sm transition-all duration-300"
              >
                <img src={src} alt={alt} className="max-h-10 max-w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-accent">
        <div className="max-w-screen-xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">Descarga ZahoriFields</h2>
            <p className="text-green-100 text-sm">
              Gratuito, sin límites, desarrollado por ITACYL para investigadores y agricultores.
            </p>
          </div>
          <Link to="/download" className="inline-flex items-center gap-2 bg-white text-accent hover:bg-green-50 text-sm font-semibold px-6 py-3 transition-colors rounded-sm whitespace-nowrap">
            Download <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
