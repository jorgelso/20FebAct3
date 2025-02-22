"use client";

import { useState } from "react";

const counter = () => {
    const [counter, setCounter] = useState(1)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCounter(counter + 1)
  };

  const handleSubmit2 = (e: React.FormEvent) => {
    e.preventDefault();
    setCounter(counter - 1)
  };

  return (
    <main className="flex flex-col min-h-[calc(100vh-73px)] items-center justify-center gap-2">
      <h1 className="text-4xl font-bold text-gray-800">{counter}</h1>
      <form onSubmit={handleSubmit}>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-200"
        >
          Incrementar numero
        </button>
      </form>
      <form onSubmit={handleSubmit2}>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-200"
        >
          Decrementar numero
        </button>
      </form>
    </main>
  );
};

export default counter;
