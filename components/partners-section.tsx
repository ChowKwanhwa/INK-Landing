import Image from "next/image"

const partners = [
  "Binance.png",
  "Beosin.png",
  "BitTorrent.png",
  "Circle.png",
  "Jump.png",
  "ME.png",
  "MEXC.png", 
  "Meta.png",
  "NFTHub.png",
  "OKX.png",
  "Stripe.png",
  "TronLink.png"
]

export function PartnersSection() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Strategic Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-70">
          {partners.map((logo, i) => (
            <div key={i} className="h-12 flex items-center justify-center">
              <Image 
                src={`/images/Parters-with-BG/${logo}`}
                alt={`Partner ${logo.replace('.png', '')}`}
                width={120}
                height={40}
                className="max-h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
