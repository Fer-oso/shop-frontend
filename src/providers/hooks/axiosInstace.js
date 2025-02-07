import axios from "axios";

const API_URL =
  "https://8079-2800-810-58c-89cc-c4ea-837e-4784-352b.ngrok-free.app/api/shop/";

export const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "ngrok-skip-browser-warning": "false",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const { userAuthenticated } = JSON.parse(localStorage.getItem("auth"));

    const token = userAuthenticated.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
