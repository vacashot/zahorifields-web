import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const photos = [
  { src: '/galeria/edicion.jpg',                    caption: 'Panel de edición' },
  { src: '/galeria/indices.jpg',                    caption: 'Índices de vegetación' },
  { src: '/galeria/ndvi.jpg',                       caption: 'Mapa NDVI' },
  { src: '/galeria/aoi.jpg',                        caption: 'Área de interés (AOI)' },
  { src: '/galeria/modulo_operacones_dron1.jpg',    caption: 'Módulo operaciones dron' },
  { src: '/galeria/plan_aplicacion.jpg',            caption: 'Plan de aplicación' },
  { src: '/galeria/vra_zonificacion.jpg',           caption: 'VRA · Zonificación' },
  { src: '/galeria/modulo_estres_termico.jpg',      caption: 'Módulo estrés térmico' },
  { src: '/galeria/modulo_mascara_vegetacion.jpg',  caption: 'Módulo máscara de vegetación' },
  { src: '/galeria/modulo_cobertura_vegetal.jpg',   caption: 'Módulo cobertura vegetal' },
  { src: '/galeria/swipe_mascara_pistacho.jpg',     caption: 'Swipe máscara · Pistacho' },
  { src: '/galeria/chm.jpg',                        caption: 'CHM · Modelo de altura de copa' },
  { src: '/galeria/centro_de_ayuda.jpg',            caption: 'Centro de ayuda' },
  { src: '/galeria/captura_descarga_2026.jpg',      caption: 'Página de descarga' },
  { src: '/galeria/captura_changelog_2026.jpg',     caption: 'VRA · Zonificación por índice de vegetación' },
  { src: '/galeria/captura_descarga2_2026.jpg',     caption: 'Estrés Térmico · CWSI en olivar' },
]

const videos = [
  { src: '/galeria/droncowzahori.mp4',  caption: 'Dron en campo · ZahoriFields' },
  { src: '/galeria/dronborrar.mp4',     caption: 'Vuelo de dron' },
  { src: '/galeria/dronmagico.mp4',     caption: 'Dron agrícola' },
]

function PhotoThumb({ item, onClick }) {
  return (
    <button onClick={onClick} className="group relative w-full aspect-video overflow-hidden rounded-sm border border-border cursor-pointer focus:outline-none">
      <img src={item.src} alt={item.caption} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-200" />
      {item.caption && (
        <p className="absolute bottom-0 left-0 right-0 px-3 py-2 text-[11px] text-white bg-black/50 truncate opacity-0 group-hover:opacity-100 transition-opacity">
          {item.caption}
        </p>
      )}
    </button>
  )
}

function VideoThumb({ item, onClick }) {
  return (
    <button onClick={onClick} className="group relative w-full aspect-video overflow-hidden rounded-sm border border-border bg-black cursor-pointer focus:outline-none">
      <video src={item.src} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" muted />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
          <div className="w-0 h-0 border-y-[7px] border-y-transparent border-l-[13px] border-l-white ml-1" />
        </div>
      </div>
      {item.caption && (
        <p className="absolute bottom-0 left-0 right-0 px-3 py-2 text-[11px] text-white bg-black/50 truncate">
          {item.caption}
        </p>
      )}
    </button>
  )
}

function Lightbox({ items, active, onClose }) {
  const [idx, setIdx] = useState(active)
  const prev = () => setIdx(i => (i - 1 + items.length) % items.length)
  const next = () => setIdx(i => (i + 1) % items.length)
  const item = items[idx]

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
      onClick={onClose}
      onKeyDown={e => { if (e.key === 'ArrowLeft') prev(); if (e.key === 'ArrowRight') next(); if (e.key === 'Escape') onClose() }}
      tabIndex={0}
      autoFocus
    >
      <button className="absolute left-4 text-white/60 hover:text-white p-2" onClick={e => { e.stopPropagation(); prev() }}>
        <ChevronLeft className="w-8 h-8" />
      </button>

      <div className="w-[95vw] max-h-[92vh] px-12" onClick={e => e.stopPropagation()}>
        {item.src.endsWith('.mp4') ? (
          <video src={item.src} controls autoPlay className="max-h-[88vh] max-w-full mx-auto rounded-sm" />
        ) : (
          <img src={item.src} alt={item.caption} className="max-h-[88vh] max-w-full mx-auto rounded-sm object-contain" />
        )}
        {item.caption && <p className="text-center text-white/60 text-sm mt-4">{item.caption}</p>}
      </div>

      <button className="absolute right-4 text-white/60 hover:text-white p-2" onClick={e => { e.stopPropagation(); next() }}>
        <ChevronRight className="w-8 h-8" />
      </button>

      <button className="absolute top-4 right-4 text-white/60 hover:text-white p-2" onClick={onClose}>
        <X className="w-6 h-6" />
      </button>

      <p className="absolute bottom-4 text-white/40 text-xs font-mono">{idx + 1} / {items.length}</p>
    </div>
  )
}

export default function Galeria() {
  const [photoIdx, setPhotoIdx] = useState(null)
  const [videoIdx, setVideoIdx] = useState(null)

  return (
    <div className="pt-16">
      <div className="bg-white border-b border-border">
        <div className="max-w-screen-xl mx-auto px-6 py-16">
          <span className="section-label">Capturas de pantalla y vídeos</span>
          <h1 className="text-4xl font-semibold tracking-tight text-text mb-3">Galería</h1>
          <p className="text-muted text-sm max-w-lg">
            Imágenes y vídeos de ZahoriFields en uso. Haz clic para ampliar.
          </p>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 py-14 space-y-16">
        {/* Fotos */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <span className="section-label">Fotos</span>
            <span className="text-xs font-mono text-muted">{photos.length} imágenes</span>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((item, i) => (
              <PhotoThumb key={i} item={item} onClick={() => setPhotoIdx(i)} />
            ))}
          </div>
        </section>

        {/* Videos */}
        <section>
          <div className="flex items-center gap-4 mb-6 border-t border-border pt-10">
            <span className="section-label">Vídeos</span>
            <span className="text-xs font-mono text-muted">{videos.length} vídeos</span>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {videos.map((item, i) => (
              <VideoThumb key={i} item={item} onClick={() => setVideoIdx(i)} />
            ))}
          </div>
        </section>
      </div>

      {photoIdx !== null && (
        <Lightbox items={photos} active={photoIdx} onClose={() => setPhotoIdx(null)} />
      )}
      {videoIdx !== null && (
        <Lightbox items={videos} active={videoIdx} onClose={() => setVideoIdx(null)} />
      )}
    </div>
  )
}
