import axios from "axios";

const api4 = axios.create({
  baseURL: "https://ikitandaapi.azurewebsites.net/api/Produto/Informatica",
});

export default api4;
