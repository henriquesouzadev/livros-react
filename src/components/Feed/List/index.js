import React from 'react'
import { AreaList } from './styled'

const List = ({ name, category, spotlight }) => {

   const [books, setBooks] = React.useState([]);
   const [loading, setLoading] = React.useState(true);

   React.useEffect(() => {
      async function fetchBooks() {
         let newList;
         try {
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes${category && '?q=' + category}`, { method: 'GET' })
            const { totalItems, items } = await response.json();

            if (totalItems === 0) {
               newList = [];
            } else {
               newList = items.reduce((list, item) => {
                  item.volumeInfo.imageLinks && list.push({
                     id: item.id,
                     title: item.volumeInfo.title,
                     thumbnail: item.volumeInfo.imageLinks.smallThumbnail
                  });
                  return list;
               }, []);
            }
         } catch (e) {
            newList = [];
            setBooks(newList);
            setLoading(false);
         } finally {
            setLoading(false);
            setBooks(newList);
         }
      }
      fetchBooks();
   }, [category])

   return (
      <AreaList spotlight={spotlight}>
         {loading ? (
            <div className="loading">
               <div className="load-category-name"></div>
               <ul className="load-list">
                  <li>
                     <div className="load-img"></div>
                     <div className="load-title">
                        <span></span>
                        <span></span>
                     </div>
                  </li>
                  <li>
                     <div className="load-img"></div>
                     <div className="load-title"></div>
                  </li>
                  <li>
                     <div className="load-img"></div>
                     <div className="load-title"></div>
                  </li>
               </ul>
            </div>
         ) : (
            <>
               <h2 className="category-name">{name}</h2>
               <ul className="list">
                  {books && books.map(({ id, title, thumbnail }) => (
                     <li key={id}>
                        <img src={thumbnail} alt="Miniatura" />
                        <div className="title">{title}</div>
                     </li>
                  ))}
               </ul>
            </>
         )}
      </AreaList >
   )
}

export default List
