import { ControlPointOutlined } from "@mui/icons-material";
import { ShoppingCart } from "lucide-react";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

export const ProductItem = ({ product, openModal, addToCart }) => {
  const { id, name, images, price, category } = product;

  return (
    <div className="group relative border flex flex-col transform transition duration-300 hover:scale-105 ">
      <div className="aspect-w-1 aspect-h-1 cursor-pointer">
        {images?.[0] ? (
          <img
            src={images[0].downloadUrl}
            className="aspect-square w-full h-full object-contain  bg-transparent lg:aspect-auto lg:h-full lg:w-full transition-opacity duration-300 "
            alt={name}
            onClick={() => openModal(product)}
          />
        ) : (
          <img
            src=""
            alt="No image"
            className="aspect-square w-full h-full object-cover text-center group-hover:opacity-75 rounded-md bg-gray-200 lg:aspect-auto lg:h-80 transition-opacity duration-300"
            onClick={() => openModal(product)}
          />
        )}
      </div>

      <div className="mt-4 space-y-2  flex flex-col h-full  transition-colors ">
        <div className="flex justify-between  ">
          <h3 className="text-sm text-gray-700 ml-1 group-hover:text-blue-500">
            {name}
          </h3>

          <p className="text-sm font-black text-black-500 mr-1">${price}</p>
        </div>

        <p className="text-sm text-gray-500 ml-1">{category?.name}</p>

        <div className="mt-auto flex flex-col gap-2">
          <button
            onClick={() => addToCart(product)}
            className="w-full flex items-center justify-center space-x-2 bg-blue-500 text-white px-4 py-2  hover:bg-blue-600 transition-colors lg:text-xs"
          >
            <ShoppingCart size={20} />
            <span>Add to Cart</span>
          </button>

          <Link
            to={`/products/${id}`}
            className="w-full flex items-center justify-center space-x-2 bg-gray-200 text-black px-4 py-2  hover:bg-gray-300 transition-colors lg:text-xs"
          >
            <ControlPointOutlined size={20} /> <span>View details</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    description: PropTypes.string, // Puede ser null, por lo que no es requerido
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
    available: PropTypes.bool.isRequired,
    code: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.object), // Es un array de objetos
    category: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }),
};
