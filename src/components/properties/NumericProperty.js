import React from 'react'

const NumericProperty = ({property, onPropertyChange}) => {
  return (
    <>
        <label>{property.name}:</label>
        <input
            type = "text"
            value = {property.value}
            readOnly
        />
        <select 
            name = "unit" 
            value = {property.unit}
            onChange={(e) => {onPropertyChange(e.target.value)}}
        >
            {property.units.map(unit => (
                <option 
                    key = {unit}
                    value = {unit}
                >
                    {unit != null ? unit : "--"}
                </option>
            ))}
        </select>

    </>
  )
}

export default NumericProperty