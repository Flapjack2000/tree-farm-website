import { Separator } from "./components/ui/separator"

function Map() {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="w-[70%] md:w-[40%] flex flex-col items-center">

          <p className="pt-10 text-lg md:text-3xl">
            Get Directions
          </p>
          <p className="font-[Delius] text-xs md:text-lg">
            9990 Vosburg Ln NE, Ada, MI 49301
          </p>
          <Separator />


          <iframe
            className="border-2 m-4 w-full aspect-square"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2916.682773154637!2d-85.42598492467164!3d43.027063892703254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x881859c247fe12cf%3A0xd40eec134f74187d!2s9990%20Vosburg%20Ln%20NE%2C%20Ada%2C%20MI%2049301!5e0!3m2!1sen!2sus!4v1755391717265!5m2!1sen!2sus" allowFullScreen={false} loading="eager" referrerPolicy="no-referrer-when-downgrade">
          </iframe>

          <p className="text-center">If the map isn't working, click
            <a
              className="pl-1 pr-1 underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
              href="https://maps.app.goo.gl/nJniBageePhHoCTVA"
              target="_blank">
              here
            </a>
            for directions.
          </p>
        </div>
      </div>
    </>
  )
}

export default Map