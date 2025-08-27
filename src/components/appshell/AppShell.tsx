import { SidebarInset, SidebarProvider } from "../ui/sidebar";
import { useState, useEffect } from "react";
import Sidebar from "../app-sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar";
import Loader from "@/components/loader";

const AppShell = () => {
const [loading, setLoading] = useState(true);
useEffect(() => {
    // Simulate loading (e.g. auth check, API call, etc.)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // loader visible for 2s
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-black w-screen h-screen">
      <div className="header fixed top-0 left-0 w-full z-30">
        <Navbar />
      </div>
     <main className="z-20 relative">
  <SidebarProvider>
    <div className="flex">
      <Sidebar className="pt-18 bg-zinc-950 text-zinc-100"/>   {/* push below navbar */}
      <SidebarInset>
        <div className="relative top-18 h-179 overflow-y-auto">
          <Outlet />
        </div>
      </SidebarInset>
    </div>
  </SidebarProvider>
</main>

    </div>
  );
};

export default AppShell;



