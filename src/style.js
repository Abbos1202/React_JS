import styled, { css } from 'styled-components';

export const Container = styled('div')`
    display: flex;
    background-color: coral;
    color: black;
    padding: 20px;
`;

const common = css`
   color: blue;
   font-family: bold;
   font-weight: 400px;
   padding: 10px;
   border: 2px solid black;
   height: fit-content;
   font-size: 20px;
`

export const Title = styled.h1`
   ${common}
   margin: 10px;
`
export const Desc = styled.h1`
   ${common}
   font-size: 12px;
   color: ${({ left }) => left ? "red" : "green"};
`

const getSize = (props) => {
    switch (props.type) {
        case 'large':
            return '200px';
        case 'medium':
            return '150px';
        case 'small':
            return '100px';
        default:
            return '150px';
    }
}

export const Box = styled.div`
    width: ${getSize};
    height: ${getSize};
    background: ${(props) => props.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    color: blue;
    margin: 10px;
    font-size: 28px;
    border: 2px solid blue;
`