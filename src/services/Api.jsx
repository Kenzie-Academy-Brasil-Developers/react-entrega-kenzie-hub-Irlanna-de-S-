import axios from "axios";

export const api = axios.create({
  baseURL: "https://kenziehub.herokuapp.com",
  timeout: 15000,
});

export default api;
