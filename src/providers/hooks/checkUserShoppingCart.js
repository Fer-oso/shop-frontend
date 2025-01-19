import { startLoadShoppingCart } from "../../store/shoppingcart/shoppingCartThunk";

export const checkUserShoppingCart = (logedUser, dispatch) => {
  if (!logedUser) return;

  const { id, username } = logedUser;

  let shoppingCart = JSON.parse(localStorage.getItem(`shopping-cart-${id}`));

  console.log(shoppingCart)

  if (!shoppingCart) {
    shoppingCart = {
      productsList: [],
      buyer: { id, username },
      total: 0,
    };

    localStorage.setItem(`shopping-cart-${id}`, JSON.stringify(shoppingCart));
  }

    dispatch(startLoadShoppingCart(shoppingCart));


  return shoppingCart;
};

