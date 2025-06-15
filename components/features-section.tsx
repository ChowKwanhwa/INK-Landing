import { CheckCircle, ArrowUpRight, Flame, Sparkles, Gem } from "lucide-react"
import Image from "next/image"
import React from "react"

export function FeaturesSection() {
  return (
    <React.Fragment>
      {/* Pioneering Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#8FFA87] to-[#A1F028] text-transparent bg-clip-text">
            Pioneering a New Era for Inscription Assets
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            INK Protocol introduces revolutionary infrastructure for inscription assets, enabling seamless cross-chain
            functionality and unprecedented scalability.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* One-Click Launch */}
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2 relative">
              <Image
                src="/images/feature1.png"
                alt="One-Click Launch Feature"
                width={500}
                height={400}
                className="rounded-2xl object-cover w-full"
              />
            </div>
            <div className="lg:col-span-3">
              <h3 className="text-5xl font-bold mb-6">
                <span className="text-one-click">One-Click</span> Launch
              </h3>
              <p className="text-gray-400 text-lg mb-8">Instantly create compliant inscription assets without code.</p>
              <ul className="space-y-4 text-base">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Zero Technical Barrier</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Full-Chain Compatible (ICPX-20 Standard)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Open-Source & Auditable</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Cross-Chain Mapping */}
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <h3 className="text-6xl font-bold mb-6">
                <span className="text-cross-chain">Cross-Chain</span>
                <br />
                Mapping
              </h3>
              <p className="text-gray-400 text-lg mb-8">
                Seamlessly convert BTC inscriptions <br /> through light-node verification, eliminating chain barriers.
              </p>
              <ul className="space-y-4 text-base">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Industry-Leading Speed</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>99% Fee Reduction</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Decentralized Secure Verification</span>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-2 relative">
              <Image
                src="/images/feature2.png"
                alt="Cross-Chain Mapping Feature"
                width={500}
                height={400}
                className="rounded-2xl object-cover w-full"
              />
            </div>
          </div>

          {/* SWAP Trading */}
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2 relative">
              <Image
                src="/images/feature3.png"
                alt="SWAP Trading Feature"
                width={500}
                height={400}
                className="object-contain w-full"
              />
            </div>
            <div className="lg:col-span-3">
              <h3 className="text-5xl font-bold mb-6">
                <span className="text-swap-text">SWAP</span> Trading
              </h3>
              <p className="text-gray-400 text-lg mb-8">
                Our built-in liquidity pools enable instant inscription asset swaps.
              </p>
              <ul className="space-y-4 text-base">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Optimal Price Routing</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Deflationary Trading</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Seamless Wallet Compatibility</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Staking LAUNCHPOOL */}
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <h3 className="text-5xl font-bold mb-6 leading-tight">
                <span className="text-staking-text">Staking</span>
                <br />
                LAUNCHPOOL
              </h3>
              <p className="text-gray-400 text-lg mb-8">
                Stake $INK to earn ecosystem rewards. New inscription projects must stake $INK to gain a credit score
                and qualify for listing.
              </p>
              <ul className="space-y-4 text-base">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Dual Staking & Mining Rewards</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Credit Score Assurance</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>DAO Governance Rights</span>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-2 relative group">
              <Image
                src="/images/feature4.png"
                alt="Staking LAUNCHPOOL Feature"
                width={500}
                height={400}
                className="rounded-2xl object-cover w-full"
              />
            </div>
          </div>

          {/* Inscription Payment */}
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2 relative">
              <Image
                src="/images/feature5.png"
                alt="Inscription Payment Feature"
                width={500}
                height={500}
                className="object-contain w-full"
              />
              <div className="absolute top-1/2 -translate-y-1/2 left-4">
                <div className="h-10 px-3 bg-gray-800/70 border border-white/10 rounded-full flex items-center justify-center shadow-md">
                  <Gem className="w-5 h-5 text-green-400" />
                </div>
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
              </div>
            </div>
            <div className="lg:col-span-3">
              <h3 className="text-4xl font-bold mb-6">
                <span className="text-inscription-pink">Inscription</span> Payment
              </h3>
              <p className="text-gray-400 text-lg mb-8">
                CITYVERSE PAYFI, powered by TEVAU Bank, offers a Web3 payment solution supporting over 80 million
                physical and online merchants.
              </p>
              <ul className="space-y-3 text-base">
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span>VISA Authorized</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Spend-to-Earn Incentives</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Direct Inscription Payment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Quote Section and Zero-Code Launch Section removed from here */}
    </React.Fragment>
  )
}
