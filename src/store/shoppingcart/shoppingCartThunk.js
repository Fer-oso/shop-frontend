
import {
  addProductToShoppingCart,
  loadShoppingCart,
  updateProductInShoppingCart,
} from "./shoppingCartSlice";

export const startLoadShoppingCart = (shoppingcart) => {
  return async (dispatch) => {

    if(shoppingcart)

    dispatch(loadShoppingCart(shoppingcart));
  };
};

export const startAddProductToShoppingCart = (productSelected) => {
  return async (dispatch, getState) => {
    const { productsList } = getState().shoppingCart;

    if (productsList.some((product) => product.id === productSelected.id)) {
      const productIndex = productsList.findIndex(
        (product) => product.id === productSelected.id
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
      alert("product already added");
    } else {
      const product = {
        ...productSelected,
        quantity: 1,
        subtotal: productSelected.price,
      };

      dispatch(addProductToShoppingCart(product));
      alert(`${product.name} añadido al carrito 🛒`);
    }
  };
};
