const EmptyState = () => {
  return (
    <div className="text-center py-12">
      <p className="text-gray-500">Your todo list is empty.</p>
      <p className="text-gray-500 text-sm mt-1">
        Add a new task above to get started!
      </p>
    </div>
  );
};

export default EmptyState;
