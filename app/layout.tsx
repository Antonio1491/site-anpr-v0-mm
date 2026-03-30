import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "900"],
  style: ["normal"],
  variable: "--font-montserrat",
})

const komikaDisplay = localFont({
  src: "../public/fonts/komika-display.ttf",
  variable: "--font-komika",
  display: "swap",
})

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export const metadata: Metadata = {
  title: "Jornadas de Capacitación ANPR México",
  description:
    "Fortaleciendo la Gestión de Parques y Espacios Públicos. Evento gratuito con conferencias impartidas por expertos líderes del sector.",
  icons: {
    icon: [
      {
        url: `${basePath}/favicon.ico`,
        type: "image/png",
      },
    ],
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href={`${basePath}/favicon.ico`} type="image/png" />
      </head>
      <body className={`${inter.className} ${montserrat.variable} ${komikaDisplay.variable} pt-16 md:pt-20`}>{children}</body>
    </html>
  )
}
