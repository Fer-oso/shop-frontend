import React from "react";
import { useForm } from "../../../components/hooks/useForm";

import { PRODUCT_MODEL } from "../models/productModel";
import { ProductForm } from "../components/form/ProductForm";

import { useCreateProductAlert } from "../components/buttons/useCreateProductAlert";
import { useProducts } from "../hooks/useProducts";

export const CreateProductForm = () => {
  const { useCreateProduct } = useProducts();

  const { formState, onCheckboxChange, onInputChange } = useForm(PRODUCT_MODEL);

  const { showCreateAlert } = useCreateProductAlert();

  const createFunction = async (product, files) => {
    const { message } = await useCreateProduct(product, files);
    return { message };
  };

  return (
    <>
      <ProductForm
        mode="create"
        formState={formState}
        onCheckboxChange={onCheckboxChange}
        onInputChange={onInputChange}
        userActionFunction={(product, files) =>
          showCreateAlert(() => createFunction(product, files))
        }
      />
    </>
  );
};
