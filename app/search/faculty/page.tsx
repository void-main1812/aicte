"use client";

import { Button } from "@/components/ui/Button";
import { fetchFaculties } from "@/slices/FacultySlice";
import { fetchScholarShip } from "@/slices/ScholarShipSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const facultyEntities = useSelector((state: RootState) => state.faculty);

  const dispatch = useDispatch<AppDispatch>();

  const router = useRouter();

  useEffect(() => {
    dispatch(fetchFaculties());
  }, [dispatch]);

  const faculty = facultyEntities.entities;
  console.log(faculty);

  return (
    <div className="p-8">
      <h1 className="py-16 text-3xl font-bold">Here are your Results</h1>
      <div className="w-full py-2 flex justify-between items-center bg-white sticky top-0 right-0">
        <p className="text-black font-semibold w-[25vw]">Name</p>
        <p className="text-black font-semibold w-[10vw] ">Faculty_id</p>
        <p className="text-black font-semibold w-[10vw] ">Joining Date</p>
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
      {faculty.slice(0, 25).map((item: any, key: any) => (
        <div
          key={key}
          className="p-4 my-2 border-b-[1px] flex w-full justify-between items-center px-4"
        >
          <p className="truncate w-[25vw] font-semibold text-black">
            {item.name}
          </p>
          <p className=" font-light text-black/50 w-[12vw] py-1 text-center text-yellow-500 bg-yellow-50 border-[1px] rounded-md border-yellow-500">
            {item.faculty_id}
          </p>
          <p className=" font-light text-black w-[10vw] truncate">
            {item.date_of_joining}
          </p>
        </div>
      ))}
    </div>
  );
};

export default page;
