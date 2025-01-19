import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { ErrorMessage } from '../../components/alerts/ErrorMessage';
import { useDispatch, useSelector } from 'react-redux';
import { startLoadProducts } from '../../store/product/productThunk';
import ProductList from './components/product list/ProductList';
import { useGetProducts } from './hooks/useGetProducts';

export const Products = () => {

  const { data, error} = useLoaderData();

  const products = useGetProducts(data,error)

  return (
    <>
      {data.length < 0 ? (
        <ErrorMessage
          message={error.message}
          status={error.status}
          code={error.code}
          timestamp={error.timestamp}
        />
      ) : (
        <>
          <div className="container-fluid">
            <ProductList products={products} />
            {/*<ProductsTable products={products} />*/}
          </div>
        </>
      )}
    </>
  );
}
