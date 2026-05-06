import React, { useState } from "react";

import { getProductModel } from "../models/productModel";
import { ProductForm } from "../components/form/ProductForm";

import { useCreateProductAlert } from "../components/buttons/useCreateProductAlert";
import { useProducts } from "../hooks/useProducts";

export const CreateProductForm = () => {
  const { useCreateProduct } = useProducts();

  const [fieldErrors, setFieldErrors] = useState({});

  const { showCreateAlert } = useCreateProductAlert();

  const PRODUCT_MODEL = getProductModel();

  const createFunction = async (product, files) => {
    const { message } = await useCreateProduct(product, files);

    if (message.error?.errors) {
      setFieldErrors(message.error.errors);
      return;
    }
    setFieldErrors({});

    return { message };
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-xl transition-transform duration-300">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-8 tracking-tight">
        Crear Producto
      </h2>

      <ProductForm
        mode="create"
        initialFormState={PRODUCT_MODEL}
        userActionFunction={(product, files) =>
          showCreateAlert(() => createFunction(product, files))
        }
        fieldErrors={fieldErrors}
      />
    </div>
  );
};
