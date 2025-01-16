import Image from "next/image";
import Link from "next/link";
import React from "react";
import IconEye from "../icons/IconEye";
import IconStar from "../icons/IconStar";
import IconClock from "../icons/IconClock";

const CourseItem = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4">
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
      <div className="py-4">
        <h3 className="text-lg mb-5 font-bold">
          Học Nextjs, tự làm ra sản phẩm từ A-{">"}Z hoàn chỉnh
        </h3>
        <div className="flex items-center gap-3 mb-5 text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <IconEye className="size-4" />
            <span>1000</span>
          </div>
          <div className="flex items-center gap-2">
            <IconStar className="size-4" />
            <span>5.0</span>
          </div>
          <div className="flex items-center gap-2">
            <IconClock className="size-4" />
            <span>30h15p</span>
          </div>
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
