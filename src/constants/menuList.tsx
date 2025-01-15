import IconComment from "@/components/icons/IconComment";
import IconCourse from "@/components/icons/IconCourse";
import IconExplore from "@/components/icons/IconExplore";
import IconMember from "@/components/icons/IconMember";
import IconOrder from "@/components/icons/IconOrder";
import IconPlay from "@/components/icons/IconPlay";
import { IMenuItemProps } from "@/types";

export const menuList: IMenuItemProps[] = [
  {
    url: "/",
    title: "Khám phá",
    icon: <IconPlay className="size-5" />,
  },
  {
    url: "/study",
    title: "Khu vực học tập",
    icon: <IconExplore className="size-5" />,
  },
  {
    url: "/manage/course",
    title: "Quản lý khoá học",
    icon: <IconCourse className="size-5" />,
  },
  {
    url: "/manage/member",
    title: "Quản lý thành viên",
    icon: <IconMember className="size-5" />,
  },
  {
    url: "/manage/order",
    title: "Quản lý đơn hàng",
    icon: <IconOrder className="size-5" />,
  },
  {
    url: "/manage/comment",
    title: "Quản lý bình luận",
    icon: <IconComment className="size-5" />,
  },
];
