import * as React from "react"
import Link from "next/link"
import { NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"

interface NavbarProps {
  items?: NavItem[]
}

export function Navbar({ items }: NavbarProps) {
  return (
    <div className="flex items-center gap-6 md:gap-10">
      {items?.length ? (
        <nav className="flex gap-6">
          <ul className="hidden justify-start gap-4 lg:flex">
            {items?.map(
              (item, index) =>
                item.href && (
                  <li
                    key={index}
                    className="text-medium box-border list-none whitespace-nowrap data-[active=true]:font-semibold"
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "tap-highlight-transparent  focus-visible:ring-ring ring-offset-background text-medium text-foreground active:opacity-disabled data-[active=true]:text-primary group relative inline-flex items-center no-underline transition-all duration-300 ease-in-out hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[active=true]:font-medium",
                        item.disabled && ""
                      )}
                    >
                      <span className="bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]">
                        {item.title}
                      </span>
                    </Link>
                  </li>
                )
            )}
          </ul>
        </nav>
      ) : null}
    </div>
  )
}
