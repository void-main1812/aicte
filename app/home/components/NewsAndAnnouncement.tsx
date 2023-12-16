import Image from "next/image";
import React from "react";
import Modi_Parliament from "../../../public/images/Modi_Parliament.png";
import Jaishankar from "../../../public/images/Jaishankar.png";
import Hackathon from "../../../public/images/Hackathon.png";
import HackathonJr from "../../../public/images/HackathonJr.png";
import { Button } from "@/components/ui/Button";

const SchemeData = [
  {
    Name: "National e-Scholarship",
    description:
      "National e-Scholarship is the one-stop solution to help students seek various scholarships.",
  },
  {
    Name: "Vidya Laxhmi",
    description:
      "Vidya Lakshmi is a first-of-its-kind portal for students seeking educational loan.",
  },
  {
    Name: "Pragati and Saksham",
    description:
      "Scholarship for girls under the Pragati Scheme and scholarship for differently-abled students under Saksham Scheme.",
  },
  {
    Name: "India Innovation Initiative",
    description:
      "Indian`&apos`s largest innovation challengs jointly promoted by the CII and Department of Science & Technology.",
  },
];

const NewsAndAnnouncement = () => {
  return (
    <div className="w-full justify-start items-start flex flex-col gap-y-8">
      <h1 className="text-3xl font-bold">Latest News and Announcement</h1>
      <div className="grid grid-cols-4 grid-rows-5 h-[150vh] w-full gap-x-2 gap-y-2">
        <div className="col-span-4 row-span-2 bg-gray-500 rounded-2xl relative overflow-hidden">
          <Image
            src={Modi_Parliament}
            alt="Modi on Parliament"
            className="object-cover h-auto w-full"
          />
          <h1 className="absolute bottom-6 left-6 text-white font-normal text-5xl w-[50%]">
            Inaugration of New Parliament house{" "}
            <span className="font-bold">Soon</span>
          </h1>
        </div>
        <div className="col-span-2 row-span-2 grid grid-cols-2 grid-rows-2 gap-x-2 gap-y-2">
          {SchemeData.map((item, key) => {
            return (
              <div
                key={key}
                className="bg-gray-50 border border-black/15 rounded-2xl flex flex-col justify-between items-start p-8 "
              >
                <h1 className="text-black font-bold text-lg w-[60%] h-[40%]">
                  {item.Name}
                </h1>
                <p className="text-sm text-gray-700 font-light h-[50%]">
                  {item.description}
                </p>
                <Button className=" text-orange-600 w-[25%]" variant={"link"}>
                  Learn More
                </Button>
              </div>
            );
          })}
        </div>
        <div className="col-span-2 row-span-2 bg-gray-300 rounded-2xl relative overflow-hidden">
          <Image
            src={Jaishankar}
            alt="Modi on Parliament"
            className="object-cover h-full w-auto "
          />
          <h1 className="absolute bottom-6 left-6 text-white font-normal text-4xl w-[55%]">
            India is Unstoppable{" "}
            <span className="font-semibold text-xl">EAS Jaishankar</span>
          </h1>
        </div>
        <div className="col-span-2 bg-gray-200 rounded-2xl overflow-hidden relative">
          <Image
            src={Hackathon}
            alt="Modi on Parliament"
            className="object-cover h-auto w-full "
          />
          <h1 className="absolute bottom-6 left-6 text-white font-normal text-3xl w-[50%]">
            SIH 2023 is now <span className="font-bold">Live</span>
          </h1>
        </div>
        <div className="col-span-2 bg-gray-200 rounded-2xl overflow-hidden relative">
          <Image
            src={HackathonJr}
            alt="Modi on Parliament"
            className="object-cover h-auto w-full"
          />
          <h1 className="absolute bottom-6 left-6 text-white font-normal text-3xl w-[50%]">
            SIH 2023 Jr <span className="font-bold">Soon</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default NewsAndAnnouncement;
