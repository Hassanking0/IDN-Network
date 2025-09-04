import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./app/dashboard/Dashboard";
import AppShell from "./components/appshell/AppShell";
import MapView from "./app/mapview/MapView";
import Create from "./app/create/Create";
import Client from "./app/client/client";
const router = createBrowserRouter([
      {
    path: '/',
    element: <AppShell />,
    children: [
      {
        path: 'dashboard', // This will be the default route "/"
        element: <Dashboard />
      },
      {
        path: 'mapview',
        element: <MapView />
      },
      {
        path: 'create',
        element: <Create />
      },
      {
        path: 'client',
        element: <Client />
      }
        
    ]
  },
    
])


export default router