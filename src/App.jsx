import React, { Component } from "react";

const list = [
  { id: 1, title: "Webbrain Academy" },
  { id: 2, title: "Digital One" },
  { id: 3, title: "Top Class Academy" },
  { id: 4, title: "Share Academy" },
  { id: 5, title: "WBA Academy" },
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
      list: list,
    };
  }
  render() {
    const onDelete = (id) => {
      console.log(id);
      let filtered = this.state.list.filter((value) => value.id !== id)
      this.setState({list: filtered})
    }
    return (
      <div>
        <h1>List</h1>
        {this.state.list.map((value, index) => (
          <div>
            <h1>
              {index + 1} {value.id} {value.title} <button onClick={()=> onDelete(value.id)}>delete</button>
            </h1>
          </div>
        ))}
      </div>
    );
  }
}
