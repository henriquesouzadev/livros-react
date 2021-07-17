import React from 'react'
import { AreaList } from './styled'

const List = ({ name, category, spotlight }) => {

   const [books, setBooks] = React.useState([]);

   React.useEffect(() => {
      async function fetchBooks() {
         const response = await fetch(`https://www.googleapis.com/books/v1/volumes${category && '?q=' + category}`, { method: 'GET' })
         const { totalItems, items } = await response.json();

         if (totalItems === 0) {
            setBooks([]);
         } else {
            const newList = items.reduce((list, item) => {
               item.volumeInfo.imageLinks && list.push({
                  id: item.id,
                  title: item.volumeInfo.title,
                  thumbnail: item.volumeInfo.imageLinks.smallThumbnail
               });
               return list;
            }, []);
            setBooks(newList);
         }
      }
      fetchBooks();
   }, [category])

   return (
      <AreaList spotlight={spotlight}>
         <h2 className="categoryName">{name}</h2>
         <ul className="list">
            {books && books.map(({ id, title, thumbnail }) => (
               <li key={id}>
                  <img src={thumbnail} alt="Miniatura" />
                  <div className="title">{title}</div>
               </li>
            ))}
         </ul>
      </AreaList>
   )
}

export default List
