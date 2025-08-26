import Title from "./Title"
import Navbar from "./Navbar"
import Banner from "./Banner"
function SiteHeader() {
  return (
    <>
      <Title />
      <Navbar />
      <Banner loopTime={16} />
    </>
  )
}

export default SiteHeader