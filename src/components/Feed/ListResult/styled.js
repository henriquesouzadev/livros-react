import styled from 'styled-components'

export const AreaListResult = styled.section`
   display: flex;
   flex-direction: column;
   padding-left: 15px;
   padding-right: 15px;

   .button-filter {
      display: flex;
      align-self: flex-end;
      font-weight: 700;
      color: #fff;
      background-color: var(--color-blue-700);
      margin-bottom: 1rem;
      padding: 8px 16px;
      border-radius: 50px;

      img { margin-right: 8px; }
   }

   ul {
      overflow-y: hidden;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: .3rem;
      
      li {
         display: inline-block;
         width: 100%;
         margin-right: 5px;
         margin-bottom: 1rem;

         img {
            display: block;
            width: 100%;
            height: 138px;
            object-fit: cover;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
         }

         .title {
            overflow: hidden;
            font-size: 12px;
            height: 34px;
            margin-top: 10px;
            color: ${props => props.spotlight === true ? "var(--color-white)" : "var(--color-black-500)"};
         }
      }
   }
`