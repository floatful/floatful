import React from 'react'
import { CSSTextProperty, CSSNumericProperty } from '../../data/CSSProperty'
import NumericProperty from './NumericProperty'
import TextProperty from './TextProperty'

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
                {properties.map((property) => {return(
                    <li key={property["key"]}>
                        {property instanceof CSSNumericProperty ?
                            <NumericProperty
                                property={property}
                                onPropertyChange={handlePropertyChange}
                            />
                            :
                            <TextProperty
                                property={property}
                                onPropertyChange={handlePropertyChange}
                            />
                        }
                    </li>
                )})}
            </ul>
        </div>
    )
}

export default PropertiesList