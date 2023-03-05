import React from 'react'
import Property from './Property'

const PropertiesList = ({element, onPropertyChange}) => {
    const handlePropertyChange = (property) => {
        alert(property)
        //onPropertyChange(properties)
    }
    const properties = element.properties;

    return (

        <div className = "floatful--sidebar-properties">

            <h3>{element.selector} Properties</h3>

            <ul className = "floatful--properties-list">

                {properties.map((property) => (
                    <li key={property["key"]}>
                        <Property property={property} onPropertyChange={handlePropertyChange}/>
                    </li>
                ))}
                
            </ul>

        </div>

    )
}

export default PropertiesList