import React from 'react'
import styles from "../pages/DetailPage.module.css";

export const TaskCard = ({ task }) => {
  return (
    <>
    <div className={styles["taskCard"]}>
      <h2>Подробнее о задании</h2>
      <p>Тема: {task[0].taskTheme} </p>
      <p>Задание: {task[0].taskName} </p>
      <p>Ответственный: {task[0].owner} </p>
      <p>Статус: {task[0].status} </p>
      <p>Дедлайн: {task[0].date} </p>
      <p>Подробнее: {task[0].details} </p>
      <p>Дата создания: </p>
      </div>
    </>
  )
}