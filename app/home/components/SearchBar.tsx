import React from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Separator } from "@/components/ui/Separator";
import { Filter } from "./Filter";
import { useRouter } from "next/navigation";

const SearchSection = () => {
  const [search, setSearch] = React.useState("");
  const router = useRouter();

  return (
    <div className="w-full h-full overflow-hidden relative rounded-[25px] mx-6">
      <video
        src="/videos/Flag.mp4"
        className="w-[200%] h-auto relative"
        typeof="video/mp4"
        autoPlay
        loop
        muted
      />
      <div className="h-full w-full bg-gradient-to-b from-white/0 to-gray-200 absolute top-0 right-0 backdrop-blur-sm" />
      <div className="w-full h-full absolute top-0 right-0 flex flex-col justify-center items-start gap-y-10 px-28">
        <img
          alt="Modi"
          src="/images/Modipng.png"
          className="h-[35rem] w-auto absolute bottom-0 right-20"
        />
        <p className="text-4xl font-bold text-white drop-shadow-md w-[60%]">
          Search across available{" "}
          <span className="font-black text-stone-900">Scholarships</span>,{" "}
          <span className="font-black text-stone-900">Cources</span>,{" "}
          <span className="font-black text-stone-900">Faculties</span> and{" "}
          <span className="font-black text-stone-900">Collages</span>
        </p>
        <div className="w-[50%] flex flex-col justify-center items-center gap-4">
          <div className="flex justify-center items-center w-full gap-4">
            <Input
              placeholder="Search anything inside AICTE"
              className="rounded-sm w-full text-lg p-6"
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button
              size={"lg"}
              className="w-[25%] h-12 rounded-sm shadow-xl shadow-black/25 hover:shadow-none transition"
              onClick={() => router.push(`/search?search=${search}`)}
            >
              Search
            </Button>
          </div>
          <div className="w-full flex justify-start items-center">
            <p className="text-lg font-normal text-stone-700">
              {" "}
              Not sure what to search?
              <Filter />
            </p>
          </div>
        </div>
      </div>
      {/* Quote */}
      <div className="absolute bottom-8 right-48 bg-white/30 p-4 backdrop-blur-md flex justify-center items-center flex-col gap-4 w-[30vw] rounded-md">
        <p className="font-normal">
          Time for phrases like `&apos`Hota Hai-Chalta Hai`&apos` is now a
          matter of past. India is growing rapidly and the world has high
          expectations from us. We cannot let this opportunity go.
        </p>
        <Separator className="bg-gray-300 w-[80%]" />
        <p className="text-left w-full text-lg font-semibold">
          - Narendra Modi
        </p>
      </div>
    </div>
  );
};

export default SearchSection;
