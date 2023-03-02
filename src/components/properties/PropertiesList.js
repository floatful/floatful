import React from 'react'

const PropertiesList = ({element, properties, onPropertyChange}) => {
    const handlePropertyChange = (properties) => {
        onPropertyChange(properties)
    }
    return (
        <div className = "floatful--element-properties">
            <h3>{element} Properties</h3>
            <ul className = "floatful--properties-list">
                {Object.entries(properties).map((key, value) => {return(
                    <li key={key}>
                        <label>
                            {key} 
                        </label>
                        <input
                            type="text"
                            value={value}
                            onChange={(e) => handlePropertyChange((key, value), e)}
                        />
                    </li>
                )})}
            </ul>
        </div>
    )
}

export default PropertiesList