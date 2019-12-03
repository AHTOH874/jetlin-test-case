import React from 'react'
import { Link } from "react-router-dom";
import styles from "./Note.module.css";

const Note = ({id, name, text}) => {
  return (
    <div className={styles.container}>
      <Link className={styles.name} to={`/edit/${id}`}>{name}</Link>
      {/* <p>Название: </p> */}
      {/* <div className={styles.text}>{text}</div> */}
    </div>
  )
  
}
export default Note