import axios from "axios";

const api = axios.create({
    baseURL: "https://abastecendo.com.br"
});

api.interceptors.request.use(async config => {
    const token = "goEmqjjC.aO79X8z9Ajur0mG6lgezmRpRaDwVOl9H";

    config.headers.moises = token;

    return config;
})

export default api;