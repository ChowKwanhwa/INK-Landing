import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'INK Protocol | Revolutionizing Inscription Assets',
  description: 'INK Protocol provides revolutionary infrastructure for inscription assets, enabling seamless cross-chain functionality and unprecedented scalability.',
  keywords: ['INK Protocol', 'blockchain', 'inscription assets', 'cross-chain', 'Web3', 'cryptocurrency'],
  authors: [{ name: 'INK Protocol Team' }],
  creator: 'INK Protocol',
  publisher: 'INK Protocol',
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://theinkprotocol.xyz',
    title: 'INK Protocol | Revolutionizing Inscription Assets',
    description: 'INK Protocol provides revolutionary infrastructure for inscription assets, enabling seamless cross-chain functionality and unprecedented scalability.',
    siteName: 'INK Protocol',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'INK Protocol | Revolutionizing Inscription Assets',
    description: 'INK Protocol provides revolutionary infrastructure for inscription assets, enabling seamless cross-chain functionality and unprecedented scalability.',
    creator: '@TheINKProtocol'
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
