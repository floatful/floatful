import React from 'react'
import { CSSContentProperty, CSSNumericProperty, CSSTextProperty } from '../../data/CSSProperty'



const Property = ({property, onPropertyChange}) => {

    let editable;

    if(property instanceof CSSTextProperty) {

        editable =
            <select 
                name = "value" 
                value = {property.value} 
                onChange={(e)=>{onPropertyChange(e.target.value)}}
            >
                {property.values.map(value => (
                    <option key = {value} value = {value}>
                        {value}
                    </option>
                ))}
            </select>

    } else if (property instanceof CSSNumericProperty) {

        editable =
            <>
                <input type = "text" value = {property.value} readOnly />
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
            </>

    } else if (property instanceof CSSContentProperty) {

        editable =
            <input type = "text" value = {property.value} readOnly />

    }

    return (
        <li>
            <label>{property.name}</label>
            {editable}
        </li>
    )
}

export default Property