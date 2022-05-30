import styles from "./authPage.module.css";
import React, { useState, useEffect } from "react";
import { Button, TextField } from "@material-ui/core";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";
import "materialize-css";
import { useAuth } from "../hooks/auth.hook";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

// export const mainPage = () => {
// const [form , setForm] = useState ({
//   email: "", password: ''
// })


function AuthPage({}) {
  const auth = useContext(AuthContext);
  const message = useMessage();
  const { loading, request, error, clearError } = useHttp();
  const [values, setValues] = useState({
    login: "",
    password: "",
  });

  const handleFieldChange = (evt) => {
    setValues({ ...values, [evt.target.name]: evt.target.value });
  };

  const registerHandler = async () => {
    try {
      const data = await request(
        "http://localhost:5000/api/auth/login",
        "Get",
        {
          ...values,
        }
      );
      console.log("Data", data);
    } catch (e) {}
  };

  const loginHandler = async () => {
    try {
      const data = await request(
        "http://localhost:5000/api/auth/login",
        "Post",
        { ...values }
      );
      console.log("Data", data);
      auth.login(data.token, data.userId);
    } catch (e) {}
  };

  return (
    <>
      <div className={styles["login-container"]}>
        <div className={styles["form"]}>
          <h1>Авторизация</h1>
          <div className={styles["form-container"]}>
            <div>
              <input
                className={styles["reglogForm-input"]}
                type="email"
                id="email"
                name="email"
                placeholder="Имя пользователя"
                onChange={handleFieldChange}
              />
              <input
                className={styles["reglogForm-input"]}
                type="password"
                id="password"
                name="password"
                placeholder="Пароль"
                onChange={handleFieldChange}
              />

              <button className={styles["logButton"]} onClick={loginHandler} disabled={loading}>
                Войти
              </button>
              <br />
              <Link to={"/register"}>
                <button className={styles["regButton"]} onClick={registerHandler} disabled={loading}>
                  Регистрация
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AuthPage;
