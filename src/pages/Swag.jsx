import { ArrowRight, ExternalLink, Truck, RefreshCw, Shield } from 'lucide-react'

const products = [
  {
    name: 'Square Stickers',
    desc: 'Pegatina cuadrada con el logo ZahoriFields. Vinilo de alta calidad, resistente al agua y a la intemperie. Perfecta para portátiles, equipos de campo y vehículos.',
    price: '$2.50',
    tag: 'Más popular',
    img: '/images/swag/square-stickers.jpg',
    url: 'https://zahorifields.printify.me/product/29613378',
  },
  {
    name: 'Vinyl Kiss-Cut Stickers',
    desc: 'Pegatina troquelada en vinilo con acabado profesional. Contorno perfecto alrededor del logo. Ideal para personalizar equipamiento de laboratorio o drones.',
    price: '$9.42',
    tag: null,
    img: '/images/swag/vinyl-kiss-cut-stickers.jpg',
    url: 'https://zahorifields.printify.me/product/29613699',
  },
  {
    name: 'Custom Pin Buttons',
    desc: 'Chapa con el logo ZahoriFields. Perfecta para congresos, jornadas técnicas y eventos de agricultura de precisión.',
    price: '$4.99',
    tag: null,
    img: '/images/swag/custom-pin-buttons.jpg',
    url: 'https://zahorifields.printify.me/product/29613439',
  },
]

const perks = [
  { icon: Truck, label: 'Envío internacional', desc: 'Enviamos a todo el mundo desde proveedores locales.' },
  { icon: RefreshCw, label: 'Producción bajo demanda', desc: 'Se fabrica cuando se compra. Sin stock, sin residuos.' },
  { icon: Shield, label: 'Pago seguro', desc: 'Checkout gestionado por Printify con total seguridad.' },
]

export default function Swag() {
  return (
    <div className="pt-16">
      <div className="bg-white border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <span className="section-label">Merchandising oficial</span>
          <h1 className="text-4xl font-semibold tracking-tight text-text mb-3">Swag</h1>
          <p className="text-muted text-sm max-w-lg">
            Productos oficiales de ZahoriFields. Fabricación bajo demanda, envío internacional.
            Cada compra apoya el desarrollo del proyecto.
          </p>
          <a
            href="https://zahorifields.printify.me"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mt-6 btn-ghost text-xs"
          >
            Ver tienda completa <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-14">

        {/* Productos */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 mb-16">
          {products.map(({ name, desc, price, tag, img, url }) => (
            <div key={name} className="card flex flex-col group">
              <div className="w-full aspect-square bg-surface-2 border border-border mb-4 overflow-hidden">
                <img
                  src={img}
                  alt={name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="text-sm font-semibold text-text leading-tight">{name}</h3>
                {tag && (
                  <span className="text-[10px] font-mono text-accent border border-accent bg-accent-light px-1.5 py-0.5 rounded-sm whitespace-nowrap shrink-0">
                    {tag}
                  </span>
                )}
              </div>

              <p className="text-xs text-muted leading-relaxed mb-4 flex-1">{desc}</p>

              <div className="flex items-center justify-between mt-auto">
                <span className="text-sm font-semibold text-text font-mono">{price}</span>
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-accent hover:underline font-medium"
                >
                  Comprar <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Perks */}
        <div className="border-t border-border pt-14">
          <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
            {perks.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="bg-white px-7 py-6 flex items-start gap-4">
                <div className="w-9 h-9 bg-accent-light rounded-sm flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm font-medium text-text mb-1">{label}</p>
                  <p className="text-xs text-muted leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA tienda */}
        <div className="mt-10 text-center">
          <p className="text-xs text-muted mb-3">Gestionado por</p>
          <a
            href="https://zahorifields.printify.me"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost inline-flex items-center gap-2"
          >
            Ir a la tienda ZahoriFields <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  )
}
