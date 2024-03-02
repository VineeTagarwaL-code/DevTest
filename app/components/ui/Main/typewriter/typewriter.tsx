"use client";
import { TypewriterEffectSmooth } from "./typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "What",
    },
    {
      text: "if",
    },
    {
      text: "G-Meet",
    },
    {
      text: "&",
    },
    {
      text: "Replit",
    }, {
      text: "had",
    },
    {
      text: "a",
    },
    {
      text: "baby?",
      className: "text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text hover:from-pink-500 hover:to-yellow-500 focus:outline-none focus:ring focus:border-blue-300 active:bg-indigo-800 ",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center   ">
      
      <TypewriterEffectSmooth words={words} />
      
    </div>
  );
}
