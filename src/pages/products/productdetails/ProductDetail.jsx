import React from "react";
import { useLoaderData } from "react-router-dom";
import "./ProductDetailsPage.css";

import { ErrorMessage } from "../../../components/alerts/ErrorMessage";
import { ProductInfo } from "./ProductInfo";
import { useGetProductDetails } from "../hooks/useGetProducts";

export const ProductDetail = () => {
  const { data, error } = useLoaderData();

  const product = useGetProductDetails(data, error);

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50">
      {error ? (
        <ErrorMessage
          message={error.message}
          status={error.status}
          code={error.code}
          timestamp={error.timestamp}
        />
      ) : (
        <ProductInfo product={product} />
      )}
    </div>
  );
};
