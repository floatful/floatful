import React from 'react'

const Selector = (props) => {
    return (
        <li className = "selector">
            <span className = "selector-title">{props.path}</span>
            <button className = "selector-edit" onClick = {() => {alert("Edit clicked for: " + props.path)}}>
            Edit
            </button>
            <button className = "selector-btn" onClick = {()=>{alert("Delete clicked for: " + props.path)}}>
            -
            </button>
        </li>
    );
}

export default Selector