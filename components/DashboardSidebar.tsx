"use client";

import Link from "next/link";
import SidebarItem from "./SidebarItem";
import { DashboardNavLinks } from "../lib/constants";
import { usePathname } from "next/navigation";

const DashboardSidebar = () => {
  const currentPath = usePathname();
  return (
    <div className="flex flex-col h-screen  bg-gray-400  p-8 space-y-10 pt-24 ">
      {DashboardNavLinks.map((link) => (
        <Link
          href={link.url}
          key={link.title}
          className={`hover:bg-gray-700  p-4 rounded-sm text-gray-900 hover:!text-gray-50 ${
            currentPath === link.url ? "bg-blue-100" : ""
          }`}
        >
          <SidebarItem key={link.title} label={link.title} {...link} />
        </Link>
      ))}
    </div>
  );
};

export default DashboardSidebar;
