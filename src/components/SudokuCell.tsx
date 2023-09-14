import React from "react";

interface SudokuCellProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SudokuCell: React.FC<SudokuCellProps> = ({ value, onChange }) => {
  return (
    <input
      className="w-10 h-10 border rounded text-center"
      value={value}
      maxLength={1}
      onChange={onChange}
    />
  );
};

export default SudokuCell;
