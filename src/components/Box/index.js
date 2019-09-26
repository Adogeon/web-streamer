import React from "react";
import "./style.css"

const Box = props => {
    return (
        <div className="box">
            {props.children}
        </div>
    )
}

export default Box;