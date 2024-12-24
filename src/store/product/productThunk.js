import { loadProduct, loadProducts } from "./productSilce"

export const startLoadProducts = (products,message) =>{
    return async (dispatch) => {

       dispatch(loadProducts({products,message}))
    }
}

export const startLoadProduct = (product, message) =>{
    return async (dispatch) =>{
        console.log(product, message)
        dispatch(loadProduct({product,message}))
    }
}