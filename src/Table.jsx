import React, { Component } from "react";
import { Employees } from "./mock.js";

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: Employees,
      name: "",
      age: "",
      address: "",
      status: "",
      select: null,
    };
  }
  render() {
    const filteredInfo = (e) => {
      const { value } = e.target;
      let filtered = Employees.filter((item) =>
        `${item[this.state.search]}`.toLowerCase().includes(value.toLowerCase())
      );
      this.setState({
        dataList: filtered,
      });
    };

    const onSelect = (e) => {
      this.setState({ search: e.target.value });
    };

    const onDelete = (id) => {
      // console.log(id);
      let filtered = this.state.dataList.filter((value) => value.id !== id);

      this.setState({
        dataList: filtered,
      });
    };
    const onChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };
    const onCreate = () => {
      let user = {
        id: Date.now(),
        name: this.state.name,
        age: this.state.age,
        address: this.state.address,
        status: this.state.status,
      };

      this.setState({
        dataList: [...this.state.dataList, user],
        name: "",
        age: "",
        address: "",
        status: "",
      });
    };
    const onEdit = ({ id, name, age, address, status }, isActive) => {
      if (isActive) {
        let updated = this.state.dataList.map((value) =>
          value.id === this.state.select.id
            ? {
                ...value,
                name: this.state.name,
                age: this.state.age,
                address: this.state.address,
                status: this.state.status,
              }
            : value
        );
        this.setState({ select: null, dataList: updated });
      } else {
        this.setState({
          name: name,
          age: age,
          address: address,
          status: status,
          select: { id, name, age, address, status },
        });
      }
    };
    return (
      <div>
        <input onChange={filteredInfo} type="text" placeholder="search..." />
        <select onChange={onSelect}>
          <option value="id">ID</option>
          <option value="name">NAME</option>
          <option value="address">ADDRESS</option>
          <option value="status">STATUS</option>
        </select>
        <hr />
        <h1>Name: {this.state.name}</h1>
        <h1>Age: {this.state.age}</h1>
        <h1>Address: {this.state.address}</h1>
        <h1>Status: {this.state.status}</h1>
        <input
          onChange={onChange}
          value={this.state.name}
          name="name"
          type="text"
          placeholder="Name"
        />
        <input
          onChange={onChange}
          value={this.state.age}
          name="age"
          type="text"
          placeholder="Age"
        />
        <input
          onChange={onChange}
          value={this.state.address}
          name="address"
          type="text"
          placeholder="Address"
        />
        <input
          onChange={onChange}
          value={this.state.status}
          name="status"
          type="text"
          placeholder="Status"
        />
        <button onClick={onCreate}>Create</button>
        <table border={1}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Address</th>
              <th>Status</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          {this.state.dataList.length ? (
            this.state.dataList.map(({ id, name, age, address, status }) => {
              return (
                <tbody key={id}>
                  <tr>
                    <td>{id}</td>
                    <td>
                      {this.state.select?.id === id ? (
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
                      {this.state.select?.id === id ? (
                        <input
                          onChange={onChange}
                          name="age"
                          value={this.state.age}
                          type="text"
                        />
                      ) : (
                        age
                      )}
                    </td>
                    <td>
                      {this.state.select?.id === id ? (
                        <input
                          onChange={onChange}
                          name="address"
                          value={this.state.address}
                          type="text"
                        />
                      ) : (
                        address
                      )}
                    </td>
                    <td>
                      {this.state.select?.id === id ? (
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
                          onEdit(
                            { id, name, age, address, status },
                            this.state.select?.id === id
                          )
                        }
                        className="button_1"
                      >
                        {this.state.select?.id === id ? "Save" : "Edit"}
                      </button>
                      <button onClick={() => onDelete(id)} className="button_2">
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              );
            })
          ) : (
            <tbody>
              <tr>
                <th colSpan={7}>
                  <h1>No data available</h1>
                </th>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    );
  }
}
