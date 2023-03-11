import React from "react";
import Property from "./Property";
import AddProperty from "./AddProperty";

/**
 *
 * @param {*} param0
 * @returns
 */
const PropertiesList = ({ rule, dispatch }) => {
	const properties = rule.properties;

	return (
		<div className="floatful--element-properties">
			<h3>{rule.selector} Properties</h3>

			<ul className="floatful--properties-list">
				{properties.map((property) => (
					<Property
						key={property["key"]}
						selector={rule.selector}
						property={property}
						dispatch={dispatch}
					/>
				))}
			</ul>

			<AddProperty selector={rule.selector} dispatch={dispatch} />
		</div>
	);
};

export default PropertiesList;
