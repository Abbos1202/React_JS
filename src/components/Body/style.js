import { styled } from "styled-components";


const Container = styled.div`
   background-color: coral;
   font-family: arial;
   color: grey;
   padding: 20px;
`;
const Wrapper = styled.div`
  display: flex;
  gap: 20px;
`
Wrapper.Title = styled.h2`
   color: #FFFFFF;
`;
Wrapper.Button = styled.button`
   width: 80px;
   height: 25px;
   background-color: blue;
   border: none;
   color: white;
   
   &:active{
      transform: scale(0.95);
   }
   &:hover {
      background-color: blueviolet;
   }
`


export { Container, Wrapper }