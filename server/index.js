import express from "express";

import cors from 'cors';
import {MercadoPagoConfig,  Preference } from "mercadopago";

export const ACCESS_TOKEN ='APP_USR-6466186508757279-020201-134d4870190481c29f95c880c78eb6c2-2243613633';

const client = new MercadoPagoConfig({
    accessToken: ACCESS_TOKEN,
})

const app = express();
const port = 3000;

app.use(cors());

app.use( express.json());

app.get("/",(req,res) =>{
    res.send("syo el server :)");
});

app.post("/create-preference", async( req,res) =>{
    try {
    
        const body = {
            items: [
                {
                    title: req.body.name,
                    quantity: Number(req.body.quantity),
                    unit_price: Number(req.body.price),
                    currency_id: "ARS",
                },
            ],
            back_urls:{
                success: "https://www.youtube.com",
                failure: "https://www.youtube.com",
                pending: "https://www.youtube.com",
            },
            auto_return: "approved",
        };

        const preference = new Preference(client);

        const result = await preference.create({body});

        res.json({
            id: result.id
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            error
        })
    }
})


app.listen(port,()=>{
    console.log(`el servidor esta corriendo en el puerto ${port}`)
})