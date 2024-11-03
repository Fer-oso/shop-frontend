import axios from "axios";

const API_URL = "http://localhost:8080/api/shop/users/";

export const loadUser = async ({ params }) => {
  try {
    const response = await axios.get(`${API_URL}${params.id}`);

    const user = await response.data

    return { user};
    
  } catch (error) {
    // Verificar si el error proviene de la respuesta del servidor
    if (error.response) {
      // La respuesta del servidor tiene un código de error (por ejemplo, 404)
      console.log("Server Error:", error.response.data);

      return { error: error.response.data }; // Devuelve el mensaje de error del servidor

    } else if (error.request) {
      // No hubo respuesta del servidor
      console.log("No response received from server:", error.request);

      return { error: "No response from server" };

    } else {
      // Error al configurar la solicitud
      console.log("Error setting up request:", error.message);

      return { error: "Error setting up request" };
    }
  }
};