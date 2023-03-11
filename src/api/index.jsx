import api from "./axios";

export const authLoginApi = (data) => {
  return api.post(`users/auth/login`, data);
};
