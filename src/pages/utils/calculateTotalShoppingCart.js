const calculateTotalShoppingCart = (products) => {
  const total = products.reduce(
    (total, { product, quantity }) => total + product.price * quantity,
    0,
  );
  return total.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
  });
};

export default calculateTotalShoppingCart;
