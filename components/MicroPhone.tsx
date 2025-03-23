"use client";
import React from "react";
import { MicIcon } from "lucide-react";
import useSpeechToText from "@/hooks/speedToText";
const Microphone = () => {
  const { speech, transcript, handleClickToRecord } = useSpeechToText();

  React.useEffect(() => {
    console.log(transcript);
  }, [transcript]);

  return (
    <button
      onClick={handleClickToRecord}
      className="absolute  bg-transparent z-10 right-2 my-16 mx-2 bg-black px-2 py-2 rounded-full border-purple-600  border-solid border-2"
    >
      <MicIcon className="text-purple-600" />
    </button>
  );
};

export { Microphone };