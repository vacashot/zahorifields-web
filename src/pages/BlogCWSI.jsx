import { Link } from 'react-router-dom'

const steps = [
  { n: '01', title: 'Carga el GeoTIFF térmico', body: 'Abre ZahoriFields y arrastra tu ortofoto térmica en formato GeoTIFF (una banda, valores en °C o K). Obtenida con cámaras FLIR, DJI Zenmuse XT o similares.' },
  { n: '02', title: 'Introduce las temperaturas de referencia', body: 'En el panel de parámetros, escribe la temperatura del dosel húmedo (T_húmeda) y la temperatura del dosel seco (T_seca). Puedes estimarlas a partir de referencias de campo o del propio vuelo.' },
  { n: '03', title: 'Activa el módulo CWSI', body: 'Selecciona "CWSI" en la lista de índices. ZahoriFields aplica la fórmula píxel a píxel sobre toda la ortofoto y genera una nueva capa de resultados.' },
  { n: '04', title: 'Define zonas AOI (áreas de interés)', body: 'Dibuja polígonos sobre el mapa para delimitar parcelas, tratamientos o repeticiones. El programa calcula el CWSI medio, máximo y mínimo de cada zona.' },
  { n: '05', title: 'Interpreta el mapa y toma la decisión', body: 'Los valores cercanos a 0 indican cultivo sin estrés. Valores por encima de 0.6–0.7 señalan estrés hídrico severo: prioridad de riego. Exporta el mapa y las estadísticas como CSV o imagen.' },
]

const comparison = [
  { tool: 'MATLAB + FLIR Tools', complexity: 'Alta', license: 'De pago', workflow: 'Manual, varios pasos', output: 'Imagen individual' },
  { tool: 'QGIS + plugins', complexity: 'Media-alta', license: 'Gratuito', workflow: 'Semi-automático', output: 'Capa vectorial' },
  { tool: 'ZahoriFields', complexity: 'Baja', license: 'Gratuito', workflow: 'Automático', output: 'Mapa + estadísticas' },
]

export default function BlogCWSI() {
  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-white border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="flex items-center gap-2 mb-5">
            <Link to="/" className="text-xs text-muted hover:text-text transition-colors">Inicio</Link>
            <span className="text-muted text-xs">/</span>
            <span className="text-xs text-accent">Blog</span>
          </div>
          <span className="section-label">Tutorial · Índices térmicos</span>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-text mt-2 mb-4" style={{ textWrap: 'balance' }}>
            Cómo calcular el índice de estrés hídrico (CWSI) con imágenes térmicas de dron
          </h1>
          <p className="text-muted text-sm leading-relaxed max-w-xl">
            El CWSI es uno de los indicadores más precisos para detectar falta de agua en el cultivo. Con ZahoriFields puedes calcularlo directamente sobre la ortofoto térmica de tu dron, sin necesidad de MATLAB ni software comercial.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <span className="text-[11px] font-mono text-muted">ITACYL · 2026</span>
            <span className="text-border">·</span>
            <span className="text-[11px] font-mono text-muted">6 min de lectura</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-14 space-y-16">

        {/* Qué es el CWSI */}
        <section>
          <h2 className="text-xl font-semibold text-text mb-4">¿Qué es el CWSI?</h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            El <strong className="text-text">Crop Water Stress Index</strong> (Índice de Estrés Hídrico del Cultivo) es una métrica que cuantifica el estado hídrico de la planta a partir de la temperatura de su dosel foliar. Fue propuesto por Jackson et al. (1981) y desde entonces se ha convertido en referencia en teledetección agrícola.
          </p>
          <p className="text-sm text-muted leading-relaxed">
            A diferencia de los índices espectrales como el NDVI, que miden la actividad fotosintética, el CWSI es sensible al cierre estomático producido por la falta de agua: cuando una planta no puede transpirar con normalidad, su temperatura foliar sube. Esta diferencia de temperatura es la señal que captura el dron con una cámara térmica.
          </p>
        </section>

        {/* Fórmula */}
        <section>
          <h2 className="text-xl font-semibold text-text mb-4">La fórmula</h2>
          <div className="bg-surface-2 border border-border rounded-sm px-6 py-5 mb-4">
            <p className="text-center font-mono text-base text-text">
              CWSI = (T<sub>foliar</sub> − T<sub>húmeda</sub>) / (T<sub>seca</sub> − T<sub>húmeda</sub>)
            </p>
          </div>
          <ul className="space-y-2 text-sm text-muted">
            <li><span className="font-mono text-text">T<sub>foliar</sub></span> — Temperatura media del dosel, obtenida de la ortofoto térmica.</li>
            <li><span className="font-mono text-text">T<sub>húmeda</sub></span> — Temperatura de referencia de una planta bien irrigada (sin estrés). Se puede medir con una referencia de campo húmedo o estimar a partir del vuelo.</li>
            <li><span className="font-mono text-text">T<sub>seca</sub></span> — Temperatura de referencia de una planta bajo estrés máximo (punto de marchitamiento permanente). Estimación empírica o medición experimental.</li>
          </ul>
          <p className="text-sm text-muted leading-relaxed mt-4">
            El resultado está siempre entre <strong className="text-text">0</strong> (sin estrés, planta bien hidratada) y <strong className="text-text">1</strong> (estrés máximo). Valores superiores a 0.5 indican que el cultivo necesita atención; por encima de 0.7 el riego es urgente.
          </p>
        </section>

        {/* Infografía */}
        <section>
          <h2 className="text-xl font-semibold text-text mb-6">Infografía: CWSI con ZahoriFields</h2>
          <div className="border border-border rounded-sm overflow-hidden bg-[#0F1F1A]">
            <img
              src="/blog/cwsi-infografia.svg"
              alt="Infografía CWSI: fórmula, escala de valores, mapa térmico de parcela y flujo de trabajo en ZahoriFields"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          <p className="text-[11px] text-muted mt-3 text-center">
            Infografía: fórmula, escala de estrés y flujo de trabajo en ZahoriFields · ITACYL 2026
          </p>
        </section>

        {/* Qué necesitas */}
        <section>
          <h2 className="text-xl font-semibold text-text mb-4">Qué necesitas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: 'Cámara térmica', desc: 'FLIR Vue Pro, DJI Zenmuse XT/XT2, Workswell WIRIS o cualquier cámara de infrarrojos calibrada en temperatura.' },
              { label: 'Ortofoto procesada', desc: 'GeoTIFF monobanda con valores en °C o K. Generada con Pix4D, Agisoft Metashape, OpenDroneMap o similar.' },
              { label: 'ZahoriFields', desc: 'Gratuito, sin instalación de dependencias. Descárgalo para Windows o usa la imagen Docker en Mac/Linux.' },
            ].map(({ label, desc }) => (
              <div key={label} className="border border-border bg-white rounded-sm p-5">
                <p className="text-sm font-semibold text-text mb-2">{label}</p>
                <p className="text-xs text-muted leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Paso a paso */}
        <section>
          <h2 className="text-xl font-semibold text-text mb-6">Paso a paso con ZahoriFields</h2>
          <div className="space-y-5">
            {steps.map(({ n, title, body }) => (
              <div key={n} className="flex gap-5 border border-border bg-white rounded-sm p-5">
                <span className="font-mono text-xs text-muted shrink-0 mt-0.5">{n}</span>
                <div>
                  <p className="text-sm font-semibold text-text mb-1">{title}</p>
                  <p className="text-xs text-muted leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comparativa */}
        <section>
          <h2 className="text-xl font-semibold text-text mb-4">Comparativa de herramientas</h2>
          <div className="border border-border rounded-sm overflow-hidden overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-surface-2 border-b border-border">
                  <th className="text-left px-4 py-3 font-mono text-muted">Herramienta</th>
                  <th className="text-left px-4 py-3 font-mono text-muted">Complejidad</th>
                  <th className="text-left px-4 py-3 font-mono text-muted">Licencia</th>
                  <th className="text-left px-4 py-3 font-mono text-muted">Flujo</th>
                  <th className="text-left px-4 py-3 font-mono text-muted">Resultado</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map(({ tool, complexity, license, workflow, output }, i) => (
                  <tr key={tool} className={`${i < comparison.length - 1 ? 'border-b border-border' : ''} ${tool === 'ZahoriFields' ? 'bg-accent-light' : 'bg-white'}`}>
                    <td className={`px-4 py-3 font-medium ${tool === 'ZahoriFields' ? 'text-accent' : 'text-text'}`}>{tool}</td>
                    <td className="px-4 py-3 text-muted">{complexity}</td>
                    <td className="px-4 py-3 text-muted">{license}</td>
                    <td className="px-4 py-3 text-muted">{workflow}</td>
                    <td className="px-4 py-3 text-muted">{output}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <section className="border border-accent bg-accent-light rounded-sm p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-text mb-1">¿Listo para probarlo?</p>
            <p className="text-xs text-muted">Descarga ZahoriFields, carga tu ortofoto térmica y calcula el CWSI en minutos.</p>
          </div>
          <Link to="/download" className="btn-primary shrink-0">
            Descargar gratis
          </Link>
        </section>

      </div>
    </div>
  )
}
