import CourseGrid from "@/components/common/CourseGrid";
import CourseItem from "@/components/course/CourseItem";
import Heading from "@/components/typography/Heading";
import React from "react";

const page = () => {
  return (
    <div>
      <Heading>Khám phá</Heading>
      <CourseGrid>
        <CourseItem />
        <CourseItem />
        <CourseItem />
        <CourseItem />
      </CourseGrid>
    </div>
  );
};

export default page;
