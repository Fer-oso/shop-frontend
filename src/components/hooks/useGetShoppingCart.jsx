import { useEffect } from "react";
import { useSelector } from "react-redux";

export const useGetShoppingCart = () => {
  const shoppingCart = useSelector((state) => state.shoppingCart);

  const { productsList, buyer, total } = shoppingCart;

  useEffect(() => {
    console.log("me ejecute");
    if (buyer?.user?.id)
      localStorage.setItem(
        `shopping-cart-${buyer.user.id}`,
        JSON.stringify(shoppingCart)
      );
  }, [shoppingCart]);

  return {
    buyer,
    productsList,
    total,
  };
};
