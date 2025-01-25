import DashboardSidebar from "@/components/DashboardSidebar";
import React from "react";
import "../globals.css";
import { ThemeProvider } from "../providers/ThemeProvider";
import DashboardNavbar from "@/components/DashboardNavbar";
import { ClerkProvider } from "@clerk/nextjs";
import "leaflet/dist/leaflet.css";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <DashboardNavbar />
            <div className="flex">
              <div className="flex-1">
                <DashboardSidebar />
              </div>
              <div className="flex-auto w-3/5  flex-center">{children}</div>
            </div>
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
