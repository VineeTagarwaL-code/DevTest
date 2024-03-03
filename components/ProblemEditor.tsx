"use client";

import React, { useState, useRef, useEffect } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const ProblemEditor = () => {
  const [problem, setProblem] = useState("");
  const [isEditing, setIsEditing] = useState(true);
  const problemRef = useRef(problem);

  useEffect(() => {
    problemRef.current = problem;
  }, [problem]);

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div className="flex flex-col">
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
