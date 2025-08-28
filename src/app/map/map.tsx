import { ActiveBookingsList } from "@/components/bookinglist";
import { MapView } from "@/components/map";

const map = () => {
  return (
    <div>
      {/* desktop view */}
      <div className="hidden lg:block text-white w-280 select-none">
        <div className="title w-full h-20 flex items-center text-3xl px-2">
          <h1>Map View</h1>
        </div>
        <div className="list-map flex justify-between">
          <div className="list">
            <ActiveBookingsList />
          </div>
          <div className="map">
            <MapView />
          </div>
        </div>
      </div>
      {/* mobile view */}
      <div className="block lg:hidden text-white max-w-screen select-none">
        <div className="title w-full h-20 flex items-center text-3xl px-2">
          
        </div>
        
          {/* <div className="list">
            <ActiveBookingsList />
          </div> */}
          <div className="map max-w-screen">
            <MapView />
          </div>
      </div>
    </div>
  );
};
export default map;
