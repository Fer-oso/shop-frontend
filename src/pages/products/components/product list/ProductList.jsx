import { useModal } from "./hooks/useModal";
import { useDispatch } from "react-redux";
import { startAddProductToShoppingCart } from "../../../../store/shoppingcart/shoppingCartThunk";
import { Toaster } from "sonner";
import { ProductItem } from "./ProductItem";
import { ModalProduct } from "./ModalProduct";

export default function ProductList({ products }) {
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch(startAddProductToShoppingCart(product));
  };

  const { openModal, closeModal, showModal, selectedItem } = useModal();

  return (
    <>
      <div className=" mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-4">
          {products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              openModal={openModal}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
      
      <ModalProduct
        showModal={showModal}
        closeModal={closeModal}
        selectedItem={selectedItem}
        addToCart={addToCart}
      />
      <Toaster richColors />
    </>
  );
}
