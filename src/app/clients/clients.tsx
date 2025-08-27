import { Users } from "lucide-react"
import { useState } from "react"
const clients = () => {

  let [text, setText] = useState("")

  return (
    <div className="w-280 bg-black text-white min-h-full px-2 pb-22">
      <div className="header h-20 flex items-center px-2">
        <div className="title text-3xl">
          Clients
        </div>
      </div>
      <div className="box bg-zinc-950 p-4 rounded-xl flex justify-between items-center">
        <div className="title flex flex-col gap-2">
          <h3 className="font-bold">0 / 6 clients used</h3>
          <p className="font-normal text-sm">6 clients can still be added</p>
        </div>
        <div className="icon"><Users size={26} /></div>
      </div>
      <div className="btns flex gap-18 py-8 text-zinc-600 px-8">
        <button onClick={()=>{setText("No Clients")}} className="cursor-pointer px-4 py-2 rounded-xl focus:bg-zinc-800 focus:text-white">All</button>
        <button onClick={()=>{setText("No Clients")}} className="cursor-pointer px-4 py-2 rounded-xl  focus:bg-zinc-800 focus:text-white">Adding by You</button>
        <button onClick={()=>{setText("No Clients")}} className="cursor-pointer px-4 py-2 rounded-xl  focus:bg-zinc-800 focus:text-white">Pending Clients</button>
        <button onClick={()=>{setText("No Clients")}} className="cursor-pointer px-4 py-2 rounded-xl  focus:bg-zinc-800 focus:text-white">Muted Clients</button>
        <button onClick={()=>{setText("No Clients")}} className="cursor-pointer px-4 py-2 rounded-xl  focus:bg-zinc-800 focus:text-white">Blocked Clients</button>
      </div>
      <div className="body text-center w-full text-2xl">
        {text}
      </div>
    </div>
  )
}

export default clients