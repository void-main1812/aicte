"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/home");
    }, 2000);
  }, [router]);

  return (
    <div className="h-[100vh] w-full flex justify-center items-center">
      Loading ...
    </div>
  );
}
