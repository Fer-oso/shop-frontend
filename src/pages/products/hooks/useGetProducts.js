import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  startLoadProduct,
  startLoadProducts,
} from "../../../store/product/productThunk";

export const useGetProducts = (data, error) => {
  
  const dispatch = useDispatch();

  const products = data?.response || useSelector((state) => state.products.products);

  const message = error ? error.message :  "Products founded 😊"

  useEffect(() => {
   
      dispatch(startLoadProducts(products, message));
    
  }, [data, dispatch]);

  return products ;
};

export const useGetProductDetails = (data, error) => {

  const dispatch = useDispatch();

  const product = data?.response || {};

  const message = error ? error : "Product found and loaded successfully 😊";

  useEffect(() => {
   
    dispatch(startLoadProduct(product, message));
  }, [data, dispatch]);

  return {product};
};
