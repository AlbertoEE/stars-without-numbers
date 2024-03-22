"use client"

import "@/styles/globals.css"
import { Providers } from "./providers"
import CustomNavbar from "./components/CustomNavbar"
import { type ReactElement } from "react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): ReactElement {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="h-screen">
        <video
          preload="true"
          autoPlay
          loop
          muted
          className="absolute z-0 object-cover w-full h-full"
        >
          <source src="/imgs/ui/space.mp4" type="video/mp4" />
        </video>
        <Providers>
          <div className="bg-cover bg-center bg-space h-full min-h-screen font-roboto-mono antialiased space-theme bg-background flex flex-col items-center justify-center z-10">
            <main className="container h-[90%] mx-auto max-w-7xl pt-8 px-6 flex flex-col items-center justify-center">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  )
}
