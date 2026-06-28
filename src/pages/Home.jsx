import { Link } from 'react-router-dom'
import { ArrowRight, Layers, Thermometer, Droplets, Flower2, Map, Calculator, ScanLine, Sliders } from 'lucide-react'

const features = [
  { icon: Layers, title: 'Índices de Vegetación', desc: 'Más de 50 índices multiespectrales: NDVI, NDRE, SAVI y variantes avanzadas.' },
  { icon: Droplets, title: 'Estrés Hídrico (CWSI)', desc: 'Índice de Estrés Hídrico de Cultivos a partir de imágenes térmicas.' },
  { icon: Flower2, title: 'Índice de Floración (EBI)', desc: 'Detección de estados fenológicos mediante índice espectral especializado.' },
  { icon: Thermometer, title: 'Imágenes Térmicas', desc: 'Procesamiento de ortofotos térmicas calibradas para agricultura de precisión.' },
  { icon: Map, title: 'Dosificación Variable', desc: 'Mapas de prescripción y zonas de manejo diferenciado por parcela.' },
  { icon: Calculator, title: 'Calculadora ULV', desc: 'Cálculo de dosis para aplicación Ultra Bajo Volumen con dron agrícola.' },
  { icon: ScanLine, title: 'Calibración Radiométrica', desc: 'Calibración guiada para MicaSense, Sentera, MAPIR, Tetracam y RGB.' },
  { icon: Sliders, title: 'Modular y Extensible', desc: 'Nuevas herramientas de análisis incorporadas de forma continua.' },
]

const steps = [
  { n: '01', title: 'Carga tus imágenes', desc: 'Importa ortofotos de cualquier cámara multiespectral, RGB o térmica desde el dron.' },
  { n: '02', title: 'Calibra y procesa', desc: 'Calibración radiométrica guiada y cálculo automático de índices especializados.' },
  { n: '03', title: 'Exporta y aplica', desc: 'Mapas de prescripción, reports y capas SIG listos para aplicar en campo.' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-24 px-6 bg-white border-b border-border">
        <div className="max-w-5xl mx-auto">
          <span className="inline-block text-[11px] font-mono tracking-widest text-accent uppercase bg-accent-light px-3 py-1 mb-8">
            by ITACYL · Instituto Tecnológico Agrario de Castilla y León
          </span>

          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight mb-6 text-text">
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
              Descargar gratis <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/docs" className="btn-ghost">
              Documentación
            </Link>
          </div>

          <p className="text-xs text-muted mt-6 font-mono">
            v1.0.0 · Solo Windows · Gratuito · Código abierto
          </p>
        </div>
      </section>

      {/* Flujo de 3 pasos */}
      <section className="section">
        <span className="section-label">Cómo funciona</span>
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

      {/* CTA final */}
      <section className="bg-accent">
        <div className="max-w-5xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
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
