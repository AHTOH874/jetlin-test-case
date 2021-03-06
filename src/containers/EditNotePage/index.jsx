﻿import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import styles from "./Adder.module.css";


const EditNotePage = ({ needEdit, notes, lastId, dispatch, info=''}) => {
  let timerId;

  let { Noteid } = useParams()
  const [message, setMessage] = useState(info || '')
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const buttonName = needEdit ? 'Сохранить изменения в заметке' : 'Добавить заметку'

  useEffect(()=> {
    return () => clearInterval(timerId)
  })

  useEffect(()=> {
    if (Noteid !== undefined && typeof Number(Noteid) !== 'undefined' && notes) {
      let note = notes.filter((v) => v.id === Number(Noteid));
      if (note.length > 0) {
        setName(note[0].name)
        setText(note[0].text)
      }
    }
  }, [Noteid, notes])

  // TODO: Сделать обновление заметки при изменении имени или текста
  // useEffect(()=>{
  //   dispatch({type:'updateNote', payload: {
  //     id: state.lastId,
  //     name,
  //     text
  //   }})
  // }, [name, text])

  const onClick = () => {
    if (name === "") {
      return alert('Введите имя заметке')
    }
    if (text === "") {
      return alert('Введите содержание заметки')
    }
    if (needEdit) {
      dispatch({ type: 'updateNote', payload: { name, id: Number(Noteid), text }})
      setMessage('Заметка изменена')
    } else {
      dispatch({ type: 'addNote', payload: { name, text }})
      setMessage('Заметка добавлена')
    }
    timerId = setInterval(()=> setMessage(''), 1000)
  }

  const isError = Noteid !== undefined && (Number(Noteid) > lastId || isNaN(Number(Noteid)))
  if (isError) {
    return (<div className={`${styles.container} ${styles.error}`}>Некорректный ид заметки</div>)
  }
  return (
    <div className={styles.container}>
      {message ? <strong>{message}</strong> : null}
      <p className={styles.row}>
        <label htmlFor="name">Название заметки</label>
        <br/>
        <input className={styles.row} type="text" id="name" value={name} onChange={event => setName(event.target.value)} placeholder="Введите название"></input>
      </p>
      <p>
        <label htmlFor="name">Содержание заметки</label>
        <br/>
        <textarea className={styles.row} placeholder="Отразите самое важное" value={text} onChange={event => setText(event.target.value)}></textarea>
      </p>
      <button onClick={onClick}>{buttonName}</button>
    </div>
  )
}


export default EditNotePage