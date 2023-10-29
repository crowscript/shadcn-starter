import Link from "next/link"

import { siteConfig, navConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa"
import ThemeSwitch from "@/components/ThemeSwitch"
import MaxWidthWrapper from "../MaxWidthWrapper"
import { MobileNav } from "./MobileNav"
import { User2 } from "lucide-react"
import { Navbar } from "./Navbar"

export function SiteHeader() {
  return (
    <header className="bg-background/80 sticky top-0 z-40 w-full border-b backdrop-blur-xl backdrop-saturate-150">
      <MaxWidthWrapper>
        <div className="flex h-16 items-center sm:justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="mt-1 whitespace-nowrap font-serif text-xl md:text-3xl">
              {siteConfig.name}
            </span>
          </Link>

          <div className="flex flex-1 items-center justify-end sm:space-x-4">
            <Navbar items={navConfig.mainNav} />
            <nav className="flex items-center space-x-1">
              <div className="hidden items-center gap-2 sm:flex">
                <Link
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-visible:ring-ring ring-offset-background hover:bg-accent hover:text-accent-foreground rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                >
                  <div className="icon ghost">
                    <FaGithub className="fill-zinc-500" size={18} />
                    <span className="sr-only">Github</span>
                  </div>
                </Link>
                <ThemeSwitch />
              </div>

              <Button
                asChild
                className="text-default-600 bg-default-100 rounded-full text-sm font-normal"
                variant="outline"
              >
                <Link href={siteConfig.links.twitter}>
                  <User2
                    strokeWidth={1.25}
                    className="mr-2 h-5 w-5 stroke-zinc-500"
                  />{" "}
                  Login
                </Link>
              </Button>
              <MobileNav />
            </nav>
          </div>
        </div>
      </MaxWidthWrapper>
    </header>
  )
}
