import axios from "axios";

const api3 = axios.create({
  baseURL: "https://ikitandaapi.azurewebsites.net/api/Produto/Games",
});

export default api3;
