import Link from "next/link";
import React from "react";
import { menuList } from "@/constants/menuList";
import ActiveLink from "../common/ActiveLink";
import { IMenuItemProps } from "@/types";

const Sidebar = () => {
  return (
    <div className="p-5 border-r border-r-gray-200 bg-white">
      <Link href="/" className="logo font-bold text-3xl inline-block mb-10">
        <span className="text-primary">U</span>cademy
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
      <ActiveLink url={url}>
        {icon}
        {title}
      </ActiveLink>
    </li>
  );
}

export default Sidebar;
