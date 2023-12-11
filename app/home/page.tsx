"use client";

import { NavigationBar } from "@/components/NavigationBar";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import SearchBar from "./components/SearchBar";

const index = () => {
  const router = useRouter();

  return (
    <div className="w-full flex flex-col pt-[5rem]">
      {/* Header */}
      <div className="p-4 w-full h-20 fixed top-0 flex justify-between items-center z-50 bg-white">
        {/* Logo */}
        <div className="flex gap-x-20">
          <Link
            href={"/home"}
            className="flex justify-center items-center gap-x-4"
          >
            <Image
              src="/images/AICTE.png"
              width={50}
              height={50}
              alt="Logo for aicte"
            />
            <div className="flex flex-col justify-center items-start">
              <h1 className="text-xl font-bold">AICTE</h1>
              <h2 className="text-sm font-base">
                All India Council for Technical Education
              </h2>
            </div>
          </Link>
          <NavigationBar />
        </div>
        <Button
          className="shadow-xl shadow-black/25 "
          onClick={() => router.push("/auth")}
          size={"lg"}
        >
          Login/Signup
        </Button>
      </div>
      {/* Search Bar */}
      <SearchBar />
    </div>
  );
};

export default index;
