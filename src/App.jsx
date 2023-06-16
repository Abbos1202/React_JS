import React from "react";

class Department extends React.Component{
  render() {
    return(
      <div>
        <h1>Hi React Department</h1>
        <h3>React is JavaScript library</h3>
      </div>
    )
  }
}

class Student extends React.Component{
  render() {
    return(
      <div>
        <h1>Hi React Student</h1>
        <h3>React is JavaScript library</h3>
      </div>
    )
  }
}

export {Department, Student};
export default Student;
// export default Department;