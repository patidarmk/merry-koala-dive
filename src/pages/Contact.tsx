"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 bg-white/80 backdrop-blur-lg rounded-xl shadow-xl dark:bg-gray-800/80">
      <h1 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-cyan-500 dark:from-teal-300 dark:to-cyan-300">
        Get in Touch
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl text-center mb-8">
        Have questions, feedback, or just want to say hello? We'd love to hear from you!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full">
        <div className="flex flex-col items-center p-6 bg-gray-100/70 rounded-lg shadow-md dark:bg-gray-700/70">
          <Mail className="text-teal-500 dark:text-teal-300 mb-3" size={48} />
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">Email Us</h2>
          <p className="text-gray-600 dark:text-gray-400 text-center">
            <a href="mailto:info@snakearcade.com" className="hover:underline text-blue-600 dark:text-blue-400">info@snakearcade.com</a>
          </p>
        </div>
        <div className="flex flex-col items-center p-6 bg-gray-100/70 rounded-lg shadow-md dark:bg-gray-700/70">
          <Phone className="text-cyan-500 dark:text-cyan-300 mb-3" size={48} />
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">Call Us</h2>
          <p className="text-gray-600 dark:text-gray-400 text-center">
            +1 (555) 123-4567
          </p>
        </div>
        <div className="flex flex-col items-center p-6 bg-gray-100/70 rounded-lg shadow-md dark:bg-gray-700/70">
          <MapPin className="text-blue-500 dark:text-blue-300 mb-3" size={48} />
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">Visit Us</h2>
          <p className="text-gray-600 dark:text-gray-400 text-center">
            123 Game Street, Arcade City, GA 30303
          </p>
        </div>
      </div>
    </div>
  );
}