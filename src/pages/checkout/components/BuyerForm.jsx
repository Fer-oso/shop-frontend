import React, { useEffect, useState } from "react";
import { ConfirmOrderButton } from "./button/ConfirmOrderButton";
import { useForm } from "../../../components/hooks/useForm";
import { useDispatch } from "react-redux";
import { startSetBuyerInShoppingCart } from "../../../store/shoppingcart/shoppingCartThunk";

export const BuyerForm = ({ buyerInfo }) => {
  const dispatch = useDispatch();

  const [confirmOrder, setConfirmOrder] = useState(false);

  const { formState, onInputChange } = useForm(buyerInfo);

  const { fullName, email, address, phone } = formState;

  useEffect(() => {
    dispatch(startSetBuyerInShoppingCart(formState));
  }, [formState]);

  return (
    <>
      <form className="space-y-4">
        <div>
          <label
            className="block text-gray-600 font-medium mb-1"
            htmlFor="fullName"
          >
            Nombre Completo
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={fullName}
            onChange={onInputChange}
            required
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            placeholder="Tu nombre completo"
          />
        </div>
        <div>
          <label
            className="block text-gray-600 font-medium mb-1"
            htmlFor="email"
          >
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={onInputChange}
            required
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            placeholder="ejemplo@correo.com"
          />
        </div>
        <div>
          <label
            className="block text-gray-600 font-medium mb-1"
            htmlFor="address"
          >
            Dirección
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={address}
            onChange={onInputChange}
            required
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            placeholder="Tu dirección"
          />
        </div>
        <div>
          <label
            className="block text-gray-600 font-medium mb-1"
            htmlFor="phone"
          >
            Teléfono
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={onInputChange}
            required
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            placeholder="Tu número de teléfono"
          />
        </div>

        <ConfirmOrderButton
          confirmOrder={confirmOrder}
          setConfirmOrder={setConfirmOrder}
        />
      </form>
    </>
  );
};
