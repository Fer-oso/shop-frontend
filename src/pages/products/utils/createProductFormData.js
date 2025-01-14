export const createProductFormData = (product,files) =>{

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

          return formDataProduct;
}