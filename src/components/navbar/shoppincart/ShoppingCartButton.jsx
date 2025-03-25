import { ShoppingCartIcon } from "@heroicons/react/24/outline";

export const ShoppingCartButton = ({ show, productsList }) => {
  return (
    <button
      type="button"
      className=" py-2 ml-4 md:ml-5 flex text-sm/6 "
      onClick={show}
    >
      <ShoppingCartIcon
        className="w-6  hover:text-gray-900"
        aria-hidden="true"
      />
      <p className="ml-2 font-black"> {productsList.length}</p>
    </button>
  );
};
