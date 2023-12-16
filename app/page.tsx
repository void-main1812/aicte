"use client";

import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/home");
    }, 2000);
  }, []);

  return (
    <div className="h-[100vh] w-full flex justify-center items-center">
      Loading ...
    </div>
  );
}
