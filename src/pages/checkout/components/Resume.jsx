import React from "react";
import calculateTotalShoppingCart from "../../utils/calculateTotalShoppingCart";
import { ProductResume } from "./ProductResume";

export const Resume = ({ products }) => {
  return (
    <div className="lg:col-span-2">
      <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-100">
        <h1 className="text-xl font-semibold text-gray-900 mb-6 ">Checkout</h1>
        <h2 className="text-md font-extralight text-center text-gray-800 mb-6">
          Productos en tu carrito
        </h2>

        <div className="divide-y divide-gray-200">
          <ProductResume products={products} />

          {/* Resumen */}
          <div className="mt-8 border-t pt-6">
            <h2 className="text-md font-semibold text-gray-800 mb-4">
              Resumen del pedido
            </h2>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700 font-medium">Total:</span>
              <span className="text-xl font-bold text-gray-900">
                {calculateTotalShoppingCart(products)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
