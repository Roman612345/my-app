import { urls } from "../constants/urls";
import { axiosService } from "./axiosService";

const authService = {
  register(data) {
    return axiosService.post(urls.auth.register, data);
  },
  async login(data) {
    const {
      data: { token },
    } = await axiosService.post(urls.auth.login, data);

    this.setToken(token);
  },
  me() {
    return axiosService.get(urls.auth.user);
  },

  setToken(token) {
    localStorage.setItem("token", token);
  },
  getToken() {
    return localStorage.getItem("token");
  },
  deleteToken() {
    localStorage.removeItem("token");
  },
};

export default authService;
