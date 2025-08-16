import { Button } from "./components/ui/button"

function NavbarButton({ text }: { text: string }) {
  return (
    <Button variant={"outline"} className="flex-1/3 ml-4 mr-4 mt-1 mb-1 text-center cursor-pointer">
      {text}
    </Button>
  )
}


function Navbar() {

  return (
    <>
      <div className="grid border-t-2 border-b-2 bg-accent">
        <NavbarButton text="Home" />
        <NavbarButton text="Trees" />
        <NavbarButton text="About the Farm" />
      </div>
    </>
  )
}

export default Navbar