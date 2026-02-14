import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VoyZa - Plan Complex Trips Without the Chaos',
  description: 'VoyZa helps you visualize, optimize, and collaborate on trips with multiple locations. Plan smarter trips today.',
  keywords: ['trip planning', 'travel app', 'route optimization', 'collaborative travel', 'multi-location trips'],
  openGraph: {
    title: 'VoyZa - Plan Complex Trips Without the Chaos',
    description: 'VoyZa helps you visualize, optimize, and collaborate on trips with multiple locations.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
