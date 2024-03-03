import React from "react";

const useSpeechToText = () => {
  const [speech, setSpeech] = React.useState(false);
  const [transcript, setTranscript] = React.useState("");

  React.useEffect(() => {
    let recognition: any;

    const handleResult = (e: any) => {
      const transcript = Array.from(e.results)
        .map((result: any) => result[0])
        .map((result) => result.transcript)
        .join("");
      console.log(transcript);
      setTranscript(transcript);
    };

    const startRecognition = () => {
      if ("webkitSpeechRecognition" in window) {
        recognition = new (window as any).webkitSpeechRecognition() as any;
        recognition.interimResults = true;
        recognition.addEventListener("result", handleResult);

        if (speech) {
          recognition.start();
        }

        return recognition; // Return the recognition object for cleanup
      } else {
        console.error("Speech recognition not supported in this browser");
        return null; // Return null if not supported
      }
    };

    const cleanupRecognition = startRecognition(); // Save the recognition object for cleanup

    return () => {
      if (cleanupRecognition) {
        cleanupRecognition.removeEventListener("result", handleResult);
        cleanupRecognition.abort();
      }
    };
  }, [speech]);

  const handleClickToRecord = () => {
    setSpeech(!speech);
  };

  return { speech, transcript, handleClickToRecord };
};

export default useSpeechToText;
