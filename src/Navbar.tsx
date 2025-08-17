import { Button } from "./components/ui/button"
import { Link } from "react-router"
function NavbarButton({ text, path }: { text: string, path: string }) {
  return (
    <Link className="flex-1/3 text-center ml-4 mr-4 mt-2 mb-2" to={path}>
      <Button className="w-full cursor-pointer" variant={"outline"} >
        {text}
      </Button>
    </Link >
  )
}


function Navbar() {

  return (
    <>
      <div className="grid md:flex border-t-2 border-b-2 bg-accent">
        <NavbarButton text="Home" path="/" />
        <NavbarButton text="Trees" path="/trees" />
        <NavbarButton text="About the Farm" path="/about" />
      </div>
    </>
  )
}

export default Navbar