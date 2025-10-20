import axios from "axios";

// Create Axios instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:4000/api",
  timeout: 10000,
  withCredentials: true
});

// Attach Authorization token if present
api.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Global error handler
api.interceptors.response.use(
  response => response,
  error => {
    // Handle 401/403 globally (optionally force logout)
    if (error.response && [401, 403].includes(error.response.status)) {
      // For example, remove token, redirect, or show login modal
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    // Log/report other errors as needed
    return Promise.reject(error);
  }
);

export default api;
