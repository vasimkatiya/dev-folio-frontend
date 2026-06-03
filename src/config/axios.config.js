import axios from "axios";


const api = axios.create({
    baseURL:"https://dev-folio-back.onrender.com/api",
    withCredentials:true
});

export default api