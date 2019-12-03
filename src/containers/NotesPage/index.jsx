import React, { useState, useEffect} from 'react'
import { useParams }from 'react-router-dom'
import Note from '../../components/Note'

import styles from "./Notespage.module.css";

const AddNote = () => <div>Добавить</div>

const NotesPage = ({root, notes}) => {
  let { Page } = useParams()
  const isEmpty = notes.length === 0
  
  const getArray = () => {
    if (isEmpty)
      throw Error("Массив с заметками пуст")
    
    if (!root && isNaN(Number(Page))) 
      throw Error("Некорректо задан номер страницы")
    
    console.log((notes.length - Number(Page) * 5));
      
    if ((notes.length - Number(Page) * 5) < -5)
      throw Error("Некорректо задан номер страницы")
      
    if (root) {
      return notes.slice(0, 5);
    } else {
      return notes.slice(5 * (Number(Page) - 1), 5 * (Number(Page) - 1) + 5)
    }
  }

  useEffect(()=> {
    
  }, [])
  

  return (
    <div className={styles.container}>
      {/* <ul> */}
      <div className={styles.notes}>
        {
          !isEmpty ? getArray().map(({id, text, name})=> <Note key={id} text={text} id={id} name={name}/>):
          <AddNote />
        }
        </div>
      {/* </ul> */}
    </div>
  )
}
export default NotesPage