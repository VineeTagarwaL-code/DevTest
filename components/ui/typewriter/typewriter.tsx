"use client";
import { TypewriterEffectSmooth } from "./typewriter-effect";
export function TypewriterEffect() {
  const words = [
    {
      text: "What",
      className: "text-gray-200",
    },
    {
      text: "if",
      className: "text-gray-200",
    },
    {
      text: "G-Meet",
      className: "text-gray-200",
    },
    {
      text: "&",
      className: "text-gray-200",
    },
    {
      text: "Replit",
      className: "text-gray-200",
    },
    {
      text: "had",
      className: "text-gray-200",
    },
    {
      text: "a",
      className: "text-gray-200",
    },
    {
      text: "baby?",
      className:

        "text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text hover:from-pink-500 hover:to-yellow-500 focus:outline-none focus:ring focus:border-blue-300 active:bg-indigo-800 cursor-pointer",

    },
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      <TypewriterEffectSmooth words={words} className="text-white" />
    </div>
  );
}
