// components/CalendarLine.tsx
import React, { useState, useEffect } from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";

const CalendarLine: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date("2026-10-04")); // Starting from October 4, 2026
  const [displayedDates, setDisplayedDates] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Update displayed dates based on currentDate
  useEffect(() => {
    const dates: string[] = [];
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(currentDate.getDate() - currentDate.getDay()); // Start of the week (Sunday)

    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      const day = date.toLocaleDateString("en-US", { weekday: "short" });
      const dayNum = date.getDate();
      const suffix =
        dayNum === 1 || dayNum === 21 || dayNum === 31
          ? "st"
          : dayNum === 2 || dayNum === 22
          ? "nd"
          : dayNum === 3 || dayNum === 23
          ? "rd"
          : "th";
      dates.push(`${day} ${dayNum}${suffix}`);
    }
    setDisplayedDates(dates);

    // auto-select today in that week
    setSelectedIndex(currentDate.getDay());
  }, [currentDate]);

  // Handle click on any date
  const handleDateClick = (index: number) => {
    setSelectedIndex(index);

    // Optional: if first or last date clicked, navigate weeks
    if (index === 0) {
      const newDate = new Date(currentDate);
      newDate.setDate(currentDate.getDate() - 7);
      setCurrentDate(newDate);
    } else if (index === 5) {
      const newDate = new Date(currentDate);
      newDate.setDate(currentDate.getDate() + 1);
      setCurrentDate(newDate);
    }
  };

  return (
    <div className="bg-zinc-900 text-white p-4">
      <Tabs defaultValue="all" className="w-full">
        <TabsContent value="all">
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-medium">
              {currentDate.toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
          <div className="flex gap-2 justify-center">
            {displayedDates.map((date, index) => {
              const isActive = index === selectedIndex;
              return (
                <button
                  key={index}
                  className={`px-3 py-1 text-md rounded transition ${
                    isActive
                      ? "bg-zinc-800 text-white"
                      : "bg-gray-700 hover:bg-gray-600"
                  }`}
                  onClick={() => handleDateClick(index)}
                >
                  {date.split(" ")[1]} {/* Show only number with suffix */}
                </button>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CalendarLine;
