import React from 'react'

const SelectorList = ({elements, onElementSelect}) => {

    const handleElementClick = (element) => {
        onElementSelect(element);
    };

    return (
        <>
            <div>Selectors</div>
            <ul className = "floatful--selectors">
                {elements.map((element) => {return(
					<li 
                        className = "floatful--selector"
						key = {element}
                        onClick={() => handleElementClick([element])}
					>
						Element: {element}
					</li>
                )})}
            </ul>
        </>
    );
}

export default SelectorList