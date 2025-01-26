"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Command } from "@/components/ui/command";
import { Input } from "@/components/ui/input"; // Assuming you have an Input component
import { SearchIcon } from "lucide-react";

export function Searchbar() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    router.push(`/dashboard?city=${inputValue}`);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="sm:w-fit md:w-[50%] flex-center justify-between">
          Search here ...
          <SearchIcon className="w-5 h-5 ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Command onClick={handleSearch}>Search</Command>
        <Input
          placeholder="Search for your desired location"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </DialogContent>
    </Dialog>
  );
}
