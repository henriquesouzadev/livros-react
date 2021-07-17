import React from 'react'
import { HeaderArea } from './styled'
import { HeaderContext } from '../../context/HeaderContext'
import logo from '../../assets/logo.svg'
import iconSearch from '../../assets/search.svg'
import iconArrowLeft from '../../assets/caret-left.svg'

const Header = () => {

   const header = React.useContext(HeaderContext);

   return (
      <HeaderArea>
         <div className={`search ${header.searchResult !== undefined && header.inputActive ? 'active' : ''}`}>
            <form onSubmit={header.handleSearch}>
               <input
                  type="text"
                  name="query"
                  id="query"
                  placeholder="Buscar por livros ou autores"
                  value={header.inputValue}
                  onChange={(event) => header.setInputValue(event.target.value)}
               />
               <button type="submit">
                  <img src={iconSearch} alt="Busca" />
               </button>
            </form>
         </div>

         {header.searchResult.length > 0 ? (
            <div className="search-result">
               <button type="button" onClick={() => header.setSearchResult([])}>
                  <img src={iconArrowLeft} alt="Seta" />
               </button>
               <span>Resultado de busca</span>
            </div>
         ) : (
            <>
               <img src={logo} alt="Logo" />
               <button type="button" onClick={() => header.setInputActive(!header.inputActive)}>
                  <img src={iconSearch} alt="Busca" />
               </button>
            </>
         )}
      </HeaderArea>
   )
}

export default Header