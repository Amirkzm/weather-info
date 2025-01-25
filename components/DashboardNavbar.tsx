import React from "react";
import { ModeToggle } from "./ModeToggle";
import { Searchbar } from "./ui/Searchbar";
import Image from "next/image";
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

const DashboardNavbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-4 bg-slate-400">
      <div className="flex-center gap-2">
        <Image src={"/logo.svg"} width={40} height={40} alt="AquaLens Logo" />
        <h1 className="text-2xl font-bold text-white">AquaLens</h1>
      </div>
      <Searchbar />
      <div className="flex-center gap-4">
        <ModeToggle />
        <>
          <SignedOut>
            <SignInButton>
              <Button>SignIn or Register</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </>
      </div>
    </div>
  );
};

export default DashboardNavbar;
