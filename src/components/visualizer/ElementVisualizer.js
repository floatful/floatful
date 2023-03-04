import React from 'react'

const ElementVisualizer = ({element, properties}) => {

	const elementStyle = { ...properties };
  	const elementClassName = element ? `element-${element.selector}` : null;
  	const elementProps = { className: elementClassName, style: elementStyle };

  	return (
    	<div className="element-visualizer">
      		{element && React.createElement(element.selector, elementProps, element.selector)}
		</div>
  	);
}

export default ElementVisualizer