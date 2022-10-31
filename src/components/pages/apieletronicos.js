import axios from "axios";

const api2 = axios.create({
  baseURL: "https://ikitandaapi.azurewebsites.net/api/Produto/Eletronicos",
});

export default api2;