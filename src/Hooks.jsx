import React, { useState } from "react";

const Hooks = (props) => {
  // const state = useState(0)
  // console.log(state);
  // const [count, setCount] = useState(0);
  // const [name, setName] = useState('webbrain');

  const [data, setData] = useState({
    count: 0,
    name: 'webbrain'
  })
  return (
    <div style={{ flex: 1 }}>
      <h1>Hooks components</h1>
      <h1>Count: {data.count}</h1>
      <h1>Name: {data.name}</h1>
      <button onClick={() => setData({...data, count: data.count + 1})}>Increment</button>
      <button onClick={() => setData({...data, count: data.count - 1})}>Decrement</button>
      <input onChange={({target}) => setData({...data, name: target.value})} type="text" value={data.name} />
    </div>
  );
};

export default Hooks;

// const Hooks = () => {
//   // console.log(props, 'test');
//   return (
//     <div style={{flex: 1}}>
//       <h1>Hooks components</h1>
//     </div>
//   );
// };

// export default Hooks;

// const Hook = () => (
//   <div>
//     <h1>Hooks components</h1>
//   </div>
// )
