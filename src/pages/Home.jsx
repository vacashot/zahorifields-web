import { Link } from 'react-router-dom'
import { ArrowRight, Layers, Thermometer, Droplets, FlowerIcon, Map, Calculator, ScanLine, Sliders } from 'lucide-react'
import DroneIcon from '../components/DroneIcon'

const features = [
  { icon: Layers, title: 'Índices de Vegetación', desc: 'Más de 50 índices multiespectrales incluyendo NDVI, NDRE, SAVI y variantes avanzadas.' },
  { icon: Droplets, title: 'Estrés Hídrico (CWSI)', desc: 'Cálculo del Índice de Estrés Hídrico de Cultivos a partir de imágenes térmicas.' },
  { icon: FlowerIcon, title: 'Índice de Floración (EBI)', desc: 'Detección y mapeo de estados fenológicos mediante índice espectral especializado.' },
  { icon: Thermometer, title: 'Imágenes Térmicas', desc: 'Procesamiento y análisis de ortofotos térmicas calibradas para agricultura de precisión.' },
  { icon: Map, title: 'Dosificación Variable', desc: 'Generación de mapas de prescripción y zonas de manejo diferenciado.' },
  { icon: Calculator, title: 'Calculadora ULV', desc: 'Dosis para aplicación Ultra Bajo Volumen con dron agrícola, por cultivo y superficie.' },
  { icon: ScanLine, title: 'Calibración Radiométrica', desc: 'Flujo de calibración para cámaras MicaSense, Sentera, MAPIR, Tetracam y RGB.' },
  { icon: Sliders, title: 'Modular y Extensible', desc: 'Arquitectura modular. Nuevas herramientas de análisis se incorporan de forma continua.' },
]

const steps = [
  { n: '01', title: 'Carga tus imágenes', desc: 'Importa ortofotos de cualquier cámara multiespectral, RGB o térmica.' },
  { n: '02', title: 'Calibra y procesa', desc: 'Calibración radiométrica guiada y cálculo automático de índices.' },
  { n: '03', title: 'Exporta y aplica', desc: 'Mapas de prescripción, reports y capas SIG listos para campo.' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <DroneIcon className="w-8 h-8 text-accent" />
            <span className="text-[11px] font-mono tracking-widest text-muted uppercase">by ITACYL</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight mb-6 text-[#efefef]">
            Del vuelo al mapa<br />
            <span className="text-accent">en minutos.</span>
          </h1>

          <p className="text-lg text-muted max-w-xl leading-relaxed mb-10">
            Análisis de imágenes multiespectrales, RGB y térmicas obtenidas con dron.
            Índices de vegetación, estrés hídrico, floración y dosificación variable —
            sin necesidad de programar.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link to="/download" className="btn-primary">
              Download <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/docs" className="btn-ghost">
              Documentación
            </Link>
          </div>

          <p className="text-xs text-muted mt-6 font-mono">
            v1.0.0 · Windows · Gratuito y de código abierto
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Flujo de 3 pasos */}
      <section className="section">
        <span className="section-label">Cómo funciona</span>
        <div className="grid md:grid-cols-3 gap-0 border border-border">
          {steps.map(({ n, title, desc }, i) => (
            <div
              key={n}
              className={`p-8 ${i < steps.length - 1 ? 'border-b md:border-b-0 md:border-r border-border' : ''}`}
            >
              <p className="font-mono text-xs text-accent mb-4">{n}</p>
              <h3 className="text-base font-medium text-[#efefef] mb-2">{title}</h3>
              <p className="text-sm text-muted leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Features */}
      <section className="section">
        <span className="section-label">Capacidades</span>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-px bg-border">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-bg p-6 hover:bg-surface transition-colors duration-150">
              <Icon className="w-5 h-5 text-accent mb-4" strokeWidth={1.5} />
              <h3 className="text-sm font-medium text-[#efefef] mb-2">{title}</h3>
              <p className="text-xs text-muted leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* CTA final */}
      <section className="section text-center">
        <p className="text-[11px] font-mono tracking-widest text-muted uppercase mb-6">Empieza ahora</p>
        <h2 className="text-3xl font-semibold tracking-tight text-[#efefef] mb-4">
          Descarga ZahoriFields
        </h2>
        <p className="text-muted text-sm mb-8 max-w-md mx-auto">
          Disponible para Windows. Gratuito, sin límites de uso, desarrollado por el
          Instituto Tecnológico Agrario de Castilla y León.
        </p>
        <Link to="/download" className="btn-primary">
          Download <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </>
  )
}
