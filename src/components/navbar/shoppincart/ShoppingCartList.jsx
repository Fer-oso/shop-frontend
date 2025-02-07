import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { startRemoveProductInShoppingCart } from "../../../store/shoppingcart/shoppingCartThunk";
import { ShoppingCartButton } from "./ShoppingCartButton";
import { ModifyQuantityButton } from "../../buttons/ModifyQuantityButton";
import { useGetShoppingCart } from "../../hooks/useGetShoppingCart";
import { Link } from "react-router-dom";

export default function ShoppingCartList() {
  const dispatch = useDispatch();

  const { productsList, total } = useGetShoppingCart();

  const [open, setOpen] = useState(false);

  const onClickRemoveProduct = (product) => {
    dispatch(startRemoveProductInShoppingCart(product));
  };

  return !productsList.length > 0 ? (
    <>
      <div></div>
    </>
  ) : (
    <div>
      <ShoppingCartButton show={setOpen} productsList={productsList} />
      <Transition show={open}>
        <Dialog className="relative z-10" onClose={setOpen}>
          <TransitionChild
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full ">
                <TransitionChild
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <DialogPanel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between">
                          <DialogTitle className="text-lg font-medium text-gray-900">
                            Shopping cart
                          </DialogTitle>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="relative -m-2 p-2 text-gray-900 hover:text-gray-500"
                              onClick={() => setOpen(false)}
                            >
                              <span
                                className="absolute -inset-0.5"
                                aria-hidden="true"
                              />
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>

                        <div className="mt-8">
                          <div className="flow-root">
                            <ul
                              role="list"
                              className="-my-6 divide-y divide-gray-400"
                            >
                              {productsList.map((product) => (
                                <li key={product.id} className="flex py-6">
                                  <div className="h-24 w-24 flex-shrink-0 overflow-clip rounded-md border border-gray-200">
                                    {product.images?.[0] ? (
                                      <img
                                        src={`https://dd26-2800-810-58c-89cc-c4ea-837e-4784-352b.ngrok-free.app/api/shop/images/${product.images[0].id}`}
                                        className="h-full w-full object-cover object-center"
                                        alt={product.name}
                                      />
                                    ) : (
                                      <span>No Image</span>
                                    )}
                                  </div>

                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>{product.name}</h3>
                                        <ul>
                                          <li>
                                            <p className="ml-4 font-black">
                                              price ${product.price}
                                            </p>
                                          </li>
                                          <li>
                                            <p className="ml-4 mt-4 font-black">
                                              subtotal ${product.subtotal}
                                            </p>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="flex flex-1 items-center justify-between text-sm">
                                      <div className="flex items-center m- gap-1">
                                        <p className="text-gray-800 font-black">
                                          Quantity {product.quantity}
                                        </p>
                                        <ModifyQuantityButton id={product.id} />
                                      </div>

                                      <div className="flex">
                                        <button
                                          type="button"
                                          className="font-medium text-indigo-600 hover:text-indigo-500"
                                          onClick={() =>
                                            onClickRemoveProduct(product)
                                          }
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p className="font-bold">Total</p>
                          <p>${total}</p>
                        </div>
                        <p className="mt-0.5 text-sm text-black font-bold">
                          ❕❕ Shipping and taxes calculated at checkout.
                        </p>
                        <div className="mt-6">
                          <Link
                            to="/shopping-cart/checkout"
                            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                          >
                            Checkout
                          </Link>
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                          <p>
                            or{" "}
                            <button
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                              onClick={() => setOpen(false)}
                            >
                              Continue Shopping
                              <span aria-hidden="true"> &rarr;</span>
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
