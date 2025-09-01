import { useState } from "react";
import { Button } from "@/components/ui/button";
import Calendar from "./calender";

interface MapViewProps {
  className?: string;
}

// const weekDays = [
//   { short: 'Sun', date: '1', full: 'Sunday' },
//   { short: 'Mon', date: '2', full: 'Monday' },
//   { short: 'Tue', date: '3', full: 'Tuesday' },
//   { short: 'Wed', date: '4', full: 'Wednesday' },
//   { short: 'Thu', date: '5', full: 'Thursday' },
//   { short: 'Fri', date: '6', full: 'Friday' },
//   { short: 'Sat', date: '7', full: 'Saturday' },
//   { short: 'Sun', date: '8', full: 'Sunday' },
//   { short: 'Mon', date: '9', full: 'Monday' },
//   { short: 'Tue', date: '10', full: 'Tuesday' },
//   { short: 'Wed', date: '11', full: 'Wednesday' },
// ];

export function MapView({ className = "" }: MapViewProps) {
  const [activeFilter, setActiveFilter] = useState<"Map View" | "All">(
    "Map View"
  );

  return (
    <div>
      {/* desktop view */}
      <div className="hidden lg:block">
        <div
          className={` h-150 w-180 rounded-2xl bg-zinc-900 text-white flex flex-col ${className}`}
        >
          {/* Header Controls */}
          <div className="p-4 border-b border-zinc-700">
            <div className="flex items-center justify-between mb-4">
              {/* Filter Buttons */}
              <div className="flex space-x-2">
                <Button
                  variant={activeFilter === "Map View" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter("Map View")}
                  className={
                    activeFilter === "Map View"
                      ? "bg-white text-black hover:bg-gray-100"
                      : "border-zinc-600 text-zinc-300 hover:bg-zinc-800"
                  }
                >
                  Map View
                </Button>
                <Button
                  variant={activeFilter === "All" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter("All")}
                  className={
                    activeFilter === "All"
                      ? "bg-white text-black hover:bg-gray-100"
                      : "border-zinc-600 text-zinc-300 hover:bg-zinc-800"
                  }
                >
                  All
                </Button>
              </div>
            </div>

            {/* Date Selector */}
            <Calendar />
          </div>

          {/* Map Container */}
          <div className="flex-1 relative bg-zinc-800">
            {/* Simulated Google Maps Interface */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-900">
              {/* Map Content - Simplified representation */}
              <div className="relative h-full overflow-hidden">
                {/* Street lines - simplified */}
                <svg className="absolute inset-0 w-full h-full opacity-30">
                  <defs>
                    <pattern
                      id="grid"
                      width="100"
                      height="100"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 100 0 L 0 0 0 100"
                        fill="none"
                        stroke="#4a5568"
                        strokeWidth="1"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />

                  {/* Main roads */}
                  <path
                    d="M0 200 Q200 180 400 200 T800 200"
                    stroke="#525252"
                    strokeWidth="3"
                    fill="none"
                    opacity="0.8"
                  />
                  <path
                    d="M0 400 Q300 380 600 400 T1200 400"
                    stroke="#525252"
                    strokeWidth="3"
                    fill="none"
                    opacity="0.8"
                  />
                  <path
                    d="M200 0 Q220 200 200 400 T200 800"
                    stroke="#525252"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.6"
                  />
                </svg>

                {/* Street names */}
                <div className="absolute bottom-1/3 left-1/4 text-zinc-400 text-sm transform rotate-12">
                  Chowk Munda - Rangpur Rd
                </div>
                <div className="absolute bottom-1/2 left-1/3 text-zinc-400 text-sm transform rotate-12">
                  Chowk Munda - Rangpur Rd
                </div>
                <div className="absolute bottom-2/3 right-1/4 text-zinc-400 text-sm transform rotate-12">
                  Chowk Munda - Rangpur Rd
                </div>

                {/* No active bookings message */}
                <div className="absolute top-1/2 left-8 transform -translate-y-1/2">
                  <div className="bg-zinc-800 rounded-lg p-6 border border-zinc-700 max-w-xs">
                    <h3 className="text-white font-medium mb-1">
                      No active bookings
                    </h3>
                    <p className="text-zinc-400 text-sm">
                      Active bookings will appear on the map when available
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Maps Attribution */}
              <div className="absolute bottom-4 left-4 flex items-center space-x-4">
                <div className="text-white text-sm font-medium">Google</div>
              </div>

              {/* Map Controls */}
              <div className="absolute bottom-4 right-4 text-xs text-zinc-400 space-x-2">
                <span>Keyboard shortcuts</span>
                <span>Map data ©2025</span>
                <span>Terms</span>
                <span>Report a map error</span>
              </div>

              {/* Zoom Controls */}
              <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg overflow-hidden">
                <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-50 border-b border-gray-200">
                  <span className="text-lg font-normal">+</span>
                </button>
                <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-50">
                  <span className="text-lg font-normal">−</span>
                </button>
              </div>

              {/* My Location Button */}
              <div className="absolute bottom-20 right-4">
                <button className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center text-gray-600 hover:bg-gray-50">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <circle
                      cx="10"
                      cy="10"
                      r="3"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M10 1v4M10 15v4M1 10h4M15 10h4"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
   {/* mobile view */}
      <div className="block lg:hidden mx-4 my-4 ">
        <div
          className={`h-170 mb-10 min-w-80 lg:w-180 rounded-2xl bg-zinc-900 text-white flex flex-col ${className}`}
        >
          {/* Header Controls */}
          <div className="p-4 border-b border-zinc-700">
            <div className="flex items-center justify-between mb-4">
              {/* Filter Buttons */}
              <div className="flex space-x-2">
                <Button
                  variant={activeFilter === "Map View" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter("Map View")}
                  className={
                    activeFilter === "Map View"
                      ? "bg-white text-black hover:bg-gray-100"
                      : "border-zinc-600 text-zinc-300 hover:bg-zinc-800"
                  }
                >
                  Allow Channels
                </Button>
             
              </div>
            </div>

            {/* Date Selector */}
            <Calendar />
          </div>

          {/* Map Container */}
          <div className="flex-1 relative bg-zinc-800">
            {/* Simulated Google Maps Interface */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-900">
              {/* Map Content - Simplified representation */}
              <div className="relative h-full overflow-hidden">
                {/* Street lines - simplified */}
                <svg className="absolute inset-0 w-full h-full opacity-30">
                  <defs>
                    <pattern
                      id="grid"
                      width="100"
                      height="100"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 100 0 L 0 0 0 100"
                        fill="none"
                        stroke="#4a5568"
                        strokeWidth="1"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />

                  {/* Main roads */}
                  <path
                    d="M0 200 Q200 180 400 200 T800 200"
                    stroke="#525252"
                    strokeWidth="3"
                    fill="none"
                    opacity="0.8"
                  />
                  <path
                    d="M0 400 Q300 380 600 400 T1200 400"
                    stroke="#525252"
                    strokeWidth="3"
                    fill="none"
                    opacity="0.8"
                  />
                  <path
                    d="M200 0 Q220 200 200 400 T200 800"
                    stroke="#525252"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.6"
                  />
                </svg>

                {/* Street names */}
                <div className="absolute bottom-1/3 left-1/4 text-zinc-400 text-sm transform rotate-12">
                  Chowk Munda - Rangpur Rd
                </div>
                <div className="absolute bottom-1/2 left-1/3 text-zinc-400 text-sm transform rotate-12">
                  Chowk Munda - Rangpur Rd
                </div>
                <div className="absolute bottom-2/3 right-1/4 text-zinc-400 text-sm transform rotate-12">
                  Chowk Munda - Rangpur Rd
                </div>

                {/* No active bookings message */}
                <div className="absolute top-1/2 left-8 transform -translate-y-1/2">
                  <div className="bg-zinc-800 rounded-lg p-6 border border-zinc-700 max-w-xs">
                    <h3 className="text-white font-medium mb-1">
                      No active bookings
                    </h3>
                    <p className="text-zinc-400 text-sm">
                      Active bookings will appear on the map when available
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Maps Attribution */}
              <div className="absolute bottom-4 left-4 flex items-center space-x-4">
                <div className="text-white text-sm font-medium">Google</div>
              </div>

              {/* Map Controls */}
              <div className="absolute bottom-4 right-4 text-xs text-zinc-400 space-x-2">
                <span>Keyboard shortcuts</span>
                <span>Map data ©2025</span>
                <span>Terms</span>
                <span>Report a map error</span>
              </div>

              {/* Zoom Controls */}
              <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg overflow-hidden">
                <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-50 border-b border-gray-200">
                  <span className="text-lg font-normal">+</span>
                </button>
                <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-50">
                  <span className="text-lg font-normal">−</span>
                </button>
              </div>

              {/* My Location Button */}
              <div className="absolute bottom-20 right-4">
                <button className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center text-gray-600 hover:bg-gray-50">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <circle
                      cx="10"
                      cy="10"
                      r="3"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M10 1v4M10 15v4M1 10h4M15 10h4"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
