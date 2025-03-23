import { useEffect, useState, useRef } from "react";

export const useRecordVoice = () => {
  const [mediaRecorder, setMediaRecorder] = useState<
    MediaRecorder | (() => MediaRecorder) | null
  >(null);

  const [recording, setRecording] = useState<Blob>();

  const chunks = useRef<Blob[]>([]);

  const startRecording = () => {
    if (mediaRecorder instanceof MediaRecorder) {
      mediaRecorder.start();
    } else if (typeof mediaRecorder === "function") {
      const recorder = mediaRecorder();
      recorder.start();
    }
  };

  const stopRecording = () => {
    if (mediaRecorder instanceof MediaRecorder) {
      mediaRecorder.stop();
    } else if (typeof mediaRecorder === "function") {
      const recorder = mediaRecorder();
      recorder.stop();
    }
  };

  const initialMediaRecorder = (stream: MediaStream) => {
    const mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.onstart = () => {
      chunks.current = [];
    };

    // Event handler when data becomes available during recording
    mediaRecorder.ondataavailable = (ev: BlobEvent) => {
      if (ev.data) {
        chunks.current.push(ev.data); // Storing data chunks
      }
    };

    mediaRecorder.onstop = () => {
      // Creating a blob from accumulated audio chunks with WAV format
      const audioBlob = new Blob(chunks.current, { type: "audio/wav" });

      setRecording(audioBlob);
    };

    setMediaRecorder(mediaRecorder);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then(initialMediaRecorder);
    }
  }, []);

  return { recording, startRecording, stopRecording };
};