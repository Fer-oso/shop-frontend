import React, { useState } from "react";
import { useProducts } from "../hooks/useProducts";
import { useParams } from "react-router-dom";
import { ErrorMessage } from "../../../components/alerts/ErrorMessage";
import { Loading } from "../../../components/loading/Loading";
import { ProductForm } from "../components/form/ProductForm";
import { useEditProductAlert } from "../components/buttons/useEditProductAlert";
import { getProductEditModel } from "../models/productModel";

export const EditProduct = () => {
  const { id } = useParams();

  const [fieldErrors, setFieldErrors] = useState({});

  const { useGetProductDetails, useEditProduct } = useProducts();

  const { product, message } = useGetProductDetails(id);

  const { showEditAlert } = useEditProductAlert();

  if (message?.error) return <ErrorMessage {...message.error} />;

  if (!product) return <Loading />;

  const editFunction = async (product, files) => {
    const { message } = await useEditProduct(product.id, product, files);

    if (message?.error?.errors) {
      setFieldErrors(message?.error?.errors);

      return;
    }

    setFieldErrors({});

    return { message };
  };

  const PRODUCT_EDIT_MODEL = getProductEditModel(product);

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-xl transition-transform duration-300">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-8 tracking-tight">
        Editar Producto
      </h2>
      <ProductForm
        mode={"edit"}
        initialFormState={PRODUCT_EDIT_MODEL}
        userActionFunction={(product, files) => {
          showEditAlert(() => editFunction(product, files));
        }}
        fieldErrors={fieldErrors}
      />
    </div>
  );
};
