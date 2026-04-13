import { useEffect, useState } from "react";
import { createPreferenceService } from "../../mercadopago/mercadoPagoService";
import { PUBLIC_KEY } from "../../../mercadopago/credentials";
import { initMercadoPago } from "@mercadopago/sdk-react";

export const useCreatePreference = ({
  shoppingCartId,
  products,
  buyer,
  total,
}) => {
  const [preferenceId, setPreferenceId] = useState(null);

  initMercadoPago(PUBLIC_KEY, {
    locale: "es-AR",
  });

  const productsList = products.map(({ product, quantity }) => {
    console.log(product);
    return {
      title: product.name,
      unitPrice: product.price,
      description: product.description,
      categoryId: product.category.name,
      pictureUrl: product.images[0]?.downloadUrl,
      quantity: quantity,
    };
  });

  const getPreferenceId = async () => {
    try {
      const response = await createPreferenceService({
        orderNumber: shoppingCartId,
        shoppingCartId,
        products: productsList,
        buyer,
        total,
        status: "pending",
      });

      //con express
      const id = response;
      console.log(response);

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
