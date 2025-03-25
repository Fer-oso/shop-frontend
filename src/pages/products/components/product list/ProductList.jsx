import { Link } from "react-router-dom";
import { useModal } from "./hooks/useModal";
import { useDispatch } from "react-redux";
import { startAddProductToShoppingCart } from "../../../../store/shoppingcart/shoppingCartThunk";
import { Toaster } from "sonner";
import { ControlPointOutlined, ShoppingCart } from "@mui/icons-material";
import { ShoppingBag } from "lucide-react";

export default function ProductList({ products }) {
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch(startAddProductToShoppingCart(product));
  };

  const { showModal, openModal, closeModal, selectedItem } = useModal();

  return (
    <div className="">
      <div className=" mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex items-center justify-center mb-12">
          <ShoppingBag className="w-8 h-8 text-indigo-600 mr-3 mt-16" />
          <h1 className="text-4xl font-bold text-gray-90 mt-16">
            Productos Destacados
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative border flex flex-col transform transition duration-300 hover:scale-105 "
            >
              <div className="aspect-w-1 aspect-h-1 cursor-pointer">
                {product.images?.[0] ? (
                  <img
                    src={product.images[0].downloadUrl}
                    className="aspect-square w-full h-full object-contain  bg-transparent lg:aspect-auto lg:h-full lg:w-full transition-opacity duration-300 "
                    alt={product.name}
                    onClick={() => openModal(product)}
                  />
                ) : (
                  <img
                    src=""
                    alt="No image"
                    className="aspect-square w-full h-full object-cover text-center group-hover:opacity-75 rounded-md bg-gray-200 lg:aspect-auto lg:h-80 transition-opacity duration-300"
                    onClick={() => openModal(product)}
                  />
                )}
              </div>

              <div className="mt-4 space-y-2  flex flex-col h-full  transition-colors ">
                <div className="flex justify-between  ">
                  <h3 className="text-sm text-gray-700 ml-1 group-hover:text-blue-500">
                    {product.name}
                  </h3>

                  <p className="text-sm font-black text-black-500 mr-1">
                    ${product.price}
                  </p>
                </div>

                <p className="text-sm text-gray-500 ml-1">
                  {product.category.name}
                </p>

                <div className="mt-auto flex flex-col gap-2">
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full flex items-center justify-center space-x-2 bg-blue-500 text-white px-4 py-2  hover:bg-blue-600 transition-colors lg:text-xs"
                  >
                    <ShoppingCart size={20} />
                    <span>Add to Cart</span>
                  </button>

                  <Link
                    to={`/products/${product.id}`}
                    className="w-full flex items-center justify-center space-x-2 bg-gray-200 text-black px-4 py-2  hover:bg-gray-300 transition-colors lg:text-xs"
                  >
                    <ControlPointOutlined size={20} /> <span>View details</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de Producto */}
      {showModal && selectedItem && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              onClick={closeModal}
            ></div>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className=" bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                    <div className=" aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 mb-4">
                      {selectedItem.images?.[0] ? (
                        <img
                          src={selectedItem.images[0].downloadUrl}
                          className="h-full w-full object-cover object-center"
                          alt={selectedItem.name}
                        />
                      ) : (
                        <span>No Image</span>
                      )}
                    </div>

                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-title"
                    >
                      {" "}
                      {selectedItem.name}
                    </h3>

                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        {selectedItem.description}
                      </p>
                      <p className="mt-2 text-lg font-bold text-gray-900">
                        ${selectedItem.price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className=" mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-blue-800 text-base font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => {
                    addToCart(selectedItem);
                  }}
                >
                  Add to Cart
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-gray-200 text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Toaster richColors />
    </div>
  );
}
