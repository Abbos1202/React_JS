import React, { Component } from "react";
import { student } from "./mock";

export default class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: student,
      name: "",
      surname: "",
    };
  }
  render() {
    const onChange = (e) => {
      // console.log(e);
      // console.log(e.target.value);
      // console.log(e.target.name);
      this.setState({ [e.target.name]: e.target.value });
    };

    // const onNameChange = (e) => {
    //   this.setState({ name: e.target.value });
    // };
    // const onSurnameChange = (e) => {
    //   this.setState({ surname:e?.target?.value });
    // };
    const onFilter = (e) => {
      // console.log(e.target.value);
      let filtered = student.filter((value) => value.name.toLowerCase().includes(e.target.value.toLowerCase()));

      this.setState({data: filtered})
    }
    return (
      <div>
        <h1>Name: {this.state.name}</h1>
        <h1>Surname: {this.state.surname}</h1>
        <input onChange={onChange} name="name" type="text" placeholder="name" />
        <input
          onChange={onChange}
          name="surname"
          type="text"
          placeholder="surname"
        />
        <hr />
        <input onChange={onFilter} type="text" placeholder="filter" />
        {this.state.data.map(({ id, name, status }) => {
          return (
            <h1 key={id}>
              {id} {name} {status}
            </h1>
          );
        })}
        {/* <input onChange={onSurnameChange} type="text" placeholder="surname" /> */}
        {/* <input onChange={(e) => onSurnameChange(e,'hey')} type="text" placeholder="surname" /> */}
        {/* <input onChange={(e) => onSurnameChange(e)} type="text" placeholder="surname" /> */}
      </div>
    );
  }
}