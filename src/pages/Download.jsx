import { useState } from 'react'
import { Download as DownloadIcon, Terminal, CheckCircle, AlertCircle, ArrowRight, ShieldCheck, ShieldX, AlertTriangle, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useDownloadCount, formatCount } from '../hooks/useStats'

const OFFICIAL_HASH = '28AA513A060F866C707DFA4B3E1A351397E394AEFA9C12906951B669631AE857'
const VIRUSTOTAL_URL = `https://www.virustotal.com/gui/file/${OFFICIAL_HASH.toLowerCase()}`

function HashVerifier() {
  const [input, setInput] = useState('')
  const normalized = input.trim().toUpperCase()
  const match = normalized === OFFICIAL_HASH
  const checked = normalized.length === 64

  return (
    <div className="mt-3 bg-surface-2 border border-border rounded-sm px-3 py-2">
      <p className="text-[10px] font-mono text-muted mb-1">SHA-256 oficial</p>
      <p className="text-[10px] font-mono text-text break-all select-all mb-3">{OFFICIAL_HASH}</p>
      <p className="text-[10px] text-muted mb-1">Pega aquí el hash de tu archivo para verificar:</p>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Pega el hash SHA-256..."
        className="w-full font-mono text-[10px] bg-white border border-border rounded-sm px-2 py-1.5 text-text placeholder:text-muted focus:outline-none focus:border-accent"
      />
      {checked && (
        <div className={`mt-2 flex items-center gap-1.5 text-[10px] font-medium ${match ? 'text-accent' : 'text-red-500'}`}>
          {match ? <ShieldCheck className="w-3.5 h-3.5" /> : <ShieldX className="w-3.5 h-3.5" />}
          {match ? '✅ El archivo es auténtico' : '❌ El hash no coincide — no ejecutes este archivo'}
        </div>
      )}
    </div>
  )
}

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
  const downloads = useDownloadCount()

  return (
    <div className="pt-16">
      <div className="bg-white border-b border-border">
        <div className="max-w-screen-xl mx-auto px-6 py-16">
          <span className="section-label">Software</span>
          <h1 className="text-4xl font-semibold tracking-tight text-text mb-3">Download</h1>
          <p className="text-muted text-sm max-w-md">Descarga ZahoriFields para tu sistema operativo. Gratuito, sin registro requerido.</p>
          {downloads != null && (
            <p className="text-[11px] font-mono text-accent mt-4">
              {formatCount(downloads)} descargas totales
            </p>
          )}
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 py-14">
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

            {/* VirusTotal badge */}
            <a
              href={VIRUSTOTAL_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-3 flex items-center justify-between gap-2 bg-emerald-50 border border-emerald-200 rounded-sm px-3 py-2 hover:bg-emerald-100 transition-colors group"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <div>
                  <p className="text-[10px] font-semibold text-emerald-800">Analizado en VirusTotal</p>
                  <p className="text-[10px] text-emerald-700">0 / 70 motores antivirus detectan amenazas</p>
                </div>
              </div>
              <ExternalLink className="w-3 h-3 text-emerald-500 shrink-0 group-hover:text-emerald-700 transition-colors" />
            </a>

            <div className="mt-3 flex items-start gap-2 bg-yellow-50 border border-yellow-200 rounded-sm px-3 py-2">
              <AlertTriangle className="w-3.5 h-3.5 text-yellow-600 mt-0.5 shrink-0" />
              <p className="text-[10px] text-yellow-800 leading-relaxed">
                Windows puede mostrar un aviso de SmartScreen al abrir el programa. Es normal en software sin firma comercial. Haz clic en "Más información" → "Ejecutar de todas formas".
              </p>
            </div>
            <HashVerifier />
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

        {/* Verificación de integridad */}
        <div className="border border-border bg-white rounded-sm p-6 mb-14">
          <p className="text-xs font-mono tracking-widest text-muted uppercase mb-4">Verificación de integridad</p>
          <p className="text-sm text-muted leading-relaxed mb-4">
            El hash SHA-256 te permite comprobar que el archivo descargado es exactamente el original y no ha sido modificado ni corrompido. Es una práctica estándar en software profesional.
          </p>
          <p className="text-sm font-medium text-text mb-2">Cómo verificarlo en Windows:</p>
          <p className="text-xs text-muted mb-3">Abre PowerShell y ejecuta:</p>
          <div className="bg-surface-2 border border-border rounded-sm px-4 py-3 mb-3">
            <p className="font-mono text-xs text-text select-all">{'Get-FileHash "C:\\ruta\\al\\archivo\\ZahoriFields_v1.0.0_Windows.zip" -Algorithm SHA256'}</p>
          </div>
          <p className="text-xs text-muted leading-relaxed">
            Si el resultado coincide con el hash que aparece en la tarjeta de descarga, el archivo es auténtico.
          </p>
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
