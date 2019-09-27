import React from "react";
import "./style.css"

const Box = props => {
    return (
        <div className="box" id={props.data.id}>
            <div><strong>{props.data.title}</strong></div>
            <div><a href={"https://www.reddit.com"+props.data.permalink}>Link</a></div>
        </div>
    )
}

export default Box;