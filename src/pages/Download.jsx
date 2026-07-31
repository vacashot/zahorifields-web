import { useState } from 'react'
import { Download as DownloadIcon, CheckCircle, AlertCircle, ShieldCheck, ShieldX, AlertTriangle, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useDownloadCount, formatCount } from '../hooks/useStats'

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
function DockerIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.186.186 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288z"/>
    </svg>
  )
}

const OFFICIAL_HASH = '27981C9CA2838488847133DEBC6BA800BDAFF85E66D042E5301EBC8CE65C9A7E'

function HashVerifier() {
  const [input, setInput] = useState('')
  const normalized = input.trim().toUpperCase()
  const match = normalized === OFFICIAL_HASH
  const checked = normalized.length === 64

  return (
    <div className="bg-surface-2 border border-border rounded-sm px-4 py-3">
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

function CopyBlock({ code }) {
  const [copied, setCopied] = useState(false)
  const copy = () => { navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 2000) }
  return (
    <div className="relative bg-[#1a1a1a] rounded-sm mb-4 overflow-x-auto">
      <button onClick={copy} className="absolute top-3 right-3 text-[10px] font-mono px-2 py-1 rounded-sm border border-zinc-600 text-zinc-400 hover:text-white hover:border-zinc-400 transition-colors">
        {copied ? '✓ Copiado' : 'Copiar'}
      </button>
      <pre className="text-xs text-green-400 font-mono leading-relaxed p-4 pr-20">{code}</pre>
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

function WindowsContent() {
  const [openFaq, setOpenFaq] = useState(null)
  return (
    <div className="space-y-14">
      {/* Descarga */}
      <div className="max-w-sm mx-auto">
        <div className="flex justify-center mb-5">
          <img src="/images/zahorifields_combinada.svg" alt="ZahoriFields" className="h-14 w-auto" />
        </div>
        <a
          href="https://github.com/vacashot/zahorifields-web/releases/download/v2.0.0-beta.1/ZahoriFields-Setup-2.0.0-beta.1.zip"
          className="btn-primary w-full justify-center text-base py-3"
        >
          <DownloadIcon className="w-5 h-5" />
          Descargar para Windows
        </a>
        <p className="text-[11px] text-muted mt-2 text-center font-mono">~211 MB · v2.0.0-beta.1 · Windows 10/11</p>
        <div className="mt-4 flex items-start gap-2 bg-yellow-50 border border-yellow-200 rounded-sm px-3 py-2">
          <AlertTriangle className="w-3.5 h-3.5 text-yellow-600 mt-0.5 shrink-0" />
          <p className="text-[10px] text-yellow-800 leading-relaxed">
            Windows puede mostrar un aviso de SmartScreen. Haz clic en <strong>"Más información"</strong> → <strong>"Ejecutar de todas formas"</strong>.
          </p>
        </div>
        <div className="mt-3">
          <HashVerifier />
        </div>
        <div className="mt-3 text-center">
          <Link to="/changelog" className="text-xs text-muted hover:text-accent transition-colors">
            Ver registro de cambios →
          </Link>
        </div>
      </div>

      {/* Guía instalación */}
      <div>
        <span className="section-label">Guía de instalación</span>
        <div className="mt-6 border border-border rounded-sm overflow-hidden bg-black max-w-2xl">
          <video src="/instalacion/instalacion.mp4" controls className="w-full" poster="/instalacion/instalacion_1.jpg" />
        </div>
        <div className="mt-8 space-y-10">
          {[
            { n: '01', title: '¿Para quién instalar?', desc: 'Elige si instalar solo para tu usuario (recomendado, sin permisos de administrador) o para todos los usuarios del equipo. Haz clic en "Siguiente".', img: '/instalacion/instalacion_1.jpg' },
            { n: '02', title: 'Carpeta de instalación', desc: 'Por defecto se instala en tu carpeta de usuario. Puedes cambiarla con "Examinar". Necesitas ~794 MB libres. Pulsa "Instalar" para comenzar.', img: '/instalacion/instalacion_2.jpg' },
            { n: '03', title: 'Instalación completada', desc: 'Cuando aparezca la pantalla de finalización, ZahoriFields está listo. Deja marcada "Ejecutar ZahoriFields" y pulsa "Terminar" para abrirlo.', img: '/instalacion/instalacion_3.jpg' },
          ].map(({ n, title, desc, img }) => (
            <div key={n} className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="font-mono text-xs text-accent mb-2 font-medium">{n}</p>
                <h3 className="text-sm font-semibold text-text mb-2">{title}</h3>
                <p className="text-xs text-muted leading-relaxed">{desc}</p>
              </div>
              <div className="border border-border rounded-sm overflow-hidden shadow-sm">
                <img src={img} alt={title} className="w-full object-cover" />
              </div>
            </div>
          ))}
        </div>

        {/* Desinstalación */}
        <div className="mt-12 pt-10 border-t border-border">
          <p className="text-xs font-mono tracking-widest text-muted uppercase mb-6">Desinstalación</p>
          <div className="space-y-10">
            {[
              { n: '01', title: 'Inicia el desinstalador', desc: 'Ve a Configuración → Aplicaciones, busca "ZahoriFields" y haz clic en "Desinstalar". Asegúrate de que la aplicación no esté en ejecución.', img: '/instalacion/desinstalacion_1.jpg' },
              { n: '02', title: 'Desinstalación completada', desc: 'Cuando aparezca la pantalla de finalización, ZahoriFields ha sido eliminado del sistema. Pulsa "Terminar".', img: '/instalacion/desinstalacion_2.jpg' },
            ].map(({ n, title, desc, img }) => (
              <div key={n} className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="font-mono text-xs text-accent mb-2 font-medium">{n}</p>
                  <h3 className="text-sm font-semibold text-text mb-2">{title}</h3>
                  <p className="text-xs text-muted leading-relaxed">{desc}</p>
                </div>
                <div className="border border-border rounded-sm overflow-hidden shadow-sm">
                  <img src={img} alt={title} className="w-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Requisitos */}
      <div>
        <span className="section-label">Requisitos del sistema</span>
        <div className="border border-border bg-white rounded-sm mt-4 overflow-hidden">
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
      </div>

      {/* FAQ */}
      <div>
        <span className="section-label">Preguntas frecuentes</span>
        <div className="border border-border bg-white rounded-sm overflow-hidden mt-4">
          {faqs.map(({ q, a }, i) => (
            <div key={i} className={i < faqs.length - 1 ? 'border-b border-border' : ''}>
              <button className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-surface-2 transition-colors" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <span className="text-sm text-text font-medium">{q}</span>
                <span className="text-muted font-mono text-lg leading-none shrink-0">{openFaq === i ? '−' : '+'}</span>
              </button>
              {openFaq === i && <div className="px-5 pb-4"><p className="text-sm text-muted leading-relaxed">{a}</p></div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function DockerContent() {
  const dockerSteps = [
    {
      n: '01', title: 'Instala Docker Desktop',
      desc: 'Docker Desktop es la aplicación que permite ejecutar contenedores. Es gratuita y funciona en Windows, Mac y Linux.',
      extra: <a href="https://www.docker.com/products/docker-desktop/" target="_blank" rel="noreferrer" className="btn-primary inline-flex mt-4"><ExternalLink className="w-4 h-4" />Descargar Docker Desktop</a>,
      note: 'Después de instalarlo, ábrelo y espera a que aparezca la ballena en la barra de tareas.',
    },
    {
      n: '02', title: 'Abre una terminal',
      list: [
        { os: 'Windows', how: 'Busca "PowerShell" en el menú de inicio' },
        { os: 'Mac', how: 'Busca "Terminal" con Spotlight (⌘ + Espacio)' },
        { os: 'Linux', how: 'Pulsa Ctrl + Alt + T' },
      ],
    },
    {
      n: '03', title: 'Ejecuta este comando',
      desc: 'Copia y pega el siguiente comando en la terminal. La primera vez descarga la imagen (~500 MB). Las siguientes veces es instantáneo.',
      code: 'docker run -p 8000:8000 neburelgrande/zahorifields:latest',
    },
    {
      n: '04', title: 'Abre el navegador',
      desc: 'Cuando veas "Uvicorn running..." en la terminal, abre tu navegador y escribe:',
      code: 'http://localhost:8000',
      note: 'Para detener la aplicación vuelve a la terminal y pulsa Ctrl + C.',
    },
  ]

  return (
    <div className="max-w-2xl mx-auto space-y-12">
      {dockerSteps.map(({ n, title, desc, extra, note, list, code }) => (
        <div key={n} className="flex gap-6">
          <span className="font-mono text-xs text-accent shrink-0 mt-0.5">{n}</span>
          <div className="flex-1">
            <h2 className="text-base font-semibold text-text mb-3">{title}</h2>
            {desc && <p className="text-sm text-muted leading-relaxed mb-4">{desc}</p>}
            {list && (
              <ul className="space-y-2 mb-4">
                {list.map(({ os, how }) => (
                  <li key={os} className="flex gap-3 text-sm text-muted">
                    <span className="font-medium text-text w-16 shrink-0">{os}</span>
                    <span>{how}</span>
                  </li>
                ))}
              </ul>
            )}
            {code && <CopyBlock code={code} />}
            {extra}
            {note && <p className="text-xs text-muted mt-3 leading-relaxed border-l-2 border-border pl-3">{note}</p>}
          </div>
        </div>
      ))}

      <div className="border border-border bg-white rounded-sm">
        <div className="px-6 py-5 border-b border-border">
          <h2 className="text-base font-semibold text-text">Parar y arrancar</h2>
        </div>
        <div className="px-6 py-5 space-y-6">
          <div>
            <p className="text-sm font-medium text-text mb-1">Opción 1 — Desde Docker Desktop <span className="text-xs font-normal text-muted">(más fácil)</span></p>
            <p className="text-xs text-muted leading-relaxed">Abre Docker Desktop → ve a <strong className="text-text">Containers</strong> → haz clic en el botón de stop <strong className="text-text">⏹</strong> al lado del contenedor <code className="font-mono bg-surface-2 px-1.5 py-0.5 rounded-sm border border-border text-text">zahorifields</code>.</p>
          </div>
          <div>
            <p className="text-sm font-medium text-text mb-3">Opción 2 — Desde la terminal</p>
            <p className="text-xs text-muted mb-2">Para detenerlo:</p>
            <CopyBlock code="docker stop zahorifields" />
            <p className="text-xs text-muted mb-2">Para volver a arrancarlo:</p>
            <CopyBlock code="docker start zahorifields" />
          </div>
        </div>
      </div>

      <div className="border border-border bg-accent-light rounded-sm p-5">
        <p className="text-sm text-text font-medium mb-1">¿Algo no funciona?</p>
        <p className="text-xs text-muted leading-relaxed">
          Asegúrate de que Docker Desktop está abierto y la ballena aparece en la barra de tareas antes de ejecutar el comando. Si tienes dudas, visita la{' '}
          <Link to="/comunidad" className="text-accent hover:underline">comunidad</Link>.
        </p>
      </div>
    </div>
  )
}

export default function Download() {
  const [os, setOs] = useState('windows')
  const downloads = useDownloadCount()

  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-white border-b border-border">
        <div className="max-w-screen-xl mx-auto px-6 py-16">
          <span className="section-label">Software</span>
          <h1 className="text-4xl font-semibold tracking-tight text-text mb-3">Download</h1>
          <p className="text-muted text-sm max-w-md">Descarga ZahoriFields para tu sistema operativo. Gratuito, sin registro requerido.</p>
          {downloads != null && (
            <p className="text-[11px] font-mono text-accent mt-4">{formatCount(downloads)} descargas totales</p>
          )}
        </div>
      </div>

      {/* Selector — tarjetas grandes */}
      <div className="border-b border-border bg-surface-2">
        <div className="max-w-screen-xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-center gap-4 max-w-2xl mx-auto">
          {/* Windows */}
          <button
            onClick={() => setOs('windows')}
            className={`flex-1 max-w-xs text-left p-6 rounded-sm border-2 bg-white transition-all duration-150 cursor-pointer ${os === 'windows' ? 'border-accent shadow-md' : 'border-border hover:border-accent/50 hover:shadow-sm'}`}
          >
            <div className="flex justify-center mb-4">
              <img src="/images/zahorifields_combinada.svg" alt="ZahoriFields" className="h-14 w-auto" />
            </div>
            <div className="flex items-center gap-3 mb-2">
              <WindowsIcon className="w-6 h-6 text-[#0078d4]" />
              <div>
                <p className="text-sm font-semibold text-text">Windows</p>
                <p className="text-xs font-mono text-muted">v2.0.0-beta.1 · 2026</p>
              </div>
              <span className={`ml-auto text-[10px] font-mono px-2 py-0.5 rounded-sm border ${os === 'windows' ? 'border-accent text-accent bg-accent-light' : 'border-border text-muted bg-surface-2'}`}>Disponible</span>
            </div>
          </button>

          {/* Docker */}
          <button
            onClick={() => setOs('docker')}
            className={`flex-1 max-w-xs text-left p-6 rounded-sm border-2 bg-white transition-all duration-150 cursor-pointer ${os === 'docker' ? 'border-accent shadow-md' : 'border-border hover:border-accent/50 hover:shadow-sm'}`}
          >
            <div className="flex justify-center mb-4">
              <DockerIcon className="w-14 h-14 text-[#2496ED]" />
            </div>
            <div className="flex items-center gap-2 mb-1.5">
              <AppleIcon className="w-4 h-4 text-muted" />
              <LinuxIcon className="w-4 h-4 text-muted" />
              <WindowsIcon className="w-4 h-4 text-muted" />
            </div>
            <div className="flex items-center gap-3">
              <div>
                <p className="text-sm font-semibold text-text">Docker</p>
                <p className="text-xs font-mono text-muted">Mac · Linux · Windows</p>
              </div>
              <span className={`ml-auto text-[10px] font-mono px-2 py-0.5 rounded-sm border ${os === 'docker' ? 'border-accent text-accent bg-accent-light' : 'border-border text-muted bg-surface-2'}`}>Avanzado</span>
            </div>
          </button>
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-screen-xl mx-auto px-6 py-14">
        {os === 'windows' ? <WindowsContent /> : <DockerContent />}
      </div>
    </div>
  )
}
