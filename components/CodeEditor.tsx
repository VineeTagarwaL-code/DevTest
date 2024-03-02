"use client";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";

import React, { useState } from "react";

const CodeEditor = () => {
  const [code, setCode] = useState("");

  const handleChange = React.useCallback((value: string) => {
    setCode(value);
  }, []);
  
  return (
    <CodeMirror
      value={code}
      height="100vh"
      theme={vscodeDark}
      extensions={[javascript()]}
      onChange={handleChange}
    />
  );
};

export default CodeEditor;
