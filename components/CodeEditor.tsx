"use client";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";
import axios from "axios";

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

const CodeEditor = () => {
  const [code, setCode] = useState("");
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [output, setOutput] = useState("");

  const handleChange = React.useCallback((value: string) => {
    setCode(value);
  }, []);

  useEffect(() => {
    if (token !== "") {
      getResult();
    }
  }, [token]);

  const handleRun = async () => {
    setIsLoading(true);
    const tokenRes = await axios.post("/api/judge0", { code });
    setToken(tokenRes.data.token);
  };

  const getResult = async () => {
    const res = await axios.get(`/api/judge0/?token=${token}`);
    console.log(atob(res.data?.stdout));
    setIsLoading(false);
  };

  return (
    <div>
      <CodeMirror
        value={code}
        height="100vh"
        theme={vscodeDark}
        extensions={[javascript()]}
        onChange={handleChange}
      />
      <Button onClick={handleRun}>Run</Button>
      <div>{isLoading ? "Loading..." : ""}</div>
      <span>{output}</span>
    </div>
  );
};

export default CodeEditor;
