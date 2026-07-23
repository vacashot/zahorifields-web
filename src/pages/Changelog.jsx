import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'

const versions = [
  {
    version: '1.1.0',
    date: '15 jun 2026',
    highlights: ['Módulo de estrés hídrico CWSI', 'Máscaras de vegetación', 'Soporte Docker'],
    changes: {
      'Nuevas funcionalidades': [
        'Cálculo del Índice de Estrés Hídrico de Cultivos (CWSI) a partir de imágenes térmicas calibradas.',
        'Módulo de máscaras de vegetación con cuatro estrategias: índice espectral, color HSV, umbral térmico y método mixto.',
        'Imagen Docker oficial disponible para Mac, Linux y Windows (sin instalación).',
        'Soporte para cámara DJI P4 Multispectral con calibración automática de bandas.',
        'Exportación de estadísticas por parcela en formato CSV y JSON.',
        'Visualización de histogramas por zona de manejo.',
      ],
      'Mejoras': [
        'Rendimiento de carga de ortofotos GeoTIFF mejorado hasta un 40% en archivos superiores a 500 MB.',
        'Interfaz de definición de AOI rediseñada con herramientas de dibujo más precisas.',
        'Calibración radiométrica guiada paso a paso para MicaSense Altum y RedEdge.',
        'Ampliada la biblioteca de índices espectrales: más de 60 índices disponibles.',
      ],
      'Correcciones': [
        'Corregido error al cargar imágenes térmicas FLIR con metadatos incompletos.',
        'Solucionado problema de visualización de bandas en monitores con escala superior al 125%.',
        'Arreglado fallo al exportar mapas en proyecciones UTM distintas a la 30N.',
      ],
    },
  },
  {
    version: '1.0.0',
    date: '3 ene 2026',
    highlights: ['Versión inicial', 'NDVI y 50+ índices', 'Soporte MicaSense'],
    changes: {
      'Lanzamiento inicial': [
        'Primera versión pública de ZahoriFields para Windows 10/11 de 64 bits.',
        'Soporte para ortofotos RGB, multiespectrales y térmicas en formato GeoTIFF.',
        'Biblioteca de más de 50 índices espectrales: NDVI, NDRE, SAVI, EVI, VARI, ExG y variantes.',
        'Índice de Floración (EBI) para detección de estados fenológicos.',
        'Definición de zonas de manejo: parcelas, ensayos, tratamientos y repeticiones.',
        'Estadísticas zonales: media, mediana, desviación típica, percentiles y área.',
        'Calibración radiométrica para MicaSense RedEdge, Sentera 6X, MAPIR Survey3 y Tetracam ADC.',
        'Ejecución 100% local: ningún dato se envía a servidores externos.',
        'Compatibilidad con imágenes térmicas FLIR y DJI Zenmuse.',
      ],
    },
  },
]

export default function Changelog() {
  const [open, setOpen] = useState(0)

  return (
    <div className="pt-16">
      <div className="bg-white border-b border-border">
        <div className="max-w-screen-xl mx-auto px-6 py-16">
          <div className="flex items-center gap-2 mb-5">
            <Link to="/" className="text-xs text-muted hover:text-text transition-colors">Inicio</Link>
            <span className="text-muted text-xs">/</span>
            <Link to="/download" className="text-xs text-muted hover:text-text transition-colors">Download</Link>
            <span className="text-muted text-xs">/</span>
            <span className="text-xs text-accent">Changelog</span>
          </div>
          <span className="section-label">Historial de versiones</span>
          <h1 className="text-4xl font-semibold tracking-tight text-text mb-3">Registro de cambios</h1>
          <p className="text-muted text-sm max-w-lg">
            Novedades, mejoras y correcciones de cada versión de ZahoriFields.
          </p>

          {/* OS selector decorativo */}
          <div className="flex items-center gap-3 mt-8 flex-wrap">
            <div className="flex items-center gap-2 border-2 border-accent bg-accent-light px-4 py-2 rounded-sm">
              <WindowsIcon className="w-4 h-4 text-accent" />
              <span className="text-xs font-medium text-accent">Windows</span>
            </div>
            <div className="flex items-center gap-2 border border-border bg-white px-4 py-2 rounded-sm opacity-40">
              <AppleIcon className="w-4 h-4 text-muted" />
              <span className="text-xs text-muted">macOS</span>
            </div>
            <div className="flex items-center gap-2 border border-border bg-white px-4 py-2 rounded-sm opacity-40">
              <LinuxIcon className="w-4 h-4 text-muted" />
              <span className="text-xs text-muted">Linux</span>
            </div>
            <span className="text-[10px] text-muted font-mono ml-1">Mac · Linux disponibles vía Docker</span>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 py-14">
        <div className="space-y-0 border border-border rounded-sm overflow-hidden bg-white">
          {versions.map((v, i) => (
            <div key={v.version} className={i < versions.length - 1 ? 'border-b border-border' : ''}>
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-surface-2 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <div className="flex items-center gap-5 flex-wrap">
                  <span className="text-lg font-semibold text-text font-mono">v{v.version}</span>
                  <span className="text-xs text-muted font-mono">{v.date}</span>
                  <div className="flex gap-2 flex-wrap">
                    {v.highlights.map(h => (
                      <span key={h} className="text-[10px] font-mono bg-accent-light text-accent border border-accent/20 px-2 py-0.5 rounded-sm">{h}</span>
                    ))}
                  </div>
                </div>
                <ChevronDown className={`w-4 h-4 text-muted shrink-0 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`} />
              </button>

              {open === i && (
                <div className="px-6 pb-8 space-y-6 border-t border-border bg-surface-2/40">
                  {Object.entries(v.changes).map(([section, items]) => (
                    <div key={section} className="pt-6">
                      <p className="text-[11px] font-mono tracking-widest text-muted uppercase mb-3">{section}</p>
                      <ul className="space-y-2">
                        {items.map((item, j) => (
                          <li key={j} className="flex items-start gap-3 text-sm text-muted leading-relaxed">
                            <span className="text-accent mt-1.5 shrink-0 text-xs">▸</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/download" className="btn-ghost inline-flex items-center gap-2 text-sm">
            ← Volver a Descargas
          </Link>
        </div>
      </div>
    </div>
  )
}

function WindowsIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.551H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
    </svg>
  )
}

function AppleIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
    </svg>
  )
}

function LinuxIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 1C8.5 1 7 4 7 6.5c0 1.5.5 2.8 1.3 3.8C7.5 11.1 7 12.4 7 14c0 2 .8 3.5 2 4.5-.5.3-1 .7-1.3 1.2-.4.6-.7 1.4-.7 2.3h2c0-.5.1-.9.3-1.2.3-.4.7-.6 1.2-.7.5.3 1 .5 1.5.6V22h2v-1.3c.5-.1 1-.3 1.5-.6.5.1.9.3 1.2.7.2.3.3.7.3 1.2h2c0-.9-.3-1.7-.7-2.3-.3-.5-.8-.9-1.3-1.2 1.2-1 2-2.5 2-4.5 0-1.6-.5-2.9-1.3-3.7.8-1 1.3-2.3 1.3-3.8C17 4 15.5 1 12 1zm0 2c2.5 0 3 2 3 3.5 0 1.1-.4 2.1-1 2.8-.6-.2-1.3-.3-2-.3s-1.4.1-2 .3c-.6-.7-1-1.7-1-2.8C9 5 9.5 3 12 3zm0 8c2.2 0 4 1.8 4 5s-1.8 5-4 5-4-1.8-4-5 1.8-5 4-5zm-1 2v2h-.5v1H11v1h2v-1h.5v-1H13v-2h-2z"/>
    </svg>
  )
}
