import { Home, Magnet, Text } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../components/ui/sidebar";

const Dashboard: React.FC = () => {
  const items = [
    {
      title: "Projects",
      url: "/dashboard/projects",
      icon: Home,
    },
    {
      title: "Blog",
      url: "/dashboard/blogs",
      icon: Text,
    },
    {
      title: "Skills",
      url: "/dashboard/skills",
      icon: Magnet,
    },
  ];

  return (
    <Sidebar className="bg-white text-gray-800 min-h-screen">
      <SidebarContent className="p-4 border-r border-gray-200">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xl font-bold mb-4">Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className="flex items-center p-3 mb-2 transition-colors duration-300 rounded-lg hover:bg-blue-500 hover:text-white"
                    >
                      <item.icon className="w-5 h-5 mr-2 text-gray-600" />
                      <h3 className="text-lg">{item.title}</h3>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default Dashboard;
