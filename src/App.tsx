import { AppSidebar } from "./components/AppSidebar";
import Navbar from "./components/navbar/Navbar";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import Dashboard from "./pages/Dashboard";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
    <Navbar/>
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
    </>
  );
}

export default App;