import axios from "axios";

const API_URL = "http://localhost:8080/api/shop/";

export const axiosInstance = axios.create({
    baseURL: API_URL
});

axiosInstance.interceptors.request.use((config) => {

    const { userAuthenticated } = JSON.parse(localStorage.getItem("auth"));

    const token = userAuthenticated.token;

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
},
    (error) => {
        return Promise.reject(error);
    });