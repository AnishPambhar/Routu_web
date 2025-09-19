import type React from "react"
import type { Metadata, Viewport } from "next"
import { Montserrat } from "next/font/google"
import { Open_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import Navbar from "@/components/navbar"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://routohere.com"),
  title: "Routo – Online Marketplace & Delivery Platform | Routohere",
  description:
    "Routo is a peer-to-peer delivery and online marketplace app where vendors sell products and users send parcels or complete pick-and-drop jobs.",
  keywords: [
    "Routo",
    "routohere",
    "delivery app",
    "online marketplace",
    "peer-to-peer delivery",
    "send parcel",
    "vendor store",
    "e-commerce",
  ],
  openGraph: {
    title: "Routo – Online Marketplace & Delivery Platform | Routohere",
    description:
      "Routo is a peer-to-peer delivery and online marketplace app where vendors sell products and users send parcels or complete pick-and-drop jobs.",
    url: "https://routohere.com",
    siteName: "Routo",
    type: "website",
    images: [
      {
        url: "https://routohere.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Routo logo",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/fevicon.png", type: "image/png" },
    ],
    shortcut: [
      { url: "/fevicon.png", type: "image/png" },
    ],
    apple: [
      { url: "/fevicon.png", type: "image/png" },
    ],
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${montserrat.variable} ${openSans.variable}`}>
        <Navbar />
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
