import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

export const ConfirmOrderButton = () => {

    const [confirmOrder, setConfirmOrder] = useState(false);

    const handleConfirmOrder = (e) => {
        e.preventDefault()
        alert("¡Pedido confirmado con éxito!");
        setConfirmOrder(true)
      
        toast.success("Pedido confirmado con éxito")
    }

    return (
        <>

            {!confirmOrder ? (<button
                type="button"
                className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg shadow-lg hover:bg-indigo-500 hover:shadow-xl transition-all duration-300"
                onClick={handleConfirmOrder}
            >
                Confirmar Pedido
            </button>
            ) : (<> <Link
                type="button"
                className="w-full text-center bg-indigo-600 text-white font-bold py-3 rounded-lg shadow-lg hover:bg-indigo-500 hover:shadow-xl transition-all duration-300"
                to="/shopping-cart/post-confirm-order"
            >
                ir a pagar
            </Link></>)
            }
        </>
    )
}
