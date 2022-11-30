import axios from "axios";

export default axios.create({
    baseURL: 'https://ikitandaapi.azurewebsites.net'
});