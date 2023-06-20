import { styled } from "styled-components";
import { NavLink } from 'react-router-dom';


const Container = styled.div`
   display: flex;
   align-items: center;
   height: 60px;
   background-color: black;
   justify-content: space-evenly;
`;

const Link = styled(NavLink)`
   color: white;
   font-size: 24px;
   font-weight: 600;
   text-decoration: none;
`

export { Container, Link }