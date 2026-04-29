export const createProductFormData = (product, files) => {
  const REQUEST_NAME_PRODUCT = "product";

  const REQUEST_NAME_FILES = "image";

  const productJSON = JSON.stringify(product);

  /** Creo un BLOB del JSON anterior */
  const produbtBLOB = new Blob([productJSON], {
    type: "application/json",
  });

  /** Creo un formData */

  const formDataProduct = new FormData();

  formDataProduct.append(REQUEST_NAME_PRODUCT, produbtBLOB);

  if (files && files.length > 0) {
    files.forEach((file) => {
      formDataProduct.append(REQUEST_NAME_FILES, file);
    });
  }

  return formDataProduct;
};
