import React, { useState, useReducer } from "react";

const Hooks = (props) => {
  const [count, setCount] = useState(props.count);
  const [name, setName] = useState("webbrain");

  const reducer = (state, action) => {
    switch (action.type) {
      case "plus":
        return state + 1;
      case "minus":
        return state - 1;
      case "byamount":
        return state + action.payload;
      default:
        return state;
    }
  }

  const [counter, dispatch] = useReducer(reducer, 0);

  return (
    <div style={{ flex: 1 }}>
      <h1>Hooks component</h1>
      <h1>Count: {count}</h1>
      <h1>Counter: {counter}</h1>
      <h1>Name: {name}</h1>
      <button onClick={() => dispatch({ type: "plus" })}>+</button>
      <button onClick={() => dispatch({ type: "minus" })}>-</button>
      <button onClick={() => dispatch({ type: "byamount", payload: 5 })}>5</button>
      <button onClick={() => dispatch({ type: "byamount", payload: 10 })}>10</button>
      <button onClick={() => dispatch({ type: "byamount", payload: 50 })}>50</button>
      <button onClick={() => dispatch({ type: "byamount", payload: 100 })}>100</button>
      <input
        onChange={({ target }) => setName(target.value)}
        type="text"
        value={name}
      />
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};

export default Hooks;
