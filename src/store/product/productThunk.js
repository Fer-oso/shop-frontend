import { createProductService } from "../../providers/products/createProductService";
import { deleteProductByIdService } from "../../providers/products/deleteProductByIdService";
import { editProductByIdService } from "../../providers/products/editProductByIdService";
import { loadProductService } from "../../providers/products/loadProductService";
import { loadProductsService } from "../../providers/products/loadProductsService";
import {
  createProduct,
  deleteProduct,
  editProduct,
  loadProduct,
  loadProducts,
} from "./productSilce";

export const startCreateProduct = (formDataProduct) => {
  return async (dispatch) => {
    const { productCreated, timestamp, error, code } =
      await createProductService(formDataProduct);

    const message = error
      ? { error: { ...error } }
      : { code, message: "Product created Succesfully 😊" };

    dispatch(createProduct({ productCreated, message, timestamp }));

    return { productCreated, message };
  };
};

export const startLoadProduct = (productId) => {
  return async (dispatch) => {
    const { product, timestamp, error } = await loadProductService(productId);

    const message = error
      ? { error: { ...error } }
      : "Product found and load succesfully 😊";

    dispatch(loadProduct({ product, message, timestamp }));

    return { product, message, timestamp };
  };
};

export const startEditProduct = (id, formDataProduct) => {
  return async (dispatch) => {
    const { productEdited, timestamp, error, code } =
      await editProductByIdService(id, formDataProduct);

    const message = error
      ? { error: { ...error } }
      : { code, message: "Product edited Succesfully 😊" };

    dispatch(editProduct({ productEdited, message, timestamp }));

    return { productEdited, message };
  };
};

export const startDeleteProduct = (id) => {
  return async (dispatch) => {
    const { data, error } = await deleteProductByIdService(id);

    const productDeleted = { id };

    const message = error ? error : data.response;

    dispatch(deleteProduct({ productDeleted, message }));
  };
};

export const startLoadProducts = () => {
  return async (dispatch, getState) => {
    const { products } = getState().products;

    if (!products) {
      const { products, timestamp, error } = await loadProductsService();

      const message = error
        ? { error: { ...error } }
        : "Products found and loaded successfully 😊";

      dispatch(loadProducts({ products, message, timestamp }));

      return { products, message, timestamp };
    }

    return { products };
  };
};
