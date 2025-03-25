import { startLoadShoppingCart } from "../../store/shoppingcart/shoppingCartThunk";

export const useCheckUserShoppingCart = (logedUser, dispatch) => {
  if (!logedUser) return;

  const { id, username } = logedUser;

  let shoppingCart = JSON.parse(localStorage.getItem(`shopping-cart-${id}`));

  if (!shoppingCart) {
    shoppingCart = {
      productsList: [],
      buyer: {
        fullName: "",
        email: "",
        address: "",
        phone: "",
        user: { id, username },
      },
      total: 0,
    };

    localStorage.setItem(`shopping-cart-${id}`, JSON.stringify(shoppingCart));
  }

  dispatch(startLoadShoppingCart(shoppingCart));
};
