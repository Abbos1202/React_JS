import React, { Component } from "react";

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("constructor");
  }

  componentWillMount() {
    console.log('componentWillMount');
  }
  
  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    // return true
   console.log(this.state.count);
    return false
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }
  
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>ReactJs LIFECYCLE</h1>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.setState({count: this.state.count + 1})}>Click me</button>
      </div>
    );
  }
}
