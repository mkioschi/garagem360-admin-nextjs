import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Garagem 360',
}

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="bg-background font-inter text-xs text-foreground antialiased sm:text-sm md:text-md lg:text-base">
        {children}
      </body>
    </html>
  )
}
