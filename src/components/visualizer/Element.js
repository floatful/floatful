import React from 'react'

const Element = (props) => {
    return (
        <>
        {React.createElement(props.data, {}, "Element")}
        </>
    );
}

export default Element