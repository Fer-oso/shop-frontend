import { useState } from "react";


export default function ProductList({products}) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Cerrar el modal con efecto de fade out
  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  // Añadir producto al carrito
  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} añadido al carrito 🛒`);
  };

  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center">
          Nuestros Productos
        </h2>

        {/* Grid de Productos */}
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative cursor-pointer "
              onClick={() => {
                setSelectedProduct(product);
                setShowModal(true);
              }}
            >
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal de Producto */}
        {selectedProduct && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
            <div
              className={`bg-white rounded-lg p-6 max-w-md w-full relative transition-all duration-300 ${
                showModal ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <button
                className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
                onClick={closeModal}
              >
                ✖
              </button>
              <img
                alt={selectedProduct.imageAlt}
                src={selectedProduct.imageSrc}
                className="h-64 w-full object-cover rounded-md"
              />
              <h3 className="mt-4 text-xl font-bold text-gray-900">
                {selectedProduct.name}
              </h3>
              <p className="mt-2 text-gray-600">
                {selectedProduct.description}
              </p>
              <p className="mt-2 text-lg font-semibold text-indigo-600">
                {selectedProduct.price}
              </p>
              <div className="mt-4 flex justify-between">
                <button
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-all"
                  onClick={() => addToCart(selectedProduct)}
                >
                  Añadir al Carrito 🛒
                </button>
                <button
                  className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-all"
                  onClick={closeModal}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
