import { NavLink, useNavigate } from "react-router-dom";
import style from "./Header.module.css";
import useAppContext from "../../hooks/useAppContext";
import authService from "../../services/authService";
import { useEffect, useState } from "react";

const Header = () => {
  const { isAuth, me, setMe, setIsAuth } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMe = async () => {
      if (authService.getToken() && !me) {
        try {
          const { data } = await authService.me();
          if (data) {
            setMe(data);
            setIsAuth(true);
          }
        } catch (e) {
          console.log(e);
        }
      }
    };
    fetchMe();
  }, [setMe, setIsAuth]);

  const handleLogOut = () => {
    authService.deleteToken();
    setMe(null);
    setIsAuth(false);
    navigate("/login");
  };

  return (
    <div className={style.Header}>
      <h2>Books</h2>
      {isAuth ? (
        <div>
          {me.name}
          <button onClick={handleLogOut}>LogOut</button>
        </div>
      ) : (
        <div>
          <NavLink to={"login"}>Login</NavLink>
          <NavLink to={"register"}>Register</NavLink>
        </div>
      )}
    </div>
  );
};

export default Header;
