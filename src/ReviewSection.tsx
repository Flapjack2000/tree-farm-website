import { Facebook } from "lucide-react"

function ReviewSection() {
  return (
    <>
      <div className="flex-col flex items-center w-full h-fit border-1 bg-[#ededed]">
        <div className="flex flex-row items-center gap-5 m-5">
          <p className="text-sm md:text-lg">Leave us a Google review!</p>

          <a href="https://app.reviewflowz.com/l/2lJU4QmAkGf8Aa624BJHiY">
            <div className="w-fit h-fit">
              <img className="w-[96px] md:w-[64px] border-2 border-white" src="../images/qr_code.png" alt="" />
            </div>

          </a>
          <p className="text-sm md:text-lg">(click or scan)</p>

        </div>

        <div className="flex flex-row items-center gap-5 m-5">
          <p className="text-sm md:text-lg">Check out our Facebook page!</p>

          <a href="https://www.facebook.com/victorias.treefarm/">
            <div className="w-fit h-fit bg-blue-500 rounded-lg">
              <Facebook className="w-[64px] h-[64px]" fill="white" color="white" strokeWidth={.5} />
            </div>
          </a>
        </div>
      </div>
    </>
  )
}

export default ReviewSection