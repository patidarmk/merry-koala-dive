"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  getInitialState,
  moveSnake,
  Direction,
  GRID_SIZE,
  INITIAL_GAME_SPEED,
  GameState,
} from "@/lib/snake-game";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const CELL_SIZE = 20; // pixels

export const SnakeGame = () => {
  const [gameState, setGameState] = useState<GameState>(getInitialState());
  const gameLoopRef = useRef<number | null>(null);
  const lastDirectionRef = useRef<Direction>(gameState.direction);

  const startGame = useCallback(() => {
    setGameState((prevState) => ({ ...prevState, gameStarted: true, gameOver: false, score: 0 }));
    lastDirectionRef.current = getInitialState().direction; // Reset direction on start
  }, []);

  const resetGame = useCallback(() => {
    if (gameLoopRef.current) {
      clearInterval(gameLoopRef.current);
    }
    setGameState(getInitialState());
    lastDirectionRef.current = getInitialState().direction;
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    const currentDirection = lastDirectionRef.current;
    let newDirection: Direction | null = null;

    switch (e.key) {
      case "ArrowUp":
        if (currentDirection !== Direction.Down) newDirection = Direction.Up;
        break;
      case "ArrowDown":
        if (currentDirection !== Direction.Up) newDirection = Direction.Down;
        break;
      case "ArrowLeft":
        if (currentDirection !== Direction.Right) newDirection = Direction.Left;
        break;
      case "ArrowRight":
        if (currentDirection !== Direction.Left) newDirection = Direction.Right;
        break;
    }

    if (newDirection !== null) {
      e.preventDefault(); // Prevent scrolling with arrow keys
      setGameState((prevState) => {
        if (!prevState.gameStarted || prevState.gameOver) return prevState;
        lastDirectionRef.current = newDirection!;
        return { ...prevState, direction: newDirection! };
      });
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current);
      }
    };
  }, [handleKeyDown]);

  useEffect(() => {
    if (gameState.gameStarted && !gameState.gameOver) {
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current);
      }
      gameLoopRef.current = window.setInterval(() => {
        setGameState((prev) => {
          const newState = moveSnake(prev);
          lastDirectionRef.current = newState.direction; // Keep lastDirectionRef in sync
          return newState;
        });
      }, INITIAL_GAME_SPEED);
    } else if (gameState.gameOver && gameLoopRef.current) {
      clearInterval(gameLoopRef.current);
    }
    return () => {
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current);
      }
    };
  }, [gameState.gameStarted, gameState.gameOver]);

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gradient-to-br from-gray-900 to-gray-700 min-h-screen text-white">
      <h1 className="text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
        Snake Arcade
      </h1>
      <div className="mb-4 text-lg font-semibold">Score: {gameState.score}</div>

      <div
        className="relative border-4 border-green-500 rounded-lg overflow-hidden shadow-2xl"
        style={{
          width: GRID_SIZE * CELL_SIZE,
          height: GRID_SIZE * CELL_SIZE,
          backgroundColor: "#1a1a1a",
        }}
      >
        {gameState.snake.map((segment, index) => (
          <div
            key={index}
            className={cn(
              "absolute rounded-sm",
              index === 0 ? "bg-green-500" : "bg-green-400",
            )}
            style={{
              left: segment.x * CELL_SIZE,
              top: segment.y * CELL_SIZE,
              width: CELL_SIZE,
              height: CELL_SIZE,
            }}
          />
        ))}
        <div
          className="absolute bg-red-500 rounded-full"
          style={{
            left: gameState.food.x * CELL_SIZE,
            top: gameState.food.y * CELL_SIZE,
            width: CELL_SIZE,
            height: CELL_SIZE,
          }}
        />
      </div>

      <div className="mt-6 flex space-x-4">
        {!gameState.gameStarted && (
          <Button
            onClick={startGame}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Start Game
          </Button>
        )}
        {gameState.gameOver && (
          <div className="flex flex-col items-center">
            <p className="text-2xl font-bold text-red-500 mb-3 animate-pulse">Game Over!</p>
            <Button
              onClick={resetGame}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Play Again
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};