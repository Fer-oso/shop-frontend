import { toast } from "sonner";
import {
  addProductToShoppingCart,
  createShoppingCart,
  loadShoppingCart,
  removeProductOfShoppingCart,
  setBuyerInfo,
  updateProductInShoppingCart,
} from "./shoppingCartSlice";
import { createShoppingCartService } from "../../providers/shoppingcart/createShoppingCartService";
import { updateShoppingCartService } from "../../providers/shoppingcart/updateShoppingCartService";

export const startLoadShoppingCart = (shoppingcart) => {
  return async (dispatch) => {
    if (shoppingcart) dispatch(loadShoppingCart(shoppingcart));
  };
};

export const startCreateShoppingCart = (shoppingcart) => {
  return async (dispatch) => {
    try {
      const { data, status } = await createShoppingCartService(shoppingcart);

      if (status === 201) {
        dispatch(createShoppingCart(data));
        toast.success("Pedido confirmado con éxito");
      }

      return { data, status };
    } catch (error) {
      console.error("Error al crear el carrito:", error);
      toast.error("Error al crear el carrito. View reason: " + error.message);
      return { error: error.message };
    }
  };
};

export const startAddProductToShoppingCart = (productSelected) => {
  return async (dispatch, getState) => {
    try {
      const { products } = getState().shoppingCart;

      const existingProduct = products.find(
        (item) => item.product.id === productSelected.id,
      );

      if (existingProduct) {
        dispatch(
          startIncreaseQuantityOfProductInShoppingCart(productSelected.id),
        );

        toast.info("Product already added. Quantity updated");
      } else {
        const newProduct = {
          product: productSelected,
          quantity: 1,
          subtotal: productSelected.price,
        };

        dispatch(addProductToShoppingCart(newProduct));

        toast.success("Product added sucessfully");
      }
    } catch (error) {
      return toast.error("Product not added. view reason" + error.message);
    }
  };
};

export const startRemoveProductInShoppingCart = (productSelected) => {
  return async (dispatch, getState) => {
    const { products } = getState().shoppingCart;

    const newList = products.filter(
      (product) => product.product.id !== productSelected.id,
    );

    dispatch(removeProductOfShoppingCart(newList));
  };
};

export const startIncreaseQuantityOfProductInShoppingCart = (productId) => {
  return async (dispatch, getState) => {
    const { products } = getState().shoppingCart;

    const productIndex = products.findIndex(
      (product) => product.product.id === productId,
    );

    const updatedCart = products.map((product, index) =>
      index === productIndex
        ? {
            ...product,
            quantity: product.quantity + 1,
            subtotal: product.subtotal + product.product.price,
          }
        : product,
    );

    dispatch(updateProductInShoppingCart(updatedCart));
  };
};

export const startDecreaseQuantityOfProductInShoppingCart = (productId) => {
  return async (dispatch, getState) => {
    const { products } = getState().shoppingCart;

    const productIndex = products.findIndex(
      (product) => product.product.id === productId,
    );

    const updatedCart = products.map((product, index) =>
      index === productIndex
        ? {
            ...product,
            quantity: product.quantity - 1,
            subtotal: product.subtotal - product.product.price,
          }
        : product,
    );

    dispatch(updateProductInShoppingCart(updatedCart));
  };
};

export const startSetBuyerInShoppingCart = (buyerInfo) => {
  return async (dispatch) => {
    dispatch(setBuyerInfo(buyerInfo));
  };
};

export const startUpdateShoppingCart = (shoppingCart) => {
  return async (dispatch) => {
    const { data } = await updateShoppingCartService(shoppingCart);

    console.log(data);
  };
};
