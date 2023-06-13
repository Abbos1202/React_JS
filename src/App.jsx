import React, { Component } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
    };
  }
  render() {
    return (
      <div>
        <SignIn />
        <SignUp />
      </div>
    );
  }
}
