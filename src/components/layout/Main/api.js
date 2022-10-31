import axios from "axios";

const api = axios.create({
  baseURL: "https://ikitandaapi.azurewebsites.net/api/Produto/ObterMaisVendidos",
});

export default api;
