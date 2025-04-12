
import { X } from "@mui/icons-material";
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
    <div className="relative bg-white rounded-md shadow-lg overflow-hidden max-w-md sm:max-w-lg w-full border border-gray-200">
      
      {/* Botón de cierre (esquina superior derecha) */}
      <button
        onClick={closeModal}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors focus:outline-none"
        aria-label="Close modal"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Imagen del producto */}
      <div className="relative w-full h-56 sm:h-64 bg-white border-b border-gray-200">
        {selectedItem.images?.[0] ? (
          <img
            src={selectedItem.images[0].downloadUrl}
            className="w-full h-full object-contain"
            alt={selectedItem.name}
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500 text-sm">
            No Image
          </div>
        )}
      </div>

      {/* Contenido del modal */}
      <div className="p-4 sm:p-6">
        <h3 className="text-lg font-medium text-gray-900" id="modal-title">
          {selectedItem.name}
        </h3>
        <p className="mt-2 text-sm text-gray-600 leading-relaxed">
          {selectedItem.description || "No description available."}
        </p>
        <p className="mt-3 text-lg font-semibold text-gray-900">
          ${selectedItem.price}
        </p>
      </div>

      {/* Botones de acción */}
      <div className="flex justify-end gap-2 bg-gray-50 px-4 py-3 border-t border-gray-200">
        <button
          type="button"
          className="px-4 py-1.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-md transition-colors"
          onClick={() => addToCart(selectedItem)}
        >
          Add to Cart
        </button>
        <button
          type="button"
          className="px-4 py-1.5 text-sm font-medium text-gray-700 bg-gray-200 hover:bg-gray-100 rounded-md transition-colors"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  </div>
  );
};
