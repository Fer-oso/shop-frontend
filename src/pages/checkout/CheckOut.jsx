import React from "react";
import { useSelector } from "react-redux";
import { Toaster } from "sonner";
import { BuyerForm } from "./components/BuyerForm";
import { Resume } from "./components/Resume";

const Checkout = () => {
  const { products } = useSelector((state) => state.shoppingCart);

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Lista de productos */}
        <Resume products={products} />
        {/* Formulario del usuario y resumen del pedido */}
        <BuyerForm />
      </div>
      <Toaster richColors />
    </div>
  );
};

export default Checkout;
