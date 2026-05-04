import { axiosInstance } from "../axios/axiosInstace";

const PATH_ORDERS = "orders";

export const createOrderService = async (order) => {
  try {
    const { data, status } = await axiosInstance.post(`${PATH_ORDERS}`, order);

    return { data: data.response, status };
  } catch (error) {
    // Verificar si el error proviene de la respuesta del servidor
    if (error.response) {
      // La respuesta del servidor tiene un código de error (por ejemplo, 404)
      console.log("Server Error:", error.response.data);

      return { error: error.response.data }; // Devuelve el mensaje de error del servidor
    } else if (error.request) {
      // No hubo respuesta del servidor
      console.log("No response received from server:", error.request);

      return { error: { message: "No response from server" } };
    } else {
      // Error al configurar la solicitud
      console.log("Error setting up request:", error.message);

      return { error: "Error setting up request" };
    }
  }
};
