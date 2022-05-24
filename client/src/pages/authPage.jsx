import styles from "./authPage.module.css";
import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { useHttp } from "../hooks/http.hook";
import 'materialize-css'

// export const mainPage = () => {
// const [form , setForm] = useState ({
//   email: "", password: ''
// })

function AuthPage() {
  

  return (
    <>
      <div className={styles.header}>
        <div>
          {" "}
          <button onclick="M.toast({html:'ari'})" ></button>
          <a class="btn" onclick="M.toast({html: 'I am a toast', completeCallback: function(){alert('Your toast was dismissed')}})">Toast!</a>          
          <p>Edit and save to reload.</p>{" "}
        </div>
      </div>
    </>
  );
}
export default AuthPage;
