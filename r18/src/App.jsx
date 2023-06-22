import React, { useState } from "react";
import useLocalStorage from "./getValue";


const App = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useLocalStorage("");


  console.log("re-render");
  return (
    <div>
      <h1>React 18V</h1>
    </div>
  );
};

export default App;
