import { useState } from 'react'
import { ExternalLink } from 'lucide-react'

const DockerLogo = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="#1D63ED" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.186.186 0 0 0-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.186.186 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 0 0-.75.748 11.376 11.376 0 0 0 .692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 0 0 3.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"/>
  </svg>
)

const CopyBlock = ({ code }) => {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <div className="relative bg-[#1a1a1a] rounded-sm mb-6 overflow-x-auto">
      <button
        onClick={copy}
        className="absolute top-3 right-3 text-[10px] font-mono px-2 py-1 rounded-sm border border-zinc-600 text-zinc-400 hover:text-white hover:border-zinc-400 transition-colors"
      >
        {copied ? '✓ Copiado' : 'Copiar'}
      </button>
      <pre className="text-xs text-green-400 font-mono leading-relaxed p-4 pr-20">{code}</pre>
    </div>
  )
}

const steps = [
  {
    n: '01',
    title: 'Instala Docker Desktop',
    desc: 'Docker Desktop es la aplicación que permite ejecutar contenedores. Es gratuita y funciona en Windows, Mac y Linux.',
    extra: (
      <a
        href="https://www.docker.com/products/docker-desktop/"
        target="_blank"
        rel="noreferrer"
        className="btn-primary inline-flex mt-4"
      >
        <ExternalLink className="w-4 h-4" />
        Descargar Docker Desktop
      </a>
    ),
    note: 'Después de instalarlo, ábrelo y espera a que aparezca la ballena en la barra de tareas.',
  },
  {
    n: '02',
    title: 'Abre una terminal',
    desc: null,
    list: [
      { os: 'Windows', how: 'Busca "PowerShell" en el menú de inicio' },
      { os: 'Mac', how: 'Busca "Terminal" con Spotlight (⌘ + Espacio)' },
      { os: 'Linux', how: 'Pulsa Ctrl + Alt + T' },
    ],
  },
  {
    n: '03',
    title: 'Ejecuta este comando',
    desc: 'Copia y pega el siguiente comando en la terminal. La primera vez descarga la imagen (~500 MB). Las siguientes veces es instantáneo.',
    code: 'docker run -p 8000:8000 neburelgrande/zahorifields:latest',
  },
  {
    n: '04',
    title: 'Abre el navegador',
    desc: 'Cuando veas "Uvicorn running..." en la terminal, abre tu navegador y escribe:',
    code: 'http://localhost:8000',
    note: 'Para detener la aplicación vuelve a la terminal y pulsa Ctrl + C.',
  },
]

export default function Docker() {
  return (
    <div className="pt-16">
      <div className="bg-white border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-16 flex items-start gap-6">
          <DockerLogo />
          <div>
            <span className="section-label">Instalación</span>
            <h1 className="text-4xl font-semibold tracking-tight text-text mb-3">Docker</h1>
            <p className="text-muted text-sm max-w-md">
              Ejecuta ZahoriFields en Windows, Mac o Linux sin instalar Python ni dependencias. Solo necesitas Docker.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-14">
        <div className="space-y-12">
          {steps.map(({ n, title, desc, extra, note, list, code }) => (
            <div key={n} className="flex gap-6">
              <div className="shrink-0">
                <span className="font-mono text-xs text-accent">{n}</span>
              </div>
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
                {note && (
                  <p className="text-xs text-muted mt-3 leading-relaxed border-l-2 border-border pl-3">{note}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Parar / arrancar */}
        <div className="border border-border bg-white rounded-sm mt-14">
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

        <div className="border border-border bg-accent-light rounded-sm p-5 mt-6">
          <p className="text-sm text-text font-medium mb-1">¿Algo no funciona?</p>
          <p className="text-xs text-muted leading-relaxed">
            Asegúrate de que Docker Desktop está abierto y la ballena aparece en la barra de tareas antes de ejecutar el comando.
            Si tienes dudas, visita la{' '}
            <a href="/comunidad" className="text-accent hover:underline">comunidad</a>.
          </p>
        </div>
      </div>
    </div>
  )
}
