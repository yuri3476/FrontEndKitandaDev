import axios from "axios";

const api5 = axios.create({
  baseURL: "https://ikitandaapi.azurewebsites.net/api/Produto/Livraria",
});

export default api5;
