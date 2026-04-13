import { nanoid } from "nanoid";
import {
  startCreateShoppingCart,
  startLoadShoppingCart,
} from "../../store/shoppingcart/shoppingCartThunk";
import { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";

export const useCheckUserShoppingCart = (loggedUser) => {
  const dispatch = useDispatch();

  const shoppingCart = useMemo(() => {
    if (!loggedUser?.id) return;

    return JSON.parse(localStorage.getItem(`shopping-cart-${loggedUser.id}`));
  }, [loggedUser]);

  useEffect(() => {
    if (!loggedUser?.id) return;

    const { id, username } = loggedUser;

    let parsedCart = null;

    try {
      const storedCart = localStorage.getItem(`shopping-cart-${id}`);
      parsedCart = storedCart ? JSON.parse(storedCart) : null;
    } catch (error) {
      console.error("Error parsing shopping cart:", error);
      localStorage.removeItem(`shopping-cart-${id}`);
    }

    if (parsedCart) {
      dispatch(startLoadShoppingCart(parsedCart));
      return;
    }

    const newShoppingCart = {
      shoppingCartId: nanoid(),
      buyer: {
        firstname: "",
        lastname: "",
        email: "",
        address: "",
        phone: { areacode: "", number: "" },
        user: { id, username },
      },
      products: [],
      total: 0,
    };

    localStorage.setItem(
      `shopping-cart-${id}`,
      JSON.stringify(newShoppingCart),
    );

    dispatch(startLoadShoppingCart(newShoppingCart));
    console.log(newShoppingCart);
    //  dispatch(startCreateShoppingCart(newshoppingCart));
  }, [loggedUser, shoppingCart, dispatch]);
};
