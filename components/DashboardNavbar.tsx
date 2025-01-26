import React from "react";
import { ModeToggle } from "./ModeToggle";
import { Searchbar } from "./ui/Searchbar";
import Image from "next/image";
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

const DashboardNavbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-gray-800 text-white shadow-md">
      <div className="flex items-center space-x-3">
        <Image
          src="/logo.png"
          alt="Logo"
          width={40}
          height={40}
          className="rounded-full"
        />
        <span className="text-xl font-semibold">Sky Metrics</span>
      </div>

      <div className="flex-1 px-4 flex-center">
        <Searchbar />
      </div>

      <div className="flex items-center space-x-4">
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
    </nav>
  );
};

export default DashboardNavbar;
