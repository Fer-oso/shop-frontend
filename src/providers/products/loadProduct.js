import { axiosInstance } from "../axios/axiosInstace";

const PATH_PRODUCTS = "products";

export const loadProductService = async (productId) => {
  try {
    const response = await axiosInstance.get(`${PATH_PRODUCTS}/${productId}`);

    const data = await response.data;

    return { data };
  } catch (error) {
    // Verificar si el error proviene de la respuesta del servidor
    if (error.response) {
      // La respuesta del servidor tiene un código de error (por ejemplo, 404)
      console.log("Server Error:", {
        error: {
          status: error.response.status,
          message: error.response.data?.message,
        },
      });

      return {
        error: {
          status: error.response.status,
          message: error.response.data?.message,
        },
      }; // Devuelve el mensaje de error del servidor
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
