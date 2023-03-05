import React from 'react'
import { CSSContentProperty, CSSNumericProperty, CSSTextProperty } from '../../data/CSSProperty'



const Property = ({property, onPropertyChange}) => {

    let propertyInput = (property instanceof CSSNumericProperty || property instanceof CSSContentProperty) && (
        <input type = "text" value = {property.name} readOnly/>
    );

    let propertyDropdown = (property instanceof CSSTextProperty || property instanceof CSSNumericProperty) && (
        <select 
            name = "unit" 
            value = {property.unit}
            onChange={(e) => {onPropertyChange(e.target.value)}}
        >
            {property.units.map(unit => (
                <option key = {unit} value = {unit}>
                    {unit != null ? unit : "--"}
                </option>
            ))}
        </select>
    );

    return (
        <li>
            <label>{property.name}</label>
            {propertyInput}
            {propertyDropdown}
        </li>
    )
}

export default Property