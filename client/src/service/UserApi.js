import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

export const registerUser = (user) =>
  API.post("/user/registeruser", user);


export const loginUser = (user) =>
  API.post("/user/loginuser", user);