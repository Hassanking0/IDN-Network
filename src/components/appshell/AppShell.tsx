import { Outlet } from "react-router-dom";
import { AppSidebar } from "../app-sidebar";
import { SidebarInset, SidebarProvider } from "../ui/sidebar";
import '@/index.css'


const AppShell = () => {
 

  return (
    <div>
  <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
     <SidebarInset>
        <Outlet />
     </SidebarInset>
    </SidebarProvider>
    </div>  
  );
};

export default AppShell;