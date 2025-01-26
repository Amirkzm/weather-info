"use client";

import Link from "next/link";
import SidebarItem from "./SidebarItem";
import { DashboardNavLinks } from "../lib/constants";
import { usePathname } from "next/navigation";

const DashboardSidebar = () => {
  const currentPath = usePathname();
  return (
    <aside className="w-64 bg-gray-900 text-gray-100 p-4 h-[80vh] flex-col-center">
      <nav className="flex-col-center gap-8">
        {DashboardNavLinks.map((link) => (
          <Link
            href={link.url}
            key={link.title}
            className={`w-full text-left px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors ${
              currentPath === link.url ? "bg-gray-600" : ""
            }`}
          >
            <SidebarItem key={link.title} label={link.title} {...link} />
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default DashboardSidebar;
