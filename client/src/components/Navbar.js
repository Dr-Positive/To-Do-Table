import React, { useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import styles from "../pages/mainPage.module.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
    //   const history = useHistory()
    //   const auth = useContext(AuthContext)

    //   const logoutHandler = event => {
    //     event.preventDefault()
    //     auth.logout()
    //     history.push('/')
    //   }

    return (
        <>
        <nav>
            <header>
                <div className={styles["options-container"]}>
                    <label htmlFor={styles["side-checkbox"]}>Настройки</label>
                </div>
                <div className={styles["logo"]}><a href="/">TO-DO-LIST</a></div>
                <div className={styles["RegAuth-container"]}>
                    <Link to="/auth"><button className={styles["loginButton"]}>Войти</button></Link>
                    <Link to="/register"><button className={styles["regsButton"]}>Зарегистрироваться</button></Link>
                </div>
            </header>
        </nav>
        <input type="checkbox" id={styles["side-checkbox"]} />
        <div className={styles["side-panel"]}>
           <label className={styles["side-button-2"]} htmlFor={styles["side-checkbox"]}>+</label>
           <div className={styles["side-title"]}>Выдвижная панель:</div>
           <p>Информация в панели</p>
        </div>
        </>
    )
}