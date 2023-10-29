"use client"

import { BiRightArrowAlt } from "react-icons/bi"
import { siteConfig } from "@/config/site"
import Link from "next/link"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { Button } from "@/components/ui/button"
import Ripples from "react-ripples"
import { FloatingComponents } from "./floating-components"

export default function Hero() {
  return (
    <section className="overflow-hidden">
      <MaxWidthWrapper className="flex flex-col items-center justify-center">
        <div className="relative flex h-[calc(100vh_+_80px)] w-full flex-nowrap items-center justify-between">
          <div className="mx-auto flex max-w-7xl grow gap-4">
            <div className="relative z-20 flex w-full flex-col gap-6 lg:w-1/2 lg:min-w-[660px] xl:mb-10">
              <div className=" text-center leading-8 md:text-left md:leading-10">
                <h1 className="font-serif text-4xl lg:text-6xl">
                  Starter kit for the project with{" "}
                  <span className="bg-gradient-to-b from-[#FF1CF7] to-[#b249f8] bg-clip-text text-transparent">
                    Next.js
                  </span>
                  ,{" "}
                  <span className="bg-gradient-to-b from-[#5EA2EF] to-[#0072F5] bg-clip-text text-transparent">
                    Shadcn UI
                  </span>
                  ,{" "}
                  <span className="bg-gradient-to-b from-[#FF705B] to-[#FFB457] bg-clip-text text-transparent">
                    Tailwind
                  </span>
                  .
                </h1>
                <h2 className="text-default-600 my-2 block w-full max-w-full text-center text-lg md:text-left lg:text-xl">
                  This project is powered by{" "}
                  <Link
                    href={siteConfig.links.nextjs}
                    className="tap-highlight-transparent  focus-visible:ring-ring ring-offset-background text-medium text-primary active:opacity-disabled data-[active=true]:text-primary group relative inline-flex items-center no-underline transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[active=true]:font-medium dark:text-blue-300"
                  >
                    <span className="bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px] dark:from-blue-300 dark:to-blue-300">
                      Next.js
                    </span>
                  </Link>
                  ,{" "}
                  <Link
                    href={siteConfig.links.shadecn}
                    className="tap-highlight-transparent  focus-visible:ring-ring ring-offset-background text-medium text-primary active:opacity-disabled data-[active=true]:text-primary group relative inline-flex items-center no-underline transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[active=true]:font-medium dark:text-blue-300"
                  >
                    <span className="bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px] dark:from-blue-300 dark:to-blue-300">
                      Shadecn UI
                    </span>
                  </Link>
                  , and{" "}
                  <Link
                    href={siteConfig.links.tailwind}
                    className="tap-highlight-transparent  focus-visible:ring-ring ring-offset-background text-medium text-primary active:opacity-disabled data-[active=true]:text-primary group relative inline-flex items-center no-underline transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[active=true]:font-medium dark:text-blue-300"
                  >
                    <span className="bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px] dark:from-blue-300 dark:to-blue-300">
                      Tailwind
                    </span>
                  </Link>
                  . Features styling inspired by the Next UI library.
                </h2>
              </div>
              <div className="flex flex-col items-center gap-4 md:flex-row">
                <Ripples color="hsl(0deg 0% 100% / 40%)">
                  <Button
                    asChild
                    className="text-white "
                    variant="default"
                    scale="none"
                  >
                    <Link href="#">
                      Get Started{" "}
                      <BiRightArrowAlt className="text-default-500" size={20} />
                    </Link>
                  </Button>
                </Ripples>
                <Ripples color="hsl(0deg 0% 100% / 40%)">
                  <Button asChild className="" variant="outline">
                    <Link href={siteConfig.links.about}>Learn more</Link>
                  </Button>
                </Ripples>
              </div>
            </div>

            <FloatingComponents />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}
