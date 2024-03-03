"use client";

import React, { useState, useRef, useEffect } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import useSpeechToText from "@/hooks/speedToText";
import { MicIcon } from "lucide-react";

const ProblemEditor = () => {
  const [problem, setProblem] = useState("");
  const [isEditing, setIsEditing] = useState(true);
  const problemRef = useRef(problem);

  const { speech, transcript, handleClickToRecord } = useSpeechToText();

  useEffect(() => {
    problemRef.current = problem;
  }, [problem]);

  useEffect(() => {
    if (speech) {
      setProblem(transcript);
    }
  }, [speech, transcript]);

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div className="relative flex flex-col">
          <button
            onClick={handleClickToRecord}
            className="absolute  bg-transparent z-10 right-2 my-16 mx-2 bg-black px-2 py-2 rounded-full border-purple-600  border-solid border-2"
          >
            <MicIcon className="text-purple-600" />
          </button>
          <textarea
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
            className="h-[85vh] w-full rounded-sm border border-gray-400/50 p-3"
            placeholder="Write your problem here... (Markdown supported btw!)"
          />

          <button
            className="bg-green-800 text-white text-lg font-semibold mt-2 px-2 py-1 rounded-lg self-end"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      ) : (
        <div className="flex flex-col">
          <Markdown remarkPlugins={[remarkGfm]} className="prose">
            {problemRef.current}
          </Markdown>
          <button
            onClick={() => setIsEditing(true)}
            className="bg-green-700 absolute top-0 right-0 px-2 py-1 m-2 text-lg font-semibold text-white rounded-lg"
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default ProblemEditor;
