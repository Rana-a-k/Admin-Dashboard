import axios from "axios";
import { store } from "..//Store/Store";



const axiosInstance = axios.create({
    baseURL: "https://zombie-hat.herokuapp.com", 
    withCredentials: true,
});


export { axiosInstance };


