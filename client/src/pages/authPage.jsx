import styles from "./authPage.module.css";
import React, { useState, useEffect } from "react";
import { Button, TextField } from "@material-ui/core";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";
import 'materialize-css'

// export const mainPage = () => {
// const [form , setForm] = useState ({
//   email: "", password: ''
// })

function AuthPage({ onSubmit }) {
  const message = useMessage()
  const { loading,  request, error, clearError } = useHttp()
  const [values, setValues] = useState({
    email: "",
    password: "",
  })

  useEffect( () => {
    message(error)
    clearError()
  }, [error, message, clearError]);



  const handleFieldChange = (evt) => {
    setValues({ ...values, [evt.target.name]: evt.target.value });
  };

  const registerHandler = async () => {
    try {
      const data = await request("http://localhost:5000/api/auth/register", "Post", { ...values });
      console.log("Data", data);
    } catch (e) {}
  };

  return (
    <>
    <div className={styles["login-container"]}>
      <div className={styles["form"]}>
        <h1>Авторизация</h1>
      <div className={styles["form-container"]}>
        <div>
        <input className={styles["reglogForm-input"]} type="email" id="email" name="email" placeholder="Имя пользователя" onChange={handleFieldChange}/>
        <input className={styles["reglogForm-input"]} type="password" id="password" name="password" placeholder="Пароль" onChange={handleFieldChange}/>
          <button className={styles["logButton"]} onClick={registerHandler} >Войти</button>
          <button className={styles["regButton"]}>Регистрация</button>
          <br/>
          <a className={styles["forgotA"]}>Forgot your password?</a>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
export default AuthPage;