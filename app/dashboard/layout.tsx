import { AppSidebar } from "@/components/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import "../globals.css";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <SidebarProvider>
            <div className="flex-1">
              <AppSidebar />
            </div>
          </SidebarProvider>
          <div className="flex-3">{children}</div>
        </div>
      </body>
    </html>
  );
}
