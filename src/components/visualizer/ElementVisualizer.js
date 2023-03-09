import React from 'react'
import { PROPERTY_TYPES } from '../../data/CSSProperty';

const ElementVisualizer = ({rule}) => {

	const properties = rule.properties;
	const style = properties.reduce((accumulator, property) => {
		accumulator[property.key] = `${property.value}${property.type===PROPERTY_TYPES.NUMERICAL?property.unit:''}`;
		return accumulator;
	},{})
	
  	const elementClassName = rule.element ? `element-${rule.element}` : null;
  	const elementProps = { className: elementClassName, style: style };

  	return (
    	<div className="floatful floatful--element">
      		{rule && React.createElement(rule.element, elementProps, rule.selector)}
		</div>
  	);
}

export default ElementVisualizer