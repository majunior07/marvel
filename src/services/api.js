import axios from "axios";
import md5 from "md5";
const api = axios.create({

    baseURL: `http://gateway.marvel.com/v1/public/`,

});

export default api;