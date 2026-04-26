import React from "react";

import { ErrorMessage } from "../../components/alerts/ErrorMessage";

import ProductList from "./components/product list/ProductList";

import { ShoppingBag } from "lucide-react";
import { useGetProducts } from "./hooks/useProducts";

export const Products = () => {
  const { products, message } = useGetProducts();
  return (
    <>
      {message?.error ? (
        <ErrorMessage
          message={message}
          status={message}
          code={message}
          timestamp={message}
        />
      ) : (
        <div>
          <div className="flex flex-row  items-center justify-center gap-3 sm:gap-4 mb-6">
            <ShoppingBag className="w-8 h-8 text-indigo-600 -mb-6" />
            <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 text-center mt-6">
              Nuestros Productos
            </h1>
          </div>

          <ProductList products={products} />
        </div>
      )}
    </>
  );
};
