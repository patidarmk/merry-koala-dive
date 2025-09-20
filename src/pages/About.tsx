"use client";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 bg-white/80 backdrop-blur-lg rounded-xl shadow-xl dark:bg-gray-800/80">
      <h1 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
        About Snake Arcade
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl text-center mb-8">
        Welcome to Snake Arcade, a classic game reimagined with a modern touch!
        Our mission is to provide a simple, engaging, and fun experience for players of all ages.
        This application was built to showcase the power and flexibility of Applaa in creating dynamic web experiences.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        <div className="bg-gray-100/70 p-6 rounded-lg shadow-md dark:bg-gray-700/70">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3">Our Vision</h2>
          <p className="text-gray-600 dark:text-gray-400">
            To bring joy through simple, well-crafted games and applications, demonstrating how elegant design and robust functionality can coexist.
          </p>
        </div>
        <div className="bg-gray-100/70 p-6 rounded-lg shadow-md dark:bg-gray-700/70">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3">The Tech Behind It</h2>
          <p className="text-gray-600 dark:text-gray-400">
            This app leverages React, TypeScript, Tailwind CSS, and TanStack Router, all orchestrated by Applaa to deliver a seamless development and user experience.
          </p>
        </div>
      </div>
    </div>
  );
}