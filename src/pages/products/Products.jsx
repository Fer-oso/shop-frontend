import React from "react";
import { useLoaderData } from "react-router-dom";
import { ErrorMessage } from "../../components/alerts/ErrorMessage";

import ProductList from "./components/product list/ProductList";
import { useGetProducts } from "./hooks/useGetProducts";

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
          <div className="container-fluid bg-gradient-to-br from-indigo-50 to-purple-50">
            <ProductList products={products} />
            {/*<ProductsTable products={products} />*/}
          </div>
        </>
      )}
    </div>
  );
};
