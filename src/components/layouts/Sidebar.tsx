import Link from "next/link";
import React from "react";
import { menuList } from "@/constants/menuList";
import ActiveLink from "../common/ActiveLink";
import { IMenuItemProps } from "@/types";
import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "../common/ModeToggle";

const Sidebar = () => {
  return (
    <div className="p-5 border-r border-r-gray-200 dark:border-opacity-10 bg-white dark:bg-grayDarker flex flex-col">
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
      <div className="mt-auto flex items-center gap-5">
        <UserButton />
        <ModeToggle />
      </div>
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
