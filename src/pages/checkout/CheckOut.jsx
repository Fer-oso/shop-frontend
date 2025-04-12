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
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Lista de productos */}
        <div className="lg:col-span-2">
          <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-100">
            <h1 className="text-xl font-semibold text-gray-900 mb-6 ">
              Checkout
            </h1>
            <h2 className="text-lg font-medium text-center text-gray-800 mb-6">
              Productos en tu carrito
            </h2>

            <div className="divide-y divide-gray-200">
              {productsList.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col md:flex-row items-center md:items-start gap-4 py-4 group hover:bg-gray-50 transition-colors duration-200 rounded-lg"
                >
                  {/* Imagen */}
                  {product.images?.[0] ? (
                    <img
                      src={product.images[0].downloadUrl}
                      alt={product.name}
                      className="w-24 h-24 object-cover rounded-md shadow-sm border"
                    />
                  ) : (
                    <div className="w-24 h-24 flex items-center justify-center bg-gray-100 text-gray-400 text-sm border rounded-md">
                      Sin imagen
                    </div>
                  )}

                  {/* Info */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-base font-semibold text-gray-900">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Cantidad:{" "}
                      <span className="font-medium">{product.quantity}</span>
                    </p>
                    <p className="text-base text-gray-800 mt-1">
                      Precio unitario:{" "}
                      <span className="font-semibold">
                        {product.price.toLocaleString("es-AR", {
                          style: "currency",
                          currency: "ARS",
                        })}
                      </span>
                    </p>
                    <p className="text-sm text-gray-700 mt-1">
                      Total:{" "}
                      <span className="font-bold">
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
                  <div className="flex items-center justify-center md:justify-end w-full md:w-auto">
                    <ModifyQuantityButton product={product} />
                  </div>
                </div>
              ))}

              {/* Resumen */}
              <div className="mt-8 border-t pt-6">
                <h2 className="text-md font-semibold text-gray-800 mb-4">
                  Resumen del pedido
                </h2>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700 font-medium">
                    Total:
                  </span>
                  <span className="text-xl font-bold text-gray-900">
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
            <h2 className=" text-lg font-bold text-gray-800 mb-8 tracking-tight">
              Información del Usuario
            </h2>

            <BuyerForm buyerInfo={buyerInfo} />

            <div className="mt-6 border-t border-gray-200 pt-4">
              <h2 className="text-md font-semibold text-gray-700">
                Resumen del pedido
              </h2>
              <div className="flex justify-between py-2">
                <span className="block mb-1 text-sm font-bold text-gray-700">
                  Total:
                </span>
                <span className="block mb-1 text-sm font-bold text-gray-700">
                  {calculateTotal()}
                </span>
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
