const messages = () => {
  return (
    <div className="select-none">
      <div className="title text-white px-4 h-20 w-full flex items-center text-2xl"><h1>Messages</h1></div>
      <div className="body px-4 flex gap-8 items-center w-280">
        <div className="box h-150 w-70 bg-zinc-950 text-white rounded-2xl text-xl p-4">Clients</div>
        <div className="right text-white w-180 h-120 flex justify-center items-center"><p>Start a Chat Now!</p></div>
      </div>
    </div>
  )
}

export default messages