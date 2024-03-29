import React, { useState } from "react";
import { PROPERTY_TYPES, NUMERICAL_UNITS } from "../../data/CSSProperty";

import { ACTIONS } from "../../reducers/rules";
import ColorSelector from "./ColorSelection/ColorSelector";

const Property = ({ selector, property, dispatch }) => {
	const [currentValue, setValue] = useState(property.value);
	const [currentUnit, setUnit] = useState(property.unit);

	const handleValueChange = (e) => {
		setValue(e.target.value);
		dispatch({
			type: ACTIONS.PROPERTY.UPDATE_VALUE,
			payload: {
				selector: selector,
				property: property,
				value: e.target.value,
			},
		});
	};
	const handleUnitChange = (e) => {
		setUnit(e.target.value);
		dispatch({
			type: ACTIONS.PROPERTY.UPDATE_UNIT,
			payload: {
				selector: selector,
				property: property,
				unit: e.target.value,
			},
		});
	};

	const handleDelete = (e) => {
		dispatch({
			type: ACTIONS.PROPERTY.DELETE,
			payload: {
				selector: selector,
				property: property,
			},
		});
	};

	let propertyInput = (property.type === PROPERTY_TYPES.NUMERICAL ||
		property.type === PROPERTY_TYPES.UNRESTRICTED) && (
		<input type="text" value={currentValue} onChange={handleValueChange} />
	);

	let propertyDropdown;
	if (property.type === PROPERTY_TYPES.RESTRICTED) {
		propertyDropdown = (
			<select
				name="value"
				value={currentValue}
				onChange={handleValueChange}
			>
				{property.values.map((value) => (
					<option key={value} value={value}>
						{value != null ? value : "--"}
					</option>
				))}
			</select>
		);
	}

	if (property.type === PROPERTY_TYPES.NUMERICAL) {
		propertyDropdown = (
			<select name="unit" value={currentUnit} onChange={handleUnitChange}>
				{NUMERICAL_UNITS.map((unit) => (
					<option key={unit} value={unit}>
						{unit != null ? unit : "--"}
					</option>
				))}
			</select>
		);
	}

	return (
		<li className="floatful floatful--property">
			<label>{property.name}</label>
			<br />
			{propertyInput}
			{propertyDropdown}
			<input
				onClick={(e) => handleDelete(e)}
				value={"🗑"}
				type="button"
			></input>
			<ColorSelector property={property} dispatch={dispatch} />
		</li>
	);
};

export default Property;
