import { Button } from "@/components/ui/Button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/Dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { Separator } from "@/components/ui/Separator";
import { useState } from "react";
import "../home.css";

const categories = ["Scholarships", "Courses", "Collages"];

const CourseCategory = [
  {
    name: "Duration",
    options: ["15 Weeks", "4 Weeks", "12 Weeks", "8 Weeks", "6 Weeks", "24 Weeks","Self Paced"],
  },
  
  {
    name: "Provider",
    options: ["CEC", "UGC", "NITTTR", "IIMB", "AICTE", "IGNOU", "NPTEL","NIOS"],
  },
];

const ScholarshipsCategory = [
  {
    name: "Level",
    options: ["Undergraduate", "Postgraduate", "Phd", "Diploma"],
  },
  {
    name: "Amount",
    options: [
      "less than 1 Lakh",
      "1 Lakh",
      "2 Lakh",
      "3 Lakh",
      "4 Lakh",
      "5 Lakh",
      "more than 5 Lakh",
    ],
  },
  
];

const collageCategory = [
  {
    name: "Sector",
    options: ["Government", "Govt aided", "Private-Self Financing", "State Government", "State Private University", "State Government University", "Deemed to be University(Pvt)"],
  },
  {
    name: "NIRF Ranking",
    options: [
      "1-20",
      "21-40",
      "41-60",
      "61-80",
      "81-100",
      "101-120",
      "121-140",
      "141-160",
      "161-180",
      "181-200",
    ],
  },
];


export function Filter() {
  const [variant, setVariants] = useState<string>("Scholarships");

  function handleScroll(e: string) {
    const category = document.getElementById(e);
    console.log(e);
    setVariants(e);
    if (category != null) {
      category.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"lg"} variant={"link"} className="text-lg font-bold">
          Help me Search
        </Button>
      </DialogTrigger>
      <DialogContent className="p-12 flex flex-col justify-start items-start gap-y-12 max-w-[55vw] h-[60vh] overflow-y-scroll scrollbar">
        {/* Title */}
        <h1 className="text-2xl font-bold">Tell us what you want to search</h1>
        {/* Select the Category */}
        <div className="flex justify-start items-center gap-x-4">
          <p className="text-md font-semibold">Category:</p>
          <Select onValueChange={(e) => handleScroll(e)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Category</SelectLabel>
                {categories.map((category, index) => (
                  <SelectItem key={index} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        {/* Filter according to selected category */}
        <div
          id="Scholarships"
          className="flex flex-col justify-start items-start gap-y-4 w-[100%]"
        >
          {/* Cources Filter */}
          <div className="flex flex-col justify-start items-start w-[15%] ">
            <h1
              className={`text-lg font-semibold ${
                variant != "Scholarships" ? "text-gray-400" : " "
              }`}
            >
              Scholarships
            </h1>
            <Separator className="bg-neutral-400" />
          </div>
          <div className="w-full grid grid-cols-2 gap-y-4">
            {ScholarshipsCategory.map((item) => (
              <div className="flex justify-between items-center w-[70%]">
                <p
                  className={`text-sm font-light ${
                    variant != "Scholarships" ? "text-gray-400" : " "
                  }`}
                >
                  {item.name}:
                </p>
                <Select
                  onValueChange={(e) => {}}
                  disabled={variant != "Scholarships"}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>{item.name}</SelectLabel>
                      {item.options.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            ))}
          </div>
        </div>
        <div
          id="Courses"
          className="flex flex-col justify-start items-start gap-y-4 w-[100%]"
        >
          {/* Cources Filter */}
          <div className="flex flex-col justify-start items-start w-[15%] ">
            <h1
              className={`text-lg font-semibold ${
                variant != "Courses" ? "text-gray-400" : " "
              }`}
            >
              Courses
            </h1>
            <Separator className="bg-neutral-400" />
          </div>
          <div className="w-full grid grid-cols-2 gap-y-4">
            {CourseCategory.map((item) => (
              <div className="flex justify-between items-center w-[70%]">
                <p
                  className={`text-sm font-light ${
                    variant != "Courses" ? "text-gray-400" : " "
                  }`}
                >
                  {item.name}:
                </p>
                <Select
                  onValueChange={(e) => {}}
                  disabled={variant != "Courses"}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>{item.name}</SelectLabel>
                      {item.options.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            ))}
          </div>
        </div>
        
        <div
          id="Collages"
          className="flex flex-col justify-start items-start gap-y-4 w-[100%]"
        >
          {/* Cources Filter */}
          <div className="flex flex-col justify-start items-start w-[15%] ">
            <h1
              className={`text-lg font-semibold ${
                variant != "Collages" ? "text-gray-400" : " "
              }`}
            >
              Collages
            </h1>
            <Separator className="bg-neutral-400" />
          </div>
          <div className="w-full grid grid-cols-2 gap-y-4">
            {collageCategory.map((item) => (
              <div className="flex justify-between items-center w-[70%]">
                <p
                  className={`text-sm font-light ${
                    variant != "Collages" ? "text-gray-400" : " "
                  }`}
                >
                  {item.name}:
                </p>
                <Select
                  onValueChange={(e) => {}}
                  disabled={variant != "Collages"}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>{item.name}</SelectLabel>
                      {item.options.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            ))}
          </div>
        </div>
        {/* Submit selection */}
        <Button size={"lg"} className="shadow-xl shadow-black/25 w-[10vw] py-4">
          Submit
        </Button>
      </DialogContent>
    </Dialog>
  );
}
