const PRODUCT_MODEL = {
  name: "",
  brand: "",
  description: "",
  price: "",
  stock: "",
  code: "",
  category: "",
  available: false,
};

export const getProductModel = () => {
  return PRODUCT_MODEL;
};

export const getProductEditModel = (product) => {
  return { ...product, category: product.category?.name ?? "" };
};
