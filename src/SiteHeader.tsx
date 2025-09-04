import Title from "./Title"
import Navbar from "./Navbar"
import Banner from "./Banner"
function SiteHeader() {
  return (
    <>
      <Title />
      <Navbar />
      <Banner text={"We will open Friday, Nov 28 2025!"} loopTime={18} />
    </>
  )
}

export default SiteHeader