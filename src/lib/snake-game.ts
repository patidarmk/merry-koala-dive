export interface SnakeSegment {
  x: number;
  y: number;
}

export enum Direction {
  Up,
  Down,
  Left,
  Right,
}

export interface GameState {
  snake: SnakeSegment[];
  food: SnakeSegment;
  direction: Direction;
  score: number;
  gameOver: boolean;
  gameStarted: boolean;
  gridSize: number;
}

export const GRID_SIZE = 20; // 20x20 grid
export const INITIAL_SNAKE_LENGTH = 3;
export const INITIAL_GAME_SPEED = 150; // milliseconds

export const generateFood = (snake: SnakeSegment[], gridSize: number): SnakeSegment => {
  let food: SnakeSegment;
  do {
    food = {
      x: Math.floor(Math.random() * gridSize),
      y: Math.floor(Math.random() * gridSize),
    };
  } while (snake.some((segment) => segment.x === food.x && segment.y === food.y));
  return food;
};

export const getInitialState = (): GameState => {
  const initialSnake: SnakeSegment[] = [];
  for (let i = 0; i < INITIAL_SNAKE_LENGTH; i++) {
    initialSnake.push({ x: Math.floor(GRID_SIZE / 2), y: Math.floor(GRID_SIZE / 2) + i });
  }

  return {
    snake: initialSnake,
    food: generateFood(initialSnake, GRID_SIZE),
    direction: Direction.Up,
    score: 0,
    gameOver: false,
    gameStarted: false,
    gridSize: GRID_SIZE,
  };
};

export const moveSnake = (state: GameState): GameState => {
  if (state.gameOver || !state.gameStarted) return state;

  const newSnake = [...state.snake];
  const head = { ...newSnake[0] };

  switch (state.direction) {
    case Direction.Up:
      head.y--;
      break;
    case Direction.Down:
      head.y++;
      break;
    case Direction.Left:
      head.x--;
      break;
    case Direction.Right:
      head.x++;
      break;
  }

  // Check for wall collision
  if (
    head.x < 0 ||
    head.x >= state.gridSize ||
    head.y < 0 ||
    head.y >= state.gridSize
  ) {
    return { ...state, gameOver: true };
  }

  // Check for self-collision
  if (newSnake.some((segment) => segment.x === head.x && segment.y === head.y)) {
    return { ...state, gameOver: true };
  }

  newSnake.unshift(head); // Add new head

  let newFood = state.food;
  let newScore = state.score;

  // Check for food collision
  if (head.x === state.food.x && head.y === state.food.y) {
    newFood = generateFood(newSnake, state.gridSize);
    newScore += 10;
  } else {
    newSnake.pop(); // Remove tail if no food eaten
  }

  return {
    ...state,
    snake: newSnake,
    food: newFood,
    score: newScore,
  };
};