import React from "react";
import { Link, useOutletContext } from "react-router-dom";

export const ProductInfo = ({ product }) => {
  const {
    name,
    brand,
    description,
    price,
    stock,
    code,
    category,
    available,
    images,
  } = product;

  const roles = useOutletContext();

  return (
    <div className="product-detail-container">
      {roles.includes("ADMIN") ? (
        <>
          <nav>
            <Link to={`edit`}>Edit</Link>
          </nav>
        </>
      ) : (
        <></>
      )}
      <h1 className="product-title">{name}</h1>
      <div className="product-info">
        <div className="product-details">
          <p>
            <strong>Brand:</strong> {brand}
          </p>
          <p>
            <strong>Description:</strong> {description}
          </p>
          <p>
            <strong>Price:</strong> ${price}
          </p>
          <p>
            <strong>Stock:</strong> {stock}
          </p>
          <p>
            <strong>Code:</strong> {code}
          </p>
          <p>
            <strong>Category:</strong> {category.name || "No category"}
          </p>
          <p>
            <strong>Available:</strong> {available ? "Yes" : "No"}
          </p>
        </div>
        {images &&
          images.map((image, key) => (
            <div className="product-image" key={key}>
              <img
                src={
                  "https://dd26-2800-810-58c-89cc-c4ea-837e-4784-352b.ngrok-free.app/api/shop/images/" +
                  image.id
                }
                alt={image.fileName}
              />
            </div>
          ))}
      </div>
    </div>
  );
};
