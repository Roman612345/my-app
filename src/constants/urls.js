const baseURL = "https://api.testingfantik.fun";

const books = "/books";
const login = "/login";
const register = "/register";
const user = "/user";

const urls = {
  auth: {
    login: login,
    register: register,
    user: user,
  },
  books: {
    base: books,
    byId: (id) => `${books}/${id}`,
  },
};

export { urls, baseURL };
