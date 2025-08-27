import { type LucideIcon, LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavProjects3({
  projects,
}: {
  projects: {
    name: string;
    url: string;
    icon: LucideIcon;
  }[];
}) {
  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarMenu className="border-b border-zinc-700 pb-4">
        {projects.map((item) => (
          <SidebarMenuItem key={item.name}>
            <NavLink
              to={item.url}
              end={item.url === "/overview" || item.url === "/"}
              onClick={() => console.log(`Navigating to: ${item.url}`)}
              className={({ isActive }) => {
                console.log(
                  `${item.name} - isActive: ${isActive}, url: ${item.url}`
                );
                return `flex items-center gap-2 rounded-xl px-3 py-2 transition-colors ${
                  isActive
                    ? "bg-zinc-700 text-white"
                    : "text-zinc-200 hover:bg-zinc-700"
                }`;
              }}
            >
              {({ isActive }) => (
                <>
                  <item.icon
                    className={`w-6 h-6 transition-colors ${
                      isActive ? "text-white" : "text-zinc-400"
                    }`}
                  />
                  <span>{item.name}</span>
                </>
              )}
            </NavLink>
          </SidebarMenuItem>
        ))}
        <div className="logout flex py-3 mr-6 pl-4 mt-3 gap-2 text-red-500 bg-red-950 rounded-r-xl cursor-pointer">
          <LogOut /> <div>Log Out</div>
        </div>
      </SidebarMenu>
    </SidebarGroup>
  );
}

export default NavProjects3;
