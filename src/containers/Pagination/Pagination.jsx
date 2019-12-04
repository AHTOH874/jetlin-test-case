import React from 'react'
import PaginationItem from '../../components/PaginationItem';
import styles from './Pagination.module.css'
import { Link } from "react-router-dom";

const Pagination = ({page, pageCount}) => {
  const isFirstPage = page === 1
  const isLastPage = page === pageCount
  // TODO: NEED FIX Если будет огромное кол-во страниц, разметка сломается
  //       Нужно делать проверки 
  return (
    <div className={styles.pagination}>
      <Link disabled={isFirstPage} to={`/notes/${isFirstPage ? page : page - 1}`}>prev</Link>
      {[...Array(pageCount).keys()].map((v, i) => <PaginationItem value={v+1} key={i}/> )}
      <Link disabled={isLastPage} to={`/notes/${isLastPage ? page : page + 1}`}>next</Link>
    </div>
  )

}

export default Pagination 