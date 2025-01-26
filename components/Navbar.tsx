import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/30 glass-bg z-50">
      <nav>
        <ul className="flex justify-between space-x-4 p-4">
          <li>
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={72} height={72} />
            </Link>
          </li>
          <li className="flex items-center space-x-4">
            <Button variant={"secondary"}>
              <Link href="/dashboard">Go to Dashboard</Link>
            </Button>
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
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
