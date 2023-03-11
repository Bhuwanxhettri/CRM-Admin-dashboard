import axios from "axios";
import { getBearerToken } from "../helper/utility";

const api = axios.create({
  baseURL: "https://crm-backend-production-test.up.railway.app/",
  headers: {
    "Content-Type": "application/json",
    Authorization: getBearerToken() || null,
  },
});

export default api;
