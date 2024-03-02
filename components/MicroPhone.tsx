"use client";

import { useRecordVoice } from "@/hooks/VoiceRecoder";
import { MicIcon } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";

const Microphone = () => {
  const { startRecording, stopRecording, recording } = useRecordVoice();
  const [audioData, setAudioData] = useState<string | null>(null);

  useEffect(() => {
    const convertBlobToBase64 = () => {
      if (recording) {
        const reader = new FileReader();
        console.log("reading", recording);
        reader.readAsDataURL(recording);
        reader.onloadend = () => {
          const base64Data = reader.result?.toString().split(",")[1];
          setAudioData(base64Data); // Set the base64 audio data
        };
      }
    };

    convertBlobToBase64();
  }, [recording]);

  // Send the audio data to the server when available
  useEffect(() => {
    const sendDataToServer = async () => {
      if (audioData) {
        try {
          const response = await fetch("api/speechToText", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ audio: audioData }),
          });
          console.log("Response:---------> ", response);
        } catch (error) {
          console.log("Error sending audio data to server:", error);
        }
      }
    };

    sendDataToServer();
  }, [audioData]);

  return (
    // Button for starting and stopping voice recording
    <button
      onMouseDown={startRecording} // Start recording when mouse is pressed
      onMouseUp={stopRecording} // Stop recording when mouse is released
      onTouchStart={startRecording} // Start recording when touch begins on a touch device
      onTouchEnd={stopRecording} // Stop recording when touch ends on a touch device
      className="border-none bg-transparent w-10"
    >
      {/* Microphone icon component */}
      <MicIcon />
    </button>
  );
};

export { Microphone };
