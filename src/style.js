import styled, { css,keyframes } from 'styled-components';

export const Container = styled('div')`
    margin: 20px;
`;
const common = css`
   display: flex;
   align-items: center;
   justify-content: center;
   color: white;
   width: 200px;
   height: 40px;
   margin: 10px;
   background-color: coral;
   border-radius: 10px;
   cursor: pointer;
   &:active{
    transform: scale(0.97);
    opacity: 0.7;
   }
`
const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

export const Button = styled.div`
   ${common}
`;

export const ActiveButton = styled('div')`
   ${common}
   height: 50px;
`;

export const Rotate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid coral;
  animation: ${rotate} 2s linear infinite;
`;

export const Theme = styled.button`
   width: 200px;
   height: 40px;
   background-color: blue;
   color: white;
   border-radius: 10px;
   &:active {
    transform: scale(0.96);
   }
`