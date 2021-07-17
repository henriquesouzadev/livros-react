import React from 'react'
import { AreaListResult } from './styled'
import iconFilter from '../../../assets/filter.svg'

const ListResult = ({ books }) => {
   return (
      <AreaListResult>
         <button className="button-filter">
            <img src={iconFilter} alt="Filtrar" /> Filtrar
         </button>
         <ul>
            {books.map(({ id, title, thumbnail }) => (
               <li key={id}>
                  <img src={thumbnail} alt="Miniatura" />
                  <div className="title">{title}</div>
               </li>
            ))}
         </ul>
      </AreaListResult>
   )
}

export default ListResult
