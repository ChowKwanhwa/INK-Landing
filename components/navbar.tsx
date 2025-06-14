import { Button } from "@/components/ui/button"
import { ChevronDown, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link" // Assuming you might want to use Next.js Link for navigation

export function Navbar() {
  // You might want to manage active link state, e.g., using usePathname from next/navigation
  const activeLink = "Home" // Example: set "Home" as active for styling

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <nav className="w-full max-w-5xl rounded-full bg-black/20 backdrop-blur-xl border border-white/5 shadow-2xl">
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/ink-logo.png"
              alt="INK Protocol Logo"
              width={140} // Adjust width as needed for the logo image
              height={32} // Adjust height as needed
              priority
            />
          </Link>

          {/* Navigation items - centered */}
          <div className="hidden md:flex items-center space-x-2 text-sm font-medium text-gray-300">
            {["Home", "Service", "Vision", "Roadmap", "Partners"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`} // Example href, adjust as needed
                className={`px-4 py-2 rounded-full transition-all duration-300 ease-in-out
                  ${
                    activeLink === item
                      ? "bg-green-500/20 text-green-300 shadow-[0_0_15px_5px_rgba(52,211,153,0.3)]"
                      : "hover:bg-white/10 hover:text-white"
                  }`}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Right side - Language and Connect */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="hidden md:flex items-center space-x-1 text-sm text-gray-300 hover:bg-white/10 hover:text-white px-3 py-2 rounded-full"
            >
              <Globe className="w-4 h-4" />
              <span>EN</span>
              <ChevronDown className="w-3 h-3" />
            </Button>
            <Button className="bg-gradient-to-r from-green-400 to-lime-400 text-black hover:from-green-500 hover:to-lime-500 px-6 py-2 text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-shadow">
              Connect
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}
