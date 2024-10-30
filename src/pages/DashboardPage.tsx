

import { AppSidebar } from "@/components/AppSidebar";
import Dashboard from "./Dashboard";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

const DashboardPage = () => {
  return (
    <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <SidebarTrigger />
          <div className="flex bg-[url('./grid.png')] bg-fixed bg-cover bg-zinc-300">
            <Dashboard />
            <Outlet />
          </div>
        </main>
      </SidebarProvider>
  );
};

export default DashboardPage;

