import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7181/api/Produto/Pagina/1",
});

export default api;
