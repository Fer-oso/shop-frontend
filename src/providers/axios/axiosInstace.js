import axios from "axios";
import { startLogoutUser, startRefreshToken } from "../../store/auth/authThunk";

const API_URL =
  "https://1522-2800-810-748-86f9-48ee-d53e-f98a-d6be.ngrok-free.app/api/shop/";

const API_URL_LOCALHOST = "http://localhost:8080/api/shop/";

// 🔥 estado global de refresh
let refreshPromise = null;

export const axiosInstance = axios.create({
  baseURL: API_URL_LOCALHOST,
  headers: {
    "ngrok-skip-browser-warning": "true",
  },
  withCredentials: true,
});

export const axiosPublic = axios.create({
  baseURL: API_URL_LOCALHOST,
  headers: {
    "ngrok-skip-browser-warning": "true",
  },
  withCredentials: true,
});

const isTokenExpired = (token) => {
  if (!token) return true;

  const payload = JSON.parse(atob(token.split(".")[1])); // decodifica el JWT
  const expiration = payload.exp * 1000; // exp está en segundos, Date en ms
  const now = Date.now();
  const fiveMinutes = 5 * 60 * 1000;

  return expiration - now < fiveMinutes; // ← renueva si faltan menos de 5 minutos
};

export const setupInterceptors = (store) => {
  // 🔹 helper token
  const getToken = () => {
    return store.getState().authentication.userAuthenticated?.token;
    /* const auth = JSON.parse(localStorage.getItem("auth"));
  return auth?.userAuthenticated?.token; */
  };

  const setToken = (token) => {
    const auth = JSON.parse(localStorage.getItem("auth"));

    if (auth) {
      auth.userAuthenticated.token = token;
      localStorage.setItem("auth", JSON.stringify(auth));
    }
  };

  axiosInstance.interceptors.request.use(async (config) => {
    // ✅ Solo agregá el token a requests de tu propia API
    if (!config.url || config.url.startsWith("https://api.mercadopago.com")) {
      return config;
    }

    const token = getToken();

    const username = store.getState().authentication.userAuthenticated.username;

    console.log("TOKEN:", token);
    console.log("EXPIRED?:", token ? isTokenExpired(token) : "no hay token");
    console.log("HEADER que se envía:", config.headers.Authorization);

    console.log("REQUEST INTERCEPTOR - token:", token ? "existe" : "no hay");
    console.log(
      "REQUEST INTERCEPTOR - isExpired:",
      token ? isTokenExpired(token) : "sin token",
    );

    if (token && isTokenExpired(token)) {
      console.log("⚠️ Token marcado como expirado - intentando refresh");
      if (!refreshPromise) {
        refreshPromise = store
          .dispatch(startRefreshToken(username))
          .finally(() => {
            refreshPromise = null;
          });
      }

      try {
        const response = await refreshPromise;

        console.log("4. Refresh response:", response);

        const newToken = response?.token;

        console.log("5. Nuevo token:", newToken);

        if (!newToken) {
          throw new Error(
            "No se recibió un nuevo token en la respuesta de refresh",
          );
        }

        setToken(newToken);

        config.headers.Authorization = `Bearer ${newToken}`;
      } catch (error) {
        console.log("6. Refresh falló:", error);
        return Promise.reject(error);
      }
    } else if (token) {
      console.log("✅ Token válido - agregando header");
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });

  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      // 👇 Log temporal
      console.log("RESPONSE INTERCEPTOR - status:", error.response);
      console.log("RESPONSE INTERCEPTOR - status:", error.response?.status);
      console.log("RESPONSE INTERCEPTOR - data:", error.response?.data);

      if (!originalRequest) return Promise.reject(error);

      // Evitar loop infinito con refresh
      if (originalRequest.url?.includes("/auth/refresh")) {
        return Promise.reject(error);
      }
      const username =
        store.getState().authentication.userAuthenticated.username;

      const status = error.response?.status;

      if (status === 400 || status === 403 || status === 404) {
        console.log("👇 Rechazando directo:", error.response?.data);
        return Promise.reject(error);
      }

      if (status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          if (!refreshPromise) {
            refreshPromise = store
              .dispatch(startRefreshToken(username))
              .finally(() => {
                refreshPromise = null;
              });
          }

          const response = await refreshPromise;
          console.log("Refresh response completo:", response); // 👈
          const newToken = response?.token;
          console.log("Nuevo token:", newToken); // 👈
          if (!newToken) throw new Error("Token inválido");

          setToken(newToken);
          originalRequest.headers = {
            ...originalRequest.headers,
            Authorization: `Bearer ${newToken}`,
          };

          return axiosInstance(originalRequest); // Reintenta la request original
        } catch (refreshError) {
          //  store.dispatch(startLogoutUser());
          return Promise.reject(refreshError);
        }
      }

      return Promise.reject(error);
    },
  );
};

// Interceptor de response ← te faltaba esto
