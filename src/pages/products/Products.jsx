import React from "react";
import { useLoaderData } from "react-router-dom";
import { ErrorMessage } from "../../components/alerts/ErrorMessage";

import ProductList from "./components/product list/ProductList";
import { useGetProducts } from "./hooks/useGetProducts";
import { ShoppingBag } from "lucide-react";

export const Products = () => {
  const { data, error } = useLoaderData();

  const { products, message } = useGetProducts(data, error);

  console.log(data);

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50">
      {message ? (
        <ErrorMessage
          message={error.message}
          status={error.status}
          code={error.code}
          timestamp={error.timestamp}
        />
      ) : (
        <>
          <div className="flex flex-row  items-center justify-center gap-3 sm:gap-4 mb-6">
            <ShoppingBag className="w-8 h-8 text-indigo-600 -mb-6" />
            <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 text-center mt-6">
              Nuestros Productos
            </h1>
          </div>
          <div className="container-fluid bg-gradient-to-br from-indigo-50 to-purple-50">
            <ProductList products={products} />
          </div>
        </>
      )}
    </div>
  );
};
