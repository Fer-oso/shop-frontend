import React from "react";
import { ModifyQuantityButton } from "../buttons/ModifyQuantityButton";

export const ShoppingCartProduct = ({ products }) => {
  return (
    <div className="mt-8">
      <div className="flow-root">
        <ul role="list" className="-my-6 divide-y divide-gray-400">
          {products.map(({ product, quantity, subtotal }) => (
            <li key={product.id} className="flex py-6">
              <div className="h-24 w-24 flex-shrink-0 overflow-clip rounded-md border border-gray-200">
                {product.images?.[0] ? (
                  <img
                    src={product.images[0].downloadUrl}
                    className="h-full w-full object-cover object-center"
                    alt={product.name}
                  />
                ) : (
                  <span>No Image</span>
                )}
              </div>

              <div className="ml-4 flex flex-1 flex-col">
                <div>
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <h3>{product.name}</h3>
                    <ul>
                      <li>
                        <p className="ml-4 font-black">
                          precio ${product.price}
                        </p>
                      </li>
                      <li>
                        <p className="ml-4 mt-4 font-black">
                          subtotal ${subtotal}
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-1 items-center justify-between text-sm">
                  <div className="flex items-center mt-3 ml-3 gap-2">
                    <p className="text-gray-800 font-black">
                      Quantity {quantity}
                    </p>
                    <ModifyQuantityButton product={product} />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
