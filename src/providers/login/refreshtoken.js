import { axiosPublic } from "../axios/axiosInstace";

const PATH_REFRESH_TOKEN = "auth/refresh";

export const refreshToken = async (username) => {
  try {
    const response = await axiosPublic.post(PATH_REFRESH_TOKEN, username);

    const data = await response.data;

    return { data };
  } catch (error) {
    // Verificar si el error proviene de la respuesta del servidor
    if (error.response) {
      // La respuesta del servidor tiene un código de error (por ejemplo, 404)
      console.log("Server Error:", error.response.data);

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
      // Error al configurar la solicitu
      console.log("Error setting up request:", error.message);

      return { error: "Error setting up request" };
    }
  }
};
