import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "/api/v1",
  withCredentials: true,
});

// Register User
export const registerUser = (user) =>
  API.post("/user/register", user); // ✅ matches backend route

// Login User
export const loginUser = (user) =>
  API.post("/user/login", user); // ✅ matches backend route

// Logout User (optional)
export const logoutUser = () =>
  API.get("/user/logout");
