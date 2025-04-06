import { ShoppingCartIcon } from "@heroicons/react/24/outline";

export const ShoppingCartButton = ({ show, quantityProducts }) => {
  return (
    <div className="relative flex justify-end mr-5 mt-2 lg:translate-x-3/4">
      <button
        type="button"
        className="relative flex items-center p-1.5 rounded-md text-gray-700 hover:text-gray-900 transition-all duration-300"
        onClick={show}
      >
        {/* Icono del carrito */}
        <ShoppingCartIcon
          className="w-6 h-6 md:w-7 md:h-7"
          aria-hidden="true"
        />

        {/* Contador de productos en el carrito */}
        {quantityProducts > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {quantityProducts}
          </span>
        )}
      </button>
    </div>
  );
};
