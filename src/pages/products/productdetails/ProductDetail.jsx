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

  if (message?.error) return <ErrorMessage {...message.error} />;

  if (!product) return <Loading />;

  return <ProductInfo product={product} />;
};
