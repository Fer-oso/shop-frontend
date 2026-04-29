import { createProductService } from "../../providers/products/createProductService";
import { deleteProductById } from "../../providers/products/deleteProductById";
import { editProductById } from "../../providers/products/editProductById";
import { loadProductService } from "../../providers/products/loadProduct";
import { loadProductsService } from "../../providers/products/loadProducts";
import {
  createProduct,
  deleteProduct,
  editProduct,
  loadProduct,
  loadProducts,
} from "./productSilce";

export const startLoadProducts = () => {
  return async (dispatch) => {
    const { data, error } = await loadProductsService();

    const products = data.response;

    const message = error
      ? error.response
      : "Products found and loaded successfully 😊";

    dispatch(loadProducts({ products, message }));

    return { products, message };
  };
};

export const startLoadProduct = (productId) => {
  return async (dispatch) => {
    const { data, error } = await loadProductService(productId);

    const product = data.response;
    const message = error
      ? error.response
      : "Product found and load succesfully 😊";
    dispatch(loadProduct({ product, message }));

    return { product, message };
  };
};

export const startCreateProduct = (formDataProduct) => {
  return async (dispatch) => {
    const { data, error } = await createProductService(formDataProduct);

    const productCreated = data ? data.response : null;

    const message = error
      ? error
      : { code: "201", message: "Product created Succesfully 😊" };

    console.log(message);

    console.log(productCreated);

    dispatch(createProduct({ productCreated, message }));

    return { productCreated, message };
  };
};

export const startEditProduct = (id, product, files) => {
  return async (dispatch) => {
    /*Creo un JSON del formState */

    const productJSON = JSON.stringify(product);

    /** Creo un BLOB del JSON anterior */
    const produbtBLOB = new Blob([productJSON], {
      type: "application/json",
    });

    /** Creo un formData */

    const formDataProduct = new FormData();

    formDataProduct.append("product", produbtBLOB);

    if (files && files.length > 0) {
      files.forEach((file) => {
        formDataProduct.append("image", file);
      });
    }

    const { data, error } = await editProductById(id, formDataProduct);

    const productEdited = data ? data.response : {};

    const message = error ? error : "Product edited Succesfully 😊";

    dispatch(editProduct({ productEdited, message }));
  };
};

export const startDeleteProduct = (id) => {
  return async (dispatch) => {
    const { data, error } = await deleteProductById(id);

    const productDeleted = { id };

    const message = error ? error : data.response;

    dispatch(deleteProduct({ productDeleted, message }));
  };
};
