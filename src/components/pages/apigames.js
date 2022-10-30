import axios from "axios";

const api3 = axios.create({
  baseURL: "https://localhost:7181/api/Produto/Games",
});

export default api3;