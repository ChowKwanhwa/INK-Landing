"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import { cn } from "@/lib/utils"

const roadmapData = [
  {
    date: "2025 Q2",
    title: "Mainnet Launch",
    items: [
      "ICPX-20 standard release",
      "Visualized inscription scan explorer",
      "Cross-chain mapping (Alpha)",
      "Gas burn mechanism initiated",
    ],
  },
  {
    date: "2025 Q3 — Q4",
    title: "Ecosystem Expansion",
    items: [
      "Cross-chain bridge & DEX aggregator launch",
      "Inscription project credit rating system",
      "Lightweight node verification for reduced gas costs",
      "Launchpool & DAO Governance launch",
    ],
  },
  {
    date: "2026 Q1 — Q2",
    title: "RWA Inscription",
    items: [
      "NFT marketplace for inscription assets",
      "VISA card in partnership with compliant banks",
      "Tokenization of real estate & bonds via ICPX-20",
    ],
  },
  {
    date: "2026 Q3 — Q4",
    title: "AI Agent Integration",
    items: [
      "ZK oracle integration for off-chain data validation",
      "Inscription asset-backed lending enabled",
      "Inscription IDO Launchpad",
    ],
  },
]

export function RoadmapSection() {
  // currentIndex now refers to the index in the *full* roadmapData that should be highlighted.
  const [currentIndex, setCurrentIndex] = useState(0) // Start with the first item highlighted

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(roadmapData.length - 1, prevIndex + 1))
  }

  const displayedItems = useMemo(() => {
    if (roadmapData.length <= 3) {
      return roadmapData
    }

    let startIndex
    if (currentIndex === 0) {
      // If highlighting the first item, show items 0, 1, 2
      startIndex = 0
    } else if (currentIndex === roadmapData.length - 1) {
      // If highlighting the last item, show items L-3, L-2, L-1
      startIndex = roadmapData.length - 3
    } else {
      // Otherwise, center the highlighted item
      startIndex = currentIndex - 1
    }
    return roadmapData.slice(startIndex, startIndex + 3)
  }, [currentIndex])

  return (
    <section className="px-6 py-20 bg-[#0D0F18] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">INK Protocol Roadmap</h2>
        <p className="text-gray-400 mb-20">
          Building the Infrastructure for Cross-Chain Inscription and Asset Standardization
        </p>

        <div className="relative mb-16 pt-10">
          <div className="absolute top-[calc(50%+20px)] left-0 w-full h-0.5 bg-green-400/30 -translate-y-1/2" />
          <div className="relative flex justify-between items-start">
            {displayedItems.map((item, indexInSlice) => {
              // Determine if the current item in the slice is the one that should be active
              const isActive = item.date === roadmapData[currentIndex].date
              const isFirstOverall = roadmapData.indexOf(item) === 0

              return (
                <div key={item.date} className="relative flex flex-col items-center w-1/3 px-4">
                  <div
                    className={cn(
                      "absolute -top-10 rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-300 z-10",
                      isActive
                        ? "bg-[#8FFA87] text-black shadow-[0_0_15px_5px_rgba(143,250,135,0.3)]"
                        : "bg-gray-700 text-gray-300",
                    )}
                  >
                    {item.date}
                    <div
                      className={cn(
                        "absolute left-1/2 -bottom-2 w-4 h-4 transform -translate-x-1/2 rotate-45",
                        isActive ? "bg-[#8FFA87]" : "bg-gray-700",
                      )}
                    />
                  </div>

                  <div className="relative mt-8">
                    {isActive && (
                      <div className="absolute -inset-2.5 border-2 border-dashed border-green-400/50 rounded-full animate-pulse" />
                    )}
                    <div
                      className={cn(
                        "relative w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                        isActive ? "bg-green-400/20 border-green-400 w-12 h-12" : "bg-gray-800 border-green-400/30",
                      )}
                    >
                      <Check
                        className={cn(
                          "transition-all duration-300",
                          isActive ? "text-green-400 w-6 h-6" : "text-green-400/70 w-5 h-5",
                        )}
                      />
                    </div>
                  </div>

                  {/* Show curved line only if this item is the first overall AND the first in the current slice */}
                  {isFirstOverall && indexInSlice === 0 && (
                    <div className="absolute top-[calc(50%+20px)] right-1/2 w-1/2 h-16 -translate-y-[calc(50%-2px)]">
                      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                        <path
                          d="M100 50 C 50 50, 50 0, 0 0"
                          stroke="rgba(52, 211, 153, 0.3)"
                          fill="transparent"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  )}

                  <div className="mt-8 text-center">
                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                    <ul className="space-y-2 text-sm text-gray-400 text-left">
                      {item.items.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-gray-600 mr-2">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex justify-center items-center space-x-4 mt-12">
          <Button
            onClick={handlePrev}
            variant="outline"
            className="bg-gray-800 border-gray-700 hover:bg-gray-700 rounded-full w-16 h-10 text-white disabled:opacity-50 flex items-center justify-center px-5"
            disabled={currentIndex === 0}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <Button
            onClick={handleNext}
            variant="outline"
            className="bg-white text-black hover:bg-gray-200 rounded-full w-16 h-10 disabled:opacity-50 flex items-center justify-center px-5"
            disabled={currentIndex === roadmapData.length - 1}
          >
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
