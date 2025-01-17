import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import SidebarItem from "./SidebarItem";

const data = {
  navMain: [
    {
      title: "Overview",
      url: "/overview",
      icon: "🏠",
    },
    {
      title: "Time-Series Data",
      url: "/time-series-data",
      icon: "📈",
    },
    {
      title: "Geospatial Maps",
      url: "/geospatial-maps",
      icon: "🗺",
    },
    {
      title: "Custom Analytics",
      url: "/custom-analytics",
      icon: "📊",
    },
    {
      title: "Settings",
      url: "/settings",
      icon: "🔨",
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Image
                    src={"/logo.svg"}
                    alt="AquaLens"
                    width={52}
                    height={52}
                  />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">AquaLens</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="mt-8">
        <SidebarGroup>
          <SidebarMenu className="gap-8">
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <Link href={item.url} className="font-semibold text-lg">
                    <SidebarItem icon={item.icon} label={item.title} />
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
