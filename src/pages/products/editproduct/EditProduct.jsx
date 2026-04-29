import React from "react";
import { useProducts } from "../hooks/useProducts";
import { useParams } from "react-router-dom";
import { EditProductForm } from "./EditproductForm";
import { ErrorMessage } from "../../../components/alerts/ErrorMessage";
import { Loading } from "../../../components/loading/Loading";

export const EditProduct = () => {
  const { id } = useParams();

  const { useGetProductDetails } = useProducts();

  const { product, message } = useGetProductDetails(id);

  if (product) {
    return (
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-xl transition-transform duration-300">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-8 tracking-tight">
          Editar Producto
        </h2>
        <EditProductForm product={product} message={message} />
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
