import React from "react";
import { ModifyQuantityButton } from "../../../components/buttons/ModifyQuantityButton";

export const ProductResume = ({ products }) => {
  return products.map(({ product, quantity }) => (
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
          Cantidad: <span className="font-medium">{quantity}</span>
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
            {(product.price * quantity).toLocaleString("es-AR", {
              style: "currency",
              currency: "ARS",
            })}
          </span>
        </p>
      </div>

      {/* Controles */}
      <div className="flex items-center justify-center md:justify-end w-full md:w-auto">
        <ModifyQuantityButton product={product} />
      </div>
    </div>
  ));
};
