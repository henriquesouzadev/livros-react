import styled from 'styled-components'

export const HeaderArea = styled.header`
   position: relative;
   display: flex;
   justify-content: space-between;
   align-items: center;
   background-color: var(--color-blue-300);
   margin-bottom: 1.5rem;
   padding: 1rem;

   .search {
      position: absolute;
      top: 0;
      left: 0;
      display: none;
      width: 100%;
      height: 100%;
      background-color: #fff;
      padding: 1rem;
      box-shadow: 0px 2px 8px rgba(0, 0, 0, .1);

      &.active { display: flex; }

      form {
         display: flex;
         justify-content: space-between;
         width: 100%;
         color: #B2B4B9;

         input {
            color: #B2B4B9;
         }

         input:focus { color: #B2B4B9;}

         input:-webkit-autofill,
         input:-webkit-autofill:hover,
         input:-webkit-autofill:focus,
         input:-webkit-autofill:active {
            box-shadow: 0 0 0 30px white inset !important;
         }
      }
   }

   .search-result {
      display: flex;
      width: 100%;

      button img { display: block; }

      span {
         flex: 1;
         font-size: 14px;
         font-weight: 500;
         text-align: center;
         color: #595A5C;
      }
   }
`