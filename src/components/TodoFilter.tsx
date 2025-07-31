import type { FilterType } from "../types";
interface TodoFilterProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const FILTERS: { label: string; value: FilterType }[] = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Completed", value: "completed" },
];

const TodoFilter: React.FC<TodoFilterProps> = ({
  currentFilter,
  onFilterChange,
}) => {
  return (
    <div className="flex justify-center items-center gap-2">
      {FILTERS.map(({ label, value }) => (
        <button
          key={value}
          onClick={() => onFilterChange(value)}
          className={`px-3 py-1 text-sm rounded-md transition-colors ${
            currentFilter === value
              ? "bg-sky-600 text-white"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default TodoFilter;
