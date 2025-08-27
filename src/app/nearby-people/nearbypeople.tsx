const nearbypeople = () => {
  return (
    <div className="w-285 h-175 flex justify-center items-center">
      <div className="box text-white text-center space-y-4">
        <h1 className="text-2xl">Exeption: Unable to get current location</h1>
        <button className=" cursor-pointer bg-white text-zinc-950 py-2 px-5 rounded-md">Retry</button>
      </div>
    </div>
  )
}

export default nearbypeople