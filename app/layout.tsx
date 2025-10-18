import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Suspense } from "react"
import AOSInit from "@/components/aos-init"
import ClientOnly from "@/components/client-only"

export const metadata: Metadata = {
  title: "WebAgentix — Web & AI Agency",
  description: "Next-generation web and AI development agency portfolio.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <SiteHeader />
          <main className="mx-auto max-w-6xl px-4 py-8 md:py-10">
            <section className="relative overflow-hidden rounded-2xl border presentation-bg p-6 md:p-10">
              {children}
            </section>
          </main>
          <SiteFooter />
        </Suspense>
        <ClientOnly>
          <AOSInit />
        </ClientOnly>
        <Analytics />
      </body>
    </html>
  )
}
