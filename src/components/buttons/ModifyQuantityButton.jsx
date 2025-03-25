import React from "react";
import { useDispatch } from "react-redux";
import {
  startIncreaseQuantityOfProductInShoppingCart,
  startDecreaseQuantityOfProductInShoppingCart,
  startRemoveProductInShoppingCart,
} from "../../store/shoppingcart/shoppingCartThunk";

export const ModifyQuantityButton = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <>
      <button
        className="px-2 py-1 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none"
        onClick={() =>
          dispatch(startIncreaseQuantityOfProductInShoppingCart(product.id))
        }
      >
        +
      </button>

      <button
        className="px-2 py-1 text-white bg-red-600 rounded hover:bg-red-700 focus:outline-none"
        onClick={() =>
          dispatch(startDecreaseQuantityOfProductInShoppingCart(product.id))
        }
      >
        -
      </button>

      <button
        type="button"
        className="px-2 py-1 text-white bg-black rounded  hover:bg-red-700"
        onClick={() => dispatch(startRemoveProductInShoppingCart(product))}
      >
        🗑️
      </button>
    </>
  );
};
