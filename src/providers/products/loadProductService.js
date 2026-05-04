import { axiosInstance } from "../axios/axiosInstace";

const PATH_PRODUCTS = "products";

export const loadProductService = async (productId) => {
  try {
    const { data, status } = await axiosInstance.get(
      `${PATH_PRODUCTS}/${productId}`,
    );

    const product = data ? data.response : null;
    const timestamp = data ? data.timestamp : null;

    return { product, timestamp, status };
  } catch (error) {
    if (error.response) {
      // Verificar si el error proviene de la respuesta del servidor
      console.log("Server Error:", {
        data: error.response,
        error: {
          ...error.response.data,
        },
      });

      return { error: { ...error.response.data } };
    } else if (error.request) {
      // No hubo respuesta del servidor
      console.log("No response received from server:", error.request);

      return {
        error: {
          code: 503,
          status: "ERR_CONNECTION_REFUSED",
          timestamp: Date(),
          message: "No response form server, Service Unavailable",
        },
      };
    } else {
      // Error al configurar la solicitud
      console.log("Error setting up request:", error);

      return { error };
    }
  }
};
