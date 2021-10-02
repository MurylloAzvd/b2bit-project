import axios from "axios";
import { logout } from "./auth";

const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
});

api.interceptors.request.use(config => {
    config.headers.moises = process.env.REACT_APP_MOISES;

    return config;
})

api.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 401) {
            logout();
        }
        return Promise.reject(error);
    }
)

export default api;