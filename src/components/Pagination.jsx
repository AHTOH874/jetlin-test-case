import React from 'react'

const Pagination = ({page, pageCount}) => {

  const flayer = 2;
  const slayer = 1;
  const mda = () => {
    if (pageCount > page + 2 ) {
      if (page === 1) 
        return [1, 2, 3, 'right']
      if (page === 2 )
        return [1, 2, 3, 'right']
      if (page === 3)
        return ['left',3, 4, 'right']
      if (page <)
  }
    // << < 3 4 5 > >> 
    // << < 4 5 >
    // << < 5 6


  return <div className={styles.pagination}>

    
  </div>

}

export default Pagination 