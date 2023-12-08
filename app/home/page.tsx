"use client";

import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import React from "react";

const index = () => {
  const router = useRouter();

  return (
    <div className="h-[100vh] w-full flex justify-center items-center">
      <Button
        className="shadow-xl shadow-black/25"
        onClick={() => router.push("/auth")}
      >
        Login/Signup
      </Button>
    </div>
  );
};

export default index;
