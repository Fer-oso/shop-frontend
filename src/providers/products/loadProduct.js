import axios from "axios";

const API_URL = "http://localhost:8080/api/shop/products/";

export const loadProduct = async ({ params }) => {
  
  try {

    const { userAuthenticated } = JSON.parse(localStorage.getItem("auth"));

    const token = userAuthenticated.token;

    const response = await axios.get(`${API_URL}${params.id}`,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

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
      // Error al configurar la solicitud
      console.log("Error setting up request:", error.message);

      return { error: "Error setting up request" };
    }
  }
};
