import React from 'react'
import { PROPERTY_TYPES } from '../../data/CSSProperty';

const ElementVisualizer = ({rule}) => {

	const properties = rule.properties;
	const style = {}
	properties.map(property => {
		var val;
		switch(property.type) {
			case PROPERTY_TYPES.NUMERICAL:
				val = "" + property.value + property.unit;
				break;
			default:
				val = property.value;
		}
		style[property.key] = val;
		return null;
	});
	
  	const elementClassName = rule ? `element-${rule.element}` : null;
  	const elementProps = { className: elementClassName, style: style };

  	return (
    	<div className="floatful floatful--element">
      		{rule && React.createElement(rule.element, elementProps, rule.selector)}
		</div>
  	);
}

export default ElementVisualizer