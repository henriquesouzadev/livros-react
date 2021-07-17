import React from 'react'
import styled, { createGlobalStyle } from 'styled-components';
import { GlobalHeader } from './context/HeaderContext';
import Header from './components/Header';
import Feed from './components/Feed';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap');

  :root {
    --color-white: #fff;
    --color-blue-300: #effaff;
    --color-blue-400: #F3F6FD;
    --color-blue-500: #47b7ed;
    --color-blue-700: #56C8FF;
    --color-black-500: #595a5c;
    --color-black-700: #2d2d2e;
  }

  * {
    outline: none;
    border: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  body { font-family: 'Roboto', sans-serif; }

  button {
    cursor: pointer;
    background-color: transparent;
    }
`;

const AreaApp = styled.div`
  overflow-x: hidden;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AreaApp>
        <GlobalHeader>
          <Header />
          <Feed />
        </GlobalHeader>
      </AreaApp>
    </>
  );
}

export default App;
