import axios from "axios";

const api4 = axios.create({
  baseURL: "https://localhost:7181/api/Produto/Informatica",
});

export default api4;