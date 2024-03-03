"use client";
import { ChevronDown, User as UserIcon, LogOut, Loader } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { cn } from "@/lib/utils";
import { useUser } from "@auth0/nextjs-auth0/client";

import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

type UserButtonProps = {
  className?: string; // for styling the trigger.
};

const UserButton = ({ className }: UserButtonProps) => {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return (
      <div className=" py-2 px-6 border-2 border-purple-600 rounded-full">
        <Loader className="animate-spin text-purple-600" />
      </div>
    );
  }

  if (!user) {
    return (
      <Link
        href="/api/auth/login"
        className="flex items-center gap-1 py-2 px-4 rounded-full border-transparent text-gray-800 group bg-gradient-to-r border-2 hover:border-purple-500 transition-all from-indigo-500 to-purple-500  hover:bg-none  focus:outline-none  duration-200"
      >
        <UserIcon
          size={21}
          className="text-white group-hover:text-purple-500"
        />
        <span className=" text-lg text-white group-hover:text-purple-500 group-hover:text-transparent group-hover:bg-clip-text font-semibold">
          Sign in
        </span>
      </Link>
    );
  }
  // <div className="flex flex-nowrap gap-1 items-center justify-end min-w-[305px]">
  //       <button className=" text-nowrap text-sm  text-gray-200 hover:bg-[#ffdd00] bg-gradient-to-r from-indigo-500 to-purple-500 transition-all px-3 py-2 rounded-full ">
  //         Log in
  //       </button>
  //     </div>

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "group flex gap-1 border-2 data-[state=open]:bg-muted rounded-full px-2 bg-transparent border-purple-500 hover:bg-transparent",
            className,
          )}
        >
          <Image
            src={user?.picture as string}
            alt="User Image"
            width={25}
            height={25}
            className="rounded-full"
          />
          <ChevronDown
            size={21}
            className="group-data-[state=open]:rotate-180 transition-transform duration-300 text-purple-500"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="max-w-[350px] z-30 p-4 rounded-lg border-purple-500 bg-[#0f0f0f]"
        align="end"
        sideOffset={8}
      >
        <DropdownMenuLabel className="flex items-center gap-2 mb-3">
          <Image
            src={user?.picture as string}
            alt="User Image"
            width={38}
            height={38}
            className="rounded-full"
          />
          <div className="flex flex-col text-sm leading-4 gap-[3px]">
            <span className=" text-gray-400 text-[1.125rem]">{user?.name}</span>
            <span className="text-gray-500">{user?.email}</span>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-gray-300" />
        <div className="flex flex-col mt-3 gap-1 text-gray-800">
          <DropdownMenuItem asChild>
            <div className="flex flex-row justify-start gap-4 items-center bg-red hover:bg-red-500">
              <UserIcon size={22} />
              <span className="text-lg">Profile</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Button
              size="sm"
              className="flex items-center gap-2 bg-transparent hover:bg-transparent text-white cursor-pointer rounded-full"
            >
              <LogOut size={20} />
              Log out
            </Button>
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
