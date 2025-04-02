import React from "react";
import { useLoaderData } from "react-router-dom";
import { ErrorMessage } from "../../components/alerts/ErrorMessage";

import ProductList from "./components/product list/ProductList";
import { useGetProducts } from "./hooks/useGetProducts";
import { ShoppingBag } from "lucide-react";

export const Products = () => {
  const { data, error } = useLoaderData();

  const { products, message } = useGetProducts(data, error);

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
          <div className="flex items-center justify-center mb-12">
            <ShoppingBag className="w-8 h-8 text-indigo-600 mr-3 mt-16" />
            <h1 className="text-4xl font-bold text-gray-90 mt-16">
              Productos Destacados
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
