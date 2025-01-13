"use client";
import { IActiveLinkProps } from "@/types";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ActiveLink = ({ url, children }: IActiveLinkProps) => {
  const pathName = usePathname();
  return (
    <Link
      href={url}
      prefetch
      className={clsx(
        "p-3 rounded-md flex items-center gap-3 transition-all",
        {
          "text-white bg-primary svg-animate": url === pathName,
        },
        {
          "hover:text-primary hover:bg-primary hover:bg-opacity-10":
            url !== pathName,
        }
      )}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
