"use client";
import { useState } from "react";
import Rectangle from "../Components/Rectangle";

export default function Home() {
    const [color, setColor] = useState("gray")
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setColor("blue")
      };
    
      const handleSubmit2 = (e: React.FormEvent) => {
        e.preventDefault();
        setColor("green")
      };

      const handleSubmit3 = (e: React.FormEvent) => {
        e.preventDefault();
        setColor("red")
      };

      const handleSubmit4 = (e: React.FormEvent) => {
        e.preventDefault();
        setColor("yellow")
      };

  return (
    <div className="flex justify-center items-center text-center w-screen h-full min-h-screen">
      <div className="flex flex-col justify-center items-center gap-5">
        <Rectangle color={color} />

        <div className="flex space-x-5">
        <form onSubmit={handleSubmit}>
          <button className="bg-blue-500 rounded-lg p-5 hover:bg-blue-400">
            Click me
          </button>
          </form>
          <form onSubmit={handleSubmit2}>
          <button className="bg-green-500 rounded-lg p-5 hover:bg-green-400">
            Click me
          </button>
          </form>
        </div>

        <div className="flex space-x-5">
        <form onSubmit={handleSubmit3}>
          <button className="bg-red-500 rounded-lg p-5 hover:bg-red-400">
            Click me
          </button>
          </form>
          <form onSubmit={handleSubmit4}>
          <button className="bg-yellow-500 rounded-lg p-5 hover:bg-yellow-400">
            Click me
          </button>
          </form>
        </div>
      </div>
    </div>
  );
}
