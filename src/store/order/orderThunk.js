import { toast } from "sonner";
import { createOrderService } from "../../providers/order/createOrderService";
import { createOrder } from "./orderSlice";
import { findOrderById } from "../../providers/order/findOrderById";

export const startCreateOrder = (order) => {
  return async (dispatch) => {
    try {
      const { data, status } = await createOrderService(order);
      if (status === 201) {
        dispatch(createOrder(data));
        toast.success("Pedido creado con éxito");

        return { data, status };
      }
    } catch (error) {
      console.error("Error al crear el pedido:", error);
      toast.error("Error al crear el pedido");
    }
  };
};

export const startGetOrder = (orderId) => {
  return async (dispatch) => {
    try {
      const { data, status, error } = await findOrderById(orderId);
    } catch (error) {
      console.error("Error al crear el pedido:", error);
      toast.error("Error al crear el pedido");
    }
  };
};
