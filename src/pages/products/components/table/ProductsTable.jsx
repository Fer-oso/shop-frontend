import React from 'react'
import { ProductRow } from './ProductRow'

export const ProductsTable = ({products}) => {
  return (
    <>
     <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Brand</th>
                  <th scope="col">Code</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Price</th>
                  <th scope="col">Category</th>
                  <th scope='col'>Image</th>
                  <th scope="col">Options</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product =>(
                    <ProductRow key= {product.id} product={product}/>
                )))}
              </tbody>
              </table>
              </>
  )
}
