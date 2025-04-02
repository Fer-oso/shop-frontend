import React from "react";

export const ModalProduct = ({
  showModal,
  closeModal,
  selectedItem,
  addToCart,
}) => {
  if (!showModal || !selectedItem) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 sm:p-0">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-md sm:max-w-lg w-full">
        {/* Imagen del producto */}
        <div className="relative w-full h-56 sm:h-64 bg-gray-200">
          {selectedItem.images?.[0] ? (
            <img
              src={selectedItem.images[0].downloadUrl}
              className="w-full h-full object-contain"
              alt={selectedItem.name}
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              No Image
            </div>
          )}
        </div>

        {/* Contenido del modal */}
        <div className="p-4 sm:p-6">
          <h3 className="text-lg font-semibold text-gray-900" id="modal-title">
            {selectedItem.name}
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            {selectedItem.description || "No description available."}
          </p>
          <p className="mt-3 text-xl font-bold text-gray-900">
            ${selectedItem.price}
          </p>
        </div>

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row sm:justify-end bg-gray-100 p-4">
          <button
            type="button"
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2 sm:mb-0 sm:ml-3"
            onClick={() => addToCart(selectedItem)}
          >
            Add to Cart
          </button>
          <button
            type="button"
            className="w-full sm:w-auto bg-gray-300 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-6 rounded-lg shadow-md transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
