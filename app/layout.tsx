import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import { Footer } from "@/components/footer"
import { Analytics } from "@vercel/analytics/react" // ✅ أضف السطر ده

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Target Co. - Pharmaceutical Machinery Solutions",
  description:
    "Leading pharmaceutical machinery distributor in Egypt and Middle East. Sole agent for premium pharmaceutical baking and industrial equipment.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics /> {/* ✅ أضف السطر ده تحت الفوتر */}
      </body>
    </html>
  )
}
