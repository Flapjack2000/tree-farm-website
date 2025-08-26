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


import SiteHeader from "./SiteHeader"
import ReviewSection from "./ReviewSection"
import Map from "./Map"

function App() {
  return (
    <>
      <SiteHeader />
      <Map />
      <ReviewSection />
    </>
  )
}

export default App