import React from 'react'
import Property from './Property'

/**
 * 
 * @param {*} param0 
 * @returns 
 */
const PropertiesList = ({rule, dispatch}) => {

    const properties = rule.properties;

    return (

        <div className = "floatful--sidebar-properties">

            <h3>{rule.selector} Properties</h3>

            <ul className = "floatful--properties-list">
                {properties.map((property) => (
                    <Property key={property["key"]} selector = {rule.selector} property={property} dispatch = {dispatch}/>
                ))}
            </ul>

        </div>

    )
}

export default PropertiesList