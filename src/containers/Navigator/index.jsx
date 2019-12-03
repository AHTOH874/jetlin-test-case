import React from 'react'
import { NavLink } from "react-router-dom";
import { nav, link, active } from "./nav.module.css";

const Navigator = () => {
  return (
    <nav className={nav}>
      <h1>Список заметок</h1>
      <NavLink activeClassName={active} exact className={link} to="/">Главная</NavLink>
      <NavLink activeClassName={active} className={link} to="/add">Создать заметку</NavLink>
    </nav>
  )
}
export default Navigator