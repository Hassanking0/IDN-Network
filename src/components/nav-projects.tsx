import { type LucideIcon } from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { CreateDialog } from "@/components/createdialog";
import { useState } from "react";
import { BadgePlus } from "lucide-react";

export function NavProjects({
  projects,
}: {
  projects: {
    name: string;
    url: string;
    icon: LucideIcon;
  }[];
}) {
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarMenu className="border-b border-zinc-700 pb-4">
        <button onClick={() => setDialogOpen(true)} className="flex w-full p-3 gap-2 cursor-pointer hover:bg-zinc-800 rounded-2xl">
<BadgePlus className="text-zinc-400"/>
<div className="title text-zinc-300">Create</div>
          
          </button>
        <CreateDialog
          open={dialogOpen}
          onOpenChange={setDialogOpen}
          onCreateClient={() => {
            /* handle client creation */
          }}
          onCreateBooking={() => {
            /* handle booking creation */
          }}
          onCreateQuote={() => {
            /* handle quote creation */
          }}
          onCreateInvoice={() => {
            /* handle invoice creation */
          }}
        />
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
      </SidebarMenu>
    </SidebarGroup>
  );
}
