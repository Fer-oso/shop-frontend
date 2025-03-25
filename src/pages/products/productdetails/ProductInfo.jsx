import { CheckCircle, Edit, Package, Star, Tag, XCircle } from "lucide-react";
import React, { useState } from "react";

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

  const { roles } = useOutletContext();

  const [imageSelected, setImageSelected] = useState(images[0] || null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Admin Edit Bar */}
        {roles?.includes("ADMIN") && (
          <div className="bg-gray-50 px-4 py-2 border-b">
            <Link
              to="edit"
              className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 font-medium"
            >
              <Edit className="w-4 h-4 mr-2" />
              Edit Product
            </Link>
          </div>
        )}

        <div className="md:flex">
          {/* Image Gallery */}
          <div className="md:w-1/2">
            <div className="relative h-auto overflow-hidden">
              {images && images.length > 0 ? (
                <div className="grid grid-cols-1 gap-4 p-4">
                  {/* Imagen Principal */}
                  <img
                    src={imageSelected.downloadUrl}
                    alt={imageSelected.fileName}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              ) : (
                <div className="flex items-center justify-center h-full bg-gray-100">
                  <Package className="w-16 h-16 text-gray-400" />
                </div>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div className="md:w-1/2 p-6">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  available
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {available ? (
                  <span className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    In Stock
                  </span>
                ) : (
                  <span className="flex items-center">
                    <XCircle className="w-4 h-4 mr-1" />
                    Out of Stock
                  </span>
                )}
              </span>
            </div>

            {/* Miniaturas de imágenes adicionales arriba de la descripción */}
            {images && images.length > 1 && (
              <div className="flex space-x-2 py-4 border-b border-gray-200">
                {images.slice().map((image, index) => (
                  <img
                    key={index}
                    src={image.downloadUrl}
                    alt={image.fileName}
                    className={`w-16 h-16 object-cover rounded-md flex-shrink-0 cursor-pointer transition ${
                      imageSelected.id === image.id
                        ? "border-2 border-blue-500"
                        : "hover:opacity-75"
                    }`}
                    onClick={() => setImageSelected(image)}
                  />
                ))}
              </div>
            )}

            <div className="mb-6">
              <div className="flex items-center mb-2">
                <Star className="w-5 h-5 text-yellow-400 mr-1" />
                <span className="text-lg font-semibold text-gray-900">
                  {brand}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{description}</p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between py-3 border-t border-gray-200">
                <span className="text-gray-600">Price</span>
                <span className="text-2xl font-bold text-gray-900">
                  ${price.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between py-3 border-t border-gray-200">
                <span className="text-gray-600">Stock</span>
                <span className="font-medium text-gray-900">{stock} units</span>
              </div>

              <div className="flex justify-between py-3 border-t border-gray-200">
                <span className="text-gray-600">Product Code</span>
                <span className="font-medium text-gray-900">{code}</span>
              </div>

              <div className="flex justify-between py-3 border-t border-gray-200">
                <span className="text-gray-600">Category</span>
                <span className="inline-flex items-center">
                  <Tag className="w-4 h-4 mr-1 text-gray-400" />
                  <span className="font-medium text-gray-900">
                    {category.name || "No category"}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
