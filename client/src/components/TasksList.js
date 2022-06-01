import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../pages/mainPage.module.css";
import { Checkbox } from "@material-ui/core";

export const TasksList = ({ tasks }) => {
  if (!tasks.length) {
    return <p className="center">Ссылок пока нет</p>
  }

  return (
    <table className={styles.mainTable}>
      <thead>
        <tr>
          <th><Checkbox /></th>
          <th>№</th>
          <th>Задание</th>
          <th>Ответственный</th>
          <th>Тема</th>
          <th>Статус</th>
          <th>До какого числа</th>
          <th>Дополнительно</th>
          <th>Перейти..</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => {
          return (
            <tr key={task.id} className={styles.row}>
              <th><Checkbox /></th>
              <td>{index + 1}</td>
              <td>{task.taskName}</td>
              <td>{task.owner}</td>
              <td>{task.taskTheme}</td>
              <td>{task.status}</td>
              <td>{task.date}</td>
              <td>{task.details}</td>
              <td>
                <Link to={`/detail/${task.id}`}>Открыть</Link>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}