import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import React, { useState } from 'react'
import { PUBLIC_KEY } from '../../mercadopago/credentials'
import axios from 'axios';
import { createPreferenceService } from '../../providers/mercadopago/mp';
import { createProductFormData } from '../products/utils/createProductFormData';
import { useSelector } from 'react-redux';

export const PostConfirmOrder = () => {

    const [preferenceId, setPreferenceId] = useState(null);

    const { productsList } = useSelector(state => state.shoppingCart)

    initMercadoPago(PUBLIC_KEY, {
        locale: 'es-AR'
    })

    const createPreference = async () => {

        try {

            const { name, quantity, price } = productsList[0];

            const product = {

                product: { name, price },
                quantity,
            }


            const formDataProduct = createProductFormData({ nameProduct: "productShoppingCart", product, nameFiles: "image" })

            const response = await createPreferenceService(product)


            const id = response.data

            return id;

        } catch (error) {
            console.log(error)
        }
    }

    const handleBuy = async () => {
        const id = await createPreference();

        if (id) {
            setPreferenceId(id)
        }
    }

    return (
        <>
            <div id="wallet_container">
                <button onClick={handleBuy}>create</button>
                <Wallet initialization={{ preferenceId: preferenceId, redirectMode:'blank' }} customization={{ texts: { valueProp: 'smart_option' } }}   />

            </div>
        </>
    )
}
