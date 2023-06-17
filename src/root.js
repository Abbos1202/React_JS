import React from "react";
import Class from "./Class";


class Root extends React.Component{
    render() {
        return (
            <div style={{display: 'flex'}}>
                <Class />
            </div>
        )
    }
}

export default Root;