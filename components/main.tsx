"use client";
import "animate.css";
import React from "react";
import { TypewriterEffect } from "./ui/typewriter/typewriter";
import { Plus } from "lucide-react";
import { Poppins } from "next/font/google";
import { uuid } from "uuidv4";
import { useRouter } from "next/navigation";
import { resourceLimits } from "worker_threads";
import { delay, generateRandomCode } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";
const poppins = Poppins({
  subsets: ["latin"],
  weight: "100",
});
export function Main({ setIsLoading }: any) {
  const { toast } = useToast();
  const [code, setCode] = React.useState("");
  const [inputError, setInputError] = React.useState(false);

  const router = useRouter();

  async function createRoom() {
    setIsLoading(true);
    await delay(1000);
    setIsLoading(false);
    const uuid = generateRandomCode();
    router.push("/room/" + uuid);
  }

  function joinRoom() {
    if (inputError) {
      toast({
        title: "Meeting Code Invalid",
      });
      return;
    }
    if (code !== "") {
      router.push("/room/" + code);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center mb-20">
      <div className="flex flex-col items-center justify-center space-y-4">
        <h2 className="text-5xl text-white">
          What if GMeet & Replit had a{" "}
          <span className="bg-clip-text text-transparent font-semibold bg-gradient-to-r to-indigo-500 from-purple-500">
            baby?
          </span>
        </h2>
        <p
          className={`md:w-[45%] animate__animated animate__backInUp delay-2000 mb-5 text-center text-white tracking-wider ${poppins.className}`}
        >
          Dream of limitless coding collaboration? DevTest merges Replits
          dynamic coding with Google Meets real-time magic. Code and communicate
          effortlessly in one exhilarating space. Join now!
        </p>
        <div className="flex space-x-10">
          <button className="p-[3px] relative ">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div
              className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent flex justify-center items-center gap-2"
              onClick={() => createRoom()}
            >
              <Plus size={20} />
              Create
            </div>
          </button>
          <div className="flex gap-x-3">
            <input
              type="text"
              placeholder="Enter DevTest code"
              className={`px-4 py-2 rounded-md text-white bg-black border border-gray-400 ${
                inputError ? "border-red-500" : ""
              }`}
              onChange={(e) => {
                const value = e.target.value;
                const regex = /^[a-z]{4}-[a-z]{4}-[a-z]{4}$/;
                if (regex.test(value)) {
                  setCode(value);
                  setInputError(false);
                } else {
                  // Handle invalid input
                  // For example, show an error message or disable the join button
                  console.log("error");
                  setInputError(true);
                }
              }}
            />
            <button className="p-[3px] relative  group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg " />
              <div
                className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent"
                onClick={() => joinRoom()}
              >
                Join
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
