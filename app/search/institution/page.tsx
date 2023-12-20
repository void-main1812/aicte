"use client";

import { Button } from "@/components/ui/Button";
import { fetchInstitutes } from "@/slices/CourseSlice";
import { fetchCourses } from "@/slices/InstitutionSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const instutiuteEntities = useSelector((state: RootState) => state.institute);

  const dispatch = useDispatch<AppDispatch>();

  const router = useRouter();

  useEffect(() => {
    dispatch(fetchInstitutes());
  }, [dispatch]);

  const institute = instutiuteEntities.entities;
  console.log(institute);

  return (
    <div className="p-8">
      <h1 className="py-16 text-3xl font-bold">Here are your Results</h1>
      <div className="w-full py-2 flex justify-between items-center bg-white sticky top-0 right-0">
        <p className="text-black font-semibold w-[25vw]">Name</p>
        <p className="text-black font-semibold w-[10vw] ">State</p>
        <p className="text-black font-semibold w-[10vw] ">AICTE ID</p>
      </div>
      <Button
        onClick={() => router.push("/home")}
        variant={"outline"}
        size={"lg"}
        className="absolute right-8 top-8"
      >
        {" "}
        Go Back Home{" "}
      </Button>
      {institute.slice(0, 25).map((item: any, key: any) => {
        return (
          <div
            key={key}
            className="p-4 my-2 border-b-[1px] flex w-full justify-between items-center px-4"
          >
            <p className="truncate w-[25vw] font-semibold text-black">
              {item.institute_name}
            </p>
            <p className=" font-light text-black/50 w-[10vw] py-1 text-center text-blue-500 bg-blue-50 border-[1px] rounded-md border-blue-500">
              {item.state}
            </p>
            <p className=" font-light text-black w-[10vw]">{item.aicte_id}</p>
          </div>
        );
      })}
    </div>
  );
};

export default page;
