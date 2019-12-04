import React from 'react'
import { Link } from "react-router-dom";
import styles from "./Note.module.css";

const Note = ({id, name, text, dispatch}) => {
  return (
    <div className={styles.container}>
      <Link className={styles.name} to={`/edit/${id}`}>{name}</Link>
      {/* <p>Название: </p> */}
      {/* <div className={styles.text}>{text}</div> */}
      <span className={styles.close} onClick={()=> dispatch({type:'deleteNote', payload: {id:Number(id)}})}></span>
    </div>
  )
  
}
export default Note