import React from 'react'

const TextProperty = ({property, onPropertyChange}) => {
  return (
    <>
        <label>{property.name}:</label>
        <select 
            name = "value" 
            value = {property.value}
            onChange={(e)=>{onPropertyChange(e.target.value)}}
        >
            {property.values.map(value => (
                <option 
                    key = {value}
                    value = {value}
                >
                    {value}
                </option>
            ))}
        </select>

    </>
  )
}

export default TextProperty