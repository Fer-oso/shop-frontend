import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startLoadProduct, startLoadProducts } from '../../../store/product/productThunk';

export const useGetProducts = (data,error) => {

const dispatch = useDispatch();

  const products = useSelector(state => state.products.products);

  const message = error? error.message: "";

  useEffect(()=>{

    const products = data? data.response : [];

    const message = error? error.message : "Products founded 😊";

    dispatch(startLoadProducts(products,message));

  },[data, dispatch]);

  return {products,message};
   
}

export const useGetProductDetails = (data,error) =>{

     const dispatch = useDispatch();

     const product = data.response
    
      useEffect(() => {
    
        const product = data ? data.response : {};
    
        const message = error ? error : "Product found and loaded successfully 😊";
    
        dispatch(startLoadProduct(product, message));
    
      }, [data, dispatch])

      return product
}
