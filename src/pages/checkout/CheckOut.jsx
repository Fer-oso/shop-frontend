import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useForm } from "../../components/hooks/useForm";
import { ConfirmOrderButton } from "./components/button/ConfirmOrderButton";
import { Toaster } from "sonner";

const Checkout = () => {
  const { productsList } = useSelector((state) => state.shoppingCart);

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

  const userInfo = {
    fullName: "",
    email: "",
    address: "",
    phone: "",
  };

  const { formState, onInputChange } = useForm(userInfo);

  const { fullName, email, address, phone } = formState;


  return (
    <div className="min-h-screen bg-gray-100 py-8">
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
                    className="flex items-center justify-between py-4 hover:bg-gray-50 transition-all duration-300 rounded-md"
                  >
                    <div className="flex items-center">
                      {product.images?.[0] ? (
                        <img
                          src={`http://localhost:8080/api/shop/images/${product.images[0].id}`}
                          alt={product.name}
                          className="w-20 h-20 rounded-md object-cover shadow-md"
                        />
                      ) : (
                        <span>No image</span>
                      )}
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-800">
                          {product.name}
                        </h3>

                        <p className="text-sm font-semibold text-gray-700">
                          Cantidad: {product.quantity}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-800">
                        {product.price.toLocaleString("es-AR", {
                          style: "currency",
                          currency: "ARS",
                        })}
                      </p>
                      <p className="text-sm text-center font-semibold text-gray-800">

                        {(product.price * product.quantity).toLocaleString("es-AR", {
                          style: "currency",
                          currency: "ARS",
                        })}
                      </p>
                    </div>

                  </div>
                ))}
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
              <form className="space-y-4">
                <div>
                  <label
                    className="block text-gray-600 font-medium mb-1"
                    htmlFor="fullName"
                  >
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={fullName}
                    onChange={onInputChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-600 font-medium mb-1"
                    htmlFor="email"
                  >
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={onInputChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                    placeholder="ejemplo@correo.com"
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-600 font-medium mb-1"
                    htmlFor="address"
                  >
                    Dirección
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={address}
                    onChange={onInputChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                    placeholder="Tu dirección"
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-600 font-medium mb-1"
                    htmlFor="phone"
                  >
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={onInputChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                    placeholder="Tu número de teléfono"
                  />
                </div>

                <ConfirmOrderButton/>

              </form>
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
