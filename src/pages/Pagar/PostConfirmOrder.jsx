import React from "react";

import { useSelector } from "react-redux";

import { Wallet } from "@mercadopago/sdk-react";

import { useCreatePreference } from "../../providers/hooks/mercadopago/useCreatePreference";
import { Loading } from "../../components/loading/Loading";

import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const PostConfirmOrder = () => {
  const { productsList, buyer } = useSelector((state) => state.shoppingCart);

  const { preferenceId } = useCreatePreference(productsList);

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

  return preferenceId ? (
    <div className="flex justify-center items-start min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-4">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white shadow-lg p-6 rounded-2xl gap-6">
        {/* Columna izquierda: Lista de productos */}
        <div className="w-full lg:w-2/3">
          <h2 className="text-2xl font-bold mb-4">Resumen de Compra</h2>
          {productsList.length === 0 ? (
            <p className="text-gray-500 text-center">
              No hay productos en el carrito.
            </p>
          ) : (
            <div>
              <ul className="divide-y divide-gray-300 ">
                {productsList.map((product) => (
                  <li
                    key={product.id}
                    className="flex flex-col sm:flex-row items-center justify-between py-3"
                  >
                    <div className="flex items-center gap-4">
                      {/* Imagen del producto */}
                      {product.images?.[0] ? (
                        <img
                          src={`https://cicada-open-partly.ngrok-free.app/api/shop/images/${product.images[0].id}`}
                          alt={product.name}
                          className="w-24 h-24 rounded-md object-cover shadow-md"
                        />
                      ) : (
                        <div className="w-16 h-16 flex items-center justify-center bg-gray-100 text-gray-500 rounded-md">
                          No image
                        </div>
                      )}
                    </div>

                    <span>
                      {product.name} (x{product.quantity})
                    </span>

                    <span className="font-semibold">
                      ${(product.price * product.quantity).toFixed(2)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="w-full lg:w-1/3 flex flex-col justify-between">
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">
              Información del Comprador
            </h3>
            <ul className="text-gray-700 space-y-1">
              <li>
                <span className="font-bold">Name:</span> {buyer.fullName}
              </li>
              <li>
                <span className="font-bold">Email:</span> {buyer.email}
              </li>
              <li>
                <span className="font-bold">Address:</span> {buyer.address}
              </li>
              <li>
                <span className="font-bold">Phone:</span> {buyer.phone}
              </li>
            </ul>

            <div className="border-t pt-4 mt-4 text-lg font-semibold flex justify-between">
              <span>Total:</span>
              <span>{calculateTotal()}</span>
            </div>

            <div id="mt-6 flex flex-col gap-4">
              <Wallet
                initialization={{
                  preferenceId: preferenceId,
                  redirectMode: "blank",
                }}
                customization={{
                  texts: { valueProp: "smart_option" },
                }}
              />
              <Link
                type="button"
                variant="outline"
                className="flex items-center gap-2 w-full  justify-center bg-indigo-600 text-white font-bold py-2 rounded-lg shadow-lg hover:bg-indigo-500 hover:shadow-xl transition-all duration-300"
                to={"/shopping-cart/checkout"}
              >
                <ArrowLeft size={16} /> Volver
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <>
      <Loading />
    </>
  );
};
