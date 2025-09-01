import AppShell from "@/components/appshell/AppShell"
import { createBrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import path from "path"

const router = createBrowserRouter([
      {
    path: '/',
    element: <AppShell />,
    children: [
     {
        path: 'navbar',
        element: <Navbar/>
     }
    ]
  },
    
])


export default router