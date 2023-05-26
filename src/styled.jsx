import React, { Component } from "react";
import { Container, Button, ActiveButton, Rotate, Theme} from "./style";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   body{
    background: ${(props) => props.theme.bg};
    color: ${(props) => props.theme.cl};
   }
`

export default class State extends Component {
  state={
    light: false,
  }
  render() {
  
    const theme = {
      bg: this.state.light? "white" : "black",
      cl: this.state.light? "black" : "white",
    }
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <h1>Theme Provider</h1>
         <Button>Click me</Button>
         <ActiveButton>Active</ActiveButton>
         <Rotate>Rotate</Rotate>
         <Theme onClick={()=> this.setState({light: !this.state.light})} >Change theme</Theme>
      </ThemeProvider>
    );
  }
}
