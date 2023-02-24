import React from 'react'

const PropertiesList = ({element, properties, onPropertyChange}) => {
    const handlePropertyChange = (properties) => {
        onPropertyChange(properties)
    }
    return (
        <div className = "floatful--element-properties">
            <h3>{element} Properties</h3>
            <ul className = "floatful--properties-list">
                {properties.map((property) => {return(
                    <li key={property.name}>
                        <label>
                            {property.name}
                            <input
                                type="text"
                                value={property.value}
                                onChange={(e) => handlePropertyChange(property, e)}
                            />
                        </label>
                    </li>
                )})}
            </ul>
        </div>
    )
}

export default PropertiesList