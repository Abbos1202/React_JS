import React from "react";
import Controlled from "../components/Controlled";
import Uncontrolled from "../components/Uncontrolled";

class Root extends React.Component {
    render() {
      
        return (
            <div>
                <Controlled />
                <Uncontrolled />
            </div>
        )
    }
}

export default Root;