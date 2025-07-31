import type { Todo, FilterType } from "./types";
import { useState } from "react";
import TodoItem from "./components/TodoItem";
import AddTodoForm from "./components/AddTodoForm";
import EmptyState from "./components/EmptyState";
import TodoFooter from "./components/TodoFooter";
import TodoFilter from "./components/TodoFilter";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import type { DropResult } from "@hello-pangea/dnd";

const initialTodos: Todo[] = [
  { id: "1", text: "Learn React", completed: true },
  { id: "2", text: "Build a project", completed: false },
];

const STORAGE_KEY = "todos_list";

function App() {
  const [todos, setTodos] = useLocalStorage<Todo[]>(STORAGE_KEY, initialTodos);
  const [filter, setFilter] = useState<FilterType>("all");
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

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });
  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const items = Array.from(todos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTodos(items);
  };
  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-start pt-16">
      <div className="w-full max-w-lg bg-gray-800 shadow-2xl rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-white">My Tasks</h1>
          <TodoFilter currentFilter={filter} onFilterChange={setFilter} />
        </div>
        <AddTodoForm onAdd={handleAddNewTodo} />
        <div className="mt-6">
          {filteredTodos.length > 0 ? (
            <DragDropContext onDragEnd={handleOnDragEnd}>
              <Droppable droppableId="todos">
                {(provided) => (
                  <ul
                    className="space-y-3"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {filteredTodos.map((todo, index) => (
                      <Draggable
                        key={todo.id}
                        draggableId={todo.id}
                        index={index}
                        isDragDisabled={filter !== "all"}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <TodoItem
                              todo={todo}
                              onToggle={handleToggleTodo}
                              onDelete={handleDeleteTodo}
                            />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </ul>
                )}
              </Droppable>
            </DragDropContext>
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
