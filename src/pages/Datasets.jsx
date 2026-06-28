import { ExternalLink, Check, X } from 'lucide-react'

const datasets = [
  { name: 'MicaSense RedEdge-MX — Cereal', camera: 'MicaSense', images: 320, size: '1.8 GB', gps: true, gcp: false, rtk: false, notes: 'Dataset de inicio. Cebada en estado vegetativo.', url: '#' },
  { name: 'Sentera 6X — Viñedo', camera: 'Sentera', images: 210, size: '950 MB', gps: true, gcp: true, rtk: false, notes: 'Con puntos de control en suelo incluidos.', url: '#' },
  { name: 'MAPIR Survey3 — Olivar', camera: 'MAPIR', images: 480, size: '2.3 GB', gps: true, gcp: false, rtk: false, notes: 'Captura en plena floración. Útil para EBI.', url: '#' },
  { name: 'Tetracam ADC Lite — Maíz', camera: 'Tetracam', images: 155, size: '620 MB', gps: true, gcp: false, rtk: false, notes: 'Para pruebas de NDVI y SAVI.', url: '#' },
  { name: 'MicaSense Altum — Estrés Hídrico', camera: 'MicaSense', images: 270, size: '3.1 GB', gps: true, gcp: true, rtk: true, notes: 'Dataset térmico + multiespectral. Referencia CWSI.', url: '#' },
  { name: 'DJI P4 Multispectral — Remolacha', camera: 'DJI P4M', images: 390, size: '1.5 GB', gps: true, gcp: false, rtk: false, notes: 'Incluye panel de calibración.', url: '#' },
]

function Bool({ v }) {
  return v
    ? <Check className="w-3.5 h-3.5 text-accent mx-auto" />
    : <X className="w-3.5 h-3.5 text-muted mx-auto opacity-30" />
}

export default function Datasets() {
  return (
    <div className="pt-16">
      <div className="bg-white border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <span className="section-label">Imágenes de muestra</span>
          <h1 className="text-4xl font-semibold tracking-tight text-text mb-3">Datasets</h1>
          <p className="text-muted text-sm max-w-lg">
            Ortofotos y vuelos de muestra de distintas cámaras para practicar con ZahoriFields.
            Descarga, procesa y aprende siguiendo los tutoriales de la documentación.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-14">
        <div className="overflow-x-auto border border-border bg-white rounded-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-surface-2">
                <th className="text-left px-4 py-3 text-[11px] font-mono text-muted font-normal tracking-wider">Nombre</th>
                <th className="text-left px-4 py-3 text-[11px] font-mono text-muted font-normal tracking-wider">Cámara</th>
                <th className="text-right px-4 py-3 text-[11px] font-mono text-muted font-normal tracking-wider">Imágenes</th>
                <th className="text-right px-4 py-3 text-[11px] font-mono text-muted font-normal tracking-wider">Tamaño</th>
                <th className="text-center px-4 py-3 text-[11px] font-mono text-muted font-normal tracking-wider">GPS</th>
                <th className="text-center px-4 py-3 text-[11px] font-mono text-muted font-normal tracking-wider">GCP</th>
                <th className="text-center px-4 py-3 text-[11px] font-mono text-muted font-normal tracking-wider">RTK</th>
                <th className="text-left px-4 py-3 text-[11px] font-mono text-muted font-normal tracking-wider">Notas</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {datasets.map((d, i) => (
                <tr key={d.name} className={`border-b border-border hover:bg-surface-2 transition-colors ${i === datasets.length - 1 ? 'border-0' : ''}`}>
                  <td className="px-4 py-3.5 text-text font-medium whitespace-nowrap">{d.name}</td>
                  <td className="px-4 py-3.5 text-muted font-mono text-xs whitespace-nowrap">{d.camera}</td>
                  <td className="px-4 py-3.5 text-muted font-mono text-xs text-right">{d.images}</td>
                  <td className="px-4 py-3.5 text-muted font-mono text-xs text-right whitespace-nowrap">{d.size}</td>
                  <td className="px-4 py-3.5"><Bool v={d.gps} /></td>
                  <td className="px-4 py-3.5"><Bool v={d.gcp} /></td>
                  <td className="px-4 py-3.5"><Bool v={d.rtk} /></td>
                  <td className="px-4 py-3.5 text-muted text-xs max-w-[200px]">{d.notes}</td>
                  <td className="px-4 py-3.5">
                    <a href={d.url} className="inline-flex items-center gap-1 text-xs text-muted hover:text-accent transition-colors" onClick={(e) => e.preventDefault()}>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-muted mt-6">
          ¿Quieres contribuir un dataset?{' '}
          <a href="/comunidad" className="text-accent hover:underline">Contáctanos en la comunidad</a>{' '}
          o abre un Pull Request en el repositorio.
        </p>
      </div>
    </div>
  )
}
