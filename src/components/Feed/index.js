import React from 'react'
import styled from 'styled-components'
import { HeaderContext } from '../../context/HeaderContext'
import List from './List'
import ListResult from './ListResult'

const AreaFeed = styled.div`
   display: flex;
   flex-direction: column;
`

const listCategories = [
   { name: "Aventura", category: "Aventura", spotlight: false },
   { name: "Infantil", category: "Infantil", spotlight: false },
   { name: "Destaques", category: "Infantil", spotlight: true },
   { name: "Ação", category: "Ação", spotlight: false },
]

const Feed = () => {

   const header = React.useContext(HeaderContext);

   return (
      <>
         <AreaFeed>
            {header.searchResult && header.searchResult.length > 0 ? (
               <ListResult books={header.searchResult} />
            ) : (
               listCategories.map(({ name, category, spotlight }) => (
                  <List
                     key={name}
                     name={name}
                     category={category}
                     spotlight={spotlight}
                  />
               ))
            )}
         </AreaFeed>
      </>
   )
}

export default Feed
