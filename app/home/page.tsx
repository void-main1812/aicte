"use client";

import { NavigationBar } from "@/components/NavigationBar";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import SearchSection from "./components/SearchBar";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import FrequentlySearched from "./components/FrequentlySearched";
import NewsAndAnnouncement from "./components/NewsAndAnnouncement";

const index = () => {
  const router = useRouter();
  const scrollPosition = useScrollPosition();

  return (
    <div className="w-full flex flex-col pt-[5rem]">
      {/* Header */}
      <div
        className={`p-4 w-full h-20 fixed top-0 flex justify-between items-center z-[99999] backdrop-blur-xl ${
          scrollPosition > 10 ? "bg-white/50" : "bg-white"
        }`}
      >
        {/* Logo */}
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
      <div className="w-full h-[80vh] flex justify-center items-center">
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

export default index;
