import { useEffect, useState } from "react";
import { createPreferenceService } from "../../mercadopago/mercadoPagoService";
import { PUBLIC_KEY } from "../../../mercadopago/credentials";
import { initMercadoPago } from "@mercadopago/sdk-react";

export const useCreatePreference = (productsList) => {
  const [preferenceId, setPreferenceId] = useState(null);

  initMercadoPago(PUBLIC_KEY, {
    locale: "es-AR",
  });

  const products = productsList.map((prod) => {
    return {
      title: prod.name,
      unitPrice: prod.price,
      description: prod.description,
      pictureUrl: prod.images[0]?.downloadUrl,
      quantity: prod.quantity,
    };
  });

  const getPreferenceId = async () => {
    try {
      const response = await createPreferenceService(products);

      //con java
      // const id = response.data;

      //con express
      const id = response;
      console.log(id);

      if (id) {
        setPreferenceId(id);
      }
    } catch (error) {
      setPreferenceId(error);
    }
  };

  useEffect(() => {
    getPreferenceId();
  }, []);

  return { preferenceId };
};
