import axios from "axios";

const API = axios.create({
  baseURL: "https://capstone-backend-m7pu.onrender.com/api",
  withCredentials: true,
});


export default API;