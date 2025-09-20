"use client";

import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Gamepad2 } from "lucide-react"; // Corrected icon import

const Index = () => {
  return (
    <div className="min-h-[calc(100vh-160px)] flex flex-col items-center justify-center text-center p-4">
      <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 max-w-4xl w-full transform transition-all duration-500 hover:scale-[1.01] dark:bg-gray-800/80">
        <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
          <Gamepad2 className="text-white" size={64} /> {/* Corrected icon component */}
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500 dark:from-green-300 dark:to-blue-300 leading-tight">
          Welcome to Snake Arcade!
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Relive the classic game of Snake with a modern, sleek design. Challenge your reflexes and aim for the high score!
        </p>
        <Link to="/snake">
          <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-full shadow-lg text-lg transition-all duration-300 transform hover:scale-105">
            Start Playing Now!
          </Button>
        </Link>
      </div>

      <div className="mt-12 text-gray-600 dark:text-gray-400">
        <p className="text-lg mb-2">
          Built with passion and precision using Applaa.
        </p>
        <p className="text-sm">
          Explore the app and discover more features.
        </p>
      </div>
    </div>
  );
};

export default Index;