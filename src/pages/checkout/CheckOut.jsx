import React from "react";
import { useSelector } from "react-redux";
import { Toaster } from "sonner";
import { BuyerForm } from "./components/BuyerForm";
import { ModifyQuantityButton } from "../../components/buttons/ModifyQuantityButton";

const Checkout = () => {
  const { productsList, buyer } = useSelector((state) => state.shoppingCart);

  const buyerInfo = buyer || { fullName, email, address, phone };

  const calculateTotal = () => {
    const total = productsList.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
    return total.toLocaleString("es-AR", {
      style: "currency",
      currency: "ARS",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Checkout
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Lista de productos */}
          <div className="lg:col-span-2">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-700">
                Productos en tu carrito
              </h2>
              <div className="divide-y divide-gray-200">
                {productsList.map((product) => (
                  <div
                    key={product.id}
                    className="flex flex-col md:flex-row items-center md:items-start gap-4 py-4 hover:bg-gray-50 transition-all duration-300 rounded-md"
                  >
                    {/* Imagen del producto */}
                    {product.images?.[0] ? (
                      <img
                        src={`https://cicada-open-partly.ngrok-free.app/api/shop/images/${product.images[0].id}`}
                        alt={product.name}
                        className="w-24 h-24 rounded-md object-cover shadow-md"
                      />
                    ) : (
                      <span className="w-24 h-24 flex items-center justify-center bg-gray-100 text-gray-500 rounded-md">
                        No image
                      </span>
                    )}

                    {/* Información del producto */}
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-lg font-medium text-gray-800">
                        {product.name}
                      </h3>
                      <p className="text-sm font-semibold text-gray-700 mt-1">
                        Cantidad: {product.quantity}
                      </p>
                      <p className="text-lg font-semibold text-gray-800 mt-1">
                        {product.price.toLocaleString("es-AR", {
                          style: "currency",
                          currency: "ARS",
                        })}
                      </p>
                      <p className="text-sm text-gray-700">
                        Total:{" "}
                        <span className="font-semibold">
                          {(product.price * product.quantity).toLocaleString(
                            "es-AR",
                            {
                              style: "currency",
                              currency: "ARS",
                            }
                          )}
                        </span>
                      </p>
                    </div>

                    {/* Controles */}
                    <div className="flex flex-col items-center space-y-2">
                      <div className="flex items-center space-x-2">
                        <ModifyQuantityButton product={product} />
                      </div>
                    </div>
                  </div>
                ))}
                {/* Resumen del pedido */}
                <div className="mt-6 border-t border-gray-200 pt-4">
                  <h2 className="text-xl font-semibold text-gray-700">
                    Resumen del pedido
                  </h2>
                  <div className="flex justify-between py-2">
                    <span>Total:</span>
                    <span className="text-lg font-medium text-gray-800">
                      {calculateTotal()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario del usuario y resumen del pedido */}
          <div>
            <div className="bg-white shadow-lg rounded-lg p-6 sticky top-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-700">
                Información del Usuario
              </h2>

              <BuyerForm buyerInfo={buyerInfo} />

              <div className="mt-6 border-t border-gray-200 pt-4">
                <h2 className="text-xl font-semibold text-gray-700">
                  Resumen del pedido
                </h2>
                <div className="flex justify-between py-2">
                  <span>Total:</span>
                  <span className="text-lg font-medium text-gray-800">
                    {calculateTotal()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster richColors />
    </div>
  );
};

export default Checkout;
