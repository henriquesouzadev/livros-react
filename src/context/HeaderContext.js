import React from 'react'

export const HeaderContext = React.createContext();

export const GlobalHeader = ({ children }) => {

   const [inputValue, setInputValue] = React.useState('');
   const [inputActive, setInputActive] = React.useState(false);
   const [searchResult, setSearchResult] = React.useState([]);

   const fetchResult = async (value) => {
      if (inputValue !== '') {
         let newList;

         const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${value && value}&maxResults=20`, { method: 'GET' });
         const { totalItems, items } = await response.json();

         if (totalItems === 0) {
            setSearchResult([]);
         } else {
            newList = items.reduce((list, item) => {
               item.volumeInfo.imageLinks && list.push({
                  id: item.id,
                  title: item.volumeInfo.title,
                  thumbnail: item.volumeInfo.imageLinks.smallThumbnail
               });
               return list;
            }, []);
            setSearchResult(newList);
         }
      }
   }

   function handleSearch(event) {
      event.preventDefault();
      fetchResult(inputValue);
      setInputActive(false);
   }

   return (
      <HeaderContext.Provider
         value={{
            inputValue,
            inputActive,
            setInputValue,
            setInputActive,
            searchResult,
            setSearchResult,
            handleSearch
         }}
      >
         {children}
      </HeaderContext.Provider>
   );
}
