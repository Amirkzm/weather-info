import React from "react";

type SidebarItemProps = {
  icon: string;
  label: string;
};

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label }) => {
  return (
    <div className="flex items-center gap-4 text-xl  ">
      <div>{icon}</div>
      <div className="">{label}</div>
    </div>
  );
};

export default SidebarItem;
