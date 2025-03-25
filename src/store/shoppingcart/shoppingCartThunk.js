import { toast } from "sonner";
import {
  addProductToShoppingCart,
  loadShoppingCart,
  removeProductOfShoppingCart,
  setBuyerInfo,
  updateProductInShoppingCart,
} from "./shoppingCartSlice";

export const startLoadShoppingCart = (shoppingcart) => {
  return async (dispatch) => {
    if (shoppingcart) dispatch(loadShoppingCart(shoppingcart));
  };
};

export const startAddProductToShoppingCart = (productSelected) => {
  return async (dispatch, getState) => {
    try {
      const { productsList } = getState().shoppingCart;

      if (productsList.some((product) => product.id === productSelected.id)) {
        dispatch(
          startIncreaseQuantityOfProductInShoppingCart(productSelected.id)
        );

        toast.info("Product already added. Quantity updated");
      } else {
        const product = {
          ...productSelected,
          quantity: 1,
          subtotal: productSelected.price,
        };

        dispatch(addProductToShoppingCart(product));

        toast.success("Product added sucessfully");
      }
    } catch (error) {
      return toast.error("Product not added. view reason" + error);
    }
  };
};

export const startRemoveProductInShoppingCart = (productSelected) => {
  return async (dispatch, getState) => {
    const { productsList } = getState().shoppingCart;

    const newList = productsList.filter(
      (product) => product.id !== productSelected.id
    );

    dispatch(removeProductOfShoppingCart(newList));
  };
};

export const startIncreaseQuantityOfProductInShoppingCart = (productId) => {
  return async (dispatch, getState) => {
    const { productsList } = getState().shoppingCart;

    const productIndex = productsList.findIndex(
      (product) => product.id === productId
    );

    const updatedCart = productsList.map((product, index) =>
      index === productIndex
        ? {
            ...product,
            quantity: product.quantity + 1,
            subtotal: product.subtotal + product.price,
          }
        : product
    );

    dispatch(updateProductInShoppingCart(updatedCart));
  };
};

export const startDecreaseQuantityOfProductInShoppingCart = (productId) => {
  return async (dispatch, getState) => {
    const { productsList } = getState().shoppingCart;

    const productIndex = productsList.findIndex(
      (product) => product.id === productId
    );

    const updatedCart = productsList.map((product, index) =>
      index === productIndex
        ? {
            ...product,
            quantity: product.quantity - 1,
            subtotal: product.subtotal - product.price,
          }
        : product
    );

    dispatch(updateProductInShoppingCart(updatedCart));
  };
};

export const startSetBuyerInShoppingCart = (buyerInfo) => {
  return async (dispatch) => {
    dispatch(setBuyerInfo(buyerInfo));
  };
};
