import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { ErrorMessage } from '../../components/alerts/ErrorMessage';
import { ProductsTable } from './components/table/ProductsTable';
import { useDispatch, useSelector } from 'react-redux';
import { startLoadProducts } from '../../store/product/productThunk';

export const Products = () => {

  const { data, error} = useLoaderData();

  const dispatch = useDispatch();

  const products = useSelector(state => state.products.products);

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
            <ProductsTable products={products} />
          </div>
        </>
      )}
    </>
  );
}
