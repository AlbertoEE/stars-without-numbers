"use client"

import "@/styles/globals.css"
import { Providers } from "./providers"
import CustomNavbar from "./components/CustomNavbar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="h-screen">
        <Providers>
          <div className="h-full min-h-screen font-roboto-mono antialiased dark bg-background flex flex-col items-center justify-center">
            <CustomNavbar />
            <main className="container h-[90%] mx-auto max-w-7xl pt-8 px-6 flex flex-col items-center justify-center">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  )
}
