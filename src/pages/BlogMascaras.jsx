import { Link } from 'react-router-dom'

const methods = [
  {
    n: '01',
    color: 'text-accent',
    border: 'border-accent',
    tag: 'Multiespectral · RGB',
    title: 'Índice espectral',
    subtitle: 'NDVI, ExG, VARI, NGRDI…',
    body: 'Calcula un índice de vegetación sobre la ortofoto y aplica un umbral: todos los píxeles con valor superior al umbral se consideran vegetación. El índice más habitual es el NDVI (umbral típico 0.15–0.25), pero para imágenes RGB sin banda NIR puedes usar ExG (Excess Green) o VARI.',
    formula: 'píxel vegetal  si  Índice > umbral',
    note: 'Requiere imagen multiespectral para NDVI. ExG funciona con RGB estándar.',
  },
  {
    n: '02',
    color: 'text-yellow-500',
    border: 'border-yellow-500',
    tag: 'Solo imagen RGB',
    title: 'Color HSV',
    subtitle: 'Hue · Saturation · Value',
    body: 'Convierte la imagen RGB al espacio de color HSV y filtra los píxeles cuyo Tono (Hue) cae entre 40° y 160° (rango de verdes y amarillo-verdes). Se añaden umbrales de saturación y brillo para evitar falsos positivos en zonas de luz muy intensa o zonas muy oscuras.',
    formula: 'Hue 40–160° AND Sat > 0.4 AND Val 0.3–0.9',
    note: 'Funciona sin sensor multiespectral, pero es sensible a cambios de iluminación.',
  },
  {
    n: '03',
    color: 'text-orange-400',
    border: 'border-orange-400',
    tag: 'Solo imagen térmica',
    title: 'Umbral térmico',
    subtitle: 'T_húmeda < T_píxel < T_seca',
    body: 'Aprovecha que la vegetación transpira y mantiene su temperatura dentro de un rango predecible entre la referencia húmeda y la seca. Los píxeles demasiado fríos (suelo húmedo o agua) o demasiado calientes (suelo seco, caminos) se descartan de la máscara.',
    formula: 'T_húmeda < T_píxel < T_seca',
    note: 'Requiere imagen térmica. Especialmente útil al calcular CWSI para excluir suelo.',
  },
  {
    n: '04',
    color: 'text-accent',
    border: 'border-2 border-accent',
    tag: '★ Recomendado',
    title: 'Método mixto',
    subtitle: 'Índice + HSV + Umbral térmico (AND)',
    body: 'Combina dos o tres máscaras individuales mediante una operación lógica AND: un píxel solo se acepta como vegetación si cumple simultáneamente todos los criterios. Esto elimina casi por completo los falsos positivos y produce la temperatura foliar más precisa para el cálculo del CWSI.',
    formula: 'Máscara_NDVI AND Máscara_HSV AND Máscara_Térmica',
    note: 'Menor error de temperatura foliar → CWSI más fiable. Requiere RGB + multiespectral o térmica.',
  },
]

const comparison = [
  { method: 'Índice espectral', sensor: 'Multiespectral / RGB', precision: 'Alta', sinTermica: '✓', conTermica: '✓', recomendado: false },
  { method: 'Color HSV',        sensor: 'RGB estándar',          precision: 'Media', sinTermica: '✓', conTermica: '✓', recomendado: false },
  { method: 'Umbral térmico',   sensor: 'Térmica',               precision: 'Media', sinTermica: '—', conTermica: '✓', recomendado: false },
  { method: 'Mixto',            sensor: 'RGB + Multiespectral o Térmica', precision: 'Muy alta', sinTermica: '~', conTermica: '✓', recomendado: true },
]

export default function BlogMascaras() {
  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-white border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="flex items-center gap-2 mb-5">
            <Link to="/" className="text-xs text-muted hover:text-text transition-colors">Inicio</Link>
            <span className="text-muted text-xs">/</span>
            <Link to="/blog/cwsi" className="text-xs text-muted hover:text-text transition-colors">Blog</Link>
            <span className="text-muted text-xs">/</span>
            <span className="text-xs text-accent">Máscaras de vegetación</span>
          </div>
          <span className="section-label">Tutorial · Preprocesamiento</span>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-text mt-2 mb-4" style={{ textWrap: 'balance' }}>
            Máscaras de vegetación: cómo separar el cultivo del suelo en imágenes de dron
          </h1>
          <p className="text-muted text-sm leading-relaxed max-w-xl">
            Antes de calcular cualquier índice sobre una parcela, es fundamental aislar los píxeles de planta de los de suelo, caminos o agua. ZahoriFields ofrece cuatro estrategias para hacerlo, desde la más sencilla hasta la más precisa.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <span className="text-[11px] font-mono text-muted">ITACYL · 2026</span>
            <span className="text-border">·</span>
            <span className="text-[11px] font-mono text-muted">5 min de lectura</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-14 space-y-16">

        {/* Por qué importa */}
        <section>
          <h2 className="text-xl font-semibold text-text mb-4">¿Por qué es necesaria una máscara?</h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            Una ortofoto de dron no contiene solo cultivo: hay suelo desnudo entre filas, bordes de parcela, caminos, malas hierbas o reflejos de agua. Si calculas la temperatura media o el NDVI sobre toda la imagen sin filtrar, los píxeles de suelo —que se calientan mucho más que la planta— contaminarán el resultado y el índice perderá significado agronómico.
          </p>
          <p className="text-sm text-muted leading-relaxed">
            La máscara de vegetación es una capa binaria (0 = fondo, 1 = vegetación) que se aplica antes de cualquier cálculo de índices. El CWSI especialmente es muy sensible a esta etapa: incluir un solo 10% de píxeles de suelo caliente puede elevar la temperatura foliar estimada en varios grados y producir un índice de estrés completamente erróneo.
          </p>
        </section>

        {/* Infografía */}
        <section>
          <h2 className="text-xl font-semibold text-text mb-6">Las 4 estrategias en un vistazo</h2>
          <div className="border border-border rounded-sm overflow-hidden bg-[#0F1F1A]">
            <img
              src="/blog/mascaras-vegetacion-infografia.svg"
              alt="Infografía con las 4 estrategias de máscaras de vegetación: índice espectral, color HSV, umbral térmico y método mixto"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          <p className="text-[11px] text-muted mt-3 text-center">
            Las 4 estrategias de extracción de cobertura vegetal en ZahoriFields · ITACYL 2026
          </p>
        </section>

        {/* Métodos */}
        <section>
          <h2 className="text-xl font-semibold text-text mb-6">Los 4 métodos explicados</h2>
          <div className="space-y-5">
            {methods.map(({ n, color, border, tag, title, subtitle, body, formula, note }) => (
              <div key={n} className={`border bg-white rounded-sm p-6 ${border}`}>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <span className={`font-mono text-xs font-semibold ${color}`}>{n} · </span>
                    <span className="text-sm font-semibold text-text">{title}</span>
                    <span className="text-xs text-muted ml-2 italic">{subtitle}</span>
                  </div>
                  <span className={`text-[10px] font-mono shrink-0 ${color}`}>{tag}</span>
                </div>
                <p className="text-xs text-muted leading-relaxed mb-3">{body}</p>
                <div className="bg-surface-2 border border-border rounded-sm px-4 py-2 mb-3">
                  <p className="font-mono text-[11px] text-text">{formula}</p>
                </div>
                <p className="text-[11px] text-muted italic">{note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cómo se aplica en ZahoriFields */}
        <section>
          <h2 className="text-xl font-semibold text-text mb-4">Cómo se aplica en ZahoriFields</h2>
          <div className="space-y-4">
            {[
              { n: '01', t: 'Carga la ortofoto', d: 'Arrastra el GeoTIFF (multiespectral, RGB o térmico) al área de carga. ZahoriFields detecta automáticamente las bandas disponibles.' },
              { n: '02', t: 'Selecciona el método de máscara', d: 'En el panel de preprocesamiento elige una o varias estrategias de filtrado. Si tienes imagen multiespectral + térmica, activa el método mixto.' },
              { n: '03', t: 'Ajusta los umbrales', d: 'Modifica el umbral de índice (ej. NDVI > 0.20) o el rango HSV según el cultivo y las condiciones del vuelo. La vista previa se actualiza en tiempo real.' },
              { n: '04', t: 'Aplica la máscara', d: 'La máscara binaria se superpone a la ortofoto. Solo los píxeles marcados como vegetación participan en el cálculo de índices y estadísticas.' },
              { n: '05', t: 'Calcula tus índices', d: 'Con la cobertura filtrada, calcula NDVI, CWSI, NDRE u otros índices con la garantía de que los valores de suelo no contaminan el resultado.' },
            ].map(({ n, t, d }) => (
              <div key={n} className="flex gap-5 border border-border bg-white rounded-sm p-5">
                <span className="font-mono text-xs text-muted shrink-0 mt-0.5">{n}</span>
                <div>
                  <p className="text-sm font-semibold text-text mb-1">{t}</p>
                  <p className="text-xs text-muted leading-relaxed">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comparativa */}
        <section>
          <h2 className="text-xl font-semibold text-text mb-4">¿Cuál elegir?</h2>
          <div className="border border-border rounded-sm overflow-hidden overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-surface-2 border-b border-border">
                  <th className="text-left px-4 py-3 font-mono text-muted">Método</th>
                  <th className="text-left px-4 py-3 font-mono text-muted">Sensor necesario</th>
                  <th className="text-left px-4 py-3 font-mono text-muted">Precisión</th>
                  <th className="text-left px-4 py-3 font-mono text-muted">Sin térmica</th>
                  <th className="text-left px-4 py-3 font-mono text-muted">Con térmica</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map(({ method, sensor, precision, sinTermica, conTermica, recomendado }, i) => (
                  <tr key={method} className={`${i < comparison.length - 1 ? 'border-b border-border' : ''} ${recomendado ? 'bg-accent-light' : 'bg-white'}`}>
                    <td className={`px-4 py-3 font-medium ${recomendado ? 'text-accent' : 'text-text'}`}>{method}{recomendado ? ' ★' : ''}</td>
                    <td className="px-4 py-3 text-muted">{sensor}</td>
                    <td className={`px-4 py-3 font-medium ${recomendado ? 'text-accent' : 'text-text'}`}>{precision}</td>
                    <td className="px-4 py-3 text-muted text-center">{sinTermica}</td>
                    <td className="px-4 py-3 text-muted text-center">{conTermica}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-muted mt-3 leading-relaxed">
            Si solo tienes imagen RGB, usa HSV o ExG. Si tienes multiespectral, añade NDVI. Si además tienes térmica, activa el método mixto para calcular CWSI con la mayor precisión posible.
          </p>
        </section>

        {/* Relación con el CWSI */}
        <section className="border border-border bg-white rounded-sm p-6">
          <p className="text-xs font-mono tracking-widest text-muted uppercase mb-3">Relacionado</p>
          <p className="text-sm font-semibold text-text mb-2">La máscara es el paso previo al CWSI</p>
          <p className="text-xs text-muted leading-relaxed mb-4">
            El índice de estrés hídrico (CWSI) calcula la temperatura media del dosel foliar. Si esa temperatura incluye píxeles de suelo caliente, el resultado estará sesgado. Aplica siempre una máscara antes de calcular el CWSI para obtener resultados fiables.
          </p>
          <Link to="/blog/cwsi" className="text-xs text-accent hover:underline font-medium">
            Leer el artículo sobre CWSI →
          </Link>
        </section>

        {/* CTA */}
        <section className="border border-accent bg-accent-light rounded-sm p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-text mb-1">Pruébalo con tus propias ortofotos</p>
            <p className="text-xs text-muted">ZahoriFields aplica las máscaras automáticamente antes de calcular cualquier índice.</p>
          </div>
          <Link to="/download" className="btn-primary shrink-0">
            Descargar gratis
          </Link>
        </section>

      </div>
    </div>
  )
}
