"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import React from "react";

const page = () => {
  const [variants, setVariants] = React.useState("");

  function handleScroll(e: string) {
    const category = document.getElementById(e);
    console.log(e);
    setVariants(e);
    if (category != null) {
      category.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  const categories = [
    "Scholarship",
    "Institution",
    "Faculty",
    "Course",
    "Announcement",
  ];

  return (
    <div className="p-16 flex flex-col justify-start items-start gap-y-8 ">
      <h1 className="text-3xl font-bold">Add / Update the Data</h1>
      <div>
        <p>Select the Category to Post</p>
        <Select value={variants} onValueChange={(e) => handleScroll(e)}>
          <SelectTrigger className="w-[15vw]">
            <SelectValue placeholder="Select a Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Category</SelectLabel>
              {categories.map((category, index) => (
                <SelectItem key={index} value={category} className="w-[15vw]">
                  {category}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default page;
