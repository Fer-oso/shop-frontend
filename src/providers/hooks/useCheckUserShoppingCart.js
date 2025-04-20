import { nanoid } from "nanoid";
import {
  startCreateShoppingCart,
  startLoadShoppingCart,
} from "../../store/shoppingcart/shoppingCartThunk";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const useCheckUserShoppingCart = (logedUser) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!logedUser?.id) return;

    const { id, username } = logedUser;

    const shoppingCart = JSON.parse(
      localStorage.getItem(`shopping-cart-${id}`)
    ) || {
      shoppingCartId: nanoid(),
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

    dispatch(startLoadShoppingCart(shoppingCart));
    dispatch(startCreateShoppingCart(shoppingCart));
  }, [logedUser, dispatch]);
};
