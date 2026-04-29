import React from "react";
import "./ProductDetailsPage.css";

import { ErrorMessage } from "../../../components/alerts/ErrorMessage";
import { ProductInfo } from "./ProductInfo";
import { useProducts } from "../hooks/useProducts";
import { useParams } from "react-router-dom";
import { Loading } from "../../../components/loading/Loading";

export const ProductDetail = () => {
  const { id } = useParams();

  const { useGetProductDetails } = useProducts();

  const { product, message } = useGetProductDetails(id);

  if (product) {
    return <ProductInfo product={product} />;
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
