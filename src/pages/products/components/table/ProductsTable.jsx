import React from 'react'
import { ProductRow } from './ProductRow'

export const ProductsTable = ({products}) => {

  return (
    <>
      {products.length > 0 ? (
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
                <th scope="col">Image</th>
                <th scope="col">Options</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <ProductRow key={product.id} product={product} />
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <div className="alert alert-dismissible alert-warning">
          <button type="button" className="btn-close" data-bs-dismiss="alert" />
          <h4 className="alert-heading">Warning!</h4>
          <p className="mb-0">
            Best check yo self, you're not looking too good. Nulla vitae elit
            libero, a pharetra augue. Praesent commodo cursus magna,{" "}
            <a href="#" className="alert-link">
              vel scelerisque nisl consectetur et
            </a>
            .
          </p>
        </div>
      )}
    </>
  );
}
