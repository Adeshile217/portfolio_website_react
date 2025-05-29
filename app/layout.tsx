import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ADESHILE',
  description: 'Portfolio',
  icons:{
    icon:["/favicon.ico?v=4"],
    apple:["apple-touch-icon.png?v=4"],
    shortcut:["apple-touch-icon.png"]
  }
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
