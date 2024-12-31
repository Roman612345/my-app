import { urls } from "../constants/urls";
import authService from "./authService";
import { axiosService } from "./axiosService";

const bookService = {
  getAll: (page = "1") =>
    axiosService.get(urls.books.base, { params: { page } }),
};

export { bookService };
