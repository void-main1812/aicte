import React, { FC } from "react";
import { Button } from "./ui/Button";
import Google from "../public/images/Google.png";
import Facebook from "../public/images/Facebook.png";
import Microsoft from "../public/images/Microsoft.png";
import Image from "next/image";

interface SocialAuthButtonProps {
  provider: "google" | "facebook" | "microsoft";
  text: string;
}

const SocialAuthButton: FC<SocialAuthButtonProps> = ({ provider, text }) => {
  const service = provider;
  return (
    <Button
      className="bg-gradient-to-b from-[#F6F6F6] to-[#ECECEC] gap-2 text-neutral-800 shadow-xl shadow-black/15 w-[15vw]"
      size={"lg"}
    >
      <Image
        src={
          service == "google"
            ? Google
            : service == "facebook"
            ? Facebook
            : Microsoft
        }
        alt={`${service} logo`}
        className="w-5 h-5"
      />
      {text}
    </Button>
  );
};

export default SocialAuthButton;
