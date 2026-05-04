import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Wallet } from "@mercadopago/sdk-react";

import { useCreatePreference } from "../../providers/hooks/mercadopago/useCreatePreference";
import { Loading } from "../../components/loading/Loading";

import { ArrowLeft, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { ErrorMessage } from "../../components/alerts/ErrorMessage";
import { startGetOrder } from "../../store/order/orderThunk";

export const PostConfirmOrder = () => {
  const dispatch = useDispatch();

  const { products, buyer } = useSelector((state) => state.shoppingCart);

  const [preferenceId, setPreferenceId] = useState("");

  const { orderNumber, shoppingCartId, total, status } = useSelector(
    (state) => state.order,
  );

  const { getPreferenceId } = useCreatePreference({
    orderNumber,
    shoppingCartId,
    products,
    buyer,
    total,
    status,
  });

  useEffect(() => {
    const load = async () => {
      if (orderNumber) {
        await dispatch(startGetOrder(orderNumber));

        console.log(orderNumber);

        const { preferenceId } = getPreferenceId();

        setPreferenceId(preferenceId);

        console.log(preferenceId);
      }
    };

    load();
  }, [orderNumber]);

  if (preferenceId) {
    return (
      <div className="flex justify-center items-start p-4 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="flex flex-col lg:flex-row w-full max-w-5xl bg-white shadow-2xl p-8 rounded-2xl gap-8 border border-gray-100">
          {/* Columna izquierda: Lista de productos */}
          <div className="w-full lg:w-2/3">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
                Carrito de compras
              </h2>
              <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                {products.length}{" "}
                {products.length === 1 ? "producto" : "productos"}
              </span>
            </div>

            {products.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  <ShoppingCart size={28} className="text-gray-400" />
                </div>
                <p className="text-gray-500 font-medium">
                  No hay productos en el carrito.
                </p>
              </div>
            ) : (
              <ul className="divide-y divide-gray-200">
                {products.map(({ product, quantity }, key) => (
                  <li
                    key={key}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-5 gap-4 hover:bg-gray-50 transition-colors rounded-lg px-2"
                  >
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      {product.images?.[0] ? (
                        <img
                          src={product.images[0].downloadUrl}
                          alt={product.name}
                          className="w-20 h-20 rounded-xl object-cover shadow-md ring-1 ring-gray-200"
                        />
                      ) : (
                        <div className="w-20 h-20 flex items-center justify-center bg-gray-100 text-gray-400 rounded-xl text-xs font-medium">
                          Sin imagen
                        </div>
                      )}
                      <div className="flex flex-col min-w-0">
                        <span className="text-base font-semibold text-gray-800 truncate">
                          {product.name}
                        </span>
                        <span className="text-sm text-gray-500 mt-1">
                          Cantidad:{" "}
                          <span className="font-medium text-gray-700">
                            {quantity}
                          </span>
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col items-end sm:ml-4">
                      <span className="text-lg font-bold text-gray-800">
                        ${(product.price * quantity).toFixed(2)}
                      </span>
                      <span className="text-xs text-gray-400">
                        ${product.price.toFixed(2)} c/u
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Columna derecha: Resumen */}
          <div className="w-full lg:w-1/3">
            <div className="bg-gradient-to-b from-gray-50 to-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-4">
              <h3 className="text-lg font-bold text-gray-800 mb-5 pb-3 border-b border-gray-200">
                Información del comprador
              </h3>

              <dl className="space-y-4 mb-6">
                <div>
                  <dt className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                    Nombre
                  </dt>
                  <dd className="text-sm font-medium text-gray-800">
                    {buyer.firstname} {buyer.lastname}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                    Email
                  </dt>
                  <dd className="text-sm font-medium text-gray-800 break-all">
                    {buyer.email}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                    Dirección
                  </dt>
                  <dd className="text-sm font-medium text-gray-800">
                    {buyer.address}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                    Teléfono
                  </dt>
                  <dd className="text-sm font-medium text-gray-800">
                    +{buyer.phone.areaCode} {buyer.phone.number}
                  </dd>
                </div>
              </dl>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between items-baseline">
                  <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                    Total
                  </span>
                  <span className="text-2xl font-extrabold text-indigo-600">
                    {total.toLocaleString("es-AR", {
                      style: "currency",
                      currency: "ARS",
                    })}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <Wallet
                  initialization={{
                    preferenceId: preferenceId.data,
                    redirectMode: "blank",
                  }}
                  customization={{
                    texts: { valueProp: "smart_option" },
                  }}
                />
                <Link
                  to={"/shopping-cart/checkout"}
                  className="flex items-center justify-center gap-2 w-full text-center text-sm font-semibold py-3 rounded-lg border-2 border-indigo-600 text-indigo-600 bg-white hover:bg-indigo-50 transition-all duration-300"
                >
                  <ArrowLeft size={16} /> Volver al checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return status ? (
    <ErrorMessage message={""} code={""} status={""} timestamp={""} />
  ) : (
    <>
      <Loading />
    </>
  );
};
