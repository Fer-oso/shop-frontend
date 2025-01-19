import { useEffect } from "react";
import { useSelector } from "react-redux";

export const useGetShoppingCart = () => {
  const shoppingCart = useSelector((state) => state.shoppingCart);

  const { productsList, buyer, total } = shoppingCart;

  useEffect(() => {
    if (buyer.id)
      localStorage.setItem(
        `shopping-cart-${buyer.id}`,
        JSON.stringify(shoppingCart)
      );
  }, [shoppingCart]);

  return {
    productsList,
    total,
  };
};
