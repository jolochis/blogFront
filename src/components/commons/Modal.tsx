import React from "react";

export const Modal = ({ isOpen, closeModal, handleDelete }) => {
  if (!isOpen) return null;

  const handleConfirmDelete = () => {
    handleDelete();
    closeModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="relative mx-auto max-w-lg md:max-w-2xl">
        <div className="bg-white rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-gray-300 rounded-t">
            <h3 className="text-xl font-semibold">Confirmar Eliminación</h3>
            <button
              className="text-gray-500 hover:text-gray-800 focus:outline-none"
              onClick={closeModal}
            >
              <span className="sr-only">Cerrar</span>
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="relative p-6 flex-auto">
            <p className="text-gray-700 text-base">
              ¿Estás seguro de que deseas eliminar esta entrada?
            </p>
          </div>

          <div className="flex items-center justify-end p-4 border-t border-gray-300 rounded-b">
            <button
              onClick={handleConfirmDelete}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mr-2"
            >
              Eliminar
            </button>
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full"
              onClick={closeModal}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
