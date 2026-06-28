import { ExternalLink } from 'lucide-react'

const datasets = [
  {
    name: 'finca_colza_fertinagro_03_12_2025_altum_20m.tif',
    sensor: 'MicaSense Altum',
    bands: { red: 3, green: 2, blue: 1, redEdge: 4, nir: 5, thermal: 6 },
    range: '0 – 65535',
    size: '1.5 GB',
    notes: 'Ensayo de colza',
    url: 'https://github.com/vacashot/zahorifields-web/releases/download/v1.1-datasets/finca_colza_fertinagro_03_12_2025_altum_20m.tif',
  },
  {
    name: 'EX1_RGB.tif',
    sensor: 'RGB',
    bands: { red: 1, green: 2, blue: 3, redEdge: null, nir: null, thermal: null },
    range: '0 – 256',
    size: '5.4 MB',
    notes: 'Trial plots',
    url: 'https://github.com/vacashot/zahorifields-web/releases/download/v1.1-datasets/EX1_RGB.tif',
  },
]

const bandInfo = [
  { color: '#e84040', label: 'Red', desc: 'Luz roja visible. Clave para detectar clorofila y calcular NDVI.' },
  { color: '#4caf50', label: 'Green', desc: 'Luz verde visible. Usada en índices de biomasa y vigor.' },
  { color: '#2196f3', label: 'Blue', desc: 'Luz azul visible. Complementa índices RGB y detección de suelo desnudo.' },
  { color: '#c47a72', label: 'Red Edge', desc: 'Zona de transición entre rojo e infrarrojo. Muy sensible al estrés vegetal temprano.' },
  { color: '#7c4dff', label: 'NIR', desc: 'Infrarrojo cercano, invisible al ojo humano. Esencial para NDVI, NDRE y la mayoría de índices.' },
  { color: '#ff9800', label: 'Thermal', desc: 'Temperatura del dosel vegetal. Usada para calcular el estrés hídrico (CWSI).' },
]

const rangeInfo = [
  { range: '0 – 1', desc: 'Reflectancia normalizada. Indica qué porción de luz refleja la superficie. Listo para calcular índices directamente.' },
  { range: '0 – 255', desc: 'Imagen de 8 bits. Formato típico de cámaras RGB o MAPIR. Requiere calibración antes de calcular índices.' },
  { range: '0 – 65535', desc: 'Imagen de 16 bits sin procesar. Mayor precisión radiométrica. Necesita calibración con panel de referencia.' },
  { range: '0 – 1023', desc: 'Imagen de 10 bits (Tetracam). Rango intermedio. Requiere calibración antes de su uso.' },
]

function BandCell({ v }) {
  return v !== null
    ? <td className="px-3 py-3.5 text-center font-mono text-xs font-medium text-accent">{v}</td>
    : <td className="px-3 py-3.5 text-center font-mono text-xs text-muted opacity-30">—</td>
}

export default function Datasets() {
  return (
    <div className="pt-16">
      <div className="bg-white border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <span className="section-label">Imágenes de muestra</span>
          <h1 className="text-4xl font-semibold tracking-tight text-text mb-3">Datasets</h1>
          <p className="text-muted text-sm max-w-lg">
            Ortofotos de distintas cámaras para practicar con ZahoriFields.
            Descarga, procesa y aprende siguiendo los tutoriales de la documentación.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-14">

        {/* Tabla */}
        <div className="overflow-x-auto border border-border bg-white rounded-sm">
          <table className="w-full text-sm" style={{ tableLayout: 'auto' }}>
            <thead>
              <tr>
                <th rowSpan={2} className="text-left px-4 py-3 text-[11px] font-mono text-muted font-normal tracking-wider bg-surface-2 border-b border-border align-bottom whitespace-nowrap">Nombre del archivo</th>
                <th rowSpan={2} className="text-left px-4 py-3 text-[11px] font-mono text-muted font-normal tracking-wider bg-surface-2 border-b border-border align-bottom whitespace-nowrap">Sensor</th>
                <th colSpan={6} className="text-center px-3 py-2 text-[10px] font-mono tracking-wider bg-accent-light text-accent font-medium border-b border-border border-l border-accent/20 uppercase">Bandas</th>
                <th rowSpan={2} className="text-left px-4 py-3 text-[11px] font-mono text-muted font-normal tracking-wider bg-surface-2 border-b border-border border-l border-border align-bottom whitespace-nowrap">Rango valores</th>
                <th rowSpan={2} className="text-right px-4 py-3 text-[11px] font-mono text-muted font-normal tracking-wider bg-surface-2 border-b border-border align-bottom">Tamaño</th>
                <th rowSpan={2} className="text-left px-4 py-3 text-[11px] font-mono text-muted font-normal tracking-wider bg-surface-2 border-b border-border align-bottom">Notas</th>
                <th rowSpan={2} className="bg-surface-2 border-b border-border"></th>
              </tr>
              <tr>
                {['Red', 'Green', 'Blue', 'Red Edge', 'NIR', 'Thermal'].map((b) => (
                  <th key={b} className="text-center px-3 py-2 text-[10px] font-mono text-accent font-normal bg-accent-light border-b border-border whitespace-nowrap">{b}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {datasets.map((d, i) => (
                <tr key={d.name} className={`hover:bg-surface-2 transition-colors ${i < datasets.length - 1 ? 'border-b border-border' : ''}`}>
                  <td className="px-4 py-3.5 whitespace-nowrap">
                    <a
                      href={d.url}
                      download
                      className="font-mono text-xs text-accent hover:underline font-medium"
                      style={{ cursor: 'url(/cursor.png) 16 16, pointer' }}
                    >
                      {d.name}
                    </a>
                  </td>
                  <td className="px-4 py-3.5 text-xs text-muted whitespace-nowrap">{d.sensor}</td>
                  <BandCell v={d.bands.red} />
                  <BandCell v={d.bands.green} />
                  <BandCell v={d.bands.blue} />
                  <BandCell v={d.bands.redEdge} />
                  <BandCell v={d.bands.nir} />
                  <BandCell v={d.bands.thermal} />
                  <td className="px-4 py-3.5 border-l border-border">
                    <span className="font-mono text-[11px] bg-surface-2 border border-border px-2 py-0.5 rounded-sm text-muted whitespace-nowrap">{d.range}</span>
                  </td>
                  <td className="px-4 py-3.5 text-xs text-muted font-mono text-right whitespace-nowrap">{d.size}</td>
                  <td className="px-4 py-3.5 text-xs text-muted max-w-[160px]">{d.notes}</td>
                  <td className="px-4 py-3.5">
                    <a
                      href={d.url}
                      download
                      className="text-muted hover:text-accent transition-colors"
                      style={{ cursor: 'url(/cursor.png) 16 16, pointer' }}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-muted mt-4 mb-14">
          ¿Quieres contribuir un dataset?{' '}
          <a href="/comunidad" className="text-accent hover:underline">Contáctanos en la comunidad</a>{' '}
          o abre un Pull Request en el repositorio.
        </p>

        {/* Leyenda */}
        <div className="grid md:grid-cols-2 gap-5">

          {/* Bandas */}
          <div className="border border-border bg-white rounded-sm p-6">
            <p className="text-xs font-mono tracking-widest text-muted uppercase mb-5">¿Qué significan las bandas?</p>
            <div className="space-y-3.5">
              {bandInfo.map(({ color, label, desc }) => (
                <div key={label} className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 rounded-full mt-1 shrink-0" style={{ backgroundColor: color }} />
                  <div>
                    <span className="text-xs font-medium text-text">{label} </span>
                    <span className="text-xs text-muted leading-relaxed">{desc}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 bg-accent-light border border-accent/20 rounded-sm p-3">
              <p className="text-xs text-accent leading-relaxed">
                El número en la tabla indica qué canal del archivo corresponde a esa banda.
                Por ejemplo, "Red = 3" significa que la banda roja está guardada en el canal 3 del archivo.
              </p>
            </div>
          </div>

          {/* Rango de valores */}
          <div className="border border-border bg-white rounded-sm p-6">
            <p className="text-xs font-mono tracking-widest text-muted uppercase mb-5">¿Qué significa el rango de valores?</p>
            <div className="space-y-4">
              {rangeInfo.map(({ range, desc }) => (
                <div key={range} className="flex items-start gap-3">
                  <span className="font-mono text-[10px] bg-surface-2 border border-border px-2 py-0.5 rounded-sm text-accent whitespace-nowrap mt-0.5 shrink-0">{range}</span>
                  <p className="text-xs text-muted leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 bg-accent-light border border-accent/20 rounded-sm p-3">
              <p className="text-xs text-accent leading-relaxed">
                Las imágenes con rango 0–1 ya están calibradas y puedes calcular índices directamente en ZahoriFields.
                El resto requieren el paso de calibración radiométrica.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
