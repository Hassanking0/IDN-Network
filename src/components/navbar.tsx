import {
  CircleCheckBig,
  Eye,
  EyeOff,
  ClipboardClock,
  Send,
  Power,
  Bell,
  User,
  Menu,
  X,
} from "lucide-react";

import { useState } from "react";
import Logo from "../assets/idn.png";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const earnings = "$0.00/daily";

  return (
    <div className="border-b border-zinc-800">
      {/* ------------------- DESKTOP NAV ------------------- */}
      <nav className="hidden lg:flex bg-black w-full h-18 items-center cursor-default text-sm text-zinc-100 justify-between px-5">
        <div className="logo-names flex items-center gap-20 ml-14">
          <div className="logo text-sm flex items-center gap-2">
            <img className="w-10 rounded-full" src={Logo} alt="Logo" />
            IDN Network
          </div>
          <div className="names flex gap-16 items-center">
            <a>
              Quotes
              <div className="flex items-center gap-1 font-bold">
                <CircleCheckBig size={16} color="green" /> 0 won
              </div>
            </a>
            <a className="font-bold">
              Quotes
              <div className="flex items-center gap-1">
                <Send size={16} color="orange" /> 0 sent
              </div>
            </a>
            <a className="font-bold">
              Quotes
              <div className="flex items-center gap-1">
                <ClipboardClock size={16} color="red" /> 0 pending
              </div>
            </a>
            {/* Forecast earnings */}
            <div className="text-zinc-200 p-2 rounded-lg w-64 h-14 mb-4">
              <p className="text-sm mb-2">Forecast Daily Earnings</p>
              <div className="flex items-center gap-2">
                <span className="text-lg font-semibold text-zinc-200">
                  {show ? earnings : "••••••"}
                </span>
                <button onClick={() => setShow(!show)}>
                  {show ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* right side buttons */}
        <div className="right-side-btns flex gap-2">
          <button className="rounded-full p-2 hover:bg-zinc-800">
            <Power size={28} className="text-red-500" />
          </button>
          <button className="rounded-full p-2 hover:bg-zinc-800">
            <Bell size={28} />
          </button>
          <button className="rounded-full p-2 hover:bg-zinc-800 bg-zinc-800 border border-zinc-500">
            <User size={32} />
          </button>
        </div>
      </nav>

      {/* ------------------- MOBILE NAV ------------------- */}
      <nav className="lg:hidden bg-black w-full h-16 flex items-center justify-between px-4 text-sm text-zinc-100">
        {/* Left: Hamburger */}
        <button
          className="p-2 hover:bg-zinc-800 rounded-lg"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Center: Forecast Earnings */}
        <div className="flex flex-col items-center">
          <p className="text-xs text-zinc-400">Forecast Earnings</p>
          <div className="flex items-center gap-2">
            <span className="text-base font-semibold">
              {show ? earnings : "••••••"}
            </span>
            <button onClick={() => setShow(!show)}>
              {show ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Right: Clients count */}
        <div className="flex items-center gap-1 text-sm">
          <span className="text-zinc-400">Clients:</span>
          <span className="font-bold">0</span>
        </div>
      </nav>

      {/* ------------------- MOBILE SIDEBAR ------------------- */}
      {menuOpen && (
        <div className="lg:hidden fixed top-0 left-0 h-full w-64 bg-zinc-900 border-r border-zinc-800 p-6 z-50">
          <button
            className="mb-6 p-2 hover:bg-zinc-800 rounded"
            onClick={() => setMenuOpen(false)}
          >
            <X size={24} />
          </button>
          <nav className="flex flex-col gap-4">
            <a className="flex items-center gap-2">
              <CircleCheckBig size={16} color="green" /> 0 won
            </a>
            <a className="flex items-center gap-2">
              <Send size={16} color="orange" /> 0 sent
            </a>
            <a className="flex items-center gap-2">
              <ClipboardClock size={16} color="red" /> 0 pending
            </a>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
