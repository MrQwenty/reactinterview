import React from "react";
import SudokuCell from "./SudokuCell";

interface SudokuGridProps {
  grid: string[][];
  setGrid: React.Dispatch<React.SetStateAction<string[][]>>;
}

const SudokuGrid: React.FC<SudokuGridProps> = ({ grid, setGrid }) => {
  const handleCellChange = (
    rowIndex: number,
    cellIndex: number,
    newValue: string
  ) => {
    const newGrid = [...grid];
    newGrid[rowIndex][cellIndex] = newValue;
    setGrid(newGrid);
  };

  return (
    <div className="grid grid-cols-9 gap-1 w-96 h-96 mx-auto">
      {grid.map((row, rowIndex) =>
        row.map((cell, cellIndex) => (
          <SudokuCell
            key={`${rowIndex}-${cellIndex}`}
            value={cell}
            onChange={(e) =>
              handleCellChange(rowIndex, cellIndex, e.target.value)
            }
          />
        ))
      )}
    </div>
  );
};

export default SudokuGrid;
