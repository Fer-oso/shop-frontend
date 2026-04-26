import React, { useEffect, useState } from "react";
import { ConfirmOrderButton } from "./button/ConfirmOrderButton";
import { useForm } from "../../../components/hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import {
  startCreateShoppingCart,
  startSetBuyerInShoppingCart,
} from "../../../store/shoppingcart/shoppingCartThunk";
import calculateTotalShoppingCart from "../../utils/calculateTotalShoppingCart";
import { FormField } from "../../../components/forms/formfield/FormField";
import { startCreateOrder } from "../../../store/order/orderThunk";

export const BuyerForm = () => {
  const dispatch = useDispatch();

  const shoppingCart = useSelector((state) => state.shoppingCart);

  const { shoppingCartId, buyer, products, total } = shoppingCart;

  const [confirmOrder, setConfirmOrder] = useState(false);

  const { formState, onInputChange } = useForm(buyer);

  const { firstname, lastname, email, address, areaCode, number } = formState;

  useEffect(() => {
    var payer = {
      firstname,
      lastname,
      email,
      address,
      phone: { areaCode, number },
    };

    dispatch(startSetBuyerInShoppingCart(payer));
  }, [formState]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = await dispatch(startCreateShoppingCart(shoppingCart));
    console.log(payload);
    dispatch(
      startCreateOrder({
        orderNumber: "",
        shoppingCartId,
        total,
        status: "pending",
      }),
    );
    setConfirmOrder(true);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 sticky top-8">
      <h2 className=" text-lg font-bold text-gray-800 mb-8 tracking-tight">
        Información del Usuario
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <FormField
          label={"Nombre"}
          name={"firstname"}
          type={"text"}
          value={firstname || ""}
          required={true}
          onChange={onInputChange}
          placeholder={"Ejemplo ejemplito"}
          error={false}
        />

        <FormField
          label={"Apellido"}
          name={"lastname"}
          type={"text"}
          value={lastname || ""}
          required={true}
          onChange={onInputChange}
          placeholder={"Ejemplo ejemplito"}
          error={false}
        />

        <FormField
          label={" Correo Electrónico"}
          name={"email"}
          type={"email"}
          value={email || ""}
          required={true}
          onChange={onInputChange}
          placeholder="ejemplo@correo.com"
          error={false}
        />

        <FormField
          label={"Direccion"}
          name={"address"}
          type={"address"}
          value={address || ""}
          required={true}
          onChange={onInputChange}
          placeholder="Tu dirección"
          error={false}
        />

        <FormField
          label={"Codigo de area"}
          name={"areaCode"}
          type={"tel"}
          value={areaCode || ""}
          required={true}
          onChange={onInputChange}
          placeholder="Tu código de área"
          error={false}
        />

        <FormField
          label={"Telefono"}
          name={"number"}
          type={"tel"}
          value={number || ""}
          required={true}
          onChange={onInputChange}
          placeholder="Tu número de teléfono"
          error={false}
        />

        <ConfirmOrderButton confirmOrder={confirmOrder} />
      </form>

      <div className="mt-6 border-t border-gray-200 pt-4">
        <h2 className="text-md font-semibold text-gray-700">
          Resumen del pedido
        </h2>
        <div className="flex justify-between py-2">
          <span className="block mb-1 text-sm font-bold text-gray-700">
            Total:
          </span>
          <span className="block mb-1 text-sm font-bold text-gray-700">
            {calculateTotalShoppingCart(products)}
          </span>
        </div>
      </div>
    </div>
  );
};
