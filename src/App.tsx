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

function App() {




  return (
    <>
      <div>

        {/* Title */}
        <div className="bg-primary select-none">
          <h1 className="text-xl md:text-8xl p-4 md:p-10 md:pt-0 text-center font-effect-3d-float" style={{ fontFamily: "Permanent Marker" }}>Victoria's Tree Farm</h1>
        </div>

        <Navbar />

      </div>
    </>
  )
}

export default App