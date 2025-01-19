import {
  addProductToShoppingCart,
  loadShoppingCart,
  removeProductOfShoppingCart,
  updateProductInShoppingCart,
} from "./shoppingCartSlice";

export const startLoadShoppingCart = (shoppingcart) => {
  return async (dispatch) => {
    if (shoppingcart) dispatch(loadShoppingCart(shoppingcart));
  };
};

export const startAddProductToShoppingCart = (productSelected) => {
  return async (dispatch, getState) => {
    const { productsList } = getState().shoppingCart;

    if (productsList.some((product) => product.id === productSelected.id)) {
 
      dispatch(startIncreaseQuantityOfProductInShoppingCart(productSelected.id));
      
      alert("Quantity product updated");
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
      console.log(updatedCart)
  };
}

  
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
      console.log(updatedCart)
  };
};
