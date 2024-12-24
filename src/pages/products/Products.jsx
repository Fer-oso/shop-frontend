import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import { ErrorMessage } from '../../components/alerts/ErrorMessage';
import { ProductsTable } from './components/table/ProductsTable';
import { useDispatch } from 'react-redux';
import { startLoadProducts } from '../../store/product/productThunk';

export const Products = () => {

  const { data, error} = useLoaderData();

  const dispatch = useDispatch();

  useEffect(()=>{

    const products = data? data.response : [];

    const message = error? error.message : "Products founded 😊";

    dispatch(startLoadProducts(products,message))

  },[data,dispatch]);

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
        <>
          <div className="container-fluid">
            <ProductsTable products={data.response} />
          </div>
        </>
      )}
    </>
  );
}
