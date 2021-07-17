import styled from 'styled-components'

export const AreaList = styled.section`
   display: flex;
   flex-direction: column;
   padding: 1.5rem 15px;
   background-color: ${props => props.spotlight === true ? "var(--color-blue-500)" : "var(--color-white)"};

   .categoryName {
      color: ${props => props.spotlight === true ? "var(--color-white)" : "var(--color-black-700)"};
      margin-bottom: 1rem;
   }

   .list {
      overflow-x: auto;
      overflow-y: hidden;
      display: flex;
      margin-right: -15px;

      li {
         display: inline-block;
         width: 94px;
         margin-right: 15px;

         img {
            display: block;
            width: 94px;
            height: 138px;
            object-fit: cover;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
         }

         .title {
            font-size: 12px;
            height: 36px;
            margin-top: 10px;
            color: ${props => props.spotlight === true ? "var(--color-white)" : "var(--color-black-500)"};
         }
      }
   }
`