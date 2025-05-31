import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { HeygenAvatar } from "@/components/HeygenAvatar"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Decifra Aí! - Hub Moderno de Inteligência Artificial",
  description: "Portal de tendências, integrações e ferramentas de IA para transformar sua experiência digital",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans bg-[#0B0E12] text-white antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
          <HeygenAvatar />
        </ThemeProvider>
      </body>
    </html>
  )
}
