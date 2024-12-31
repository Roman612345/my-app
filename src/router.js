import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import BooksPage from "./pages/BooksPage";
import ErrorPage from "./pages/ErrorPage";
import AllUserLayout from "./layouts/AllUserLayout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Navigate to={"login"} /> },
      {
        element: <AllUserLayout />,
        children: [
          { path: "login", element: <LoginPage /> },
          { path: "register", element: <RegisterPage /> },
        ],
      },
      {
        element: <AuthLayout />,
        children: [{ path: "books", element: <BooksPage /> }],
      },
    ],
  },
]);

export default router;
