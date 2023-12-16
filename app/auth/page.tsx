"use client";

import SocialAuthButton from "@/components/SocialAuthButton";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Separator } from "@/components/ui/Separator";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { OtpVerification } from "./components/OtpVerification";

const Page = () => {
  const [showPassword, setShowPassword] = useState(false);

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  const router = useRouter();

  return (
    <div className="h-[100vh] w-full flex justify-center items-center bg-transparent">
      {/* Header for Auth Page */}
      <div className="w-full flex flex-row-reverse justify-between items-center p-4 absolute top-0">
        {/* Button to Home */}
        <Button
          variant={"outline"}
          size={"default"}
          className="flex justify-center items-center gap-2 hover:gap-4 transition-all duration-300"
          onClick={() => {
            router.push("/home");
          }}
        >
          <IoArrowBack className="text-lg" />
          Back to Home
        </Button>
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
      </div>
      {/* Authentication Details Section */}
      <div className="flex flex-col gap-10 justify-center items-center">
        {/* Greeting Text */}
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold">Welcome to AICTE</h1>
          <h2 className="text-md font-lightb text-neutral-400 ">
            Login/Register to Continue
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          {/* Input Section */}
          <div className="flex items-center">
            <Input
              placeholder="Enter your Email-Id"
              type="Email"
              className="mr-6"
            />
            <Input
              placeholder="Enter your Password"
              type={showPassword ? "text" : "password"}
            />
          </div>
          {/* ForgotPassword and Show password */}
          <div className="flex justify-center items-center">
            <div className="flex justify-center text-gray-400 items-center gap-x-2 mr-4">
              <input type="checkbox" onClick={handleShowPassword} />
              <h2>Show Password</h2>
            </div>
            <Button variant={"link"} className="font-semibold">
              Forgot Password
            </Button>
          </div>
        </div>
        {/* Otp Verification */}
        <OtpVerification />
        {/* Saperator */}
        <div className="flex flex-col w-[25vw] justify-center items-center relative z-0">
          <Separator />
          <p className="absolute px-2 bg-[#FCFCFC]">Or Continue with</p>
        </div>
        {/* Social Authentication */}
        <div className="flex justify-center items-center gap-4">
          <SocialAuthButton provider={"google"} text={"Google"} />
          <SocialAuthButton provider={"facebook"} text={"Facebook"} />
          <SocialAuthButton provider={"microsoft"} text={"Microsoft"} />
        </div>
      </div>
    </div>
  );
};

export default Page;
