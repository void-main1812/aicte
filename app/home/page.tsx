"use client";

import { NavigationBar } from "@/components/NavigationBar";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import SearchSection from "./components/SearchBar";
import FrequentlySearched from "./components/FrequentlySearched";
import NewsAndAnnouncement from "./components/NewsAndAnnouncement";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { fetchScholarShip } from "@/slices/ScholarShipSlice";

const Page = () => {
  const router = useRouter();

  return (
    <div className="w-full flex flex-col ">
      {/* Header */}
      <div
        className={`p-4 w-full h-20 fixed top-0 flex justify-between items-center z-[99999] backdrop-blur-xl 
          bg-white/50
        }`}
      >
        {/* Logo */}
        <Link
          href={"/home"}
          className="flex justify-center items-center gap-x-4"
        >
          <Image
            src="/images/AICTE.png"
            width={350}
            height={80}
            alt="Logo for aicte"
          />
        </Link>
        <div className="flex gap-x-10">
          <NavigationBar />
          <Button
            className="shadow-xl shadow-black/25 "
            onClick={() => router.push("/auth")}
            size={"lg"}
          >
            Login/Register
          </Button>
        </div>
      </div>
      {/* Search Bar */}
      <div className="w-full h-[90vh] flex justify-center items-center">
        <SearchSection />
      </div>
      {/* Frequently searched data */}
      <div className="w-full flex justify-center items-center p-16">
        <FrequentlySearched />
      </div>
      {/* News and Announcement Section */}
      <div className="w-full flex justify-center items-center p-16">
        <NewsAndAnnouncement />
      </div>
    </div>
  );
};

export default Page;
