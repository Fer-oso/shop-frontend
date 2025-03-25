import express from "express";

import cors from "cors";
import { MercadoPagoConfig, Preference } from "mercadopago";

export const ACCESS_TOKEN =
  "APP_USR-6466186508757279-020201-134d4870190481c29f95c880c78eb6c2-2243613633";

const client = new MercadoPagoConfig({
  accessToken: ACCESS_TOKEN,
});

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("syo el server :)");
});

app.post("/create-preference", async (req, res) => {
  try {
    const preference = new Preference(client);

    console.log(req.body);

    const products = req.body;

    const items = products.map((product) => ({
      title: product.title,
      quantity: Number(product.quantity),
      unit_price: Number(product.unitPrice),
      currency_id: "ARS",
    }));

    const body = {
      items,
      back_urls: {
        success: `https://viii-express-tennessee-action.trycloudflare.com/shopping-cart/payment-status?status=success`,
        failure: `https://viii-express-tennessee-action.trycloudflare.com/shopping-cart/payment-status?status=failure`,
        pending: `https://viii-express-tennessee-action.trycloudflare.com/shopping-cart/payment-status?status=pending`,
      },
      auto_return: "approved",
      notification_url:
        "https://vatican-time-drums-monitors.trycloudflare.com/payments",
    };

    const result = await preference.create({ body });

    console.log(result.id);

    res.json({
      id: result.id,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error,
    });
  }
});

app.post("/payments", async (req, res) => {
  try {
    const paymentId = req.query.id;

    const response = await fetch(
      `https://api.mercadopago.com/v1/payments/${paymentId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${client.accessToken}`,
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return res.status(200).json({ data });
    } else {
      return res
        .status(response.status)
        .json({ error: "Failed to fetch payment info" });
    }
  } catch (error) {
    console.error("Error", error);
    res.sendStatus(500);
  }
});

app.listen(port, () => {
  console.log(`el servidor esta corriendo en el puerto ${port}`);
});
