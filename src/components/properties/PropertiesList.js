import React from 'react'

const PropertiesList = ({element, properties, onPropertyChange}) => {
    const handlePropertyChange = (properties) => {
        onPropertyChange(properties)
    }
    return (
        <div className = "floatful--element-properties">
            <h3>{element} Properties</h3>
            <ul className = "floatful--properties-list">
                {Object.entries(properties).map((property) => {return(
                    <li key={property["key"]}>
                        <label>
                            {property["name"]}
                        </label>
                        {property["number"] != null ?
                            <>
                            <input
                                type="text"
                                value={property["number"]}
                                onChange={(e) => handlePropertyChange((key, value), e)}
                            />
                            <span>{property["units"]}</span>
                            </>
                            :
                            <input
                                type="text"
                                value={property["value"]}
                                onChange={(e) => handlePropertyChange()}
                            />
                        }
                    </li>
                )})}
            </ul>
        </div>
    )
}

export default PropertiesList