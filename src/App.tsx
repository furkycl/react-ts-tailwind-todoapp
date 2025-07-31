import { useState } from "react";
import type { Todo } from "./types";
import TodoItem from "./components/TodoItem";

const initialTodos: Todo[] = [
  {
    id: "01",
    text: "React Projesini Tamamla",
    completed: false,
  },
  {
    id: "02",
    text: "TypeScript Öğren.",
    completed: true,
  },
  {
    id: "03",
    text: "Tailwind ile CSS ver.",
    completed: false,
  },
];

function App() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center pt-8">
      <div className="w-full max-w-md">
        <h1 className="text-center text-3xl font-bold mb-8 text-sky-400">
          ToDo List
        </h1>
        <ul className="space-y-3">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
