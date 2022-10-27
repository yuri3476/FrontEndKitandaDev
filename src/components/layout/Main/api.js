import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:7181/api/Product/Pagina/1'
});

export default api;