"use client";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";
import axios from "axios";
import { Microphone } from "./MicroPhone";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import ProblemEditor from "./ProblemEditor";
import OutputWindow from "./OutputWindow";

const socket = io("http://localhost:8000");

const CodeEditor = () => {
  const [code, setCode] = useState("");
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [output, setOutput] = useState("");

  const handleChange = React.useCallback((value: string) => {
    setCode(value);
    socket.emit("code-change", value);
  }, []);

  useEffect(() => {
    if (token !== "") {
      getResult();
    }
    console.log(token);
  }, [token]);

  const handleRun = async () => {
    setIsLoading(true);
    const tokenRes = await axios.post("/api/judge0", { code });
    setToken(tokenRes.data.token);
  };

  const getResult = async () => {
    const res = await axios.get(`/api/judge0/?token=${token}`);
    setOutput(atob(res.data?.stdout));
    setIsLoading(false);
  };

  useEffect(() => {
    socket.on("code-change", (code: string) => {
      setCode((prev) => code);
    });

    socket.emit("on-client-connect");

    socket.on("get-editor-state", () => {
      if (code === "") return;
      socket.emit("editor-state", code);
    });

    socket.on("editor-state-from-server", (code: string) => {
      setCode(code);
    });

    return () => {
      socket.off("code-change");
      socket.off("get-editor-state");
      socket.off("editor-state-from-server");
    };
  }, [code]);

  return (
    <div className="relative">
      <CodeMirror
        value={code}
        height="100vh"
        theme={vscodeDark}
        extensions={[javascript()]}
        onChange={handleChange}
      />

      <ProblemEditor />
      <OutputWindow output={output} isLoading={isLoading} onClick={handleRun} />
    </div>
  );
};

export default CodeEditor;
