import "./globals.css"
import type { Metadata } from "next"
import { fontMono, fontSans, fontSerif } from "@/lib/fonts"
import clsx from "clsx"
import { TailwindIndicator } from "@/components/TailwindIndicator"
import { ThemeProvider } from "@/components/ThemeProvider"
import { SiteHeader } from "@/components/page/HeaderMain"

export const metadata: Metadata = {
  title: "Shadcn NextUI Starter",
  description:
    "Starter kit for the project with NextJS, Shadcn UI and Tailwind",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      className={clsx(fontSans.variable, fontSerif.variable, fontMono.variable)}
    >
      <body className="bg-background min-h-screen font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
        <TailwindIndicator />
      </body>
    </html>
  )
}
