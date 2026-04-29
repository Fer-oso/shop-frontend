import React from "react";

import { ErrorMessage } from "../../components/alerts/ErrorMessage";

import ProductList from "./components/product list/ProductList";

import { ShoppingBag } from "lucide-react";
import { useProducts } from "./hooks/useProducts";
import { Loading } from "../../components/loading/Loading";

export const Products = () => {
  const { useGetProducts } = useProducts();

  const { products, message } = useGetProducts();

  if (products?.length > 0) {
    return (
      <div>
        <div className="flex flex-row  items-center justify-center gap-3 sm:gap-4 mb-6">
          <ShoppingBag className="w-8 h-8 text-indigo-600 -mb-6" />
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 text-center mt-6">
            Nuestros Productos
          </h1>
        </div>

        <ProductList products={products} />
      </div>
    );
  }

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
        <Loading />
      )}
    </>
  );
};
