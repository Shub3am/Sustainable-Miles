import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from "./components/header/header"
import Footer from './components/footer/footer'
import 'mapbox-gl/dist/mapbox-gl.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sustainable Miles',
  description: 'By Shubham Vishwakarma, CF-08',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}><Header/>{children}<Footer/></body>
    </html>
  )
}
