import "animate.css";
import { TypewriterEffect } from "./ui/typewriter/typewriter";
import { Plus } from "lucide-react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "100",
});
export function Main() {
  return (
    <div className="flex flex-col justify-center items-center">
      <TypewriterEffect />
      <div className="flex flex-col items-center justify-center space-y-4">
        <p
          className={`md:w-[55%] animate__animated animate__backInUp delay-2000 mb-5 text-center text-white tracking-wider ${poppins.className}`}
        >
          Dream of limitless coding collaboration? DevTest merges Replits
          dynamic coding with Google Meets real-time magic. Code and communicate
          effortlessly in one exhilarating space. Join now!
        </p>
        <div className="flex space-x-10">
          <button className="p-[3px] relative ">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent flex justify-center items-center gap-2">
              <Plus size={20} />
              Create
            </div>
          </button>
          <div className="flex gap-x-3">
            <input
              type="text"
              placeholder="enter your url"
              className="px-4 py-2 rounded-md text-white bg-black border border-gray-400"
            />
            <button className="p-[3px] relative ">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
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
