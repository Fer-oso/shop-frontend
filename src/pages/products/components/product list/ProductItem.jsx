import { ControlPointOutlined } from "@mui/icons-material";
import { ShoppingCart } from "lucide-react";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

export const ProductItem = ({ product, openModal, addToCart }) => {
  const { id, name, images, price, category } = product;

  return (
    <div className="group relative border rounded-lg bg-white shadow-sm hover:shadow-md transition-transform duration-300 hover:scale-[1.02] flex flex-col overflow-hidden">
  {/* Imagen */}
  <div
    className="bg-gray-50 cursor-pointer flex items-center justify-center overflow-hidden h-52"
    onClick={() => openModal(product)}
  >
    {images?.[0] ? (
      <img
        src={images[0].downloadUrl}
        alt={name}
        className="max-h-full max-w-full object-contain transition-opacity duration-300 group-hover:opacity-90"
      />
    ) : (
      <div className="text-gray-400 text-sm">No image available</div>
    )}
  </div>

  {/* Contenido */}
  <div className="flex flex-col p-3 gap-2">
    {/* Nombre y Precio */}
    <div className="flex justify-between items-center">
      <h3 className="text-sm font-medium text-gray-800 group-hover:text-blue-600 truncate">
        {name}
      </h3>
      <p className="text-sm font-bold text-gray-900">${price}</p>
    </div>

    {/* Categoría */}
    <p className="text-xs text-gray-500">{category?.name}</p>

    {/* Botones */}
    <div className="flex flex-col gap-2 pt-1">
      <button
        onClick={() => addToCart(product)}
        className="flex items-center justify-center gap-2 bg-indigo-600  hover:bg-indigo-700  text-white px-4 py-1.5 rounded-md text-xs font-medium transition duration-300"
      >       

        <ShoppingCart size={16} />
        Add to Cart
      </button>

      <Link
      type="button"
        to={`/products/${id}`}
        className="flex items-center justify-center gap-2 bg-indigo-600  hover:bg-indigo-700  text-white px-4 py-1.5 rounded-md text-xs font-medium transition duration-300"
      >
        <ControlPointOutlined  />
        View Details
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
