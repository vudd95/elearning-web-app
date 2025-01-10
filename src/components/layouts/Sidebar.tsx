import Link from "next/link";
import React from "react";
import { IMenuItemProps, menuList } from "@/constants/menuList";

const Sidebar = () => {
  return (
    <div className="p-5 border-r border-r-gray-200">
      <Link href="/" className="logo font-bold text-3xl inline-block mb-10">
        Ucademy
      </Link>
      <ul>
        {menuList.map((item) => (
          <MenuItem
            key={item.url}
            url={item.url}
            title={item.title}
            icon={item.icon}
          />
        ))}
      </ul>
    </div>
  );
};

function MenuItem({ url = "/", title = "", icon }: IMenuItemProps) {
  return (
    <li>
      <Link
        href={url}
        prefetch
        className="p-3 rounded-md flex items-center gap-3 hover:text-primary hover:bg-primary hover:bg-opacity-10 transition-all"
      >
        {icon}
        {title}
      </Link>
    </li>
  );
}

export default Sidebar;
