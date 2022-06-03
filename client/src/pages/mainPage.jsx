import styles from "./mainPage.module.css";
import React, { useState, useEffect, useCallback, useContext } from "react";
import { Button, TextField, Checkbox, select } from "@material-ui/core";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";
import 'materialize-css'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { AuthContext } from '../context/AuthContext'
import { TasksList } from '../components/TasksList'

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


   const { token } = useContext(AuthContext)
   const message = useMessage();
   const [task, setTask] = useState('')
   const { loading, request, error, clearError } = useHttp();
   const [values, setValues] = useState({
      taskName: "",
      taskTheme: "",
      status: "",
      date: "",
      details: "",
      owner: "",
   });

   // useEffect( () => {
   //   message(error)
   //   clearError()
   // }, [error, message, clearError]);



   const fetchTasks = useCallback(async () => {
      try {
         const fetched = await request('/api/task', 'GET', null)
         //console.log(fetched)
         console.log("fetched:", fetched)
         setTask(fetched)
         //   data = json(fetched)

      } catch (e) { }
   }, [token, request])



   useEffect(() => {
      fetchTasks()
   }, [fetchTasks])


   //    const DisplayData=task.map(
   //       (item)=>{
   //           return(
   //               <tr>
   //                   <td>{item.id}</td>
   //                   <td>{item.taskName}</td>
   //                   <td>{item.taskTheme}</td>
   //               </tr>
   //           )
   //       }
   //   )


   const handleFieldChange = (evt) => {
      setValues({ ...values, [evt.target.name]: evt.target.value });

      console.log("Check data", evt.target.name, evt.target.value);

      //console.log(values["taskName"]);
   }

   const pressHandler = async event => {
      if (values["taskName"].length > 0) {
         
      }
      try {

         const data = await request(
            "http://localhost:5000/api/task/save",
            "Post",
            {
               ...values,
            }
         );
         console.log(data);
         window.location.reload(false);
      } catch (e) { }
   };

   const undoRedColor = (evt) => {
   //    const changing = evt.currentTarget.id
   //    if(this.state.active === invalid) { 
   //       this.setState({active: ''});
   //   } else {
   //       this.setState({active: invalid})
      //console.log(values["taskName"]);}
   }


   return (
      <>
         <div className={styles["body-container"]}>

            <div className={styles["main-container"]}>
               <div className={styles["filterInput-container"]}>
                  <span className={styles.searchIcon}><i></i></span>
                  <input className={styles.filterInput} type="text" placeholder="Search.." size="40" />
               </div>
               <br />


               {/* <button onClick={fetchLinks}></button> */}
               <div className={styles["mainTable-container"]}>
                  {!loading && <TasksList tasks={task} />}
               </div>


               <div className={styles["bottomButtons-container"]}>
                  <Popup modal contentStyle={contentStyle} trigger={<button className={styles["button-30"]}>Добавить задание</button>}>
                     <div><h2>Добавить задание</h2>
                        <div className={styles["popup-form"]}>
                           <input className={styles["popupForm-input"]} type="taskName" id="taskName" name="taskName" placeholder="Задание" onChange={handleFieldChange} />
                           <input className={styles["popupForm-input"]} type="owner" id="owner" name="owner" placeholder="Ответственный" onChange={handleFieldChange} onFocus={undoRedColor}/>
                           <input className={styles["popupForm-input"]} type="taskTheme" id="taskTheme" name="taskTheme" placeholder="Тема" onChange={handleFieldChange} />
                           {/* <input className={styles["popupForm-input"]} type="text" id="status" name="status" placeholder="Статус" onChange={handleFieldChange} /> */}
                           <div class="input-field col s12" type="text"  onChange={handleFieldChange}>
                              <select className={styles["popupForm-input"]} id="status" name="status">
                                 <option value="" disabled selected>Выберите статус</option>
                                 <option value="К исполнению">К исполнению</option>
                                 <option value="В процессе">В процессе</option>
                                 <option value="Выполнено">Выполнено</option>
                                 <option value="Закрыта">Закрыта</option>
                                 <option value="Отменена">Отменена</option>
                              </select>
                           </div>
                           <input className={styles["popupForm-input"]} type="date" id="date" name="date" placeholder="До какого числа" onChange={handleFieldChange} />
                           <input className={styles["popupForm-input"]} type="details" id="details" name="details" placeholder="Дополнительно" onChange={handleFieldChange} />
                        </div>
                        <div className={styles["center-wrapper"]}><button className={styles["button-31"]} onClick={pressHandler}>Добавить задание</button></div>

                     </div>
                  </Popup>

                  <Popup modal contentStyle={contentStyle} trigger={<button className={styles["button-30"]}>Изменить</button>}>
                     <div> <h2>Изменить</h2>
                        <div className={styles["popup-form"]}>
                           <input className={styles["popupForm-input"]} type="taskName" id="taskName" name="taskName" placeholder="Задание" onChange={""} />
                           <input className={styles["popupForm-input"]} type="owner" id="owner" name="owner" placeholder="Ответственный" onChange={""} />
                           <input className={styles["popupForm-input"]} type="taskTheme" id="taskTheme" name="taskTheme" placeholder="Тема" onChange={""} />
                           <input className={styles["popupForm-input"]} type="status" id="status" name="status" placeholder="Статус" onChange={""} />
                           <input className={styles["popupForm-input"]} type="date" id="date" name="date" placeholder="До какого числа" onChange={""} />
                           <input className={styles["popupForm-input"]} type="details" id="details" name="details" placeholder="Дополнительно" onChange={""} />
                        </div>
                        <div className={styles["center-wrapper"]}><button className={styles["button-31"]}>Изменить задание</button></div>
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
