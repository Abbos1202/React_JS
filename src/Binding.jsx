import React, { Component } from "react";

export default class Binding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    // this.plus = this.plus.bind(this)
  }
  plus() {
    this.setState({ count: this.state.count + 1 });
    console.log(this);
  }

  render() {
    // const plus = () => {
    //   this.setState({count: this.state.count + 1})
    // }
    return (
      <div>
        <h1>ReactJs Binding</h1>
        <h1>{this.state.count}</h1>
        {/* <button onClick={this.plus.bind(this)}>Click me</button> */}
        {/* <button onClick={this.plus}>Click me</button> */}
        <button onClick={() => this.plus()}>Click me</button>
      </div>
    );
  }
}
