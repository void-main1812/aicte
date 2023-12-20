"use client";

import { fetchFaculties } from "@/slices/FacultySlice";
import { fetchScholarShip } from "@/slices/ScholarShipSlice";
import { AppDispatch, RootState } from "@/store/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const facultyEntities = useSelector((state: RootState) => state.faculty);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchFaculties());
  }, [dispatch]);

  const faculty = facultyEntities.entities;
  console.log(faculty);

  return (
    <div className="p-8">
      <h1 className="py-16 text-3xl font-bold">Here are your Results</h1>
      {faculty.slice(0, 10).map((item: any, key: any) => (
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
