import axios from "axios";
import { config } from "../config/app.config";

export const request = axios.create({
  baseURL: `${config.api_protocol}://${config.api_host}:${config.api_port}`,
  withCredentials: true,
  withXSRFToken: true,
});

export const requestConfig = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const requestCSFR = () =>
  request.get("/sanctum/csrf-cookie", requestConfig);

export const authRequestConfig = (token: string | undefined) => {
  return { headers: { Authorization: `Bearer ${token}` } };
};
