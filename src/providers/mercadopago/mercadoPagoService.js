import { axiosInstance } from "../axios/axiosInstace";

const PATH = "mercadopago/create-preference";
//const PATH = "create-preference";

export const createPreferenceService = async (formDataProduct) => {
  try {
    //en java
    // const response = await axiosInstance.post(`${PATH}`, formDataProduct);
    //const data = response;
    //return { data };

    //en express
    const response = await axiosInstance.post(`${PATH}`, formDataProduct);

    return response.data;
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
