import { useState } from "react";
import type { Todo } from "./types";

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
    <div className="bg-gray-900 min-h-screen text-white p-4">
      <h1 className="text-center text-3xl font-bold mb-8">ToDo List</h1>
    </div>
  );
}

export default App;
