import { AppSidebar } from "@/components/app-sidebar"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"

import { useEffect } from "react";
import { initTheme, setDarkMode } from "./lib/utils";

import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"


import { RouterProvider } from "react-router-dom"
import router from "./RouterProvider"

export default function App() {
   useEffect(() => { initTheme(); }, []);
  return (
    
     <RouterProvider router={router} />
  )
}
