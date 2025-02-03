export const createProductFormData = ({nameProduct,product,nameFiles,files}) =>{

  const productJSON = JSON.stringify(product);

          /** Creo un BLOB del JSON anterior */
          const produbtBLOB = new Blob([productJSON], {
            type: "application/json",
          });

          /** Creo un formData */

          const formDataProduct = new FormData();

          formDataProduct.append(nameProduct, produbtBLOB);

          if (files && files.length > 0) {
            files.forEach((file) => {
              formDataProduct.append(nameFiles, file);
            });
          }

          return formDataProduct;
}