import React from "react";
import { Container, Wrapper } from "./style";
import { Student } from "../../context/Students";

const Body = () => {
  const [students, setStudent]  = Student()

  const onDelete = (id) => {
    let filtered = students.filter(value => value.id !== id)
    setStudent(filtered)
}
  return (
    <Container>
      <h1>Students List: {students.length}</h1>
      {students.map((student) => {
        return (
          <Wrapper key={student.id}>
            <Wrapper.Title>{student.name}</Wrapper.Title>
            <Wrapper.Title>{student.surname}</Wrapper.Title>
            <Wrapper.Button onClick={() =>onDelete(student.id)}>
              Delete
            </Wrapper.Button>
          </Wrapper>
        );
      })}
    </Container>
  );
};

export default Body;
