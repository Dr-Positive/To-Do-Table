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


  return (
    <>
    <div className={styles["body-container"]}>
      <header>
            <div className={styles["options-container"]}>
              <label class="my-button-1" htmlFor={styles["side-checkbox"]}>Настройки</label>
              </div>
            <div className={styles["logo"]}><a href="/">TO-DO-LIST</a></div>
            <div className={styles["RegAuth-container"]}>
               <button className={styles["loginButton"]}>Войти</button>
               <button className={styles["regsButton"]}>Зарегистрироваться</button>
            </div>
         </header>

         <input type="checkbox" id={styles["side-checkbox"]} />
         <div className={styles["side-panel"]}>
            <label className={styles["side-button-2"]} htmlFor={styles["side-checkbox"]}>+</label>
            <div className={styles["side-title"]}>Выдвижная панель:</div>
            <p>Информация в панели</p>
         </div>


         <div className={styles["main-container"]}>
            <div className={styles["filterInput-container"]}>
               <span className={styles.searchIcon}><i class="fa fa-search"></i></span>
               <input className={styles.filterInput} type="text" placeholder="Search.." size="40" />
            </div>
            <br />
            <table className={styles.mainTable}>
               <tr >
                  <th>№</th>
                  <th>Задание</th>
                  <th>Ответственный</th>
                  <th>Тема</th>
                  <th>Статус</th>
                  <th>До какого числа</th>
                  <th>Дополнительно</th>
               </tr>
               <tr className={styles.row}>
                  <td>1</td>
                  <td>Definition of perfomance metrics</td>
                  <td>Jeremy Dickens</td>
                  <td>Theme 1</td>
                  <td>Completed</td>
                  <td>03/17/2020</td>
                  <td>Подробнее</td>
               </tr>

               <tr className={styles.row}>
                  <td>2</td>
                  <td>Definition of perfomance metrics</td>
                  <td>Jeremy Dickens</td>
                  <td>Theme 1</td>
                  <td>Completed</td>
                  <td>03/17/2020</td>
                  <td>Подробнее</td>
               </tr>
            </table>

            <div className={styles["bottomButtons-container"]}>
            <a href="#zatemnenie">Вызвать всплывающее окно</a>
               <button>Create new</button>

            </div>
            <div className={styles["bottomButtons-container"]}>
      <div id="okno">
        Всплывающее окошко!<br/>
        <a href="#" class="close">Закрыть окно</a>
      </div>
    </div>
         </div>
         </div>

         <footer></footer>
      </>
  );
}
export default MainPage;
