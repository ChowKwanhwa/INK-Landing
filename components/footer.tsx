import Image from "next/image"
import { Globe, FileText, FileCode, MessageSquare, Send, X } from "lucide-react"

export function Footer() {
  return (
    <footer className="px-6 py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <Image 
              src="/images/ink-logo.png"
              alt="INK Protocol Logo"
              width={120}
              height={32}
              className="h-8 w-auto"
            />
          </div>
          
          {/* Official Links as compact icons in 2 rows */}
          <div className="flex flex-col justify-end gap-4 mb-6 md:mb-0">
            <div className="flex justify-end space-x-4">
              <a href="https://x.com/TheINKProtocol" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 flex items-center justify-center bg-gray-800/80 hover:bg-gray-700 rounded-full transition-colors" 
                title="X">
                <X size={18} className="text-white" />
              </a>
              
              <a href="https://t.me/TheINKProtocol" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 flex items-center justify-center bg-gray-800/80 hover:bg-gray-700 rounded-full transition-colors"
                title="Telegram">
                <Send size={18} className="text-[#0088cc]" />
              </a>
              
              <a href="https://discord.gg/CkZmAF4V3s" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 flex items-center justify-center bg-gray-800/80 hover:bg-gray-700 rounded-full transition-colors"
                title="Discord">
                <MessageSquare size={18} className="text-[#5865F2]" />
              </a>
            </div>
            
            <div className="flex justify-end space-x-4">
              <a href="https://theinkprotocol.xyz/" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 flex items-center justify-center bg-gray-800/80 hover:bg-gray-700 rounded-full transition-colors"
                title="Website">
                <Globe size={18} className="text-[#AEF76F]" />
              </a>
              
              <a href="https://theinkprotocol.gitbook.io/theinkprotocol" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 flex items-center justify-center bg-gray-800/80 hover:bg-gray-700 rounded-full transition-colors"
                title="Whitepaper">
                <FileText size={18} className="text-[#AEF76F]" />
              </a>
              
              <a href="https://theinkprotocol.gitbook.io/one-pager/" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 flex items-center justify-center bg-gray-800/80 hover:bg-gray-700 rounded-full transition-colors"
                title="One-pager">
                <FileCode size={18} className="text-[#AEF76F]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
