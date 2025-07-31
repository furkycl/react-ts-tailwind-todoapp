import type { Todo } from "../types";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle }) => {
  const handleClick = () => {
    onToggle(todo.id);
  };
  return (
    <li
      onClick={handleClick}
      className="bg-gray-800 p-4 rounded-lg flex items-center justify-between cursor-pointer hover:bg-gray-700 transition-colors"
    >
      <span
        className={`text-lg ${
          todo.completed ? "line-through text-gray-500" : ""
        }`}
      >
        {todo.text}
      </span>
      <div
        className={`w-6 h-6 rounded-full border-2 ${
          todo.completed ? "bg-sky-500 border-sky-500" : "border-gray-500"
        }`}
      />
    </li>
  );
};

export default TodoItem;
