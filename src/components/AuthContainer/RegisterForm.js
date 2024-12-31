import { useForm } from "react-hook-form";
import authService from "../../services/authService";
import { useNavigate } from "react-router-dom";
const RegisterForm = () => {
  const { register, reset, handleSubmit } = useForm({ mode: "onBlur" });
  const navigate = useNavigate();

  const save = async (user) => {
    try {
      await authService.register(user);
      reset();
      navigate("/login");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <form onSubmit={handleSubmit(save)}>
      <div>
        Name: <input type="text" {...register("name")} />
      </div>
      <div>
        Email: <input type="text" {...register("email")} />
      </div>
      <div>
        Password: <input type="text" {...register("password")} />
      </div>
      <button>Register</button>
    </form>
  );
};

export default RegisterForm;
