import {
  CircleCheckBig,
  Eye,
  EyeOff,
  ClipboardClock,
  Send,
  Power, 
  Bell,
  User
} from "lucide-react";

import { useState } from "react";
import Logo from "../assets/idn.png"

const navbar = () => {
  const [show, setShow] = useState(false);

  const earnings = "$0.00/daily";

  return (
    <div className="border border-zinc-800">
      <nav className="bg-black w-full h-18 flex items-center cursor-default text-sm text-zinc-100 justify-between px-5">
        <div className="logo-names flex items-center gap-20 ml-14">
          <div className="logo text-sm text-zinc-100 flex items-center gap-2"><span><img className="w-10 rounded-4xl" src={Logo}/></span> IDN Network</div>
          <div className="names flex gap-16 items-center">
            <a>
              Quotes
              <div className="flex items-center gap-1 font-bold">
                {" "}
                <CircleCheckBig size={16} color="green" /> 0 won{" "}
              </div>
            </a>
            <a className="text-zinc-950 select-none font-bold">
              Quotes
              <div className="flex items-center gap-1 text-zinc-100">
                {" "}
                <Send size={16} color="orange" /> 0 sent{" "}
              </div>
            </a>
            <a className="text-zinc-950 select-none font-bold">
              Quotes
              <div className="flex items-center gap-1 text-zinc-100">
                {" "}
                <ClipboardClock size={16} color="red" /> 0 pending{" "}
              </div>
            </a>
            {/* eye */}
            <div className=" text-zinc-200 p-2 rounded-lg w-64 h-14 mb-4">
              <p className="text-sm mb-2">Forecast Daily Earnings</p>
              <div className="flex items-center gap-2">
                {/* Show or hide text based on state */}
                <span className="text-lg font-semibold text-zinc-200">
                  {show ? earnings : "••••••"}
                </span>

                {/* Toggle button */}
                <button onClick={() => setShow(!show)}>
                  {show ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="right-side-btns flex gap-2">
          <button className="rounded-4xl p-2 hover:bg-zinc-800 cursor-pointer">
            <Power size={28} color="red" />
          </button>
          <button className="rounded-4xl p-2 hover:bg-zinc-800 cursor-pointer">
            <Bell size={28} />
          </button>
           <button className="rounded-4xl p-2 hover:bg-zinc-800 bg-zinc-800 border border-zinc-500 cursor-pointer">
            <User size={32} />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
