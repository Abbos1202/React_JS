import React from "react";
import Navbar from "../components/Navbar";
import Students from "../components/Students";
import Home from "../components/Home";
import Pages from "./../components/Pages";
import Templates from "./../components/Templates";
import Elements from "./../components/Elements";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";

const Root = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search)
  console.log(query.get('name'));
  console.log(query.get('status'));
  return (
    <div>
      <h1>We are here {location.pathname}</h1>
      <Switch>
        <Route exact path={"/"}>
          <Redirect to={'/home'} />
        </Route>
        <Route path={"/students"} component={Navbar} />
        <Route path={"/home"} component={Navbar} />
        <Route path={"/templates"} component={Navbar} />
        <Route path={"/pages"} component={Navbar} />
        <Route path={"/elements"} component={Navbar} />
      </Switch>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route path={"/students"} component={Students} />
        <Route path={"/home"} component={Home} />
        <Route path={"/templates"} component={Templates} />
        <Route path={"/pages"} component={Pages} />
        <Route path={"/elements"} component={Elements} />
        <Route path={"*"}>
          <h1>404 Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
};

export default Root;
