import React, { useReducer, useState } from "react";

const Hooks = (props) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "plus":
        return state + 1;
      case "minus":
        return state - 1;
      case "byamount":
        return state + action.payload;
        case 'add': return state + action.payload
      default:
        return state;
    }
  };

  const [name, setName] = useState('webbrain')
  const [state, dispatch] = useReducer(reducer, 0);
  const [select, setSelect] = useState(1)

  const onSelect = (e) => {
    setSelect(Number(e.target.value))
  };

  return (
    <div style={{ flex: 1 }}>
      <h1>Hooks component</h1>
      <h1>Name: {name}</h1>
      <h1>Counter: {state}</h1>
      <button onClick={() => dispatch({ type: "plus" })}>+</button>
      <button onClick={() => dispatch({ type: "minus" })}>-</button>
      <button onClick={() => dispatch({ type: "byamount", payload: 5 })}>
        5
      </button>
      <button onClick={() => dispatch({ type: "byamount", payload: 50 })}>
        50
      </button>
      <button onClick={() => dispatch({ type: "byamount", payload: 100 })}>
        100
      </button>
      <input onChange={(e) => setName(e.target.value)} type="text" value={name} />
      <select defaultValue={1} onChange={onSelect}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      <button onClick={() => dispatch({ type: "add", payload: select })}>{select}</button>
    </div>
  );
};

export default Hooks;
