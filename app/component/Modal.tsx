import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-md flex items-center justify-center z-50 p-4"
      onClick={onClose} // Close modal when clicking outside content
    >
      <div
        className="bg-white rounded-lg p-6 w-11/12 h-5/6 max-w-4xl overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
      >
        <button
          className="absolute top-4 left-4 text-gray-600 hover:text-gray-900 text-lg font-semibold flex items-center gap-1"
          onClick={onClose}
        >
          &larr; Back
        </button>
        <div className="mt-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;