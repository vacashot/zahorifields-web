import { useState } from 'react'
import { ChevronRight, ChevronDown, Search } from 'lucide-react'

const sidebar = [
  { section: 'Primeros pasos', items: ['Introducción', 'Instalación', 'Interfaz principal', 'Flujo de trabajo básico'] },
  { section: 'Cámaras compatibles', items: ['MicaSense RedEdge / Altum', 'Sentera 6X', 'MAPIR Survey3', 'Tetracam', 'DJI Multispectral', 'Cámaras RGB'] },
  { section: 'Calibración', items: ['Panel de calibración', 'Calibración radiométrica', 'Corrección vignetting', 'Imágenes térmicas'] },
  { section: 'Índices de vegetación', items: ['NDVI', 'NDRE', 'SAVI / MSAVI', 'Índices de agua', 'Índices de clorofila', 'Todos los índices (50+)'] },
  { section: 'Índices especializados', items: ['CWSI — Estrés hídrico', 'EBI — Índice de floración', 'Temperatura de dosel'] },
  { section: 'Dosificación variable', items: ['Mapas de prescripción', 'Calculadora ULV', 'Zonas de manejo', 'Exportar a campo'] },
  { section: 'Instalación con Docker', items: ['¿Qué es Docker?', 'Requisitos', 'Instalación rápida', 'Docker Compose', 'Solución de problemas'] },
  { section: 'Tutoriales', items: ['Tutorial 1: NDVI desde cero', 'Tutorial 2: CWSI en cereal', 'Tutorial 3: Mapa de dosis ULV'] },
]

export default function Docs() {
  const [openSections, setOpenSections] = useState({ 'Primeros pasos': true })
  const [active, setActive] = useState('Introducción')
  const toggle = (sec) => setOpenSections((s) => ({ ...s, [sec]: !s[sec] }))

  return (
    <div className="pt-16 flex min-h-screen bg-bg">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-56 shrink-0 border-r border-border pt-8 pb-10 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto bg-white">
        <div className="px-4 mb-5">
          <div className="flex items-center gap-2 border border-border bg-surface-2 px-3 py-2 text-muted text-xs rounded-sm">
            <Search className="w-3 h-3" />
            <span>Buscar...</span>
            <span className="ml-auto font-mono text-[10px]">⌘K</span>
          </div>
        </div>
        {sidebar.map(({ section, items }) => (
          <div key={section} className="mb-1">
            <button
              className="w-full flex items-center justify-between px-4 py-2 text-[11px] font-mono tracking-wider text-muted hover:text-text transition-colors uppercase"
              onClick={() => toggle(section)}
            >
              {section}
              {openSections[section] ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
            </button>
            {openSections[section] && (
              <div className="ml-4 border-l-2 border-border pl-3">
                {items.map((item) => (
                  <button
                    key={item}
                    onClick={() => setActive(item)}
                    className={`block w-full text-left py-1.5 text-xs transition-colors ${active === item ? 'text-accent font-medium' : 'text-muted hover:text-text'}`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </aside>

      {/* Content */}
      <div className="flex-1 max-w-3xl px-8 py-10">
        <div className="flex items-center gap-2 text-xs text-muted font-mono mb-8">
          <span>Docs</span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-text">{active}</span>
        </div>

        <h1 className="text-2xl font-semibold text-text mb-4 tracking-tight">Bienvenido a ZahoriFields</h1>

        <p className="text-sm text-muted leading-relaxed mb-6">
          ZahoriFields es una herramienta desarrollada por el <strong className="text-text font-medium">ITACYL</strong> para simplificar el análisis
          de imágenes multiespectrales, RGB y térmicas capturadas con drones.
        </p>

        <h2 className="text-base font-semibold text-text mb-3 mt-8">¿Qué puedes hacer?</h2>
        <ul className="space-y-2 mb-8">
          {[
            'Calibrar imágenes de cámaras multiespectrales (MicaSense, Sentera, MAPIR, Tetracam)',
            'Calcular más de 50 índices de vegetación incluyendo NDVI, NDRE, SAVI y variantes',
            'Obtener el CWSI (estrés hídrico) a partir de imágenes térmicas',
            'Detectar estados fenológicos con el EBI (índice de floración)',
            'Generar mapas de dosificación variable para agricultura de precisión',
            'Calcular dosis para aplicación ULV con dron agrícola',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-muted">
              <span className="text-accent mt-0.5 shrink-0">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-base font-semibold text-text mb-3">Primeros pasos</h2>
        <ol className="space-y-2 mb-8">
          {[
            'Descarga e instala ZahoriFields para Windows',
            'Abre el programa y carga tus imágenes desde Archivo → Importar vuelo',
            'Selecciona tu cámara en el asistente de calibración',
            'Elige los índices que quieres calcular',
            'Exporta tus mapas en formato GeoTIFF, JPEG o shapefile',
          ].map((step, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-muted">
              <span className="font-mono text-accent text-xs mt-0.5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>

        <div className="border border-border bg-accent-light p-5 rounded-sm mb-10">
          <p className="text-sm text-text font-medium mb-1">Documentación en construcción</p>
          <p className="text-xs text-muted">
            Los tutoriales completos están en desarrollo activo. Si tienes dudas, visita la{' '}
            <a href="/comunidad" className="text-accent hover:underline">comunidad</a> o abre un issue en el{' '}
            <a href="/code" className="text-accent hover:underline">repositorio</a>.
          </p>
        </div>

        {/* Docker */}
        <div className="border-t border-border pt-10">
          <h2 className="text-base font-semibold text-text mb-1 mt-0">Instalación con Docker</h2>
          <p className="text-xs text-muted mb-6 leading-relaxed">
            Docker permite ejecutar ZahoriFields en cualquier sistema operativo (Windows, macOS, Linux)
            sin instalar Python ni dependencias. Todo viene empaquetado dentro del contenedor.
          </p>

          <h3 className="text-sm font-medium text-text mb-2">Requisitos</h3>
          <ul className="space-y-1.5 mb-6">
            {[
              'Docker Desktop instalado — docker.com/get-docker',
              '4 GB de RAM disponibles mínimo',
              'Conexión a internet para descargar la imagen (solo la primera vez)',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-xs text-muted">
                <span className="text-accent mt-0.5 shrink-0">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-sm font-medium text-text mb-2">Opción A — Docker Compose (recomendado)</h3>
          <p className="text-xs text-muted mb-3">Descarga el archivo <code className="font-mono bg-surface-2 px-1.5 py-0.5 rounded-sm border border-border text-text">docker-compose.yml</code> y ejecuta:</p>
          <div className="bg-[#1a1a1a] rounded-sm p-4 mb-6 overflow-x-auto">
            <pre className="text-xs text-green-400 font-mono leading-relaxed">{`# Arrancar ZahoriFields
docker compose up -d

# Abrir en el navegador
http://localhost:8000

# Detener
docker compose down`}</pre>
          </div>

          <h3 className="text-sm font-medium text-text mb-2">Opción B — Docker directo</h3>
          <div className="bg-[#1a1a1a] rounded-sm p-4 mb-6 overflow-x-auto">
            <pre className="text-xs text-green-400 font-mono leading-relaxed">{`docker build -t zahorifields .
docker run -p 8000:8000 zahorifields`}</pre>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: 'Datos persistentes', desc: 'Las imágenes subidas y los resultados se guardan en volúmenes Docker. No se pierden al reiniciar.' },
              { title: 'Sin instalación', desc: 'No necesitas Python, Node ni ninguna dependencia. Docker lo gestiona todo internamente.' },
              { title: 'Multiplataforma', desc: 'Funciona igual en Windows, macOS y Linux. Ideal para servidores y entornos de investigación.' },
            ].map(({ title, desc }) => (
              <div key={title} className="border border-border bg-white rounded-sm p-4">
                <p className="text-xs font-medium text-text mb-1">{title}</p>
                <p className="text-xs text-muted leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
