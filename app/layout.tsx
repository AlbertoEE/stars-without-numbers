"use client";

import "@/styles/globals.css";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="h-screen">
        <Providers>
          <div className="h-full min-h-screen font-orbitron antialiased dark bg-background flex flex-col items-center justify-center">
            <main className="container h-full mx-auto max-w-7xl pt-8 px-6 flex flex-col items-center justify-center">
                {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
