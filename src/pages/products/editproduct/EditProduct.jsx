import React from "react";
import { useProducts } from "../hooks/useProducts";
import { useParams } from "react-router-dom";
import { ErrorMessage } from "../../../components/alerts/ErrorMessage";
import { Loading } from "../../../components/loading/Loading";
import { ProductForm } from "../components/form/ProductForm";
import { useEditProductAlert } from "../components/buttons/useEditProductAlert";
import { getProductEditModel } from "../models/productModel";

export const EditProduct = () => {
  const { id } = useParams();

  const { useGetProductDetails, useEditProduct } = useProducts();

  const { product, message } = useGetProductDetails(id);

  const { showEditAlert } = useEditProductAlert();

  if (message?.error) return <ErrorMessage {...message.error} />;

  if (!product) return <Loading />;

  const editFunction = async (product, files) => {
    const { message } = await useEditProduct(product.id, product, files);
    return { message };
  };

  const PRODUCT_EDIT_MODEL = getProductEditModel(product);

  return (
    <ProductForm
      mode={"edit"}
      initialFormState={PRODUCT_EDIT_MODEL}
      userActionFunction={(product, files) => {
        showEditAlert(() => editFunction(product, files));
      }}
    />
  );
};
