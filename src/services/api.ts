import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL: apiUrl,
});

api.defaults.adapter = require("axios/lib/adapters/http");
export default api;
