import React, { useState } from "react";

interface AddTodoFormProps {
  onAdd: (text: string) => void;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ onAdd }) => {
  const [text, setText] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedText = text.trim();
    if (!trimmedText) return;
    onAdd(trimmedText);
    setText("");
  };
  return (
    <form onSubmit={handleSubmit} className="flex mb-8">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
        className="flex-grow bg-gray-800 text-white p-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
      />
      <button
        type="submit"
        className="bg-sky-600 text-white px-6 py-3 rounded-r-lg hover:bg-sky-700 transition-colors disabled:bg-sky-900 disabled:cursor-not-allowed"
        disabled={!text.trim()}
      >
        Add
      </button>
    </form>
  );
};

export default AddTodoForm;
