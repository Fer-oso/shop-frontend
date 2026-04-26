import axios from "axios";
import { startRefreshToken } from "../../store/auth/authThunk";

const API_URL =
  "https://8c1b-2800-810-748-86f9-48ee-d53e-f98a-d6be.ngrok-free.app/api/shop/";

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
  axiosInstance.interceptors.request.use(async (config) => {
    const token = getToken();

    if (token && isTokenExpired(token)) {
      if (!refreshPromise) {
        refreshPromise = store.dispatch(startRefreshToken()).finally(() => {
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
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });

  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      const { status } = store.getState().authentication;

      console.log(status);

      // 🚫 Evitar loop infinito con refresh
      if (originalRequest.url.includes("/auth/refresh")) {
        return Promise.reject(error);
      }

      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          if (!refreshPromise) {
            refreshPromise = store.dispatch(startRefreshToken()).finally(() => {
              refreshPromise = null;
            });
          }

          const response = await refreshPromise;
          const newToken = response?.token;

          if (!newToken) throw new Error("Token inválido");

          setToken(newToken);
          originalRequest.headers.Authorization = `Bearer ${newToken}`;

          return axiosInstance(originalRequest); // Reintenta la request original
        } catch (refreshError) {
          store.dispatch(logout());
          return Promise.reject(refreshError);
        }
      }

      return Promise.reject(error);
    },
  );
};

// Interceptor de response ← te faltaba esto

// 🔹 helper token
const getToken = () => {
  const auth = JSON.parse(localStorage.getItem("auth"));
  return auth?.userAuthenticated?.token;
};

const setToken = (token) => {
  const auth = JSON.parse(localStorage.getItem("auth"));

  auth.userAuthenticated.token = token;

  localStorage.setItem("auth", JSON.stringify(auth));
};
