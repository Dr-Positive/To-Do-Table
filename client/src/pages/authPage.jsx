import styles from "./authPage.module.css";
import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { useHttp } from "../hooks/http.hook";

// export const mainPage = () => {
// const [form , setForm] = useState ({
//   email: "", password: ''
// })

function AuthPage() {
  

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
            
          />
          <TextField
            id="outlined-basic"
            className={styles.field}
            variant="outlined"
            name="password"
            label="пароль"
            type="password"            
          />
          <Button           
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
export default AuthPage;
