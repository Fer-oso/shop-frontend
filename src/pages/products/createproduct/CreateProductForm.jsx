import React from "react";

import { getProductModel } from "../models/productModel";
import { ProductForm } from "../components/form/ProductForm";

import { useCreateProductAlert } from "../components/buttons/useCreateProductAlert";
import { useProducts } from "../hooks/useProducts";

export const CreateProductForm = () => {
  const { useCreateProduct } = useProducts();

  const { showCreateAlert } = useCreateProductAlert();

  const PRODUCT_MODEL = getProductModel();

  const createFunction = async (product, files) => {
    const { message } = await useCreateProduct(product, files);
    return { message };
  };

  return (
    <>
      <ProductForm
        mode="create"
        initialFormState={PRODUCT_MODEL}
        userActionFunction={(product, files) =>
          showCreateAlert(() => createFunction(product, files))
        }
      />
    </>
  );
};
