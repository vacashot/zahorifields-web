import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const items = [
  { src: '/galeria/edicion.jpg', type: 'image', caption: 'Panel de edición' },
  { src: '/galeria/indices.jpg', type: 'image', caption: 'Índices de vegetación' },
  { src: '/galeria/ndvi.jpg',    type: 'image', caption: 'Mapa NDVI' },
  { src: '/galeria/aoi.jpg',     type: 'image', caption: 'Área de interés (AOI)' },
]

function MediaThumb({ item, onClick }) {
  if (item.type === 'video') {
    return (
      <button onClick={onClick} className="group relative w-full aspect-video overflow-hidden rounded-sm border border-border bg-black cursor-pointer focus:outline-none">
        <video src={item.src} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" muted />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
            <div className="w-0 h-0 border-y-[7px] border-y-transparent border-l-[13px] border-l-white ml-1" />
          </div>
        </div>
        {item.caption && <p className="absolute bottom-0 left-0 right-0 px-3 py-2 text-[11px] text-white bg-black/50 truncate">{item.caption}</p>}
      </button>
    )
  }
  if (item.type === 'gif') {
    return (
      <button onClick={onClick} className="group relative w-full aspect-video overflow-hidden rounded-sm border border-border cursor-pointer focus:outline-none">
        <img src={item.src} alt={item.caption} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-200" />
        <span className="absolute top-2 left-2 text-[10px] font-mono bg-accent text-white px-1.5 py-0.5 rounded-sm">GIF</span>
        {item.caption && <p className="absolute bottom-0 left-0 right-0 px-3 py-2 text-[11px] text-white bg-black/50 truncate">{item.caption}</p>}
      </button>
    )
  }
  return (
    <button onClick={onClick} className="group relative w-full aspect-video overflow-hidden rounded-sm border border-border cursor-pointer focus:outline-none">
      <img src={item.src} alt={item.caption} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-200" />
      {item.caption && <p className="absolute bottom-0 left-0 right-0 px-3 py-2 text-[11px] text-white bg-black/50 truncate opacity-0 group-hover:opacity-100 transition-opacity">{item.caption}</p>}
    </button>
  )
}

export default function Galeria() {
  const [active, setActive] = useState(null)

  const prev = () => setActive((a) => (a - 1 + items.length) % items.length)
  const next = () => setActive((a) => (a + 1) % items.length)

  const handleKey = (e) => {
    if (e.key === 'ArrowLeft') prev()
    if (e.key === 'ArrowRight') next()
    if (e.key === 'Escape') setActive(null)
  }

  return (
    <div className="pt-16">
      <div className="bg-white border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <span className="section-label">Capturas de pantalla</span>
          <h1 className="text-4xl font-semibold tracking-tight text-text mb-3">Galería</h1>
          <p className="text-muted text-sm max-w-lg">
            Imágenes y vídeos de ZahoriFields en uso. Haz clic para ampliar.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-14">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <MediaThumb key={i} item={item} onClick={() => setActive(i)} />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setActive(null)}
          onKeyDown={handleKey}
          tabIndex={0}
          autoFocus
        >
          {/* Prev */}
          <button
            className="absolute left-4 text-white/60 hover:text-white p-2"
            onClick={(e) => { e.stopPropagation(); prev() }}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Media */}
          <div className="max-w-5xl max-h-[85vh] px-16" onClick={(e) => e.stopPropagation()}>
            {items[active].type === 'video' ? (
              <video
                src={items[active].src}
                controls
                autoPlay
                className="max-h-[80vh] max-w-full mx-auto rounded-sm"
              />
            ) : (
              <img
                src={items[active].src}
                alt={items[active].caption}
                className="max-h-[80vh] max-w-full mx-auto rounded-sm object-contain"
              />
            )}
            {items[active].caption && (
              <p className="text-center text-white/60 text-sm mt-4">{items[active].caption}</p>
            )}
          </div>

          {/* Next */}
          <button
            className="absolute right-4 text-white/60 hover:text-white p-2"
            onClick={(e) => { e.stopPropagation(); next() }}
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Close */}
          <button
            className="absolute top-4 right-4 text-white/60 hover:text-white p-2"
            onClick={() => setActive(null)}
          >
            <X className="w-6 h-6" />
          </button>

          {/* Counter */}
          <p className="absolute bottom-4 text-white/40 text-xs font-mono">
            {active + 1} / {items.length}
          </p>
        </div>
      )}
    </div>
  )
}
