import { useForm } from "react-hook-form";
import authService from "../../services/authService";
import { useNavigate } from "react-router-dom";
import useAppContext from "../../hooks/useAppContext";

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { setIsAuth, setMe } = useAppContext();

  const login = async (user) => {
    try {
      await authService.login(user);
      const { data } = await authService.me();
      setMe(data);
      navigate("/books");
      setIsAuth(true);
    } catch (e) {
      console.log(e, "error");
    }
  };
  return (
    <form onSubmit={handleSubmit(login)}>
      <div>
        Email: <input type="text" {...register("email")} />
      </div>
      <div>
        Password: <input type="text" {...register("password")} />
      </div>
      <button>Login</button>
    </form>
  );
};

export default LoginForm;
