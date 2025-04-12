import {
  ArrowLeft,
  CheckCircle,
  Edit,
  Package,
  Star,
  Tag,
  XCircle,
} from "lucide-react";
import React, { useState } from "react";

import { Link, useOutletContext, useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  const { roles } = useOutletContext();

  const [imageSelected, setImageSelected] = useState(images[0] || null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="bg-white rounded-md shadow-sm overflow-hidden border border-gray-200">
        {/* Admin Edit Bar */}
        {roles?.includes("ADMIN") && (
          <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex items-center justify-between">
            {/* Botón Volver */}
            <button
              onClick={() => navigate(-1)} // o a una ruta específica: () => navigate('/products')
              className="inline-flex items-center text-sm text-gray-700 hover:text-indigo-700 font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back
            </button>
            {/* Botón Editar */}
            <Link
              to="edit"
              className="inline-flex items-center text-sm text-gray-700 hover:text-indigo-700 font-medium"
            >
              <Edit className="w-4 h-4 mr-1" />
              Edit Product
            </Link>
          </div>
        )}

        <div className="md:flex">
          {/* Image Gallery */}
          <div className="md:w-1/2 bg-white border-r border-gray-200">
            <div className="relative h-auto overflow-hidden">
              {images && images.length > 0 ? (
                <div className="grid grid-cols-1 gap-4 p-4">
                  <img
                    src={imageSelected.downloadUrl}
                    alt={imageSelected.fileName}
                    className="w-full h-auto object-cover rounded-md border"
                  />
                </div>
              ) : (
                <div className="flex items-center justify-center h-64 bg-gray-100">
                  <Package className="w-16 h-16 text-gray-400" />
                </div>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div className="md:w-1/2 p-6 space-y-6">
            <div className="flex items-start justify-between">
              <h1 className="text-xl font-semibold text-gray-900">{name}</h1>
              <span
                className={`px-2.5 py-1 rounded-full text-xs font-medium border ${
                  available
                    ? "bg-green-50 text-green-800 border-green-200"
                    : "bg-red-50 text-red-800 border-red-200"
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

            {/* Thumbnail Images */}
            {images && images.length > 1 && (
              <div className="flex space-x-2 border-b border-gray-200 pb-4">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image.downloadUrl}
                    alt={image.fileName}
                    className={`w-14 h-14 object-cover rounded border cursor-pointer transition-all ${
                      imageSelected.id === image.id
                        ? "ring-2 ring-blue-500"
                        : "hover:opacity-80"
                    }`}
                    onClick={() => setImageSelected(image)}
                  />
                ))}
              </div>
            )}

            <div className="space-y-4 text-gray-700">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-2" />
                <span className="text-base font-medium text-gray-800">
                  {brand}
                </span>
              </div>
              <p className="text-sm leading-relaxed">{description}</p>
            </div>

            <div className="space-y-4 border-t border-gray-200 pt-4 text-sm text-gray-700">
              <div className="flex justify-between">
                <span className="text-gray-500">Price</span>
                <span className="text-xl font-bold text-gray-900">
                  ${price.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Stock</span>
                <span className="font-medium">{stock} units</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Product Code</span>
                <span className="font-medium">{code}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Category</span>
                <span className="inline-flex items-center text-gray-900">
                  <Tag className="w-4 h-4 mr-1 text-gray-400" />
                  <span className="font-medium">
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
