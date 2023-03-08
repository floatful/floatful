import React, {useState} from 'react'
import { CSSProperty, PROPERTY_TYPES } from '../../data/CSSProperty'

import {ACTIONS} from '../../reducers/rules';


const Property = ({selector, property, dispatch}) => {

    const [currentValue, setValue] = useState(property.value);
    const [currentUnit, setUnit] = useState(property.unit);

    const handleValueChange = (e) => {
        setValue(e.target.value);
        //alert(currentValue + " == " + e.target.val);
        console.log(e);
        console.log(e.target.value);
        dispatch({
            type: ACTIONS.PROPERTY.UPDATE_VALUE,
            payload:{
                selector: selector,
                property: property,
                value: e.target.value
            }
        })
    }
    const handleUnitChange = (e) => {
        setUnit(e.target.value);
        alert(currentUnit + " == " + e.target.val);
        console.log(e);
        console.log(e.target.value);
        dispatch({
            type: ACTIONS.PROPERTY.UPDATE_UNIT,
            payload:{
                selector: selector,
                property: property,
                unit: e.target.value
            }
        });
    }

    let propertyInput = (property.type === PROPERTY_TYPES.NUMERICAL || property.type === PROPERTY_TYPES.UNRESTRICTED) && (
        <input 
            type = "text" 
            value = {currentValue} 
            onChange={handleValueChange}
        />
    );

    let propertyDropdown;
    if(property.type === PROPERTY_TYPES.RESTRICTED) {
        propertyDropdown = 
            <select 
                name = "value" 
                value = {currentValue}
                onChange={handleValueChange}
            >
                {property.values.map(value => (
                    <option key = {value} value = {value}>
                        {value != null ? value : "--"}
                    </option>
                ))}
            </select>;
    }

    if(property.type === PROPERTY_TYPES.NUMERICAL) {
        propertyDropdown =
            <select 
                name = "unit" 
                value = {currentUnit}
                onChange={handleUnitChange}
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