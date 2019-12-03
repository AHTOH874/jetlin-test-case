import React from 'react'
import style from './layout.module.css'

const Layout = (props) => (
  <div className={style.layout}>
    {props.children}
  </div>
)
export default Layout