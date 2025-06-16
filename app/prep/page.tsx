"use client";
import React from 'react';
import ChatInterface from '@/components/chat-interface';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function PrepPage() {
  return (
    <div className="min-h-screen bg-[#111111] flex flex-col">
      <Navbar />
      <main className="flex-1 py-8">
        <div className="container mx-auto">
          <h1 className="text-3xl text-gray-200 font-bold mb-8 text-center">
            Technical Interview Prep
          </h1>
          <ChatInterface />
        </div>
      </main>
      <Footer />
    </div>
  );
} 