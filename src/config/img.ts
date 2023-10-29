export interface ImgConfig {
  alt: string
  title: string
  src: string
}

export const imgTest: ImgConfig[] = [
  {
    alt: "Image 1200x900",
    title: "Title test",
    src: "/images/image1200x900.jpg",
  },
  {
    alt: "Image 600x600",
    title: "Title test",
    src: "/images/image600x600.jpg",
  },
]

export const imgTeam: ImgConfig[] = [
  {
    alt: "Milovan Vranjes",
    title: "Milovan Vranjes",
    src: "/images/team/team-misho.jpg",
  },
  {
    alt: "Stan Vranic",
    title: "Stan Vranic",
    src: "/images/team/team-stan.jpg",
  },
]
