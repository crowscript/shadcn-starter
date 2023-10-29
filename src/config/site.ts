import { MainNavItem, SidebarNavItem } from "@/types/nav"

interface NavConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Shadcn Starter",
  description:
    "Starter kit for the project with Next.js, Shadcn UI and Tailwind.",
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/crowscript/shadcn-nextui-starter",
    docs: "https://ui.shadcn.com",
    about: "/about",
    nextjs: "https://nextjs.org/",
    shadecn: "https://ui.shadcn.com/",
    tailwind: "https://tailwindcss.com/",
    lucide: "https://lucide.dev/icons",
    nextui: "https://nextui.org/",
    reacticons: "https://react-icons.github.io/react-icons",
  },
}

export const navConfig: NavConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
        {
          title: "Installation",
          href: "/docs/installation",
          items: [],
        },
        {
          title: "components.json",
          href: "/docs/components-json",
          items: [],
        },
        {
          title: "Theming",
          href: "/docs/theming",
          items: [],
        },
        {
          title: "About",
          href: "/docs/about",
          items: [],
        },
      ],
    },
  ],
}
