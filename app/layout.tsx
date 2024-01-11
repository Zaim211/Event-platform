import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'

const poppins = Poppins({
   subsets: ['latin'],
   weight: ['400', '500', '600', '700'],
   display: 'swap',
   variable: '--font-Poppins',
  })

export const metadata: Metadata = {
  title: 'Evently app',
  description: 'Evently application is platform for event management',
  icons: {
    icon: '/assets/images/logo.svg',}
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={poppins.variable}>{children}</body>
    </html>
    </ClerkProvider>
  )
}
