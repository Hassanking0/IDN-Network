import React, { useState } from "react";
import {
  LayoutDashboard,
  MapPinHouse,
  Calendar,
  FileText,
  Settings,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import Overview from "@/app/overview/overview";
import Map from "@/app/map/map";

// Type definitions
interface NavItem {
  id: string;
  icon: LucideIcon;
  label: string;
  color: string;
  component: React.ComponentType;
}

type TabId = "dashboard" | "map" | "calendar" | "reports" | "settings";

// Sample page components - replace these with your actual page components
const DashboardPage: React.FC = () => <Overview />;

const MapPage: React.FC = () => <Map/>;

const CalendarPage: React.FC = () => <div></div>;

const ReportsPage: React.FC = () => <div></div>;

const SettingsPage: React.FC = () => <div></div>;

const BottomNavBar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>("dashboard");

  const navItems: NavItem[] = [
    {
      id: "dashboard",
      icon: LayoutDashboard,
      label: "Dashboard View",
      color: "bg-blue-500",
      component: DashboardPage,
    },
    {
      id: "map",
      icon: MapPinHouse,
      label: "Map",
      color: "bg-green-500",
      component: MapPage,
    },
    {
      id: "calendar",
      icon: Calendar,
      label: "Calendar",
      color: "bg-purple-500",
      component: CalendarPage,
    },
    {
      id: "reports",
      icon: FileText,
      label: "Reports",
      color: "bg-orange-500",
      component: ReportsPage,
    },
    {
      id: "settings",
      icon: Settings,
      label: "Settings",
      color: "bg-red-500",
      component: SettingsPage,
    },
  ];

  // Get the active page component
  const ActivePageComponent = navItems.find(
    (item) => item.id === activeTab
  )?.component;

  const handleTabClick = (tabId: string): void => {
    setActiveTab(tabId as TabId);
  };

  return (
    <div>
      {/* Page Content Area */}
      <div className="flex-1">
        {ActivePageComponent && <ActivePageComponent />}
      </div>

      <div className="bottom-bar text-white w-screen">
        <div className="upper text-sm border-b border-zinc-300 flex items-center justify-between px-4">
          <div className="left flex gap-2 py-2">
            <div className="title-sent">
              <div className="title">Quotes</div>
              <div className="sent text-yellow-500">0 sent</div>
            </div>
            <div className="won text-green-300 mt-6">0 won</div>
          </div>
          <div className="right">
            <div className="title">Potential Clients</div>
            <div className="number text-right">34</div>
          </div>
        </div>
        <div className="lower">
          <div className="flex flex-col">
            {/* Bottom Navigation Bar */}
            <div className="bg-gray-900 p-3 flex justify-center">
              <div className="flex items-center space-x-1">
                {navItems.map((item: NavItem) => {
                  const IconComponent = item.icon;
                  const isActive: boolean = activeTab === item.id;

                  return (
                    <button
                      key={item.id}
                      onClick={() => handleTabClick(item.id)}
                      className={`
                  flex items-center space-x-2 px-3 py-2 rounded-md transition-all duration-300 ease-in-out
                  ${
                    isActive
                      ? `${item.color} text-white shadow-lg scale-105`
                      : "text-gray-400 hover:text-gray-200 hover:bg-gray-800"
                  }
                `}
                      type="button"
                      aria-label={`Switch to ${item.label}`}
                    >
                      <IconComponent
                        size={20}
                        className={isActive ? "text-white" : "text-gray-400"}
                      />

                      {/* Text label - only show for active tab */}
                      <span
                        className={`
                    text-sm font-medium transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap
                    ${
                      isActive
                        ? "opacity-100 max-w-32 ml-2"
                        : "opacity-0 max-w-0 ml-0"
                    }
                  `}
                      >
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNavBar;
