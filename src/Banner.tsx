function Banner({ loopTime }: { loopTime: number }) {

  return (
    <>
      <div className="w-full h-20 text-sm md:text-3xl flex flex-row items-center overflow-hidden bg-black relative">

        <div className="text-white overflow-hidden inline absolute whitespace-nowrap"
          style={{ animation: `banner ${loopTime}s linear infinite` }}>
          WE ARE CLOSED FOR THE 2024 SEASON
        </div>

        <div className="text-white overflow-hidden inline absolute whitespace-nowrap"
          style={{
            transform: "translateX(100vw)",
            animation: `banner ${loopTime}s linear infinite ${loopTime / 2}s`
          }}>
          WE ARE CLOSED FOR THE 2024 SEASON
        </div>

      </div>
    </>
  )
}

export default Banner