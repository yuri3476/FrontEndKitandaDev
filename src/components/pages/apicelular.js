import axios from "axios";

const api1 = axios.create({
  baseURL: "https://localhost:7181/api/Produto/Celulares",
});

export default api1;
