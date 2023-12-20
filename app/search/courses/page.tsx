"use client";

import { fetchCourses } from "@/slices/InstitutionSlice";
import { AppDispatch, RootState } from "@/store/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const courseEntities = useSelector((state: RootState) => state.course);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  const courses = courseEntities.entities;
  console.log(courses);

  return (
    <div className="p-8">
      <h1 className="py-16 text-3xl font-bold">Here are your Results</h1>
      {courses.slice(0, 25).map((item: any, key: any) => {
        return (
          <div
            key={key}
            className="p-4 my-2 border-b-[1px] flex w-full justify-between items-center px-4"
          >
            <p className="truncate w-[25vw] font-semibold text-black">
              {item.course_name}
            </p>
            <p className=" font-light text-black/50 w-[10vw] py-1 text-center text-blue-500 bg-blue-50 border-[1px] rounded-md border-blue-500">
              {item.duration}
            </p>
            <p className=" font-light text-black w-[10vw]">{item.platform}</p>
          </div>
        );
      })}
    </div>
  );
};

export default page;
