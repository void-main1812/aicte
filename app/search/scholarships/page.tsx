"use client";

import { Button } from "@/components/ui/Button";
import { fetchScholarShip } from "@/slices/ScholarShipSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const scholarShipEntities = useSelector(
    (state: RootState) => state.scholarship
  );

  const router = useRouter();

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchScholarShip());
  }, [dispatch]);

  const scholarship = scholarShipEntities.entities;
  console.log(scholarship);

  return (
    <div className="p-8">
      <h1 className="py-16 text-3xl font-bold">Here are your Results</h1>
      <div className="w-full py-2 flex justify-between items-center bg-white sticky top-0 right-0">
        <p className="text-black font-semibold w-[25vw]">Institute</p>
        <p className="text-black font-semibold w-[10vw] ">Amount</p>
        <p className="text-black font-semibold w-[10vw] ">Student</p>
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
      {scholarship.slice(0, 20).map((item: any, key: any) => (
        <div
          key={key}
          className="p-4 my-2 border-b-[1px] flex w-full justify-between items-center px-4"
        >
          <p className="truncate w-[25vw] font-semibold text-black">
            {item.institute_name_address}
          </p>
          <p className=" font-light text-black/50 w-[10vw] py-1 text-center text-green-500 bg-green-50 border-[1px] rounded-md border-green-500">
            Rs.{item.amount_released}
          </p>
          <p className=" font-light text-black w-[10vw] truncate">
            {item.name_of_student}
          </p>
        </div>
      ))}
    </div>
  );
};

export default page;
