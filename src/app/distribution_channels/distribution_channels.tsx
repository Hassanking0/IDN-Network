import { Switch } from "@/components/ui/switch";
import logo from "@/assets/idnPro.png"
import logo2 from "@/assets/idn.png"
import Button2 from "@/components/button2";

const distrubution_channels = () => {
  return (
    <div className="text-white w-285">
      <div className="header h-20 flex items-center text-2xl px-4">Distrubution Channels</div>

      <div className="boxes grid grid-cols-2 gap-6 w-280 mx-4">

        <div className="box1 p-4 rounded-xl bg-neutral-900">
          <div className="heading flex justify-between">
            <div className="title">IDN Pro App</div>
            <div className="switch"><Switch/></div>
          </div>
          <div className="main flex items-center gap-4 mt-4">
            <div className="logo"><img src={logo} className="w-22 h-22 rounded-2xl"/></div>
            <div className="desc text-xs">On this app, your client have only single driver added  and therefore <br /> that mean they can receive only a single quote.</div>
          </div>
          <div className="btn text-right mt-4"><Button2 title="Get App"/></div>
        </div>



        <div className="box2 p-4 rounded-xl bg-neutral-900">
          <div className="heading flex justify-between">
            <div className="title">IDN Website</div>
            <div className="switch"><Switch/></div>
          </div>
          <div className="main flex items-center gap-4 mt-4">
            <div className="logo"><img src={logo2} className="w-22 h-22 rounded-2xl"/></div>
            <div className="desc text-xs">Website bookings work similar to app bookings however we <br /> are unable to provide an accurate user location</div>
          </div>
          <div className="btn text-right mt-4"><Button2 title="Website"/></div>
        </div>

      </div>
      </div>
  )
}

export default distrubution_channels