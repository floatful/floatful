import React from 'react'

const ElementVisualizer = ({element, properties}) => {

	const elementStyle = { ...properties };

	return (
	  <div className="element-visualizer">
		{element}
	  </div>
	);
}

export default ElementVisualizer