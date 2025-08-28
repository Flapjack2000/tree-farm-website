import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function CarouselImageItem({ path, alt, label }: { path: string, alt: string, label: string }) {

  return (
    <>
      <CarouselItem className="md:pl-5">
        <div className="flex flex-col">
          <img className="w-auto md:max-h-[560px] object-contain" src={path} alt={alt} />
          <p>{label}</p>
        </div>
      </CarouselItem>
    </>
  )
}

function ImageCarousel({ paths, alts, label }: { paths: string[], alts: string[], label: string }) {

  return (
    <>
      <Carousel opts={{ loop: true }} className=" m-4 md:m-15" style={{ fontFamily: "Delius" }}>
        <CarouselContent className="md:-ml-5">
          {paths.map((item, index) => (
            <CarouselImageItem label={label + " | " + (index + 1)} path={item} alt={alts[index]} />
          ))}
        </CarouselContent>

        <CarouselPrevious className="opacity-95 absolute bottom-0 -left-2 md:-left-6" />
        <CarouselNext className="opacity-95 absolute bottom-0 -right-2 md:-right-6" />
      </Carousel>
    </>
  )
}

export default ImageCarousel