import * as React from "react";
import {
  LayoutDashboard,
  SquareTerminal,
  MapPinHouse,
  UsersRound,
  MessageCircleMore,
  NotepadText,
  CalendarRange,
  LayoutGrid,
  ReceiptText,
  UserSearch,
  Kanban,
  Settings,
  Headset,
  Lightbulb,
  CreditCard,
  QrCode,
  PhoneCall,
  IdCard,
  Tv,
  Eye,
  Sparkles,
  Flame,
  CircleDollarSign
} from "lucide-react";
import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavProjects2 } from "./nav-projects2";
import { NavProjects3 } from "./nav-projects3";
import { Sidebar, SidebarContent, SidebarRail } from "@/components/ui/sidebar";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Operation",
      url: "#",
      icon: Kanban,
      items: [
          {
          title: "Business Information",
          url: "/business_info",
          icon: IdCard
        },
        {
          title: "Distribution Channels",
          url: "/distribution_channels",
          icon: Tv
        },
        {
          title: "Services",
          url: "/services",
          icon: PhoneCall
        },
        {
          title: "QR Code",
          url: "/Qr_code",
          icon: QrCode
        },
        {
          title: "Preview",
          url: "/preview",
          icon: Eye
        },
        {
          title: "Reviews",
          url: "/reviews",
          icon: Sparkles
        },
        {
          title: "IDN Pro",
          url: "/idnPro",
          icon: Flame
        },
        {
          title: "Surge Pricing",
          url: "/surgePricing",
          icon: CircleDollarSign
        },
      ],
    },
       {
      title: "Marketing",
      url: "#",
      icon: SquareTerminal,
      items: [
        {
          title: "Discount",
          url: "/discount",
          icon: Settings
        },
      ],
    },
  ],
  projects: [
    // {
    //   name: "Create",
    //   url: "/create",
    //   icon: BadgePlus,
    // },
    {
      name: "Overview",
      url: "/overview",
      icon: LayoutDashboard,
    },
    {
      name: "Map View",
      url: "/map",
      icon: MapPinHouse,
    },
  ],
  projects2: [
    {
      name:"Clients",
      url: "/clients",
      icon: UsersRound
    },
    {
      name:"Messages",
      url: "/messages",
      icon: MessageCircleMore
    },
    {
      name:"Requests",
      url: "/requests",
      icon: NotepadText
    },
    {
      name:"Nearby People",
      url: "/nearby-people",
      icon: UserSearch
    },
    {
      name:"Quotes",
      url: "/quotes",
      icon: CalendarRange
    },
    {
      name:"Projects",
      url: "/projects",
      icon: LayoutGrid
    },
    {
      name:"Invoices",
      url: "/invoices",
      icon: ReceiptText
    },
  ],
   projects3: [
    {
      name:"Settings",
      url: "/settings",
      icon: Settings
    },
    {
      name:"Support",
      url: "/support",
      icon: Headset
    },
    {
      name:"Subscription",
      url: "/subscription",
      icon: CreditCard
    },
    {
      name:"Suggestions",
      url: "/suggestions",
      icon: Lightbulb,
    },
  ]
};

function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props} >
      {/* <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader> */}
      <SidebarContent>
        <NavProjects projects={data.projects} />
        <NavProjects2  projects={data.projects2}/>
        <NavMain items={data.navMain} />
        <NavProjects3 projects={data.projects3}/>
      </SidebarContent>
      {/* <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter> */}
      <SidebarRail />
    </Sidebar>
  );
}
export default AppSidebar;
