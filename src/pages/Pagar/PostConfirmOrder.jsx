import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import React, { useState } from "react";
import { PUBLIC_KEY } from "../../mercadopago/credentials";
import { createPreferenceService } from "../../providers/mercadopago/mercadoPagoService";
import { createProductFormData } from "../products/utils/createProductFormData";
import { useSelector } from "react-redux";
import axios from "axios";

export const PostConfirmOrder = () => {
  const [preferenceId, setPreferenceId] = useState(null);

  const { productsList } = useSelector((state) => state.shoppingCart);

  initMercadoPago(PUBLIC_KEY, {
    locale: "es-AR",
  });

  const createPreference = async () => {
    try {
      const products = productsList.map((prod) => {
        return {
          title: prod.name,
          unitPrice: prod.price,
          description: prod.description,
          pictureUrl: `https://dd26-2800-810-58c-89cc-c4ea-837e-4784-352b.ngrok-free.app/api/shop/images/${prod.images[0].id}`,
          quantity: prod.quantity,
        };
      });

      const response = await axios.post(
        "https://tapes-casinos-aim-scored.trycloudflare.com/create-preference",
        { products }
      );

      console.log(response.data);

      const { id } = response.data;

      return id;
    } catch (error) {
      console.log(error);
    }
  };

  /*
  const createPreference = async () => {
    try {
      const products = productsList.map((prod) => {
        return {
          title: prod.name,
          unitPrice: prod.price,
          description: prod.description,
          pictureUrl: `http://localhost:8080/api/shop/images/${prod.images[0].id}`,
          quantity: prod.quantity,
        };
      });

      const response = await createPreferenceService(products)
      );

      console.log(response.data);

      const  id  = response.data;

      return id;
    } catch (error) {
      console.log(error);
    }
  };
  
  */

  const handleBuy = async () => {
    const id = await createPreference();

    if (id) {
      setPreferenceId(id);
    }
  };

  return (
    <>
      <div id="wallet_container">
        <button onClick={handleBuy}>create</button>
        <Wallet
          initialization={{ preferenceId: preferenceId, redirectMode: "blank" }}
          customization={{ texts: { valueProp: "smart_option" } }}
        />
      </div>
    </>
  );
};
