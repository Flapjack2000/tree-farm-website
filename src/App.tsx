import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Navbar from "./Navbar"
import Title from "./Title"
import Map from "./Map"
import { IconFacebook } from "./Icons"

function App() {
  return (
    <>
      <Title />
      <Navbar />

      <div className="flex-col flex items-center w-full h-fit border-1 bg-[#ededed]">
        <p>
          <a className="link" href="https://app.reviewflowz.com/l/2lJU4QmAkGf8Aa624BJHiY">
            Leave a review (replace with button, add QR code)
          </a>
        </p>
        <p >
          <a href="https://www.facebook.com/victorias.treefarm/">
            <IconFacebook size={64} stroke={"black"} />
          </a>
        </p>

      </div>

      <Map />


    </>
  )
}

export default App