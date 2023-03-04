import React from 'react'

const SelectorList = ({elements, onElementSelect}) => {

    const handleElementClick = (element) => {
        onElementSelect(element);
    };

    return (
        <>
            <div>Selectors</div>
            <ul className = "floatful--selectors">
                {elements.map((element) => (
					<li 
                        className = "floatful--selector"
						key = {element.selector}
                        onClick={() => handleElementClick([element])}
					>
						Element: {element.selector}
					</li>
                ))}
            </ul>
        </>
    );
}

export default SelectorList