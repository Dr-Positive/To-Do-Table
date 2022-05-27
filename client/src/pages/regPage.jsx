import styles from "./regPage.module.css";
import React, { useState } from "react";
import { useHttp } from "../hooks/http.hook";
import { Link } from "react-router-dom";

// export const mainPage = () => {
// const [form , setForm] = useState ({
//   email: "", password: ''
// })

function regPage() {
  

  return (
    <>
    <div className={styles["login-container"]}>
      <div className={styles["form"]}>
        <h1>Регистрация</h1>
      <div className={styles["form-container"]}>
        <div>
        <input className={styles["reglogForm-input"]} type="text" id="user-name" name="user-name" placeholder="Имя пользователя"/>
        <input className={styles["reglogForm-input"]} type="text" id="user-email" name="user-email" placeholder="Электронная почта"/>
        <input className={styles["reglogForm-input"]} type="password" id="password" name="password" placeholder="Пароль"/>
        <input className={styles["reglogForm-input"]} type="password" id="password-again" name="password-again" placeholder="Пароль ещё раз"/>
          <button className={styles["goRegButton"]}>Зарегистрироваться</button>
          <Link to={"/auth"}>
          <button className={styles["backToAuthButton"]}>Уже есть аккаунт?</button>
          </Link>
          <br/>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
export default regPage;
