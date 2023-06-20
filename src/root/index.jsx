import React from "react";
import Axios from "../components/axios.jsx";
import axios from "axios";

class Root extends React.Component {
  render() {
  //   axios.interceptors.request.use((request) => {
  //     console.log(request, "request");
  //     request.headers.Authorization('Bearer Token')
  //     return request
  //   });
  //   axios.interceptors.response.use((response) => {
  //     console.log(response, "responee");
  //     return response
  //   });
    return (
      <div style={{ display: "flex", justifyContent: "space-around"}}>
        <Axios />
      </div>
    );
  }
}

export default Root;
