import React from 'react'

const PropertiesList = ({element, onPropertyChange}) => {
    const handlePropertyChange = (properties) => {
        onPropertyChange(properties)
    }
    const properties = element.properties;
    return (
        <div className = "floatful--element-properties">
            <h3>{element.selector} Properties</h3>
            <ul className = "floatful--properties-list">
                {properties.map((property) => {return(
                    <li key={property["key"]}>
                        <label>
                            {property["name"]}
                        </label>
                        {
                            /*  TODO:
                                Fix handlePropertyChange, and possibly refactor to account for
                                variable property due to number and keyword-based values.
                            */
                        }
                        {property["number"] != null ?
                            <>
                            {
                                // TODO: Add onChange functionality, currently readOnly mode.
                            }
                            <input
                                type="text"
                                value={property["number"]}
                                readOnly
                            />
                            <span>{property["units"]}</span>
                            </>
                            :
                            <input
                                type="text"
                                value={property["value"]}
                                readOnly
                            />
                        }
                    </li>
                )})}
            </ul>
        </div>
    )
}

export default PropertiesList