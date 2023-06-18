import React, { useContext } from "react";
import { Container } from "./style";
import { StudentContext } from "../../Context";

const Navbar = () => {
  const [students] = useContext(StudentContext);
  return (
    <Container>
      <h1>Students: {students.length}</h1>
      <h1>Home</h1>
      <h1>About</h1>
      <h1>Product</h1>
      <h1>Contact</h1>
    </Container>
  );
};

export default Navbar;