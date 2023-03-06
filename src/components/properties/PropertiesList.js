import React from 'react'
import Property from './Property'

const PropertiesList = ({element, onPropertyChange}) => {
    const handlePropertyChange = (property, value) => {
        alert(value);
        onPropertyChange(element, property, value);
    }
    const properties = element.properties;

    return (

        <div className = "floatful--sidebar-properties">

            <h3>{element.selector} Properties</h3>

            <ul className = "floatful--properties-list">
                {properties.map((property) => (
                    <Property key={property["key"]} property={property} onPropertyChange={handlePropertyChange}/>
                ))}
            </ul>

        </div>

    )
}

export default PropertiesList