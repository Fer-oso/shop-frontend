import { createOrderService } from "../../providers/order/createOrderService";

export const startCreateOrder = (order) => {
  return async (dispatch) => {
    try {
      const { data, status } = await createOrderService(order);
      if (status === 201) {
        dispatch(createOrder(data));
        toast.success("Pedido creado con éxito");
      }
    } catch (error) {
      console.error("Error al crear el pedido:", error);
      toast.error("Error al crear el pedido");
    }
  };
};
