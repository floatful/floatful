import React from 'react'

/**
 * CURRENTLY UNUSED, but will be developed in the future when more functionality is added to the app.
 * @param {*} props 
 * @returns 
 */
const Element = (props) => {
    return (
        <>
            {/* TODO: create togglable frame around element to display margin size, border radius size, */}
            {React.createElement(props.data, {}, "Element")}
        </>
    );
}

export default Element