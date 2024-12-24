import React from 'react'

export const ProductInfo = ({product}) => {

const { name, brand, description, price, stock, code, category, available, images } = product;

  return (
    <div className="product-detail-container">
    <h1 className="product-title">{name}</h1>
    <div className="product-info">
      <div className="product-details">
        <p><strong>Brand:</strong> {brand}</p>
        <p><strong>Description:</strong> {description}</p>
        <p><strong>Price:</strong> ${price}</p>
        <p><strong>Stock:</strong> {stock}</p>
        <p><strong>Code:</strong> {code}</p>
        <p><strong>Category:</strong> {category.name || "No category"}</p>
        <p>
          <strong>Available:</strong>{' '}
          {available ? 'Yes' : 'No'}
        </p>
      </div>
      {images && images.map((image, key) =>
        <div className="product-image" key={key}>
          <img src={"http://localhost:8080/api/shop/images/" + image.id} alt={image.fileName} />
        </div>
      )}
    </div>
  </div>
  )
}
