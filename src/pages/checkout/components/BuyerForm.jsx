import React, { useEffect, useState } from "react";
import { ConfirmOrderButton } from "./button/ConfirmOrderButton";
import { useForm } from "../../../components/hooks/useForm";
import { useDispatch } from "react-redux";
import { startSetBuyerInShoppingCart } from "../../../store/shoppingcart/shoppingCartThunk";
import { Label } from "../../../components/forms/label/Label";
import { InputField } from "../../../components/forms/inputs/InputField";
import { toast } from "sonner";

export const BuyerForm = ({ buyerInfo }) => {
  const dispatch = useDispatch();

  const [confirmOrder, setConfirmOrder] = useState(false);

  const { formState, onInputChange } = useForm(buyerInfo);

  const { fullName, email, address, phone } = formState;

  useEffect(() => {
    dispatch(startSetBuyerInShoppingCart(formState));
  }, [formState]);

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("¡Pedido confirmado con éxito!");
    setConfirmOrder(true);

    toast.success("Pedido confirmado con éxito");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label
            labelText={"Nombre completo"}
            className="block mb-1 text-sm font-medium text-gray-700"
          />

          <InputField
            type={"text"}
            name={"fullName"}
            value={fullName}
            onChange={onInputChange}
            placeholder={"Ejemplo ejemplito"}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <Label
            className="block mb-1 text-sm font-medium text-gray-700"
            labelText={" Correo Electrónico"}
          />

          <InputField
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={onInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="ejemplo@correo.com"
          />
        </div>
        <div>
          <Label
            className="block mb-1 text-sm font-medium text-gray-700"
            labelText={"Direccion"}
          />
          <InputField
            type="text"
            id="address"
            name="address"
            value={address}
            onChange={onInputChange}
            required={true}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Tu dirección"
          />
        </div>
        <div>
          <Label
            className="block mb-1 text-sm font-medium text-gray-700"
            labelText={"Telefono"}
          />
          <InputField
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={onInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Tu número de teléfono"
          />
        </div>

        <ConfirmOrderButton confirmOrder={confirmOrder} />
      </form>
    </>
  );
};
