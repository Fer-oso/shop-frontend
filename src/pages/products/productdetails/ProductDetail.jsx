import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom';
import './ProductDetailsPage.css';
import { useDispatch } from 'react-redux';
import { startLoadProduct } from '../../../store/product/productThunk';
import { ErrorMessage } from '../../../components/alerts/ErrorMessage';
import { ProductInfo } from './ProductInfo';

export const ProductDetail = () => {

  const { data, error } = useLoaderData();

  const dispatch = useDispatch();

  useEffect(() => {

    const product = data ? data.response : {};

    const message = error ? error : "Product found and loaded successfully 😊";

    dispatch(startLoadProduct(product, message));

  }, [data, dispatch])

  return (
    <>
      {error ? (
        <ErrorMessage
          message={error.message}
          status={error.status}
          code={error.code}
          timestamp={error.timestamp}
        />
      ) : (
         <ProductInfo product={data.response}/>
        )}
    </>
  );
};




