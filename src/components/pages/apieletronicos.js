import axios from "axios";

const api2 = axios.create({
  baseURL: "https://localhost:7181/api/Produto/Eletronicos",
});

export default api2;