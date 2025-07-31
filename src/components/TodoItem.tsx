import type React from "react";
import type { Todo } from "../types";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  const handleToggleClick = () => {
    onToggle(todo.id);
  };
  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete(todo.id);
  };
  return (
    <li
      onClick={handleToggleClick}
      className="w-full bg-gray-800 p-4 rounded-lg flex items-center justify-between gap-4 cursor-pointer hover:bg-gray-700 transition-colors"
    >
      <div className="flex items-center flex-grow min-w-0">
        <div
          className={`flex-shrink-0 w-6 h-6 rounded-full border-2 ${
            todo.completed ? "bg-sky-500 border-sky-500" : "border-gray-500"
          }`}
        />
        <span
          className={`ml-4 text-lg text-gray-200 break-all ${
            todo.completed ? "line-through text-gray-500" : ""
          }`}
        >
          {todo.text}
        </span>
      </div>

      <button
        onClick={handleDeleteClick}
        aria-label={`Delete todo: ${todo.text}`}
        className="flex-shrink-0 text-gray-500 hover:text-red-500 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </li>
  );
};

export default TodoItem;
