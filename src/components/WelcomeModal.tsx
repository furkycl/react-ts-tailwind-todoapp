interface WelcomeModalProps {
  onClose: () => void;
}

const WelcomeModal: React.FC<WelcomeModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-gray-800 text-white rounded-lg shadow-xl p-8 max-w-sm w-full">
        <h2 className="text-2xl font-bold text-sky-400 mb-4">
          Welcome to Your ToDo App!
        </h2>
        <p className="text-gray-300 mb-6">
          This is a simple yet powerful app to organize your tasks. You can add,
          delete, complete, and even drag-and-drop to reorder your todos.
        </p>
        <button
          onClick={onClose}
          className="w-full bg-sky-600 text-white px-6 py-3 rounded-lg hover:bg-sky-700 transition-colors font-semibold"
        >
          Let's Get Started!
        </button>
      </div>
    </div>
  );
};

export default WelcomeModal;
