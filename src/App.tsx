import React, { useState } from "react";
import SudokuGrid from "./components/SudokuGrid";

function App() {
  const [grid, setGrid] = useState(() => {
    const rows = [];
    for (let i = 0; i < 9; i++) {
      rows.push(Array(9).fill(""));
    }
    return rows;
  });

  const handleSolveClick = async () => {
    const response = await fetch("/api/solve", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sudoku: [
          "9715..842..69...1....8.2..95.....79...76.83...28.....57..1.5....4...91..819..7254",
        ],
      }),
    });

    const data = await response.json();
    if (data.status === "OK") {
      const solved = chunkArray(data.solution.split(""), 9);
      setGrid(solved);
    } else {
      console.error("Error solving Sudoku:", data.message);
    }
  };

  const handleClearClick = () => {
    setGrid(Array(9).fill(Array(9).fill("")));
  };

  const chunkArray = (array, size) => {
    const chunked = [];
    for (let i = 0; i < array.length; i += size) {
      chunked.push(array.slice(i, i + size));
    }
    return chunked;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Sudoku Game</h1>
      <SudokuGrid grid={grid} setGrid={setGrid} />
      <div className="mt-16 space-x-8">
        <button
          onClick={handleSolveClick}
          className="px-8 py-4 bg-blue-500 text-white rounded"
        >
          Solve
        </button>
        <button
          onClick={handleClearClick}
          className="px-8 py-4 bg-red-500 text-white rounded"
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default App;
