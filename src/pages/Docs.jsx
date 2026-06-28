import { useState } from 'react'
import { ChevronRight, ChevronDown, Search } from 'lucide-react'

const sidebar = [
  {
    section: 'Primeros pasos',
    items: ['Introducción', 'Instalación', 'Interfaz principal', 'Flujo de trabajo básico'],
  },
  {
    section: 'Cámaras compatibles',
    items: ['MicaSense RedEdge / Altum', 'Sentera 6X', 'MAPIR Survey3', 'Tetracam', 'DJI Multispectral', 'Cámaras RGB'],
  },
  {
    section: 'Calibración',
    items: ['Panel de calibración', 'Calibración radiométrica', 'Corrección vignetting', 'Imágenes térmicas'],
  },
  {
    section: 'Índices de vegetación',
    items: ['NDVI', 'NDRE', 'SAVI / MSAVI', 'Índices de agua', 'Índices de clorofila', 'Todos los índices (50+)'],
  },
  {
    section: 'Índices especializados',
    items: ['CWSI — Estrés hídrico', 'EBI — Índice de floración', 'Temperatura de dosel'],
  },
  {
    section: 'Dosificación variable',
    items: ['Mapas de prescripción', 'Calculadora ULV', 'Zonas de manejo', 'Exportar a campo'],
  },
  {
    section: 'Tutoriales',
    items: ['Tutorial 1: NDVI desde cero', 'Tutorial 2: CWSI en cereal', 'Tutorial 3: Mapa de dosis ULV'],
  },
]

const intro = `
# Bienvenido a ZahoriFields

ZahoriFields es una herramienta desarrollada por el **ITACYL** (Instituto Tecnológico Agrario de Castilla y León) para simplificar el análisis de imágenes multiespectrales, RGB y térmicas capturadas con drones.

## ¿Qué puedes hacer con ZahoriFields?

- Calibrar imágenes de cámaras multiespectrales (MicaSense, Sentera, MAPIR, Tetracam)
- Calcular más de **50 índices de vegetación** incluyendo NDVI, NDRE, SAVI y variantes avanzadas
- Obtener el **CWSI** (índice de estrés hídrico) a partir de imágenes térmicas
- Detectar estados fenológicos con el **EBI** (índice de floración)
- Generar **mapas de dosificación variable** para agricultura de precisión
- Calcular dosis para **aplicación ULV** con dron agrícola

## Primeros pasos

1. [Descarga e instala ZahoriFields](/download) para Windows
2. Abre el programa y carga tus imágenes desde **Archivo → Importar vuelo**
3. Selecciona tu cámara en el asistente de calibración
4. Elige los índices que quieres calcular
5. Exporta tus mapas en formato GeoTIFF, JPEG o shapefile

## Requisitos

La documentación completa de los tutoriales está en construcción activa.
Si tienes dudas, visita la [comunidad](/comunidad) o abre un issue en el [repositorio de código](/code).
`

export default function Docs() {
  const [openSections, setOpenSections] = useState({ 'Primeros pasos': true })
  const [active, setActive] = useState('Introducción')

  const toggle = (sec) =>
    setOpenSections((s) => ({ ...s, [sec]: !s[sec] }))

  return (
    <div className="pt-14 flex min-h-screen">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-56 shrink-0 border-r border-border pt-10 pb-10 sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto">
        <div className="px-4 mb-6">
          <div className="flex items-center gap-2 border border-border px-3 py-2 text-muted text-xs">
            <Search className="w-3 h-3" />
            <span>Buscar...</span>
            <span className="ml-auto font-mono text-[10px]">⌘K</span>
          </div>
        </div>

        {sidebar.map(({ section, items }) => (
          <div key={section} className="mb-1">
            <button
              className="w-full flex items-center justify-between px-4 py-2 text-[11px] font-mono tracking-wider text-muted hover:text-[#efefef] transition-colors uppercase"
              onClick={() => toggle(section)}
            >
              {section}
              {openSections[section]
                ? <ChevronDown className="w-3 h-3" />
                : <ChevronRight className="w-3 h-3" />}
            </button>
            {openSections[section] && (
              <div className="ml-4 border-l border-border pl-3">
                {items.map((item) => (
                  <button
                    key={item}
                    onClick={() => setActive(item)}
                    className={`block w-full text-left py-1.5 text-xs transition-colors ${
                      active === item
                        ? 'text-accent'
                        : 'text-muted hover:text-[#efefef]'
                    }`}
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
          <span className="text-[#efefef]">{active}</span>
        </div>

        <article className="prose-custom">
          {intro.split('\n').map((line, i) => {
            if (line.startsWith('# '))
              return <h1 key={i} className="text-2xl font-semibold text-[#efefef] mb-6 tracking-tight">{line.slice(2)}</h1>
            if (line.startsWith('## '))
              return <h2 key={i} className="text-base font-medium text-[#efefef] mt-8 mb-3">{line.slice(3)}</h2>
            if (line.startsWith('- '))
              return <p key={i} className="text-sm text-muted leading-relaxed pl-4 before:content-['—'] before:mr-2 before:text-accent">{line.slice(2)}</p>
            if (/^\d+\./.test(line))
              return <p key={i} className="text-sm text-muted leading-relaxed pl-4 mb-1">{line}</p>
            if (line.trim() === '')
              return <div key={i} className="mb-3" />
            return (
              <p key={i} className="text-sm text-muted leading-relaxed mb-3"
                dangerouslySetInnerHTML={{
                  __html: line
                    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#efefef] font-medium">$1</strong>')
                    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-accent hover:underline">$1</a>')
                }}
              />
            )
          })}
        </article>
      </div>
    </div>
  )
}
