"use client";

import { SnakeGame } from "@/components/SnakeGame";

export default function SnakePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-160px)]">
      <SnakeGame />
    </div>
  );
}