import React from 'react'
import { useLoaderData } from 'react-router-dom';
import './ProductDetailsPage.css';

export const ProductDetail = () => {

  const {data,error} = useLoaderData();

  const {name,brand,description,price,stock,code,category,available,images} = data.response;

  if (error) {
    return <div className="product-detail-container">Error al cargar el producto</div>;
  }

  if (!data.response) {
    return <div className="product-detail-container">Producto no encontrado</div>;
  }

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
        {images && images.map((image,key) =>
          <div className="product-image" key={key}>
            <img src={"http://localhost:8080/api/shop/images/"+image.id} alt={image.fileName} />
          </div>
        )}
      </div>
    </div>
  );
};
    

  

