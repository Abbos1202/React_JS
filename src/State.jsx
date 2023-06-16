import React, { Component } from "react";

export default class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      title: "Webbrain Academy",
    };
  }
  render() {
    const onChange = (e) => {
      // console.log(e);
      // console.log(e.target.value);
      this.setState({ title: e.target.value });
    };
    const onSelect = (e) => {
      console.log(e.target.value);
    };
    const onCheck = (e) => {
      console.log(e.target.checked);
    };
    const plus = () => {
      if (this.state.count < 10) this.setState({ count: this.state.count + 1 });
    };
    const minus = () => {
      if (this.state.count > 1) this.setState({ count: this.state.count - 1 });
    };
    return (
      <div>
        <h1>Title: {this.state.title}</h1>
        <h1>State: {this.state.count}</h1>
        <input onChange={onChange} type="text" placeholder="name" />
        <select onChange={onSelect} name="" id="">
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <input onChange={onCheck} type="checkbox" />
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
      </div>
    );
  }
}