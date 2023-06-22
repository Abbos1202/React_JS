import React, { useState } from "react";
import useLocalStorage from "./getValue";


const App = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useLocalStorage("");


  console.log("re-render");
  return (
    <div>
      <h1>React 18V</h1>
      <h1>Lastname: {lastname}</h1>
      <input value={firstname}type="text" onChange={({target}) => setFirstname(target.value)} />
      <input value={lastname}type="text" onChange={({target}) => setLastname(target.value)} />
     
    </div>
  );
};

export default App;
