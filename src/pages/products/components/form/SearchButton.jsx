import { useState } from "react";

export const SearchButton = ({ onSearch }) => {
  const [category, setCategory] = useState("");

  const [modalOpen, setModalOpen] = useState(false);

  const handleSearch = () => {
    if (category.trim() === "") return; // Evita búsquedas vacías
   // onSearch(category);
    setModalOpen(false)
  };

  return (
    <>
      <div className="ml-5">
        <button
          onClick={() => setModalOpen(true)}
          className=" px-4 h-8 text-center bg-transparent text-sm/6 font-semibold text-gray-900 rounded-md hover:bg-black transition duration-300"
        >
          search 🔍
        </button>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50  backdrop-blur-md transition-opacity z-50 duration-700 ${
            modalOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`bg-white p-6 rounded-lg shadow-lg w-80 transform transition-opacity duration-700 ${
              modalOpen ? "scale-100 opacity-100 " : "scale-90 opacity-0"
            }`}
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Buscar Producto
            </h2>
            <input
              type="text"
              placeholder="Escribe una categoría..."
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition duration-300"
              >
                Cancelar
              </button>
              <button
                onClick={handleSearch}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
              >
                Buscar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
