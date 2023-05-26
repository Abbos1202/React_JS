import React, { Component } from "react";
import { Container, Title,Desc, Box } from "./style";

export default class State extends Component {
  render() {
    return (
      <Container>
          <Box bg="black" type="large">Large</Box>
          <Box bg="yellow" type="medium">Medium</Box>
          <Box bg="red" type="small">Small</Box>
          <Title>Hey Title</Title>
          <Desc left>Description 1</Desc>
          <Desc>Description 2</Desc>
      </Container>
    );
  }
}
