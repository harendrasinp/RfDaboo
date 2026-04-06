import axios from "axios";
const API=axios.create({
    baseURL:'http://localhost:4800/Api/auth',
    withCredentials:true
})
export default API;