import React from 'react'

const SelectorList = (props) => {
    const Elements = ['div', 'p', 'h1'];

    const handleElementClick = (element) => {
        props.onElementSelect(element);
    };

    return (
        <>
            <div>SelectorList</div>
            <ul className = "floatful--selector-list">
                {Elements.map((element) => {
                    <li key = {element} onClick={() => handleElementClick(element)}>
                        {element}
                    </li>
                })}
            </ul>
        </>
    );
}

export default SelectorList