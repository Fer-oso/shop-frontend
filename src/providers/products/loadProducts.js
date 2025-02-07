import { axiosInstance } from "../hooks/axiosInstace";

const PATH_PRODUCTS = "products";

export const loadProducts = async () => {
  try {
    const response = await axiosInstance.get(PATH_PRODUCTS);

    console.log(response);

    const data = await response.data;

    return { data };
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
      // Error al configurar la solicitu
      console.log("Error setting up request:", error.message);

      return { error: "Error setting up request" };
    }
  }
};
