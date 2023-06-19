import React, { useState, useMemo, useCallback } from "react";
import Navbar from "../Navbar";

const Body = () => {
  const [counter, setCounter] = useState(0);
  console.log("parent render");
  const data = useMemo(() => {
    return { title: "webbrain" };
  }, []);
  const dataCall = useCallback((param) => {
    return { title: param };
  }, []);
  return (
    <div>
      <Navbar data={data}  dataCall={dataCall} />
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </div>
  );
};

export default Body;
