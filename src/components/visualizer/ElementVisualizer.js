import React from 'react'

const ElementVisualizer = ({element, properties}) => {

	const elementStyle = { ...properties };

	return (
	  <div className="element-visualizer">
		{element && (
		  <div className={`element-${element}`} style={elementStyle}>
			{element}
		  </div>
		)}
	  </div>
	);
}

export default ElementVisualizer