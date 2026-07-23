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
      <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.09-2.362 2.208-2.362 4.107 0 1.867 1.211 2.447 1.21 4.597 0 .27-.023.537-.08.797-.148.734-.585 1.613-1.21 2.147-.627.526-1.34.807-1.948 1.073-.997.428-1.415.788-1.415 1.72 0 .917.596 1.506 1.327 1.892.733.388 1.638.54 2.432.54h.023c1.286 0 2.553-.37 3.489-.962.936.592 2.203.962 3.489.962h.023c.795 0 1.698-.152 2.432-.54.731-.386 1.327-.975 1.327-1.892 0-.932-.418-1.292-1.415-1.72-.608-.266-1.321-.547-1.948-1.073-.625-.534-1.062-1.413-1.21-2.147-.057-.26-.08-.527-.08-.797 0-2.15 1.211-2.73 1.21-4.597 0-1.899-1.477-3.017-2.362-4.107-.75-1.067-.974-1.928-1.05-3.02-.065-1.491 1.056-5.965-3.17-6.298-.165-.013-.325-.021-.48-.021zm0 1.504c.127 0 .257.006.387.016 2.804.22 2.567 3.295 2.506 5.035-.071 2.033.316 3.21 1.39 4.697.792 1.072 2.043 1.966 2.043 3.526 0 1.51-1.085 1.995-1.085 4.346 0 .397.037.793.121 1.182.227 1.117.74 2.175 1.56 2.888.817.71 1.73 1.057 2.375 1.34.764.328 1.019.56 1.019.975 0 .484-.374.868-.842 1.11-.467.243-1.117.38-1.753.38h-.017c-.935 0-1.965-.298-2.67-.72l-.314-.193-.314.193c-.706.422-1.736.72-2.671.72h-.017c-.636 0-1.286-.137-1.753-.38-.468-.242-.842-.626-.842-1.11 0-.415.255-.647 1.019-.975.645-.283 1.558-.63 2.375-1.34.82-.713 1.333-1.771 1.56-2.888.084-.389.121-.785.121-1.182 0-2.351-1.085-2.836-1.085-4.346 0-1.56 1.251-2.454 2.043-3.526 1.074-1.487 1.461-2.664 1.39-4.697-.061-1.74-.298-4.815 2.506-5.035.13-.01.26-.016.387-.016z"/>
    </svg>
  )
}
