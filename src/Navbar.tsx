import { Button } from "./components/ui/button"
import { Link } from "react-router"
import { IconHome, IconPineTree, IconTractor } from "./Icons"


function NavbarButton(props: any) {
  return (
    <Link className="flex-1/3 text-center ml-4 mr-4 mt-2 mb-2" to={props.path}>
      <Button className="w-full cursor-pointer font-[Delius]" variant={"outline"} >
        <props.icon size={24} stroke={"var(--foreground)"} />
        {props.text}
      </Button>
    </Link >
  )
}

function Navbar() {
  return (
    <>
      <div className="grid md:flex border-t-2 border-b-2 bg-accent">
        <NavbarButton text="Home" icon={IconHome} path="/" />
        <NavbarButton text="The Trees" icon={IconPineTree} path="/trees" />
        <NavbarButton text="About the Farm" icon={IconTractor} path="/about" />
      </div>
    </>
  )
}

export default Navbar