import axios from "axios";

const API_URL =
  "https://945f-2800-810-748-86f9-d4b8-1d9d-d532-12b7.ngrok-free.app/api/shop/";

export const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "ngrok-skip-browser-warning": "true",
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
  },
);
