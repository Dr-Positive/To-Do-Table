import styles from "./mainPage.module.css";
import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";

// export const mainPage = () => {
// const [form , setForm] = useState ({
//   email: "", password: ''
// })

function MainPage({ onSubmit }) {
  const message = useMessage()
  const { loading,  request } = useHttp()
  const [values, setValues] = useState({
    login: "",
    email: "",
    password: "",
    passwordRepeat: "",
  })

  // useEffect(() => {
  //   message(error)
  //   clearErrors()
  // }, [error, message, clearErrors]);



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
          <Button onClick={registerHandler} 
          disabled={loading}
          
          >Войти</Button>
        </div>
        <div>
          {" "}
          <p>Edit and save to reload.</p>{" "}
        </div>
      </div>
    </>
  );
}
export default MainPage;
