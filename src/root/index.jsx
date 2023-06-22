import React, { useState } from "react";

const Root = () => {
  const [counter, setCounter] = useState(0);
  const [state, setState] = useState(`${counter} toq ham juft ham emas`);
  const Plus = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1').then(() => {
      setCounter(counter + 1);
      setState((counter + 1) % 2 === 0 ? "juft son" : "toq son");
    })
  };
  console.log('re-render');
  return (
    <div>
      <h1>React 17V</h1>
      <h1>Counter: {state}</h1>
      <h1>Counter: {counter}</h1>
      <button onClick={Plus}>+</button>
    </div>
  );
};

export default Root;
