import styled from 'styled-components'

export const AreaList = styled.section`
   display: flex;
   flex-direction: column;
   padding: 1.5rem 15px;
   background-color: ${props => props.spotlight === true ? "var(--color-blue-500)" : "var(--color-white)"};

   .loading {
      ${props => props.spotlight === true && "opacity: .3;"};
      display: flex;
      flex-direction: column;

      .load-category-name {
         width: 182px;
         height: 16px;
         background-color: ${props => props.spotlight === true ? "var(--color-white)" : "var(--color-blue-400)"};
         margin-bottom: 1rem;
      }

      .load-list {
         display: flex;
         margin-right: -15px;

         li {
            
            display: inline-block;
            width: 93px;
            margin-right: 15px;

            .load-img {
               display: block;
               width: 93px;
               height: 138px;
               background-color: ${props => props.spotlight === true ? "var(--color-white)" : "var(--color-blue-400)"};
               border-top-right-radius: 10px;
               border-bottom-left-radius: 10px;
            }

            .load-title {
               display: flex;
               flex-direction: column;
               margin-top: 1rem;

               span {
                  width: 93px;
                  height: 9px;
                  background-color: ${props => props.spotlight === true ? "var(--color-white)" : "var(--color-blue-400)"};
               }
               span:last-of-type {
                  width: 63px;
                  margin-top: 8px;
               }
            }
         }
      }
   }

   .category-name {
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