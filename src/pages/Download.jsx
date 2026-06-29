import { useState } from 'react'
import { Download as DownloadIcon, Terminal, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const requirements = [
  { label: 'Sistema operativo', min: 'Windows 10 64-bit', rec: 'Windows 11 64-bit' },
  { label: 'RAM', min: '8 GB', rec: '16 GB o más' },
  { label: 'Almacenamiento', min: '10 GB libres', rec: '50 GB o más (SSD recomendado)' },
  { label: 'GPU', min: 'No requerida', rec: 'NVIDIA CUDA para procesamiento acelerado' },
  { label: 'Resolución', min: '1280 × 720', rec: '1920 × 1080 o superior' },
]

const faqs = [
  { q: '¿Funciona sin conexión a internet?', a: 'Sí. ZahoriFields procesa todas las imágenes de forma local en tu equipo. No se envían datos a ningún servidor externo.' },
  { q: '¿Qué cámaras son compatibles?', a: 'MicaSense RedEdge y Altum, Sentera, MAPIR, Tetracam y cualquier cámara RGB estándar. También imágenes térmicas FLIR y DJI Zenmuse.' },
  { q: '¿Está disponible para Mac o Linux?', a: 'El instalador .exe es solo para Windows. Para Mac y Linux está disponible la versión Docker, que funciona en cualquier sistema operativo.' },
  { q: '¿Es de pago?', a: 'No. ZahoriFields es gratuito y de código abierto, desarrollado por ITACYL como herramienta pública para investigadores y agricultores.' },
]

export default function Download() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="pt-16">
      <div className="bg-white border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <span className="section-label">Software</span>
          <h1 className="text-4xl font-semibold tracking-tight text-text mb-3">Download</h1>
          <p className="text-muted text-sm max-w-md">Descarga ZahoriFields para tu sistema operativo. Gratuito, sin registro requerido.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-14">
        {/* OS Cards */}
        <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mb-14">
          {/* Windows */}
          <div className="border-2 border-accent bg-white p-6 rounded-sm flex-1">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm font-semibold text-text">Windows</p>
                <p className="text-xs font-mono text-muted mt-0.5">v1.1 · 2026</p>
              </div>
              <span className="text-[10px] font-mono text-accent border border-accent bg-accent-light px-2 py-0.5 rounded-sm">Disponible</span>
            </div>
            <a
              href="https://github.com/vacashot/zahorifields-web/releases/download/v1.0.0/ZahoriFields_v1.0.0_Windows.zip"
              className="btn-primary w-full justify-center"
            >
              <DownloadIcon className="w-4 h-4" />
              Descargar .zip
            </a>
            <p className="text-[11px] text-muted mt-3 text-center">Windows · ~144 MB · v1.1</p>
          </div>

          {/* Docker */}
          <div className="border border-border bg-white p-6 rounded-sm flex-1">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm font-semibold text-text">Docker</p>
                <p className="text-xs font-mono text-muted mt-0.5">Mac · Linux · Windows</p>
              </div>
              <span className="text-[10px] font-mono text-muted border border-border bg-surface-2 px-2 py-0.5 rounded-sm">Avanzado</span>
            </div>
            <Link
              to="/docker"
              className="btn-ghost w-full justify-center"
            >
              <ArrowRight className="w-4 h-4" />
              Ver instrucciones
            </Link>
            <p className="text-[11px] text-muted mt-3 text-center">Requiere Docker Desktop</p>
          </div>
        </div>

        {/* Nota */}
        <div className="border border-border bg-accent-light p-5 flex gap-4 mb-14 rounded-sm">
          <Terminal className="w-4 h-4 text-accent mt-0.5 shrink-0" />
          <div>
            <p className="text-sm text-text font-medium mb-1">Instalación en un paso</p>
            <p className="text-xs text-muted leading-relaxed">
              Extrae el archivo ZIP en cualquier carpeta y ejecuta <span className="font-mono text-text">ZahoriFields.exe</span>. No requiere instalador ni permisos de administrador.
            </p>
          </div>
        </div>

        {/* Requisitos */}
        <span className="section-label">Requisitos del sistema</span>
        <div className="border border-border bg-white rounded-sm mb-14 overflow-hidden">
          <div className="grid grid-cols-3 bg-surface-2 px-5 py-3 border-b border-border">
            <p className="text-xs font-mono text-muted"></p>
            <p className="text-xs font-mono text-muted">Mínimo</p>
            <p className="text-xs font-mono text-muted">Recomendado</p>
          </div>
          {requirements.map(({ label, min, rec }, i) => (
            <div key={label} className={`grid grid-cols-3 px-5 py-3.5 ${i < requirements.length - 1 ? 'border-b border-border' : ''}`}>
              <p className="text-xs text-muted">{label}</p>
              <p className="text-xs text-text flex items-center gap-1.5"><AlertCircle className="w-3 h-3 text-muted shrink-0" />{min}</p>
              <p className="text-xs text-text flex items-center gap-1.5"><CheckCircle className="w-3 h-3 text-accent shrink-0" />{rec}</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <span className="section-label">Preguntas frecuentes</span>
        <div className="border border-border bg-white rounded-sm overflow-hidden">
          {faqs.map(({ q, a }, i) => (
            <div key={i} className={i < faqs.length - 1 ? 'border-b border-border' : ''}>
              <button
                className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-surface-2 transition-colors"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span className="text-sm text-text font-medium">{q}</span>
                <span className="text-muted font-mono text-lg leading-none shrink-0">{openFaq === i ? '−' : '+'}</span>
              </button>
              {openFaq === i && (
                <div className="px-5 pb-4">
                  <p className="text-sm text-muted leading-relaxed">{a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
