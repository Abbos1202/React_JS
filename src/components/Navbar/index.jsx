import React, { memo } from "react";
import { Container } from "./style";

const Navbar = ({data, dataCall}) => {
  console.log('child render');
  return (
    <Container>
      <h1>{data.title}</h1>
      <h1>{dataCall('Home').title}</h1>
      <h1>{dataCall('About').title}</h1>
      <h1>{dataCall('Classes').title}</h1>
      <h1>{dataCall('Contact').title}</h1>

    </Container>
  );
};

export default memo(Navbar);