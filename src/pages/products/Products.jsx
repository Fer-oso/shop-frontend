import React from "react";
import { useLoaderData } from "react-router-dom";
import { ErrorMessage } from "../../components/alerts/ErrorMessage";

import ProductList from "./components/product list/ProductList";

import { ShoppingBag } from "lucide-react";
import { useGetProducts } from "./hooks/useGetProducts";

export const Products = () => {
  const { data, error } = useLoaderData();

  const products = useGetProducts(data, error);

  return (
    <>
      {error ? (
        <ErrorMessage
          message={error.message}
          status={error.status}
          code={error.code}
          timestamp={error.timestamp}
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
