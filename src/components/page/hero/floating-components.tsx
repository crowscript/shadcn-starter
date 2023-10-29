import { imgTest } from "@/config/img"
import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Ripples from "react-ripples"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { UserPlus2 } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { ComboboxForm } from "./comboboxForm"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { NavigationMenuDemo } from "./navigationMenuDemo"
import { AlertDialogDemo } from "./AlertDialogDemo"

export const FloatingComponents: React.FC<{}> = () => {
  return (
    <div className="relative z-20 hidden w-1/2 min-w-[616px] flex-col lg:flex">
      <>
        <div className="absolute left-0 top-[50px] z-0 max-w-fit animate-[levitate_20s_ease_infinite_05s]">
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <Image
              src={imgTest[1].src}
              alt={imgTest[1].alt}
              width={200}
              height={200}
              sizes="100vw"
              className="aspect-[1/1] object-cover transition-all duration-700 hover:scale-110"
            />
          </div>
        </div>

        <div className="absolute -top-[150px] left-[220px] z-0 max-w-[300px] animate-[levitate_18s_ease_infinite_1s]">
          <div className="relative ">
            <Card className="md:w-[350px]">
              <CardHeader>
                <div className="overflow-inherit z-10 flex w-full shrink-0 items-center justify-between rounded-md subpixel-antialiased">
                  <div className="flex gap-5">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col items-start justify-center">
                      <h4 className="text-default-600 text-sm font-semibold leading-none">
                        Zoey Lang
                      </h4>
                      <h5 className="text-default-400 text-sm tracking-tight">
                        @zoeylang
                      </h5>
                    </div>
                  </div>
                  <Ripples
                    color="hsl(0deg 0% 100% / 40%)"
                    className="rounded-md"
                  >
                    <Button
                      className="bg-primary inline-flex items-center justify-center gap-x-1.5 border border-transparent px-2.5 py-1 text-xs text-white hover:bg-blue-700 focus:outline-none"
                      variant="default"
                      size="sm"
                    >
                      <UserPlus2 strokeWidth={1.25} />
                      Follow
                    </Button>
                  </Ripples>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-default-400 pl-px text-sm">
                  Full-stack developer, @getnextui lover she/her{" "}
                </p>
              </CardContent>
              <CardFooter>
                <div className="color-inherit rounded-b-large flex h-auto w-full items-center gap-3 overflow-hidden subpixel-antialiased">
                  <div className="flex gap-1">
                    <p className="text-default-400 text-sm font-semibold">4</p>
                    <p className=" text-default-400 text-sm">Following</p>
                  </div>
                  <div className="flex gap-1">
                    <p className="text-default-400 text-sm font-semibold">
                      97.1K
                    </p>
                    <p className="text-default-400 text-sm">Followers</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div className="absolute -top-[90px] left-[75px] z-0 max-w-fit animate-[levitate_20s_ease_infinite_07s]">
          <div className="relative overflow-hidden rounded-lg shadow-none shadow-black/5">
            <Switch />
          </div>
        </div>

        <div className="absolute right-[185px] top-[140px] z-0 max-w-fit animate-[levitate_22s_ease_infinite_1s]">
          <div className="relative overflow-hidden rounded-lg shadow-none shadow-black/5">
            <AlertDialogDemo />
          </div>
        </div>

        <div className="absolute -top-[220px] left-0 z-0 max-w-fit animate-[levitate_20s_ease_infinite_1.2s]">
          <div className="relative shadow-none">
            <NavigationMenuDemo />
          </div>
        </div>
      </>
    </div>
  )
}
