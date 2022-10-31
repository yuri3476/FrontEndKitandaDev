import axios from "axios";

const api1 = axios.create({
  baseURL: "https://ikitandaapi.azurewebsites.net/api/Produto/Celulares",
});

export default api1;
