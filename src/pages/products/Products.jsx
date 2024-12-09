import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { ErrorMessage } from '../../components/alerts/ErrorMessage';
import { ProductsTable } from './components/table/ProductsTable';

export const Products = () => {

  const { data, error} = useLoaderData();

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
