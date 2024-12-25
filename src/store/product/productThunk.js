import { deleteProductById } from "../../providers/products/deleteProductById";
import { editProductById } from "../../providers/products/editProductById";
import { deleteProduct, editProduct, loadProduct, loadProducts } from "./productSilce"

export const startLoadProducts = (products,message) =>{
    return async (dispatch) => {
       dispatch(loadProducts({products,message}));
    }
}

export const startLoadProduct = (product, message) =>{
    return async (dispatch) =>{
        dispatch(loadProduct({product,message}));
    }
}

export const startEditProduct = (id,product,files) =>{
    return async (dispatch) =>{

          /*Creo un JSON del formState */
        
                const productJSON = JSON.stringify(product);
        
                /** Creo un BLOB del JSON anterior */
                const produbtBLOB = new Blob([productJSON], {
                    type: "application/json"
                });
        
                /** Creo un formData */
        
                const formDataProduct = new FormData();
        
                formDataProduct.append("product", produbtBLOB);
        
                if (files && files.length > 0) {
                    files.forEach((file) => { formDataProduct.append("image", file) });
                }

                const {data , error} = await editProductById(id, formDataProduct);
                
                const productEdited = data? data.response : {};

                const message = error? error : "Product edited Succesfully 😊";

                dispatch(editProduct({productEdited,message}));
    }
}

export const startDeleteProduct = (id) =>{
    return async(dispatch) =>{

        const {data, error} = await deleteProductById(id);

        const productDeleted = {id}
        
        const message = error? error : data.response

        dispatch(deleteProduct({productDeleted,message}));
    }
}