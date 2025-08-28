import SiteHeader from "./SiteHeader"
import ImageCarousel from "./ImageCarousel"

function About() {

  return (
    <>
      <SiteHeader />

      <ImageCarousel
        label="Trees"
        paths={[
          "/images/snowy_trees(2).jpg",
          "/images/snowy_trees(1).jpg",
          "/images/snowy_trees(3).jpg",
          "/images/snowy_trees(4).jpg"
        ]}
        alts={[
          "snowy trees",
          "snowy trees",
          "snowy trees",
          "snowy trees",
        ]}
      />
      <ImageCarousel
        label="Gnomes"
        paths={[
          "/images/gnomes(1).jpg",
          "/images/gnomes(4).jpg",
          "/images/gnomes(2).jpg",
          "/images/gnomes(5).jpg",
          "/images/gnomes(3).jpg",
        ]}
        alts={[
          "snowy trees",
          "snowy trees",
          "snowy trees",
          "snowy trees",
        ]} />


    </>
  )
}

export default About