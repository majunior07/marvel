import axios from "axios";
import md5 from "md5";

const privateKey = process.env.REACT_APP_PRIVATE_KEY;

const publicKey = process.env.REACT_APP_PUBLIC_KEY;

const time = Number(new Date());

const hash = md5(time + privateKey + publicKey) 


const api = axios.create({

    baseURL: `http://gateway.marvel.com/v1/public/`,
    params: {
        ts: time,
        apikey: publicKey,
        hash,
        limit: 10,
    },

});



export default api;