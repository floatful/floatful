import React, { useState } from "react";
import { ACTIONS } from "../../reducers/rules";
import { CSSProperty, PROPERTY_TYPES } from "../../data/CSSProperty";

const AddProperty = ({ selector, dispatch }) => {
	const [newProperty, setNewProperty] = useState(null);
	const [isInputOpen, setIsInputOpen] = useState(false);

	const close = () => {
		setNewProperty(null);
		setIsInputOpen(false);
	};

	const addProperty = (e) => {
		e.preventDefault();
		/* TODO: lots of stuff for validation of the property, will change once I 
            implement properties data and search functionality
         */
		dispatch({
			type: ACTIONS.PROPERTY.ADD,
			payload: {
				selector: selector,
				property: new CSSProperty(
					PROPERTY_TYPES.UNRESTRICTED,
					newProperty,
					CSSProperty.toCamelCase(newProperty),
					"0"
				),
			},
		});
		close();
	};

	return (
		<>
			{!isInputOpen ? (
				<input
					type="button"
					value="Add Property"
					onClick={() => {
						setIsInputOpen(true);
					}}
				/>
			) : (
				<form
					className="floatful floatful--addPropertyInput"
					onSubmit={(e) => {
						addProperty(e);
					}}
				>
					<input
						name="propertyName"
						type="text"
						placeholder="Property"
						onChange={(e) => {
							setNewProperty(e.target.value);
						}}
					/>
					<input type="submit" value="Submit" />
					<input
						type="button"
						value="Cancel"
						onClick={() => {
							close();
						}}
					/>
				</form>
			)}
		</>
	);
};

export default AddProperty;
