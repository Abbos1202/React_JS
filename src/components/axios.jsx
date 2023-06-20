import React, { useEffect } from "react";
import axios from "axios";

const Axios = () => {
  useEffect(() => {
    // axios({
    //   url: "https://jsonplaceholder.typicode.com/users",
    //   method: "POST",
    //   headers: {},
    //   body: { name: "webbrain" },
    //   timeout: 10000,
    // }).then((res) => {
    //   console.log(res, "Axios");
    // });
    axios.post("https://jsonplaceholder.typicode.com/users",{
      headers: {},
      body: { name: "webbrain" },
      timeout: 10000,
    }).then((res) => {
      console.log(res, "Axios");
    });
  }, []);

  return (
    <div style={{ flex: 1 }}>
      <h1>Axios</h1>
    </div>
  );
};

export default Axios;
