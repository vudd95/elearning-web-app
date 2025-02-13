import Image from "next/image";
import Link from "next/link";
import React from "react";
import IconEye from "../icons/IconEye";
import IconStar from "../icons/IconStar";
import IconClock from "../icons/IconClock";

const CourseItem = () => {
  const courseInfo = [
    {
      title: "2000",
      icon: (className?: string) => <IconEye className={className} />,
    },
    {
      title: "5.0",
      icon: (className?: string) => <IconStar className={className} />,
    },
    {
      title: "30p59",
      icon: (className?: string) => <IconClock className={className} />,
    },
  ];
  return (
    <div className="bg-white dark:bg-grayDarker border border-gray-200 dark:border-opacity-10 rounded-2xl p-4">
      {/* image */}
      <Link href={"/"} className="block h-[180px] relative">
        <Image
          src={
            "https://images.unsplash.com/photo-1736532496900-af334a4bce1c?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="Image Nextjs"
          width={300}
          height={200}
          className="w-full h-full object-cover rounded-lg"
          sizes="@media (min-width: 640px) 300px, 100vw"
          priority
        />
        <span className="inline-block px-3 py-1 rounded-full absolute top-3 right-3 z-10  text-white font-bold bg-green-500 text-xs">
          New
        </span>
      </Link>
      {/* couse details */}
      <div className="pt-4">
        <h3 className="text-lg mb-5 font-bold">
          Học Nextjs, tự làm ra sản phẩm từ A-{">"}Z hoàn chỉnh
        </h3>
        <div className="flex items-center gap-3 mb-5 text-xs dark:text-grayDark">
          {courseInfo.map((item, index) => (
            <div
              className="flex items-center gap-1"
              key={`${item.title} ${index}`}
            >
              {item.icon("size-4")}
              <span>{item.title}</span>
            </div>
          ))}
          <span className="font-semibold text-primary ml-auto text-base">
            888.000
          </span>
        </div>
      </div>
      {/* course btn */}
      <Link
        href={"#"}
        className="flex h-12 items-center justify-center w-full rounded-lg mt-10 text-white font-bold bg-primary"
      >
        Xem chi tiết
      </Link>
    </div>
  );
};

export default CourseItem;
