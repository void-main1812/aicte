import { Button } from "@/components/ui/Button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/Dialog";
import { Input } from "@/components/ui/Input";

export function OtpVerification() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"lg"} className="w-[15vw] shadow-xl shadow-black/25">
          Continue
        </Button>
      </DialogTrigger>
      <DialogContent className="p-6 flex flex-col justify-center items-start gap-y-8 max-w-[32vw]">
        {/* Title */}
        <div className="flex flex-col justify-center items-start gap-y-2">
          <h1 className="text-2xl font-bold">Verify your Email Address</h1>
          <p className="text-sm font-light text-stone-500">
            We have sent a 6 digit OTP to your email id sou**********@gmail.com
            the OTP is valid only for 5 minutes
          </p>
        </div>
        {/* Otp and Submit */}
        <div className="flex flex-col justify-center items-end w-full gap-y-4">
          <Input placeholder="Enter OTP" className="w-full" />
          <Button size={"lg"} className="shadow-xl shadow-black/25">
            Submit
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
