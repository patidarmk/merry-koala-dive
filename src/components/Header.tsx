"use client";

import { Link } from "@tanstack/react-router";
import { Gamepad2 } from "lucide-react"; // Corrected icon import
import { cn } from "@/lib/utils";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-200/50 dark:bg-gray-900/90 dark:border-gray-700/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center shadow-md">
              <Gamepad2 className="text-white" size={24} /> {/* Corrected icon component */}
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
              Snake Arcade
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium dark:text-gray-300 dark:hover:text-blue-400"
              activeProps={{ className: "text-blue-600 dark:text-blue-400" }}
            >
              Home
            </Link>
            <Link
              to="/snake"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium dark:text-gray-300 dark:hover:text-blue-400"
              activeProps={{ className: "text-blue-600 dark:text-blue-400" }}
            >
              Play Snake
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium dark:text-gray-300 dark:hover:text-blue-400"
              activeProps={{ className: "text-blue-600 dark:text-blue-400" }}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium dark:text-gray-300 dark:hover:text-blue-400"
              activeProps={{ className: "text-blue-600 dark:text-blue-400" }}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}