// import React, { useEffect } from "react";

// export const Fetchapi = () => {
//   const signal = new AbortController()
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users", {
//       body: "",
//       headers: {},
//       method: "",
//       signal,
//     })
//       .then((res) => res.json())
//       .then((res) => {
//         console.log(res, "Fetch");
//       });
//   }, []);

//   setTimeout(() => signal.abort(), 10000)

//   return (
//     <div style={{ flex: 1 }}>
//       <h1>Fetchapi</h1>
//     </div>
//   );
// };

// export default Fetchapi;
