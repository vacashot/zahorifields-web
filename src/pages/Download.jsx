import { useState } from 'react'
import { Download as DownloadIcon, Terminal, CheckCircle, AlertCircle } from 'lucide-react'

const requirements = [
  { label: 'Sistema operativo', min: 'Windows 10 64-bit', rec: 'Windows 11 64-bit' },
  { label: 'RAM', min: '8 GB', rec: '16 GB o más' },
  { label: 'Almacenamiento', min: '10 GB libres', rec: '50 GB o más (SSD recomendado)' },
  { label: 'GPU', min: 'No requerida', rec: 'NVIDIA CUDA para procesamiento acelerado' },
  { label: 'Resolución', min: '1280 × 720', rec: '1920 × 1080 o superior' },
]

const faqs = [
  {
    q: '¿Funciona sin conexión a internet?',
    a: 'Sí. ZahoriFields procesa todas las imágenes de forma local en tu equipo. No se envían datos a ningún servidor externo.',
  },
  {
    q: '¿Qué cámaras son compatibles?',
    a: 'MicaSense RedEdge y Altum, Sentera, MAPIR, Tetracam y cualquier cámara RGB estándar. También imágenes térmicas FLIR y DJI Zenmuse.',
  },
  {
    q: '¿Está disponible para Mac o Linux?',
    a: 'Por ahora solo para Windows. Las versiones para otros sistemas operativos están en desarrollo.',
  },
  {
    q: '¿Es de pago?',
    a: 'No. ZahoriFields es gratuito y de código abierto, desarrollado por ITACYL como herramienta pública para investigadores y agricultores.',
  },
]

export default function Download() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="pt-28">
      {/* Header */}
      <div className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <span className="section-label">Software</span>
          <h1 className="text-4xl font-semibold tracking-tight text-[#efefef] mb-3">Download</h1>
          <p className="text-muted text-sm max-w-md">
            Descarga ZahoriFields para tu sistema operativo. Gratuito, sin registro requerido.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-14">
        {/* OS Tabs — Windows activo, resto próximamente */}
        <div className="grid md:grid-cols-3 gap-4 mb-14">
          {/* Windows — activo */}
          <div className="border border-accent bg-surface p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm font-medium text-[#efefef]">Windows</p>
                <p className="text-xs font-mono text-muted mt-0.5">v1.0.0 · 2025</p>
              </div>
              <span className="text-[10px] font-mono text-accent border border-accent px-2 py-0.5">Disponible</span>
            </div>
            <a
              href="https://github.com/vacashot/zahorifields-web/releases/download/v1.0.0/ZahoriFields_v1.0.0_Windows.zip"
              className="btn-primary w-full justify-center"
            >
              <DownloadIcon className="w-4 h-4" />
              Descargar .zip
            </a>
            <p className="text-[11px] text-muted mt-3 text-center">Windows · ~144 MB · v1.0.0</p>
          </div>

          {/* macOS — próximamente */}
          {['macOS', 'Linux'].map((os) => (
            <div key={os} className="border border-border p-6 opacity-50">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm font-medium text-[#efefef]">{os}</p>
                  <p className="text-xs font-mono text-muted mt-0.5">— · —</p>
                </div>
                <span className="text-[10px] font-mono text-muted border border-border px-2 py-0.5">Próximamente</span>
              </div>
              <button disabled className="btn-ghost w-full justify-center cursor-not-allowed opacity-50">
                No disponible
              </button>
            </div>
          ))}
        </div>

        {/* Nota instalación */}
        <div className="border border-border p-5 flex gap-4 mb-14">
          <Terminal className="w-4 h-4 text-accent mt-0.5 shrink-0" />
          <div>
            <p className="text-sm text-[#efefef] font-medium mb-1">Instalación en un paso</p>
            <p className="text-xs text-muted leading-relaxed">
              Ejecuta el instalador <span className="font-mono text-[#efefef]">ZahoriFields-Setup.exe</span> y sigue
              el asistente. No requiere permisos de administrador para la instalación de usuario.
            </p>
          </div>
        </div>

        {/* Requisitos */}
        <span className="section-label">Requisitos del sistema</span>
        <div className="border border-border mb-14">
          <div className="grid grid-cols-3 bg-surface px-5 py-3 border-b border-border">
            <p className="text-xs font-mono text-muted"></p>
            <p className="text-xs font-mono text-muted">Mínimo</p>
            <p className="text-xs font-mono text-muted">Recomendado</p>
          </div>
          {requirements.map(({ label, min, rec }, i) => (
            <div
              key={label}
              className={`grid grid-cols-3 px-5 py-3.5 ${i < requirements.length - 1 ? 'border-b border-border' : ''}`}
            >
              <p className="text-xs text-muted">{label}</p>
              <p className="text-xs text-[#efefef] flex items-center gap-1.5">
                <AlertCircle className="w-3 h-3 text-muted shrink-0" /> {min}
              </p>
              <p className="text-xs text-[#efefef] flex items-center gap-1.5">
                <CheckCircle className="w-3 h-3 text-accent shrink-0" /> {rec}
              </p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <span className="section-label">Preguntas frecuentes</span>
        <div className="border border-border">
          {faqs.map(({ q, a }, i) => (
            <div key={i} className={i < faqs.length - 1 ? 'border-b border-border' : ''}>
              <button
                className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-surface transition-colors"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span className="text-sm text-[#efefef]">{q}</span>
                <span className="text-muted font-mono text-lg leading-none">{openFaq === i ? '−' : '+'}</span>
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
