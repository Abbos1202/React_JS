import React, { useState } from "react";

const Body = () => {
  const [count, setCount] = useState(Number(localStorage.getItem('count')));

  const plus = () => {
    localStorage.setItem('count', JSON.stringify({data: count + 1}))
    setCount(count + 1);
  };
  const minus = () => {
    localStorage.setItem('count', JSON.stringify({data: count - 1}))
    setCount(count - 1);
  };
  console.log(JSON.parse(localStorage.getItem('count')));
  return (
    <div>
      <h1>localStorage</h1>
      <hr />
      <h2>Counter: {count}</h2>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
      <button onClick={() =>localStorage.removeItem('count')}>remove</button>
      <button onClick={() =>localStorage.clear()}>clear</button>
    </div>
  );
};

export default Body;