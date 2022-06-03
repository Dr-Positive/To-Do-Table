import React, {useCallback, useContext, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {useHttp} from '../hooks/http.hook'
import {AuthContext} from '../context/AuthContext'
import {Loader} from '../components/Loader'
import {TaskCard} from '../components/TaskCard'
import styles from "./DetailPage.module.css";

import { Link } from "react-router-dom";

import { useNavigate } from 'react-router-dom';


export const DetailPage = () => {
  const {token} = useContext(AuthContext)
  const history = useNavigate();
  const {request, loading} = useHttp()
  const [task, setTask] = useState(null)
  const taskId = useParams().id
  const [values, setValues] = useState({
    taskId: useParams().id,
 });

  const getTask = useCallback(async () => {
    try {
      const fetched = await request(`/api/task/${taskId}`, 'GET', null,)
      setTask(fetched)
    } catch (e) {}
  }, [token, taskId, request])

  useEffect(() => {
   getTask()
  }, [getTask])

  const pressHandler = async event => {
        try {
       const data = await request(
        `http://localhost:5000/api/task/delete/${taskId}`,
          "Post",
          {

          }
       );
       //history('/');
    } catch (e) { }
    
 };

  if (loading) {
    return <Loader />
  }

  return (
    <>
      { !loading && task && <TaskCard task={task} /> }
      <Link to={"/"}><button className={styles["button-31"]} onClick={pressHandler}>Удалить</button></Link>
    </>
  )
}

export default DetailPage;