function Banner({ text, loopTime }: { text: string, loopTime: number }) {

  return (
    <>
      <div className="w-full h-20 text-sm md:text-3xl flex flex-row items-center overflow-hidden bg-black relative">

        <div className="text-white overflow-hidden inline absolute whitespace-nowrap"
          style={{ animation: `banner ${loopTime}s linear infinite` }}>
          {text.toUpperCase()}
        </div>

        <div className="text-white overflow-hidden inline absolute whitespace-nowrap"
          style={{
            transform: "translateX(100vw)",
            animation: `banner ${loopTime}s linear infinite ${loopTime / 2}s`
          }}>
          {text.toUpperCase()}
        </div>

      </div>
    </>
  )
}

export default Banner