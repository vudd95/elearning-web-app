import IconExplore from "@/components/icons/IconExplore";
import IconPlay from "@/components/icons/IconPlay";

export interface IMenuItemProps {
  url: string;
  title: string;
  icon: React.ReactNode;
}

export const menuList: IMenuItemProps[] = [
  {
    url: "/",
    title: "Khu vực học tập",
    icon: <IconPlay className="size-5" />,
  },
  {
    url: "/explore",
    title: "Khám phá",
    icon: <IconExplore className="size-5" />,
  },
  {
    url: "/category",
    title: "Danh mục",
    icon: <IconExplore className="size-5" />,
  },
];
