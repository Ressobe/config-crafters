import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Config Crafters',
  description: 'Website for people that love linux and sharing config with world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
