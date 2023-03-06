import React from 'react'
import { CSSContentProperty, CSSNumericProperty, CSSTextProperty } from '../../data/CSSProperty'



const Property = ({property, onPropertyChange}) => {

    let propertyInput = (property instanceof CSSNumericProperty || property instanceof CSSContentProperty) && (
        <input 
            type = "text" 
            value = {property.value} 
            onChange={(e) => {onPropertyChange(e.target.value)}}
        />
    );

    let propertyDropdown;
    if(property instanceof CSSTextProperty) {
        propertyDropdown = 
            <select 
                name = "unit" 
                value = {property.unit}
                onChange={(e) => {onPropertyChange(e.target.value)}}
            >
                {property.values.map(value => (
                    <option key = {value} value = {value}>
                        {value != null ? value : "--"}
                    </option>
                ))}
            </select>;
    }

    if(property instanceof CSSNumericProperty) {
        propertyDropdown =
            <select 
                name = "unit" 
                value = {property.unit}
                onChange={(e) => {onPropertyChange(property, e.target.value)}}
            >
                {property.units.map(unit => (
                    <option key = {unit} value = {unit}>
                        {unit != null ? unit : "--"}
                    </option>
                ))}
            </select>
    };

    return (
        <li>
            <label>{property.name}</label>
            {propertyInput}
            {propertyDropdown}
        </li>
    )
}

export default Property