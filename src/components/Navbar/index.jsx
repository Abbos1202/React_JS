import React from "react";
import { Container, Link } from "./style";
import { Outlet, NavLink } from "react-router-dom";
import { navbar } from "../../utils/Navbar";

const Navbar = () => {
  const active = (url) => {
    return window.location.pathname.includes(url);
  };
  return (
    <>
      <Container>
        {navbar.map(({ id, path, title }) => {
          return (
            <Link key={id} active={active(path)} to={path}>
              {title}
            </Link>
          );
        })}
      </Container>
      <Outlet />
    </>
  );
};

export default Navbar;
