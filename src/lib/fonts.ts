import {
  Inter as FontSans,
  Oswald as FontSerif,
  Anonymous_Pro as FontMono,
} from "next/font/google"

export const fontSerif = FontSerif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "700",
})

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "400",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: "400",
})
