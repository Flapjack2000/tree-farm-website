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

import Title from "./Title"
import Navbar from "./Navbar"
import ReviewSection from "./ReviewSection"
import Map from "./Map"

function App() {
  return (
    <>
      <Title />
      <Navbar />
      <Map />
      <ReviewSection />



    </>
  )
}

export default App