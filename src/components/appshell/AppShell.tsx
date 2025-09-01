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
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-black w-screen min-h-screen">
      <div className="header md:fixed top-0 left-0 w-107 md:w-full z-100">
        <Navbar />
      </div>
      <main className="h-full w-full z-20 relative">
        <SidebarProvider>
            <Sidebar className="pt-18 bg-zinc-950 text-zinc-100" />{" "}
            <SidebarInset>
                <Outlet />
            </SidebarInset>
        </SidebarProvider>
   
      </main>
    </div>
  );
};

export default AppShell;
