import { Link } from "react-router-dom";
import { useModal } from "./hooks/useModal";
import { useDispatch } from "react-redux";
import { startAddProductToShoppingCart } from "../../../../store/shoppingcart/shoppingCartThunk";
import { Toaster } from "sonner";

export default function ProductList({ products }) {

  const dispatch = useDispatch();
  
  // Función para añadir producto al carrito
  const addToCart = (product) => {
    dispatch(startAddProductToShoppingCart(product));

  };

  const { showModal, openModal, closeModal, selectedItem } = useModal();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center">
          List of all products availables in the store
        </h2>
       
        <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-2 xl:gap-2">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div
                className="aspect-h-1 aspect-w-1 w-full border-1 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 lg:w-autocursor-pointer"
                onClick={() => openModal(product)}
              >
                {product.images?.[0] ? (
                  <img
                    src={`http://localhost:8080/api/shop/images/${product.images[0].id}`}
                    className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                    alt={product.name}
                  />
                ) : (
                  <span>No Image</span>
                )}
              </div>

              <div className="mt-4 flex justify-between">
                <h3 className="text-sm text-gray-700">{product.name}</h3>
              </div>

              <p className="text-sm font-black text-black-500">
                ${product.price}
              </p>

              <Link
                to={`/products/${product.id}`}
                className="btn btn-success cursor-pointer mt-4"
              >
                Ver detalles
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de Producto */}
      {selectedItem && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div
            className={`bg-white rounded-lg p-6 max-w-md h-full relative overflow-auto transition-all duration-300 ${
              showModal ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
              onClick={closeModal}
            >
              ✖
            </button>
            <h3 className="mt-4 text-xl font-bold text-gray-900 text-center">
              {selectedItem.name}
            </h3>
            {selectedItem.images?.[0] ? (
              <img
                src={`http://localhost:8080/api/shop/images/${selectedItem.images[0].id}`}
                className="h-auto w-full object-cover rounded-md"
                alt={selectedItem.name}
              />
            ) : (
              <span>No Image</span>
            )}

            <p className="mt-2 text-gray-600 text-ellipsis">
              {selectedItem.description}
            </p>
            <p className="mt-2 text-lg font-semibold text-indigo-600">
              ${selectedItem.price}
            </p>
            <div className="mt-4 flex justify-between">
             
              <button
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-all"
                onClick={() => addToCart(selectedItem)}
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
       <Toaster richColors/>
    </div>
  );
}
