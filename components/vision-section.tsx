import Image from "next/image"

export function VisionSection() {
  return (
    // Outer section for padding
    <section className="px-4 sm:px-6 py-20 text-white">
      {/* This div is the actual "card" */}
      <div className="bg-vision-bg max-w-7xl mx-auto rounded-[30px] p-8 sm:p-12 md:px-16 md:pt-16 md:pb-28 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 sm:mb-12 leading-tight max-w-4xl mx-auto">
          INK aims to be the <span className="bg-gradient-to-r from-[#8FFA87] to-[#A1F028] text-transparent bg-clip-text">"HTTP Protocol"</span> for
          <br />
          inscription assets, standardizing multi-
          <br />
          chain inscriptions to eliminate liquidity
          <br />
          fragmentation.
        </h2>
        <div className="mb-12 sm:mb-16">
          <Image
            src="/images/vision-graphic.png"
            alt="INK Protocol Vision - Dual Planets"
            width={1100}
            height={460}
            className="rounded-2xl object-cover w-full max-w-3xl lg:max-w-4xl mx-auto shadow-2xl"
          />
        </div>

        {/* Container for the text content below the image - Changed max-w-5xl to max-w-3xl lg:max-w-4xl */}
        <div className="max-w-3xl lg:max-w-4xl mx-auto text-left">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-[#AEF76F] whitespace-nowrap overflow-hidden text-ellipsis">
            Zero-Code Launch and Cross-Chain Mapping
          </h3>

          <div className="flex flex-col md:flex-row justify-between md:items-start mt-2">
            <div className="md:w-2/3">
              {" "}
              <p className="text-gray-400 text-sm leading-relaxed">
                We're democratizing asset launch with groundbreaking inscription tech: zero-code token creation,
                AI-assisted design, and seamless cross-chain mapping. This empowers everyone to participate in on-chain
                value creation without barriers.
              </p>
            </div>
            <div className="md:w-1/3 text-right mt-6 md:mt-24">
              <h4 className="text-base font-semibold mb-2 text-gray-100">RWA & Economic Flywheel</h4>
              <ul className="space-y-1 text-xs text-gray-500">
                <li>• Bridging Web3 and the Real World Assets</li>
                <li className="whitespace-nowrap">• Token Burning Mechanism and Inscription Payment System</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
