import React from "react";

interface TodoFooterProps {
  activeCount: number;
  completedCount: number;
  onClearCompleted: () => void;
}

const TodoFooter: React.FC<TodoFooterProps> = ({
  activeCount,
  completedCount,
  onClearCompleted,
}) => {
  return (
    <div className="flex justify-between items-center text-sm text-gray-400 mt-6 border-t border-gray-700 pt-4">
      <span>
        <strong className="font-normal text-gray-300">{activeCount}</strong>{" "}
        item{activeCount !== 1 ? "s" : ""} left
      </span>
      {completedCount > 0 && (
        <button
          onClick={onClearCompleted}
          className="hover:text-white transition-colors cursor-pointer"
        >
          Clear completed
        </button>
      )}
    </div>
  );
};

export default TodoFooter;
