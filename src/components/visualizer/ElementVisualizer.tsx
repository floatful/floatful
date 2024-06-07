import React from 'react'
import Rule from '../../data/Rule'

const ElementVisualizer = (props:{rule:Rule}) => {
    const properties = props.rule.properties;

    const style:string = properties.map((property, propertyIndex, array) => {
        return property.key + "=" + property.value;
    }).join('; ');

    const elementClassName = props.rule.target ? `element-${props.rule.target}` : null;
  	const elementProps = { className: elementClassName, style: style };
    
  return (
    <>
        {React.createElement(props.rule.target, elementProps, props.rule.selector)}
    </>
  );
}

export default ElementVisualizer