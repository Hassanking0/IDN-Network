import { IconCirclePlusFilled, IconMail, type Icon } from "@tabler/icons-react"
import Create from "@/app/create/Create"

import { Button } from "@/components/ui/button"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { NavLink } from "react-router-dom"
export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: Icon
  }[]
}) {
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <SidebarMenuButton
              tooltip="Create"
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground min-w-8 duration-200 ease-linear"
            >
              <IconCirclePlusFilled />
             <Create />
            </SidebarMenuButton>
            <Button
              size="icon"
              className="size-8 group-data-[collapsible=icon]:opacity-0"
              variant="outline"
            >
              <IconMail />
              <span className="sr-only">Inbox</span>
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
      {items.map((item) => (
        <SidebarMenuItem key={item.title}>
          <NavLink
            to={item.url}
            className={({ isActive }) =>
              isActive ? "w-full" : "w-full"
            }
          >
            <SidebarMenuButton tooltip={item.title} asChild>
              <div className="flex items-center gap-2">
                {item.icon && <item.icon className="w-4 h-4" />}
                <span>{item.title}</span>
              </div>
            </SidebarMenuButton>
          </NavLink>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
