import { axiosInstance } from "../axios/axiosInstace";

const API_URL = "auth/login";

export const loginWithEmailAndPassword = async ({ username, password }) => {
  try {
    const { data, status } = await axiosInstance.post(`${API_URL}`, {
      username,
      password,
    });

    return { data: data.response, status, timestamp: data.timestamp };
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
