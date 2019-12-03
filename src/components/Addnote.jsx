import React from 'react'
import { Link } from "react-router-dom";

const Note = () => {
  return (
    <div>
      <Link to={`/add`}>Добавить заметку</Link>
    </div>
  )

}
export default Note