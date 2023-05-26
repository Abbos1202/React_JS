import React, { Component } from "react";
import { student } from "./mock";

export default class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: student,
      name: "",
      status: "",
      search: "",
      active: null,
    };
  }
  render() {
    const onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    };
    const onSearch = (e) => {
      const { value } = e.target;
      let filtered = student.filter((item) =>
        `${item[this.state.search]}`.toLowerCase().includes(value.toLowerCase())
      );

      this.setState({ data: filtered });
    };
    const onSelect = (e) => {
      this.setState({ search: e.target.value });
    };
    const onDelete = (id) => {
      let filtered = this.state.data.filter((value) => value.id !== id);
      this.setState({ data: filtered });
    };
    const onCreate = () => {
      const user = {
        id: Date.now(),
        name: this.state.name,
        status: this.state.status,
      };
      console.log(user);
      this.setState({
        data: [...this.state.data, user],
        name: "",
        status: "",
      });
    };
    const onUpdate = ({ id, name, status }, isActive) => {
      if (isActive) {
        let res = this.state.data.map((value) =>
          value.id === this.state.active.id
            ? { ...value, name: this.state.name, status: this.state.status }
            : value
        );
        this.setState({ active: null, data: res });
      } else {
        this.setState({
          name: name,
          status: status,
          active: { id, name, status },
        });
      }
    };

    return (
      <div>
        <h1>Name: {this.state.name}</h1>
        <h1>Status: {this.state.status}</h1>
        <input
          onChange={onChange}
          value={this.state.name}
          name="name"
          type="text"
          placeholder="name"
        />
        <input
          onChange={onChange}
          value={this.state.status}
          name="status"
          type="text"
          placeholder="status"
        />
        <button className="add" onClick={onCreate}>
          Add
        </button>
        <hr />
        <input onChange={onSearch} type="text" placeholder="search..." />
        <select onChange={onSelect} name="" id="">
          <option value="id">ID</option>
          <option value="name">NAME</option>
          <option value="status">STATUS</option>
        </select>
        <hr />

        <table border={1}>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>STATUS</th>
              <th colSpan={2}>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.length ? (
              this.state.data.map(({ id, name, status }) => {
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>
                      {this.state.active?.id === id ? (
                        <input
                          onChange={onChange}
                          name="name"
                          value={this.state.name}
                          type="text"
                        />
                      ) : (
                        name
                      )}
                    </td>
                    <td>
                      {this.state.active?.id === id ? (
                        <input
                          onChange={onChange}
                          name="status"
                          value={this.state.status}
                          type="text"
                        />
                      ) : (
                        status
                      )}
                    </td>
                    <td>
                      <button
                        onClick={() =>
                          onUpdate(
                            { id, name, status },
                            this.state.active?.id === id
                          )
                        }
                        className="button_1"
                      >
                        {this.state.active?.id === id ? "Save" : "Edit"}
                      </button>
                      <button onClick={() => onDelete(id)} className="button_2">
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <th colSpan={4}>
                  <h1>No data available</h1>
                </th>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}
