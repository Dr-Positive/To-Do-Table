import styles from "./mainPage.module.css";
import React, { useState, useEffect } from "react";
import { Button, TextField, Checkbox } from "@material-ui/core";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";
import 'materialize-css'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

// export const mainPage = () => {
// const [form , setForm] = useState ({
//   email: "", password: ''
// })


//Popup окно
const contentStyle = {
   height: "80%",
   width: "40%"
};


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
                     <th><Checkbox /></th>
                     <th>№</th>
                     <th>Задание</th>
                     <th>Ответственный</th>
                     <th>Тема</th>
                     <th>Статус</th>
                     <th>До какого числа</th>
                     <th>Дополнительно</th>
                  </tr>
                  <tr className={styles.row}>
                     <td><Checkbox /></td>
                     <td>1</td>
                     <td>Definition of perfomance metrics</td>
                     <td>Jeremy Dickens</td>
                     <td>Theme 1</td>
                     <td>Completed</td>
                     <td>03/17/2020</td>
                     <td>Подробнее</td>
                  </tr>

                  <tr className={styles.row}>
                     <td><Checkbox /></td>
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
                  <Popup modal contentStyle={contentStyle} trigger={<button className={styles["button-30"]}>Добавить задание</button>}>
                     <div> Добавить задание
                        <div className={styles["popup-form"]}>
                           <input className={styles["popupForm-input"]} type="Task" id="Task" name="Task" placeholder="Задание" onChange={""} />
                           <input className={styles["popupForm-input"]} type="Responsible" id="Responsible" name="Responsible" placeholder="Ответственный" onChange={""} />
                           <input className={styles["popupForm-input"]} type="Theme" id="Theme" name="Theme" placeholder="Тема" onChange={""} />
                           <input className={styles["popupForm-input"]} type="Status" id="Status" name="Status" placeholder="Статус" onChange={""} />
                           <input className={styles["popupForm-input"]} type="Deadline" id="Deadline" name="Deadline" placeholder="До какого числа" onChange={""} />
                           <input className={styles["popupForm-input"]} type="Info" id="Info" name="Info" placeholder="Дополнительно" onChange={""} />
                        </div>
                        <div className={styles["center-wrapper"]}><button className={styles["button-31"]}>Добавить задание</button></div>

                     </div>
                  </Popup>

                  <Popup modal contentStyle={contentStyle} trigger={<button className={styles["button-30"]}>Изменить</button>}>
                     <div> Изменить
                        <div className={styles["popup-form"]}>
                           <input className={styles["popupForm-input"]} type="Task" id="Task" name="Task" placeholder="Задание" onChange={""} />
                           <input className={styles["popupForm-input"]} type="Responsible" id="Responsible" name="Responsible" placeholder="Ответственный" onChange={""} />
                           <input className={styles["popupForm-input"]} type="Theme" id="Theme" name="Theme" placeholder="Тема" onChange={""} />
                           <input className={styles["popupForm-input"]} type="Status" id="Status" name="Status" placeholder="Статус" onChange={""} />
                           <input className={styles["popupForm-input"]} type="Deadline" id="Deadline" name="Deadline" placeholder="До какого числа" onChange={""} />
                           <input className={styles["popupForm-input"]} type="Info" id="Info" name="Info" placeholder="Дополнительно" onChange={""} />
                        </div>
                        <div className={styles["center-wrapper"]}><button className={styles["button-31"]}>Добавить задание</button></div>
                     </div>
                  </Popup>
               </div>
            </div>
         </div>

         <footer></footer>
      </>
   );
}
export default MainPage;
