
import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from "@/components/language-context"

export const metadata: Metadata = {
  title: 'AICTE Vaani Workshop | NiT',
  description: 'Application of Data Science and Machine Learning in Smart Computing',
  generator: 'Jishnudip Saha',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
