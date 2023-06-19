import React from "react";
import Navbar from '../components/Navbar'
import Body from "../components/Body";


class Root extends React.Component {
    render() {
      
        return (
            <div>
                <Navbar />
                <Body />
            </div>
        )
    }
}

export default Root;