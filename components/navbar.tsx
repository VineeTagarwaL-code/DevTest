import React from "react";
import { Heart, ChevronDown, Search } from "lucide-react";
import UserButton from "./UserButton";

const Navbar = () => {
  return (
    <nav className="flex justify-between flex-row items-center w-screen px-8 py-6 bg-[#111111] mb-44">
      <div className="flex flex-nowrap items-center gap-10 min-w-[305px]">
        <p className="text-purple-500 text-base font-light cursor-pointer">
          FAQ
        </p>
        <div className=" flex justify-center items-center gap-2 cursor-pointer">
          <span className="text-purple-500 text-base font-light">Reviews </span>
          <Heart size={15} className="text-purple-400" />
        </div>
        <div className=" flex justify-center items-center gap-2 cursor-pointer">
          <span className="text-purple-500 text-base font-light">
            Resources{" "}
          </span>
          <ChevronDown size={15} className="text-purple-400" />
        </div>
      </div>
      <div>
        <p className="text-2xl bg-clip-text text-transparent font-semibold bg-gradient-to-r to-indigo-500 from-purple-500 ">
          DevTest
        </p>
      </div>
      <div className="flex flex-nowrap gap-1 items-center justify-end min-w-[305px]">
        <UserButton />
      </div>
    </nav>
  );
};

export default Navbar;
