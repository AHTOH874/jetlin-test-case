import React from 'react'
import { useParams }from 'react-router-dom'
import Note from '../../components/Note'

import styles from "./Notespage.module.css";
import Pagination from '../Pagination/Pagination';

const NotesPage = ({root, notes, dispatch}) => {
  let { Page } = useParams()
  
  if (!root && isNaN(Number(Page)))
    throw Error("Некорректо задан номер страницы")

  if ((notes.length - Number(Page) * 5) < -5)
    throw Error("Некорректо задан номер страницы")

  const pageCount = Math.ceil(notes.length / 5)

  const getSlicedArray = () => {
    if (root) {
      return notes.slice(0, 5);
    } else {
      return notes.slice(5 * (Number(Page) - 1), 5 * (Number(Page) - 1) + 5)
    } 
  }

  return (
    <div className={styles.container}>
      <div className={styles.notes}>
        {
          getSlicedArray().map(({ id, text, name }, i) => <Note dispatch={dispatch} key={i} text={text} id={id} name={name}/>)
        }
        </div>
        <Pagination page={root ? 1: Number(Page) } pageCount={pageCount}/>
    </div>
  )
}
export default NotesPage