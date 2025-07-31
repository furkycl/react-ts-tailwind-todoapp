import { useState, useEffect } from "react";
import type { Todo } from "./types";
import TodoItem from "./components/TodoItem";
import AddTodoForm from "./components/AddTodoForm";
import EmptyState from "./components/EmptyState";
import TodoFooter from "./components/TodoFooter";

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

const STORAGE_KEY = "todos_list";

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem(STORAGE_KEY);
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return initialTodos;
    }
  });
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);
  const handleToggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const handleDeleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleAddNewTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text: text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };
  const handleClearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };
  const activeCount = todos.filter((todos) => !todos.completed).length;
  const completedCount = todos.length - activeCount;
  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-start pt-16">
      <div className="w-full max-w-lg bg-gray-800 shadow-2xl rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-white">My Tasks</h1>
        </div>
        <AddTodoForm onAdd={handleAddNewTodo} />
        <div className="mt-6">
          {todos.length > 0 ? (
            <ul className="space-y-3">
              {todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={handleToggleTodo}
                  onDelete={handleDeleteTodo}
                />
              ))}
            </ul>
          ) : (
            <EmptyState />
          )}
        </div>
        {todos.length > 0 && (
          <TodoFooter
            activeCount={activeCount}
            completedCount={completedCount}
            onClearCompleted={handleClearCompleted}
          />
        )}
      </div>
    </div>
  );
}

export default App;
