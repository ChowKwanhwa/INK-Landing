import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative px-6 py-32 text-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/bg-graphic.png')" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                A <span style={{ color: "#91F877" }}>New Era</span> for
                <br />
                Inscription Assets
              </h1>
              <p className="text-gray-400 text-lg mb-8 max-w-md">
                INK Protocol, built on ICPX-20, is a full-chain inscription protocol. We eliminate multi-chain
                fragmentation and high barriers, providing a standardized, low-barrier, and highly scalable solution for
                native on-chain asset issuance.
              </p>
              <Button className="bg-gradient-to-r from-green-400 to-lime-400 text-black hover:from-green-500 hover:to-lime-500 px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center space-x-2 group">
                <span>MINT</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
            <div className="relative flex justify-center items-center">
              <Image
                src="/images/hero-image.png"
                alt="INK Protocol Crystal"
                width={400} // Adjust width as needed
                height={400} // Adjust height as needed
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
