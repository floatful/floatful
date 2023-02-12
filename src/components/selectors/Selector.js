import React from 'react'

const Selector = (props) => {
    return (
        <li class = "selector">
            <span class = "selector-title">{props.path}</span>
            <button class = "selector-edit" onClick = {() => {alert("Edit clicked for: " + props.path)}}>
            Edit
            </button>
            <button class = "selector-btn" onClick = {()=>{alert("Delete clicked for: " + props.path)}}>
            -
            </button>
        </li>
    );
}

export default Selector