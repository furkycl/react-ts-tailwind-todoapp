import type { Todo } from "../types";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <li
      key={todo.id}
      className="bg-gray-800 p-4 rounded-lg flex items-center justify-between"
    >
      <span
        className={`text-lg ${
          todo.completed ? "line-through text-gray-500" : ""
        }`}
      >
        {todo.text}
      </span>
    </li>
  );
};

export default TodoItem;
