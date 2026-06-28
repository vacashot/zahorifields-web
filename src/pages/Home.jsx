import { Link } from 'react-router-dom'
import { ArrowRight, Layers, Thermometer, Droplets, Flower2, Map, Calculator, ScanLine, Sliders } from 'lucide-react'

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

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-24 px-6 bg-white border-b border-border">
        <div className="max-w-5xl mx-auto">
          <span className="inline-block text-[11px] font-mono tracking-widest text-muted uppercase bg-surface-2 border border-border px-3 py-1 mb-8">
            ZAHORI FIELDS · HERRAMIENTA GEOINFORMÁTICA LOCAL · TFM GEOINFORMÁTICA
          </span>

          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight mb-6 text-text">
            Convierte imágenes de dron en<br />
            <span className="text-accent">información agronómica útil</span>
          </h1>

          <p className="text-base text-muted max-w-2xl leading-relaxed mb-10">
            Zahori Fields es una aplicación local, ejecutada desde el navegador, para analizar imágenes RGB,
            multiespectrales, térmicas y modelos derivados de vuelos UAS. Permite calcular índices, delimitar
            zonas de interés, comparar resultados y extraer métricas para ensayos y seguimiento de cultivos.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link to="/download" className="btn-primary">
              Ver funcionalidades <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/docs" className="btn-ghost">
              Documentación técnica
            </Link>
          </div>

          <p className="text-xs text-muted mt-6 font-mono">
            Prototipo TFM · Windows · Ejecución local · Agricultura de precisión
          </p>
        </div>
      </section>

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
