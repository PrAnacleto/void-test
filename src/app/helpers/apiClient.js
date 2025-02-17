import axios from "axios";
import Cookies from "js-cookie";

const apiClient = axios.create({
  baseURL: "https://sonil-dev.void.co.mz/api/v4",
});

// Adiciona o token no cabeçalho de todas as requisições
apiClient.interceptors.request.use((config) => {
  const token = Cookies.get("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;