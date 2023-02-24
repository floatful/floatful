import React from 'react'

const SelectorList = ({elements, onElementSelect}) => {

    const handleElementClick = (element) => {
        onElementSelect(element);
    };

    return (
        <>
            <div>Selectors</div>
            <ul className = "floatful--selector-list">
                {elements.map((element) => {return(
					<li 
						key = {element} onClick={() => 
						handleElementClick(element)}
					>
						Element: {element}
					</li>
                )})}
            </ul>
        </>
    );
}

export default SelectorList