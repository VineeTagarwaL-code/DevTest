"use client";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import Loader from "@/components/loader";
import { cn } from "@/lib/utils";

interface Question {
  question: string;
  answer: string;
}

type Message =
  | { type: 'user'; text: string }
  | { type: 'assistant'; text: string };

const typeWriter = async (text: string, cb: (partial: string) => void, speed = 30) => {
  let partial = '';
  for (let i = 0; i < text.length; i++) {
    partial += text[i];
    cb(partial);
    await new Promise((res) => setTimeout(res, speed));
  }
};

const ChatInterface = () => {
  const [techStack, setTechStack] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!techStack.trim()) return;
    setMessages((prev) => [
      ...prev,
      { type: 'user', text: techStack }
    ]);
    setIsTyping(true);
    setIsLoading(false);

    const contextMsg = `Sure! Here are some technical questions on "${techStack}". Let me know if you want more or need explanations for any of them.`;
    let typedMsg = '';
    setMessages((prev) => [
      ...prev,
      { type: 'assistant', text: '' }
    ]);
    await typeWriter(contextMsg, (partial) => {
      typedMsg = partial;
      setMessages((prev) => {
        const last = prev[prev.length - 1];
        if (last && last.type === 'assistant') {
          return [...prev.slice(0, -1), { ...last, text: partial }];
        }
        return prev;
      });
    }, 25);
    setIsTyping(false);
    setIsLoading(true);
    setTimeout(async () => {
      try {
        const response = await fetch('/api/questions', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ techStack }),
        });
        const data = await response.json();
        if (data.questions && Array.isArray(data.questions)) {
          const formatted = data.questions.map((q: Question, idx: number) =>
            `Q${idx + 1}: ${q.question}\nA: ${q.answer}`
          ).join('\n\n');
          setMessages((prev) => [
            ...prev,
            { type: 'assistant', text: formatted }
          ]);
        } else {
          setMessages((prev) => [
            ...prev,
            { type: 'assistant', text: `Sorry, I couldn't find questions for "${techStack}". Try another topic!` }
          ]);
        }
      } catch {
        setMessages((prev) => [
          ...prev,
          { type: 'assistant', text: 'Sorry, something went wrong. Please try again.' }
        ]);
      } finally {
        setIsLoading(false);
      }
    }, 5000);
    setTechStack('');
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter tech stack (e.g., React, Node.js, Python)"
            value={techStack}
            onChange={(e) => setTechStack(e.target.value)}
            className="flex-1 rounded px-3 py-2 bg-gray-900 text-gray-100 border border-gray-700 focus:outline-none"
            autoFocus
          />
          <Button type="submit" disabled={isTyping || isLoading || !techStack.trim()}>
            Send
          </Button>
        </div>
      </form>
      <div className="flex flex-col gap-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={cn(
              "transition-all duration-500",
              msg.type === 'user'
                ? "self-end bg-purple-600 text-white rounded-lg px-4 py-2 max-w-[80%] shadow-md animate-fade-in"
                : "self-start bg-gray-800 text-gray-100 rounded-lg px-4 py-2 max-w-[80%] shadow-md animate-fade-in"
            )}
            style={{ whiteSpace: 'pre-line' }}
          >
            {msg.text}
            {isTyping && idx === messages.length - 1 && <span className="animate-pulse">|</span>}
          </div>
        ))}
        {isLoading && <Loader className="relative h-12" />}
      </div>
    </div>
  );
};

export default ChatInterface;

// Add this to your global CSS or tailwind config:
// @keyframes fade-in { from { opacity: 0; transform: translateY(10px);} to { opacity: 1; transform: none;} }
// .animate-fade-in { animation: fade-in 0.5s ease; } 