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

const categories = ["Scholarships", "Courses", "Faculty", "Collages"];

const CourseCategory = [
  {
    name: "Duration",
    options: ["1 Month", "2 Month", "3 Month", "4 Month", "5 Month"],
  },
  { name: "Level", options: ["Beginner", "Intermediate", "Advanced"] },
  {
    name: "Subject",
    options: [
      "Maths",
      "Science",
      "English",
      "Hindi",
      "Engineering",
      "Medical",
      "Commerce",
      "Management",
      "Law",
      "Design",
      "Architecture",
      "Computer Science",
      "Arts",
      "Media",
      "Hospitality",
      "Agriculture",
      "Aviation",
    ],
  },
  {
    name: "Provider",
    options: ["IIT", "IIM", "NIT", "AIIMS", "BITS", "DU", "JNU", "AMU"],
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
  {
    name: "Provider",
    options: [
      "IIT",
      "IIM",
      "NIT",
      "AIIMS",
      "BITS",
      "DU",
      "JNU",
      "AMU",
      "Government",
      "Private",
      "NGO",
    ],
  },
];

const collageCategory = [
  {
    name: "Sector",
    options: ["Government", "Private"],
  },
  {
    name: "NIRF",
    options: [
      "top 100",
      "100-200",
      "200-300",
      "300-400",
      "400-500",
      "500-600",
      "600-700",
      "700-800",
      "800-900",
      "900-1000",
      "1000-1100",
      "1100-1200",
      "1200-1300",
      "1300-1400",
      "1400-1500",
      "more than 1500",
    ],
  },
];

const FacultyCategory = [
  {
    name: "Collage",
    options: ["IIT", "IIM", "NIT", "AIIMS", "BITS", "DU", "JNU", "AMU"],
  },
  {
    name: "Subject",
    options: [
      "Maths",
      "Science",
      "English",
      "Hindi",
      "Engineering",
      "Medical",
      "Commerce",
      "Management",
      "Law",
      "Design",
      "Architecture",
      "Computer Science",
      "Arts",
      "Media",
      "Hospitality",
      "Agriculture",
      "Aviation",
    ],
  },
  {
    name: "Qualification",
    options: ["Phd", "Masters", "Bachelors", "Diploma"],
  },
];

export function Filter() {
  const [variant, setVariants] = useState<string>(" ");

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
        <Button
          size={"lg"}
          variant={"link"}
          className="text-lg font-black text-black p-4"
        >
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
            {ScholarshipsCategory.map((item, key) => (
              <div
                key={key}
                className="flex justify-between items-center w-[70%]"
              >
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
            {CourseCategory.map((item, key) => (
              <div
                key={key}
                className="flex justify-between items-center w-[70%]"
              >
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
          id="Faculty"
          className="flex flex-col justify-start items-start gap-y-4 w-[100%]"
        >
          {/* Cources Filter */}
          <div className="flex flex-col justify-start items-start w-[15%] ">
            <h1
              className={`text-lg font-semibold ${
                variant != "Faculty" ? "text-gray-400" : " "
              }`}
            >
              Faculty
            </h1>
            <Separator className="bg-neutral-400" />
          </div>
          <div className="w-full grid grid-cols-2 gap-y-4">
            {FacultyCategory.map((item, key) => (
              <div
                key={key}
                className="flex justify-between items-center w-[70%]"
              >
                <p
                  className={`text-sm font-light ${
                    variant != "Faculty" ? "text-gray-400" : " "
                  }`}
                >
                  {item.name}:
                </p>
                <Select
                  onValueChange={(e) => {}}
                  disabled={variant != "Faculty"}
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
            {collageCategory.map((item, key) => (
              <div
                key={key}
                className="flex justify-between items-center w-[70%]"
              >
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
