import styles from "./mainPage.module.css";
import React, { useState, useEffect } from "react";
import { Button, TextField } from "@material-ui/core";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";
import 'materialize-css'

// export const mainPage = () => {
// const [form , setForm] = useState ({
//   email: "", password: ''
// })

function MainPage({ onSubmit }) {
  const message = useMessage()
  const { loading,  request, error, clearError } = useHttp()
  const [values, setValues] = useState({
    login: "",
    email: "",
    password: "",
    passwordRepeat: "",
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
      <div className={styles.header}>
        <div>
          <TextField
            id="outlined-basic"
            className={styles.field}
            variant="outlined"
            name="login"
            label="Логин"
            onChange={handleFieldChange}
          />
          <TextField
            id="outlined-basic"
            className={styles.field}
            variant="outlined"
            name="password"
            label="пароль"
            type="password"
            onChange={handleFieldChange}
          />
          <button className={styles.but} onClick={registerHandler} 
          disabled={loading}
          
          >Войти</button>
        </div>
        <div>
          {" "}
          <p className={styles.test}>Edit and save to reload.</p>{" "}
        </div>
      </div>
    </>
  );
}
export default MainPage;
